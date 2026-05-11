/* Home page-specific JS — carousels, flex pills, animated stats */
(function(){
  const products = [
    { title:"Business Term Loan", icon:"award", slug:"business-term-loan", description:"Get a lump sum of cash and repay it over a fixed period with predictable payments.",
      features:["Up to $2M in funding","Terms from 1-5 years","Fixed monthly payments","Competitive interest rates","Funds for any business need"] },
    { title:"Merchant Cash Advance", icon:"trending", slug:"merchant-cash-advance", description:"Get an advance on future revenue. Perfect for quick cash flow needs with flexible repayment.",
      features:["Get funded in 24-48 hours","No collateral required","Revenue-based approvals","Flexible payment schedules","Perfect for quick cash flow needs"] },
    { title:"Business Line Of Credit", icon:"creditcard", slug:"business-line-of-credit", description:"Get flexible access to capital, empowering growth and opening the door to new opportunities.",
      features:["Flexible access to capital","Revolving credit line","Pay interest only on what you use","Continuous financial support","Minimal barriers to qualification"] },
    { title:"Credit Stacking", icon:"layers", slug:"credit-stacking", description:"Strategically combine multiple business credit lines to maximize your available capital.",
      features:["Access to multiple credit lines","0% intro APR periods","Build business credit","Flexible for various expenses","Unsecured business funding"] },
    { title:"SBA Loan", icon:"landmark", slug:"sba-loan", description:"Government-backed loans with long terms and low interest rates for major investments.",
      features:["Lowest available interest rates","Long repayment terms (up to 25 years)","Government-backed guarantee","Large loan amounts available","Ideal for major purchases"] },
    { title:"Real Estate Loan", icon:"home", slug:"real-estate-loan", description:"Secure financing for commercial property acquisition, development, or refinancing.",
      features:["Mortgage","HELOC","Hard Money Loan","Business Real Estate Loan","Collateral Loans"] },
    { title:"Personal Term Loans", icon:"banknote", slug:"personal-term-loans", description:"Get a personal loan for any purpose with fixed rates and predictable monthly payments.",
      features:["Quick application process","Fixed interest rates","Predictable monthly payments","No collateral required","Funds for any personal need"] },
    { title:"Credit Repair", icon:"wrench", slug:"credit-repair", description:"Improve your credit score to unlock better funding opportunities in the future.",
      features:["Dispute inaccuracies on your report","Personalized credit improvement plan","Unlock better financing rates","Ongoing credit score monitoring","Expert guidance included"] },
  ];
  const industries = [
    { title:"Construction", slug:"construction", img:"https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Food & Beverage", slug:"food-beverage", img:"https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Retail", slug:"retail", img:"https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Transportation", slug:"transportation", img:"https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1080" },
    { title:"Healthcare", slug:"healthcare", img:"https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Hospitality & Services", slug:"hospitality-services", img:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Manufacturing", slug:"manufacturing", img:"https://images.unsplash.com/photo-1516216628859-9bccecab13ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Real Estate", slug:"real-estate", img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { title:"Seasonal Business", slug:"seasonal-business", img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1080" },
    { title:"Other Industries", slug:"other", img:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];
  const flexPills = ['Term Loans','Merchant Cash Advance','Business Line Of Credit','Credit Stacking','SBA Loans','Real Estate Loan','Personal Term Loans','Credit Repair'];

  const ICONS = {
    award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
    trending:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    creditcard:'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    landmark:'<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    banknote:'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  };
  function svg(name, cls=""){
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||""}</svg>`;
  }

  // Duotone icons: green accent fill behind navy outline. Match the "Why Lendiago" set.
  const DUOTONE = {
    // Award/trophy → ribbon medal for Term Loan
    award: `
      <circle cx="32" cy="22" r="14" fill="hsl(var(--accent))" opacity="0.85"/>
      <circle cx="32" cy="22" r="14" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <path d="M32 14 L34 19 L40 19 L35 23 L37 29 L32 25 L27 29 L29 23 L24 19 L30 19 Z" fill="hsl(var(--primary))"/>
      <path d="M22 36 L18 56 L26 50 L32 56 L38 50 L46 56 L42 36" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round" fill="none"/>`,
    // Trending up → chart with arrow
    trending: `
      <rect x="8" y="12" width="48" height="40" rx="4" fill="hsl(var(--accent))" opacity="0.85"/>
      <rect x="8" y="12" width="48" height="40" rx="4" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <path d="M14 42 L24 32 L32 38 L48 22" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M40 22 H50 V32" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    // Credit card
    creditcard: `
      <rect x="6" y="14" width="52" height="36" rx="5" fill="hsl(var(--accent))" opacity="0.85"/>
      <rect x="6" y="14" width="52" height="36" rx="5" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <line x1="6" y1="26" x2="58" y2="26" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <rect x="14" y="36" width="14" height="6" rx="1.5" fill="hsl(var(--primary))"/>
      <line x1="34" y1="42" x2="50" y2="42" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round"/>`,
    // Stacked layers
    layers: `
      <path d="M10 28 L32 40 L54 28 L32 16 Z" fill="hsl(var(--accent))" opacity="0.85"/>
      <path d="M10 28 L32 40 L54 28 L32 16 Z" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M10 38 L32 50 L54 38" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
      <path d="M10 48 L32 60 L54 48" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" fill="none"/>`,
    // Landmark / SBA — bank columns
    landmark: `
      <polygon points="32,8 56,18 8,18" fill="hsl(var(--accent))" opacity="0.85"/>
      <polygon points="32,8 56,18 8,18" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round"/>
      <line x1="6" y1="22" x2="58" y2="22" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="13" y="26" width="6" height="22" fill="hsl(var(--accent))" opacity="0.85" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <rect x="29" y="26" width="6" height="22" fill="hsl(var(--accent))" opacity="0.85" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <rect x="45" y="26" width="6" height="22" fill="hsl(var(--accent))" opacity="0.85" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <line x1="4" y1="54" x2="60" y2="54" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linecap="round"/>`,
    // Home → house for real estate
    home: `
      <path d="M8 30 L32 10 L56 30 V54 H8 Z" fill="hsl(var(--accent))" opacity="0.85"/>
      <path d="M8 30 L32 10 L56 30 V54 H8 Z" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round"/>
      <rect x="26" y="36" width="12" height="18" fill="hsl(var(--primary))"/>`,
    // Banknote → personal loan
    banknote: `
      <rect x="6" y="16" width="52" height="32" rx="4" fill="hsl(var(--accent))" opacity="0.85"/>
      <rect x="6" y="16" width="52" height="32" rx="4" stroke="hsl(var(--primary))" stroke-width="3.5"/>
      <circle cx="32" cy="32" r="7" fill="hsl(var(--primary))"/>
      <circle cx="14" cy="32" r="2.5" fill="hsl(var(--primary))"/>
      <circle cx="50" cy="32" r="2.5" fill="hsl(var(--primary))"/>`,
    // Wrench → credit repair
    wrench: `
      <path d="M44 8 a14 14 0 0 0 -16 16 L8 44 v12 h12 L40 36 a14 14 0 0 0 16 -16 L46 22 l-8 -8 z" fill="hsl(var(--accent))" opacity="0.85"/>
      <path d="M44 8 a14 14 0 0 0 -16 16 L8 44 v12 h12 L40 36 a14 14 0 0 0 16 -16 L46 22 l-8 -8 z" stroke="hsl(var(--primary))" stroke-width="3.5" stroke-linejoin="round" fill="none"/>
      <circle cx="20" cy="44" r="2.5" fill="hsl(var(--primary))"/>`,
  };
  function duo(name, cls=""){
    return `<svg class="${cls}" viewBox="0 0 64 64" fill="none">${DUOTONE[name]||DUOTONE.layers}</svg>`;
  }
  const arrowR = '<svg class="h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  const checkSvg = '<svg class="h-4 w-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  const sTrack = document.getElementById('solutionsTrack');
  if(sTrack){
    sTrack.innerHTML = products.map(p => `
      <div class="carousel-item shrink-0">
        <div class="p-1 h-full">
          <a href="${p.slug}.html" class="h-full block group">
            <div class="relative h-full flex flex-col bg-card border border-border/50 group-hover:bg-primary group-hover:border-primary group-hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-xl">
              <div class="p-6 pb-4">
                <div class="flex flex-col items-start gap-4">
                  <div class="bg-muted p-3 rounded-xl transition-colors duration-500 group-hover:bg-accent/20">
                    ${svg(p.icon, 'h-7 w-7 text-primary transition-colors duration-500 group-hover:text-accent')}
                  </div>
                  <h3 class="text-xl font-bold font-headline text-primary transition-colors group-hover:text-accent">${p.title}</h3>
                </div>
              </div>
              <div class="px-6 flex-grow pb-6">
                <p class="text-muted-foreground text-sm leading-relaxed mb-6 transition-colors group-hover:text-primary-foreground/80">${p.description}</p>
                <ul class="space-y-3">
                  ${p.features.map(f=>`<li class="flex items-start gap-3 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">${checkSvg}<span>${f}</span></li>`).join('')}
                </ul>
              </div>
              <div class="px-6 pb-6 pt-0 border-t border-border/50 mt-auto transition-colors group-hover:border-primary-foreground/10">
                <div class="w-full pt-4 text-primary font-bold text-sm flex items-center justify-between group-hover:text-accent transition-colors">
                  <span>Learn More</span>${arrowR}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>`).join('');
  }
  const iTrack = document.getElementById('industriesTrack');
  if(iTrack){
    iTrack.innerHTML = industries.map(i=>`
      <div class="carousel-item shrink-0">
        <div class="h-full">
          <a href="industries/${i.slug}.html" class="block group">
            <div class="overflow-hidden relative rounded-2xl shadow-premium border-0 transition-all duration-500 group-hover:shadow-2xl">
              <div class="p-0 aspect-[3/4] flex items-center justify-center bg-muted relative">
                <img src="${i.img}" alt="${i.title}" class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h3 class="text-xl font-bold text-white font-headline tracking-wide group-hover:text-accent transition-colors">${i.title}</h3>
                  <div class="ind-underline h-1 w-0 bg-accent mt-2 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>`).join('');
  }
  const flex = document.getElementById('flexPills');
  if(flex && window.LENDIAGO_DATA){
    const D = window.LENDIAGO_DATA;
    flex.innerHTML = D.products.map((p, i)=>`
      <a href="${p.slug}.html" class="group/p relative flex flex-col gap-5 p-6 md:p-7 rounded-2xl bg-white border border-border/60 hover:border-primary hover:shadow-premium transition-all duration-300 overflow-hidden">
        <div class="h-11 w-11 rounded-xl bg-muted/40 group-hover/p:bg-accent group-hover/p:text-primary text-primary flex items-center justify-center transition-colors">
          ${D.svg(p.icon, 'h-5 w-5')}
        </div>
        <div class="space-y-2">
          <h4 class="text-base font-bold font-headline text-primary leading-tight">${p.title}</h4>
          <p class="text-xs text-muted-foreground leading-relaxed line-clamp-2">${p.description}</p>
        </div>
        <div class="flex items-center gap-2 text-xs font-semibold text-primary mt-auto pt-2">
          <span class="opacity-60 group-hover/p:opacity-100 group-hover/p:text-accent transition-all">Learn more</span>
          <svg class="h-3.5 w-3.5 transition-transform group-hover/p:translate-x-1 opacity-60 group-hover/p:opacity-100 group-hover/p:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </a>`).join('');
  }

  function setupCarousel(trackId){
    const track = document.getElementById(trackId);
    if(!track) return;
    const items = track.querySelectorAll('.carousel-item');
    let perView = 3, index = 0;
    function calcPerView(){
      const w = window.innerWidth;
      if(trackId === 'industriesTrack'){
        perView = w >= 1024 ? 4 : w >= 768 ? 3 : 1;
      } else {
        perView = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      }
      layout();
    }
    function layout(){
      const gap = 16;
      const containerW = track.parentElement.clientWidth;
      const itemW = (containerW - gap*(perView-1)) / perView;
      items.forEach(it => { it.style.width = itemW + 'px'; });
      apply();
    }
    function apply(){
      const gap = 16;
      const itemW = items[0]?.offsetWidth || 0;
      const max = items.length - perView;
      if(index < 0) index = max;
      if(index > max) index = 0;
      track.style.transform = `translateX(${-(itemW + gap)*index}px)`;
    }
    document.querySelectorAll(`.carousel-prev[data-target="${trackId}"]`).forEach(b => b.addEventListener('click', ()=>{ index--; apply(); }));
    document.querySelectorAll(`.carousel-next[data-target="${trackId}"]`).forEach(b => b.addEventListener('click', ()=>{ index++; apply(); }));
    window.addEventListener('resize', calcPerView);
    calcPerView();
  }
  setupCarousel('solutionsTrack');
  setupCarousel('industriesTrack');

  /* animated stats */
  function animNum(el){
    const final = parseFloat(el.dataset.final);
    const decimals = parseInt(el.dataset.decimals||'0',10);
    const suffix = el.dataset.suffix||'';
    const duration = 2000;
    let start = null;
    function step(ts){
      if(!start) start = ts;
      const p = Math.min((ts-start)/duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10*p);
      const v = ease * final;
      let display;
      if(final >= 1000) display = Math.floor(v).toLocaleString('en-US');
      else display = v.toFixed(decimals);
      el.textContent = display + suffix;
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const numIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ animNum(e.target); numIO.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.anim-num').forEach(el => numIO.observe(el));
})();
