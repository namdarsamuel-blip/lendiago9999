/* Lendiago shared chrome — banner, header, dropdowns, mobile menu, footer.
   Inject by including this script at end of <body>; it auto-renders into placeholders
   #site-chrome-top and #site-chrome-bottom, plus wires up all interactions.

   Pages can set window.LENDIAGO_NAV = { current: 'home' | slug } before loading.
*/
(function(){
  const cur = (window.LENDIAGO_NAV && window.LENDIAGO_NAV.current) || '';
  const A = (href, label, extra='') => `<a href="${href}" class="${extra}">${label}</a>`;

  /* ---- TOP CHROME ---- */
  const topHTML = `
<!-- Top Banner -->
<div id="topBanner" class="relative bg-secondary text-secondary-foreground">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center text-center py-2 px-10 relative">
      <p class="text-sm font-medium">
        Want 1-on-1 support from a business funding expert?
        <a href="tel:5164399364" class="font-bold hover:underline">Call 516-439-9364</a>
      </p>
      <button onclick="document.getElementById('topBanner').remove()" class="absolute right-4 top-1/2 -translate-y-1/2" aria-label="Dismiss">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  </div>
</div>

<header id="siteHeader" class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm transition-all duration-300 h-20">
  <div class="container max-w-[1400px] mx-auto flex h-full items-center justify-between px-4 md:px-8">
    <a href="index.html" class="flex items-center flex-shrink-0">
      <img src="${assetsPrefix()}assets/Full-Logo.svg" alt="Lendiago" class="w-auto h-8 lg:h-9" />
    </a>
    <nav class="hidden lg:flex items-center space-x-4 2xl:space-x-8">
      ${navLink('index.html','Home','home')}
      <button class="nav-dd flex items-center gap-1 text-sm font-medium ${navStyleFor('solutions')} whitespace-nowrap" data-menu="solutions">
        Financing Solutions
        <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <button class="nav-dd flex items-center gap-1 text-sm font-medium ${navStyleFor('industries')} whitespace-nowrap" data-menu="industries">
        Industries
        <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      ${navLink('resources.html','Resources','resources')}
      ${navLink('partners.html','Partner Program','partners')}
      ${navLink('faq.html','FAQ','faq')}
      ${navLink('contact.html','Contact','contact')}
    </nav>
    <div class="flex items-center gap-2 xl:gap-4">
      <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="hidden lg:inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition">Apply Now</a>
      <button id="mobileMenuBtn" class="lg:hidden p-2" aria-label="Open menu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>

<div id="dd-solutions" class="nav-dd-panel hidden fixed z-[60] w-64 bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-1 text-sm">
  ${productLinks().map(p=>`<a class="block px-3 py-2 rounded hover:bg-muted" href="${p.href}">${p.label}</a>`).join('')}
  <div class="border-t border-border my-1"></div>
  <a class="block px-3 py-2 rounded hover:bg-muted font-semibold text-primary" href="financing-solutions.html">View All Solutions →</a>
</div>
<div id="dd-industries" class="nav-dd-panel hidden fixed z-[60] w-60 bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-1 text-sm">
  ${industryLinks().map(p=>`<a class="block px-3 py-2 rounded hover:bg-muted" href="${p.href}">${p.label}</a>`).join('')}
  <div class="border-t border-border my-1"></div>
  <a class="block px-3 py-2 rounded hover:bg-muted font-semibold text-primary" href="industries.html">View All Industries →</a>
</div>

<div id="mobileMenu" class="fixed inset-0 z-[60] hidden">
  <div class="absolute inset-0 bg-black/40" data-close></div>
  <div class="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-background shadow-xl overflow-y-auto">
    <div class="p-6 flex items-center justify-between">
      <img src="${assetsPrefix()}assets/Full-Logo.svg" alt="Lendiago" class="h-8" />
      <button data-close class="p-2"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
    </div>
    <nav class="px-6 pb-8 flex flex-col space-y-1 text-foreground/80">
      <a class="py-3 text-lg font-medium" href="index.html">Home</a>
      <details class="border-b border-border/40">
        <summary class="py-3 text-lg font-medium list-none cursor-pointer flex items-center justify-between">Financing Solutions <span class="text-xs">▾</span></summary>
        <div class="pl-4 pb-2 flex flex-col">
          ${productLinks().map(p=>`<a class="py-2 text-base" href="${p.href}">${p.label}</a>`).join('')}
        </div>
      </details>
      <details class="border-b border-border/40">
        <summary class="py-3 text-lg font-medium list-none cursor-pointer flex items-center justify-between">Industries <span class="text-xs">▾</span></summary>
        <div class="pl-4 pb-2 flex flex-col">
          ${industryLinks().map(p=>`<a class="py-2 text-base" href="${p.href}">${p.label}</a>`).join('')}
        </div>
      </details>
      <a class="py-3 text-lg font-medium" href="resources.html">Resources</a>
      <a class="py-3 text-lg font-medium" href="partners.html">Partner Program</a>
      <a class="py-3 text-lg font-medium" href="faq.html">FAQ</a>
      <a class="py-3 text-lg font-medium" href="contact.html">Contact</a>
      <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-semibold">Apply Now</a>
    </nav>
  </div>
</div>
  `;

  function navLink(href, label, key){
    const active = cur === key;
    return `<a href="${href}" class="text-sm font-medium ${active ? 'text-primary font-bold' : 'text-foreground/80 hover:text-foreground'} whitespace-nowrap">${label}</a>`;
  }
  function navStyleFor(key){
    return cur === key ? 'text-primary font-bold' : 'text-foreground/80 hover:text-foreground';
  }
  function assetsPrefix(){ return ''; }

  function productLinks(){
    return [
      { label:'Business Term Loan', href:'business-term-loan.html' },
      { label:'Merchant Cash Advance', href:'merchant-cash-advance.html' },
      { label:'Business Line of Credit', href:'business-line-of-credit.html' },
      { label:'Credit Stacking', href:'credit-stacking.html' },
      { label:'SBA Loan', href:'sba-loan.html' },
      { label:'Real Estate Loan', href:'real-estate-loan.html' },
      { label:'Personal Term Loans', href:'personal-term-loans.html' },
      { label:'Credit Repair', href:'credit-repair.html' },
    ];
  }
  function industryLinks(){
    return [
      { label:'Construction', href:'industries/construction.html' },
      { label:'Food &amp; Beverage', href:'industries/food-beverage.html' },
      { label:'Retail', href:'industries/retail.html' },
      { label:'Transportation', href:'industries/transportation.html' },
      { label:'Healthcare', href:'industries/healthcare.html' },
      { label:'Hospitality &amp; Services', href:'industries/hospitality-services.html' },
      { label:'Manufacturing', href:'industries/manufacturing.html' },
      { label:'Real Estate', href:'industries/real-estate.html' },
      { label:'Seasonal Business', href:'industries/seasonal-business.html' },
      { label:'Other Industries', href:'industries/other.html' },
    ];
  }

  /* ---- BOTTOM CHROME ---- */
  const bottomHTML = `
<footer class="relative border-t border-border/40 bg-muted/30 overflow-hidden">
  <div class="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10 pointer-events-none"></div>
  <div class="container mx-auto px-4 md:px-6 py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
      <div class="lg:col-span-4 space-y-8">
        <a href="index.html" class="flex items-center"><img src="assets/Full-Logo.svg" alt="Lendiago" class="h-10"/></a>
        <p class="text-base text-muted-foreground max-w-sm leading-relaxed">
          Connecting businesses with the right capital. Fast approvals, transparent terms, and dedicated support from application to funding.
        </p>
        <div class="pt-6 border-t border-border/50">
          <p class="text-[10px] leading-relaxed text-muted-foreground/60 uppercase tracking-widest font-black mb-2">Legal Disclaimer</p>
          <p class="text-xs leading-relaxed text-muted-foreground/60 italic">
            Lendiago operates as a financial marketplace and strategic brokerage, connecting business owners with a curated network of premier lending partners. While we are not a direct lender, our role is to advocate for your business and help you secure the most competitive terms available. All final funding decisions, including rates and approval, are determined by our partner lenders.
          </p>
        </div>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-lg font-bold text-primary font-headline">Solutions</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          ${productLinks().map(p=>`<li><a href="${p.href}" class="hover:text-foreground">${p.label}</a></li>`).join('')}
        </ul>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-lg font-bold text-primary font-headline">Company</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          <li><a href="about.html" class="hover:text-foreground">About Us</a></li>
          <li><a href="partners.html" class="hover:text-foreground">Partner Program</a></li>
          <li><a href="resources.html" class="hover:text-foreground">Resources</a></li>
          <li><a href="faq.html" class="hover:text-foreground">FAQ</a></li>
          <li><a href="contact.html" class="hover:text-foreground">Contact Us</a></li>
        </ul>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-lg font-bold text-primary font-headline">Legal</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          <li><a href="privacy-policy.html" class="hover:text-foreground">Privacy Policy</a></li>
          <li><a href="terms-of-service.html" class="hover:text-foreground">Terms of Service</a></li>
          <li><a href="licenses.html" class="hover:text-foreground">Licenses</a></li>
        </ul>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-lg font-bold text-primary font-headline">Contact</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          <li>Long Island, NY 11023</li>
          <li><a href="tel:5164399364" class="hover:text-primary">516-439-9364</a></li>
          <li><a href="mailto:info@lendiago.com" class="hover:text-primary">info@lendiago.com</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>&copy; <span id="year"></span> Lendiago. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="privacy-policy.html" class="hover:text-primary">Privacy</a>
        <a href="terms-of-service.html" class="hover:text-primary">Terms</a>
        <a href="#" class="hover:text-primary">Cookies</a>
      </div>
    </div>
  </div>
</footer>
  `;

  /* Adjust links for nested pages (industries/) */
  function adjustForDepth(html){
    const depth = (location.pathname.match(/\/industries\//) || location.pathname.match(/\/resources\//)) ? 1 : 0;
    if(!depth) return html;
    const prefix = '../';
    return html
      .replace(/href="(?!https?:|tel:|mailto:|#|\/)/g, 'href="' + prefix)
      .replace(/src="(?!https?:|data:|\/)/g, 'src="' + prefix);
  }

  const top = document.getElementById('site-chrome-top');
  const bottom = document.getElementById('site-chrome-bottom');
  if(top) top.innerHTML = adjustForDepth(topHTML);
  if(bottom) bottom.innerHTML = adjustForDepth(bottomHTML);

  /* ---------- Header scroll shrink ---------- */
  const hdr = document.getElementById('siteHeader');
  if(hdr){
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 10){ hdr.classList.add('shadow-md','h-16'); hdr.classList.remove('h-20'); }
      else { hdr.classList.remove('shadow-md','h-16'); hdr.classList.add('h-20'); }
      document.querySelectorAll('.nav-dd-panel').forEach(p => p.classList.add('hidden'));
    });
    window.addEventListener('resize', ()=>{
      document.querySelectorAll('.nav-dd-panel').forEach(p => p.classList.add('hidden'));
    });
  }

  /* ---------- Mobile menu ---------- */
  const mm = document.getElementById('mobileMenu');
  const mb = document.getElementById('mobileMenuBtn');
  if(mb && mm){
    mb.addEventListener('click', ()=> mm.classList.remove('hidden'));
    mm.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', ()=> mm.classList.add('hidden')));
  }

  /* ---------- Header dropdowns ---------- */
  let ddHideTimer = null;
  function cancelHide(){ if(ddHideTimer){ clearTimeout(ddHideTimer); ddHideTimer = null; } }
  function scheduleHideAll(){
    cancelHide();
    ddHideTimer = setTimeout(()=>{
      document.querySelectorAll('.nav-dd-panel').forEach(p => p.classList.add('hidden'));
    }, 150);
  }
  document.querySelectorAll('.nav-dd').forEach(btn=>{
    btn.addEventListener('mouseenter', ()=> showDD(btn));
    btn.addEventListener('mouseleave', scheduleHideAll);
    btn.addEventListener('focus', ()=> showDD(btn));
    btn.addEventListener('click', e => { e.preventDefault(); toggleDD(btn); });
  });
  document.querySelectorAll('.nav-dd-panel').forEach(panel=>{
    panel.addEventListener('mouseenter', cancelHide);
    panel.addEventListener('mouseleave', scheduleHideAll);
  });
  document.addEventListener('click', e=>{
    if(!e.target.closest('.nav-dd') && !e.target.closest('.nav-dd-panel')){
      document.querySelectorAll('.nav-dd-panel').forEach(p => p.classList.add('hidden'));
    }
  });
  function showDD(btn){
    cancelHide();
    const id = 'dd-'+btn.dataset.menu;
    document.querySelectorAll('.nav-dd-panel').forEach(p => { if(p.id !== id) p.classList.add('hidden'); });
    const panel = document.getElementById(id);
    if(panel){
      const r = btn.getBoundingClientRect();
      const panelW = panel.offsetWidth || 256;
      let left = r.left + r.width/2 - panelW/2;
      const margin = 8;
      left = Math.max(margin, Math.min(left, window.innerWidth - panelW - margin));
      panel.style.left = left + 'px';
      panel.style.top = (r.bottom + 6) + 'px';
      panel.classList.remove('hidden');
    }
  }
  function toggleDD(btn){
    const id = 'dd-'+btn.dataset.menu;
    const panel = document.getElementById(id);
    if(panel.classList.contains('hidden')) showDD(btn); else panel.classList.add('hidden');
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const delay = parseInt(el.dataset.delay||'0',10);
        setTimeout(()=> el.classList.add('is-visible'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal,.reveal-fade,.reveal-l,.reveal-r').forEach(el => io.observe(el));

  /* ---------- Footer year ---------- */
  const yEl = document.getElementById('year');
  if(yEl) yEl.textContent = new Date().getFullYear();
})();
