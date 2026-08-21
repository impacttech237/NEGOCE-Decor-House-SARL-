// NEGOCE Decor House — interactions Reenoma-inspired
const header = document.getElementById('header');
let lastY=0;
addEventListener('scroll',()=>{
  const y=scrollY;
  if(y>12) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  lastY=y;
},{passive:true});

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); }
  });
},{threshold:.14});
reveals.forEach(r=>io.observe(r));

// counters
const counts = document.querySelectorAll('.count');
const countIo = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const target=parseInt(el.dataset.target,10);
      let cur=0;
      const step=Math.ceil(target/40);
      const t=setInterval(()=>{
        cur+=step;
        if(cur>=target){cur=target;clearInterval(t)}
        el.textContent=cur;
      },28);
      countIo.unobserve(el);
    }
  });
},{threshold:.6});
counts.forEach(c=>countIo.observe(c));

// mobile sheet
const sheet=document.getElementById('sheet');
const btnMenu=document.getElementById('btnMenu');
const sheetClose=document.getElementById('sheetClose');
const sheetBackdrop=document.getElementById('sheetBackdrop');
function openSheet(){sheet.classList.add('open');document.body.style.overflow='hidden'}
function closeSheet(){sheet.classList.remove('open');document.body.style.overflow=''}
btnMenu?.addEventListener('click',openSheet);
sheetClose?.addEventListener('click',closeSheet);
sheetBackdrop?.addEventListener('click',closeSheet);
sheet?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeSheet));

// nav active
const navLinks=[...document.querySelectorAll('.nav-links a')];
const sections=['accueil','apropos','pierres','realisations','contact'].map(id=>document.getElementById(id)).filter(Boolean);
const navIo=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id;
      navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
    }
  });
},{rootMargin:'-40% 0px -50% 0px',threshold:0});
sections.forEach(s=>navIo.observe(s));

// filter pierres
const chips=[...document.querySelectorAll('#filterChips .chip')];
const pierres=[...document.querySelectorAll('.card-pierre')];
chips.forEach(ch=>ch.addEventListener('click',()=>{
  chips.forEach(c=>c.classList.remove('is-active')); ch.classList.add('is-active');
  const f=ch.dataset.filter;
  pierres.forEach(p=>{
    const cats=p.dataset.cat;
    const show = f==='all' || cats.includes(f);
    p.style.display=show?'':'none';
    if(show){p.style.animation='none';p.offsetHeight;p.style.animation=''}
  });
}));

// gallery filter
const gChips=[...document.querySelectorAll('[data-gal].chip')];
const gItems=[...document.querySelectorAll('.gal-item')];
gChips.forEach(ch=>ch.addEventListener('click',()=>{
  gChips.forEach(c=>c.classList.remove('is-active')); ch.classList.add('is-active');
  const f=ch.dataset.gal;
  gItems.forEach(it=>{
    const show = f==='all' || it.dataset.gal.includes(f);
    it.style.display=show?'':'none';
  });
}));

// lightbox
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lbImg');
const lbClose=document.getElementById('lbClose');
gItems.forEach(it=>it.addEventListener('click',()=>{
  const src=it.dataset.src;
  lbImg.src=src;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}));
function closeLb(){lb.classList.remove('open');document.body.style.overflow=''}
lbClose.addEventListener('click',closeLb);
lb.addEventListener('click',(e)=>{if(e.target===lb) closeLb()});
addEventListener('keydown',(e)=>{if(e.key==='Escape'){closeLb();closeVb()}});

// video modal
const vb=document.getElementById('videoBox');
const vbClose=document.getElementById('vbClose');
const ytFrame=document.getElementById('ytFrame');
document.querySelectorAll('.video-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const id=card.dataset.yt;
    ytFrame.src=`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    vb.classList.add('open');
    document.body.style.overflow='hidden';
  });
});
function closeVb(){ vb.classList.remove('open'); ytFrame.src=''; document.body.style.overflow='';}
vbClose.addEventListener('click',closeVb);
vb.addEventListener('click',(e)=>{if(e.target===vb) closeVb()});

// FAQ
document.querySelectorAll('.faq-item').forEach(item=>{
  const q=item.querySelector('.faq-q');
  q.addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!open) item.classList.add('open');
  });
});

// form -> WhatsApp
const form=document.getElementById('devisForm');
const statusEl=document.getElementById('formStatus');
form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const nom=data.get('nom')?.toString().trim();
  const tel=data.get('tel')?.toString().trim();
  const besoin=data.get('besoin')?.toString().trim();
  const pierre=data.get('pierre')?.toString().trim();
  const lieu=data.get('lieu')?.toString().trim();
  const msg=data.get('message')?.toString().trim();
  if(!nom || !tel || !besoin || !lieu){
    statusEl.style.display='block';
    statusEl.style.color='#B42318';
    statusEl.textContent='Merci de remplir les champs obligatoires (*)';
    return;
  }
  const text = `Bonjour NEGOCE Decor House SARL,%0A%0AJe souhaite un devis pierres décoratives :%0A• Nom : ${encodeURIComponent(nom)}%0A• Téléphone : ${encodeURIComponent(tel)}%0A• Besoin : ${encodeURIComponent(besoin)}%0A• Type de pierre : ${encodeURIComponent(pierre||'à conseiller')}%0A• Lieu du projet : ${encodeURIComponent(lieu)}%0A• Détails : ${encodeURIComponent(msg||'-')}%0A%0AMerci pour votre retour rapide.`;
  const wa = `https://wa.me/237694000000?text=${text}`;
  // also mailto fallback
  statusEl.style.display='block';
  statusEl.style.color='#067647';
  statusEl.textContent='Ouverture de WhatsApp… Si rien ne s’ouvre, votre message est copié.';
  // copy to clipboard
  navigator.clipboard?.writeText(decodeURIComponent(text.replaceAll('%0A','\n'))).catch(()=>{});
  window.open(wa,'_blank','noopener');
  // optional: reset after 1s
  setTimeout(()=>{form.reset();},600);
});
document.getElementById('btnCall')?.addEventListener('click',()=>{location.href='tel:+237694000000'});

// smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      const target=document.querySelector(id);
      if(target){
        e.preventDefault();
        const top=target.getBoundingClientRect().top + scrollY - 86;
        scrollTo({top,behavior:'smooth'});
      }
    }
  });
});

// parallax hero subtle
const heroImg=document.querySelector('.hero-img-wrap img');
if(heroImg){
  addEventListener('scroll',()=>{
    const r=heroImg.getBoundingClientRect();
    const prog = Math.min(1, Math.max(0, (window.innerHeight - r.top)/(window.innerHeight + r.height)));
    heroImg.style.transform=`scale(${1.03 + prog*0.03}) translateY(${prog*6}px)`;
  },{passive:true});
}
