import fs from 'fs';
const html = fs.readFileSync('index.html','utf8');
const need = [
  ['<title>', 'title'],
  ['meta name="description"', 'meta description'],
  ['LocalBusiness', 'json-ld'],
  ['og:title', 'open graph'],
  ['assets/css/style.css', 'css link'],
  ['assets/js/main.js', 'js link'],
  ['name="nom"', 'form nom'], ['name="tel"', 'form tel'],
  ['name="besoin"', 'form besoin'], ['name="pierre"', 'form pierre'], ['name="lieu"', 'form lieu'],
  ['gal-item', 'galerie'], ['video-card', 'videos'],
  ['NEGOCE Decor House', 'brand'],
];
let ok=true;
for(const [s,msg] of need){
  const has = html.includes(s);
  console.log(`${has?'✓':'✗'} ${msg}`);
  if(!has) ok=false;
}
const imgs = [...html.matchAll(/assets\/images\/[^\"]+/g)].map(m=>m[0]);
console.log(`\n→ ${imgs.length} refs images`);
console.log(`→ ${ (html.match(/gal-item/g)||[]).length } galerie items (max 30)`);
console.log(`→ ${ (html.match(/video-card/g)||[]).length } videos (max 6)`);
for(const p of ['index.html','apropos.html','pierres.html','realisations.html','contact.html','robots.txt','sitemap.xml']){
  console.log(`${fs.existsSync(p)?'✓':'✗'} ${p} ${fs.existsSync(p)?`(${(fs.statSync(p).size/1024).toFixed(1)} KB)`:''}`);
}
if(!ok) process.exit(1);
console.log("\n✓ check passed");
