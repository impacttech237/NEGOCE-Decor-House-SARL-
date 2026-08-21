import fs from 'fs';
import path from 'path';

const srcDir = '.';
const outDir = 'dist';

// clean
fs.rmSync(outDir, {recursive:true, force:true});
fs.mkdirSync(outDir, {recursive:true});

function copyFile(src, dest){
  fs.mkdirSync(path.dirname(dest), {recursive:true});
  fs.copyFileSync(src, dest);
}
function copyDir(src, dest){
  fs.mkdirSync(dest, {recursive:true});
  for(const e of fs.readdirSync(src, {withFileTypes:true})){
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if(e.isDirectory()) copyDir(s,d);
    else copyFile(s,d);
  }
}

// html minify light (collapse whitespace between tags, keep readable)
function minifyHtml(s){
  return s
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}
// css / js simple minify
function minifyCss(s){ return s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s{2,}/g,' ').replace(/\s*([{}:;,])\s*/g,'$1').trim(); }
function minifyJs(s){ return s.replace(/\/\/.*$/gm,'').replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s{2,}/g,' ').trim(); }

const htmlFiles = ['index.html','apropos.html','pierres.html','realisations.html','contact.html'];
for(const f of htmlFiles){
  if(!fs.existsSync(f)) continue;
  const raw = fs.readFileSync(f,'utf8');
  // keep index readable for preview, minify others
  const out = f==='index.html' ? raw : minifyHtml(raw);
  fs.writeFileSync(path.join(outDir, f), out);
  console.log(`✓ ${f} → dist/${f} ${(Buffer.byteLength(out)/1024).toFixed(1)} KB`);
}
for(const f of ['robots.txt','sitemap.xml']){
  if(fs.existsSync(f)) copyFile(f, path.join(outDir,f));
}
// assets
copyDir('assets', path.join(outDir,'assets'));
// minify css/js in dist
for(const css of fs.readdirSync(path.join(outDir,'assets/css'))){
  const p = path.join(outDir,'assets/css',css);
  const raw = fs.readFileSync(p,'utf8');
  fs.writeFileSync(p, minifyCss(raw));
  console.log(`✓ minified assets/css/${css}`);
}
for(const js of fs.readdirSync(path.join(outDir,'assets/js'))){
  const p = path.join(outDir,'assets/js',js);
  const raw = fs.readFileSync(p,'utf8');
  fs.writeFileSync(p, minifyJs(raw));
  console.log(`✓ minified assets/js/${js}`);
}
// report sizes
let total=0;
function walk(dir){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    const p = path.join(dir,e.name);
    if(e.isDirectory()) walk(p);
    else total+=fs.statSync(p).size;
  }
}
walk(outDir);
console.log(`\n→ dist total ${(total/1024).toFixed(0)} KB (${(total/1024/1024).toFixed(2)} MB)`);
console.log(`→ images: ${fs.readdirSync(path.join(outDir,'assets/images')).length} files`);
console.log(`\n✓ build complete — ready to deploy dist/ (static host + HTTPS)`);
