/* Renders flat page templates: financing-solutions listing, industries listing,
   resources, partners, faq, contact, apply, about, legal. */
(function(){
  const D = window.LENDIAGO_DATA;
  if(!D) return;

  function pageHero({eyebrow, title, subtitle, dark=false}){
    return `
<section class="relative bg-background border-b border-border/60 overflow-hidden">
  <div aria-hidden="true" class="hidden lg:block absolute top-0 right-0 w-[40%] h-full pointer-events-none">
    <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative pt-12 md:pt-20 pb-12 md:pb-20 max-w-5xl reveal">
    ${eyebrow ? `<div class="flex items-center gap-4 mb-8"><span class="block h-px w-10 bg-accent"></span><span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">${eyebrow}</span></div>` : ''}
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[1.02] tracking-tight mb-6">${title}<span class="text-accent">.</span></h1>
    <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">${subtitle}</p>
  </div>
</section>`;
  }

  /* Financing Solutions listing */
  window.LendiagoRenderSolutionsListing = function(){
    document.title = 'Financing Solutions, Lendiago';
    const DUO = {
      'business-term-loan':'<rect x="3" y="6" width="18" height="13" rx="2" fill="hsl(var(--accent))"/><rect x="3" y="6" width="18" height="13" rx="2" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><path d="M3 10h18" stroke="hsl(var(--primary))" stroke-width="1.5"/><circle cx="8" cy="14.5" r="1.2" fill="hsl(var(--primary))"/>',
      'merchant-cash-advance':'<circle cx="12" cy="12" r="9" fill="hsl(var(--accent))"/><circle cx="12" cy="12" r="9" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><path d="M12 7v10M9 9.5h4a2 2 0 0 1 0 4h-2.5a2 2 0 0 0 0 4H14" stroke="hsl(var(--primary))" stroke-width="1.6" stroke-linecap="round" fill="none"/>',
      'business-line-of-credit':'<rect x="3" y="5" width="18" height="14" rx="2" fill="hsl(var(--accent))" fill-opacity=".5"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><path d="M3 10h18" stroke="hsl(var(--primary))" stroke-width="1.5"/><path d="M7 14h4" stroke="hsl(var(--primary))" stroke-width="1.7" stroke-linecap="round"/>',
      'credit-stacking':'<rect x="4" y="14" width="16" height="6" rx="1.5" fill="hsl(var(--accent))"/><rect x="4" y="14" width="16" height="6" rx="1.5" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><rect x="4" y="9" width="16" height="4" rx="1.5" fill="hsl(var(--accent))" fill-opacity=".55"/><rect x="4" y="9" width="16" height="4" rx="1.5" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><rect x="4" y="4" width="16" height="4" rx="1.5" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/>',
      'sba-loan':'<path d="M3 10l9-6 9 6v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z" fill="hsl(var(--accent))" stroke="hsl(var(--primary))" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 21v-7h6v7" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/>',
      'real-estate-loan':'<rect x="3" y="11" width="7" height="10" fill="hsl(var(--accent))" fill-opacity=".5" stroke="hsl(var(--primary))" stroke-width="1.5"/><rect x="11" y="6" width="10" height="15" fill="hsl(var(--accent))" stroke="hsl(var(--primary))" stroke-width="1.5"/><path d="M5 15h3M5 18h3M14 10h4M14 13h4M14 16h4" stroke="hsl(var(--primary))" stroke-width="1.4" stroke-linecap="round"/>',
      'credit-repair':'<circle cx="12" cy="12" r="9" fill="hsl(var(--accent))"/><circle cx="12" cy="12" r="9" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><path d="M8 12.5l3 3 5-6" stroke="hsl(var(--primary))" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      'personal-term-loans':'<circle cx="12" cy="8.5" r="4" fill="hsl(var(--accent))"/><circle cx="12" cy="8.5" r="4" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="hsl(var(--primary))" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
    };
    const tags = {
      'business-term-loan':'Predictable payments',
      'merchant-cash-advance':'Fastest funding',
      'business-line-of-credit':'Revolving credit',
      'credit-stacking':'Credit-based',
      'sba-loan':'Lowest rates',
      'real-estate-loan':'Asset-backed',
      'personal-term-loans':'Personal use',
      'credit-repair':'Build credit'
    };
    const cards = D.products.map((p,i) => `
      <a href="${p.slug}.html" class="reveal group relative flex flex-col p-8 md:p-10 border border-border/60 bg-white hover:bg-primary transition-all duration-300" data-delay="${i*50}">
        <div class="flex items-start justify-between mb-12 md:mb-14">
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">${tags[p.slug] || 'Funding'}</p>
          <span class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/70 text-primary group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all">
            <svg class="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
        <h3 class="text-2xl md:text-3xl font-bold font-headline text-primary group-hover:text-white mb-4 leading-[1.05] tracking-tight transition-colors">${p.title}</h3>
        <p class="text-muted-foreground group-hover:text-white/75 leading-relaxed transition-colors mb-8">${p.description}</p>
        <div class="mt-auto pt-6 border-t border-border/60 group-hover:border-white/20 transition-colors space-y-2.5">
          ${(p.summary||[]).slice(0,3).map(([k,v]) => `
            <div class="flex items-baseline justify-between gap-3 text-[13px]">
              <span class="text-muted-foreground group-hover:text-white/60 transition-colors">${k}</span>
              <span class="font-semibold text-primary group-hover:text-white text-right transition-colors">${v}</span>
            </div>`).join('')}
        </div>
      </a>`).join('');

    document.getElementById('page-content').innerHTML = `
<section class="relative w-full overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-28">
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10">
    <div class="absolute inset-0" style="background-image: linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px); background-size:40px 40px;"></div>
  </div>
  <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none -z-10"></div>

  <div class="container mx-auto px-4 md:px-6">

    <div class="max-w-3xl mb-14 md:mb-20 reveal">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Financing Solutions</span>
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-[1.05] font-headline mb-6">
        The right capital for <span class="text-accent italic">every need.</span>
      </h1>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
        Eight funding products covering working capital, equipment, real estate, and credit. Apply once, and we match you to the option that actually fits.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-0 -mb-px">
      ${cards}
    </div>

    <div class="mt-20 md:mt-24 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
      <div class="md:col-span-7 reveal">
        <div class="flex items-center gap-4 mb-5">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">How we match</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.1] tracking-tight">Not sure which product fits? <span class="text-muted-foreground">Skip the guesswork.</span></h2>
      </div>
      <div class="md:col-span-5 reveal" data-delay="120">
        <p class="text-lg text-muted-foreground leading-relaxed mb-6">Apply once and a specialist reviews your business, then matches you to the right product, terms, and timeline. No shopping eight forms.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="https://form.jotform.com/261271610738051" class="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-full shadow-xl shadow-accent/20 transition-all hover:scale-105">Pre-qualify now</a>
          <a href="contact.html" class="inline-flex items-center justify-center text-primary font-bold px-2 py-4 hover:text-accent transition-colors">Talk to a specialist
            <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>

  </div>
</section>`;
  };

  /* Industries listing */
  window.LendiagoRenderIndustriesListing = function(){
    document.title = 'Industries We Serve, Lendiago';

    const featured = D.industries[0];
    const rest = D.industries.slice(1);

    // Editorial hero: centered headline, no jump-to-index pills
    const heroBlock = `
<section class="relative bg-background pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-4xl reveal">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-10 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Industries</span>
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[0.98] tracking-tight">
        Capital that knows<br/>your <span class="text-accent">business model</span>.
      </h1>
      <p class="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        From construction crews to e-commerce shops, we structure funding around how your industry actually makes money.
      </p>
    </div>
  </div>
</section>`;

    const featuredBlock = '';

    // Editorial grid of ALL industries (no featured split)
    const restCards = D.industries.map((ind,i) => {
      const range = (ind.expectations[0] && ind.expectations[0][1]) || '';
      return `
        <a href="industries/${ind.slug}.html" class="reveal group flex flex-col bg-white border border-border/60 overflow-hidden hover:border-primary transition-all" data-delay="${i*60}">
          <div class="relative aspect-[5/3] overflow-hidden bg-muted">
            <img src="${ind.image}" alt="${ind.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" referrerpolicy="no-referrer"/>
          </div>
          <div class="p-6 md:p-7 flex-1 flex flex-col">
            <h3 class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight mb-2 group-hover:text-accent transition-colors">${ind.title}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">${ind.description}</p>
            <div class="flex items-end justify-between pt-4 border-t border-border/60">
              <div>
                <p class="text-[9px] font-semibold uppercase tracking-[0.32em] text-muted-foreground mb-1">Typical</p>
                <p class="text-sm font-bold text-primary">${range}</p>
              </div>
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent group-hover:gap-2 transition-all">
                Details
                <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </a>`;
    }).join('');

    const restBlock = `
<section class="pb-24 md:pb-32 bg-background">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">${restCards}</div>
  </div>
</section>`;

    document.getElementById('page-content').innerHTML =
      heroBlock + featuredBlock + restBlock +
      genericCTA('Don\u2019t see your industry? We fund nearly every sector.');
  };

  /* Resources listing */
  window.LendiagoRenderResources = function(){
    document.title = 'Resources, Lendiago';
    const featured = D.resources[0];
    const rest = D.resources.slice(1);
    const cards = rest.map((r,i) => `
      <a href="resources/${r.slug}.html" class="reveal group flex flex-col rounded-3xl border border-border/50 bg-white overflow-hidden hover:shadow-premium hover:-translate-y-1 transition-all duration-500" data-delay="${i*80}">
        <div class="aspect-[16/9] overflow-hidden bg-muted"><img src="${r.image}" alt="${r.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer"/></div>
        <div class="p-7 flex flex-col flex-1">
          <p class="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-3">${r.date}</p>
          <h3 class="text-xl font-bold font-headline text-primary mb-3 leading-snug">${r.title}</h3>
          <p class="text-muted-foreground leading-relaxed flex-1">${r.description}</p>
          <span class="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors mt-5">Read article
            <svg class="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join('');
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Resources & Insights', title:'Smart Capital Starts With Smart Information', subtitle:'Guides, comparisons, and explainers to help you choose the right financing strategy for your business.'}) + `
<section class="py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6">
    <a href="resources/${featured.slug}.html" class="reveal group grid lg:grid-cols-2 gap-10 items-center rounded-[2.5rem] bg-white border border-border/50 shadow-premium overflow-hidden mb-16">
      <div class="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-muted"><img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer"/></div>
      <div class="p-10 lg:p-16">
        <p class="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-4">Featured · ${featured.date}</p>
        <h2 class="text-3xl md:text-4xl font-bold font-headline text-primary mb-5 leading-tight">${featured.title}</h2>
        <p class="text-lg text-muted-foreground leading-relaxed mb-8">${featured.description}</p>
        <span class="inline-flex items-center font-bold text-primary group-hover:text-accent transition-colors">Read full article
          <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
  </div>
</section>` + genericCTA('Ready to put what you\u2019ve learned to work?');
  };

  /* Partners */
  window.LendiagoRenderPartners = function(){
    document.title = 'Partner Program, Lendiago';
    const benefits = [
      ['Earn commission on every funded deal','You send the client, we close the deal, you get paid. No funding background or licensing needed.'],
      ['You stay the trusted advisor','Your client comes through your relationship. We handle underwriting, lender shopping, and closing in the background.'],
      ['Add funding to what you already sell','If you sell insurance, file taxes, list properties, or advise small businesses, you already talk to owners who need capital. Now you have somewhere to send them.']
    ];
    const audiences = [
      ['Insurance agents','Your clients run businesses. They need working capital.'],
      ['SBA & loan officers','Refer the deals that fall outside your box.'],
      ['CPAs & accountants','Help clients fund growth, not just file taxes.'],
      ['Real estate & consultants','Add financing alongside what you already offer.'],
      ['Attorneys','Help clients fund the deals you\u2019re already structuring.'],
      ['Anyone else','If you work with business owners, there\u2019s a partnership here.']
    ];
    document.getElementById('page-content').innerHTML = `
<section class="relative w-full bg-background overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12">
  <div class="absolute inset-0 opacity-[0.04] pointer-events-none -z-10">
    <div class="absolute inset-0" style="background-image: linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px); background-size:40px 40px;"></div>
  </div>
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-3xl reveal">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Partner Program</span>
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-[1.02] font-headline mb-6">Partner with Lendiago. <span class="text-accent italic">Grow with us.</span></h1>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">Refer business owners to a team that actually finds them capital. Tell us about your business below and Sam will be in touch to set up your partner account.</p>
    </div>
  </div>
</section>

<section class="py-16 md:py-20">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
      <div class="lg:col-span-5 space-y-12 reveal-l">
        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <span class="block h-px w-10 bg-accent"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Why partner</span>
          </div>
          ${benefits.map(([t,d],i)=>`
            <div class="border-t border-border/60 pt-6">
              <h3 class="text-xl md:text-2xl font-bold font-headline text-primary mb-3 leading-tight">${t}</h3>
              <p class="text-muted-foreground leading-relaxed">${d}</p>
            </div>`).join('')}
        </div>
        <div class="border-t border-border/60 pt-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="block h-px w-10 bg-accent"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Who it's for</span>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-5">
            ${audiences.map(([t,d])=>`
              <div>
                <h4 class="font-headline text-base font-bold text-primary mb-1 leading-tight">${t}</h4>
                <p class="text-muted-foreground text-sm leading-relaxed">${d}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="lg:col-span-7 reveal-r">
        <form action="https://formsubmit.co/sam@lendiago.com" method="POST" class="rounded-[1.5rem] border border-border/60 bg-white overflow-hidden shadow-sm">
          <input type="hidden" name="_subject" value="New partner application — Lendiago"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="text" name="_honey" style="display:none"/>
          <div class="bg-primary text-primary-foreground px-8 md:px-10 py-7 flex items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="block h-px w-8 bg-accent"></span>
                <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Apply to partner</span>
              </div>
              <h3 class="font-headline text-xl md:text-2xl font-bold leading-tight">Tell us about your business</h3>
            </div>
            <span class="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
              <svg class="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="m4 6 8 7 8-7"/></svg>
            </span>
          </div>
          <div class="p-8 md:p-10 space-y-7">
            <div class="grid md:grid-cols-2 gap-x-6 gap-y-6">
              ${[['Full name','name','Jane Smith','text'],['Company','company','Smith CPA Group','text'],['Email','email','jane@smithcpa.com','email'],['Phone','phone','(555) 555-1234','tel']].map(([l,n,ph,t])=>`
                <div class="space-y-2">
                  <label class="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground block">${l} <span class="text-accent">*</span></label>
                  <input name="${n}" type="${t}" required placeholder="${ph}" class="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-base text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"/>
                </div>`).join('')}
            </div>
            <div class="space-y-2">
              <label class="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground block">Type of business <span class="text-accent">*</span></label>
              <div class="relative">
                <select name="partner_type" required class="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-base text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 appearance-none pr-12">
                  <option value="" disabled selected>Select one</option>
                  <option>Insurance agent</option>
                  <option>SBA / loan officer</option>
                  <option>CPA / accountant</option>
                  <option>Real estate professional</option>
                  <option>Business consultant</option>
                  <option>Broker / ISO</option>
                  <option>Other</option>
                </select>
                <svg class="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground block">Tell us more</label>
              <textarea name="message" rows="5" placeholder="What industry you work in, the kind of clients you serve, and anything else we should know." class="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-base text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"></textarea>
            </div>
            <button type="submit" class="w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all hover:scale-[1.01]">Submit application
              <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`;
  };



  /* FAQ */
  window.LendiagoRenderFAQ = function(){
    document.title = 'Frequently Asked Questions, Lendiago';
    const faqs = [
      ['What types of business funding does Lendiago offer?','We offer eight tailored products: Business Term Loans, Merchant Cash Advances, Business Lines of Credit, Credit Stacking, SBA Loans, Real Estate Loans, Personal Term Loans, and Credit Repair services.'],
      ['How fast can I get funded?','It depends on the product. Merchant Cash Advances can fund in as little as 24-48 hours; Lines of Credit typically take 7 business days; SBA Loans take 2-8 weeks. Most clients see initial offers within minutes.'],
      ['Will applying impact my credit score?','No. Our initial application uses a soft credit pull, which has zero impact on your personal or business credit score.'],
      ['What are the minimum qualifications?','Requirements vary by product. Most require at least 6 months in business, $10,000+ in monthly revenue, and a credit score of 580 or higher. We have solutions for businesses that fall outside these ranges.'],
      ['How much can I qualify for?','Funding amounts range from $2,000 up to $50,000,000 depending on the product, your business performance, and credit profile.'],
      ['Is Lendiago a direct lender?','No. Lendiago operates as a financial marketplace and strategic brokerage, connecting you with our curated network of premier lending partners. This means we shop your application across multiple lenders to find you the best terms.'],
      ['What documents will I need?','For most products, you\u2019ll need a driver\u2019s license, voided business check, and the last 3-6 months of business bank statements. Larger or longer-term products may require tax returns and financial statements.'],
      ['Can I apply if I have bad credit?','Yes. Several of our products, including the Merchant Cash Advance, have no minimum FICO requirement. Approvals are based on your business performance, not just your credit.'],
      ['Are there any application fees?','No. Applying is 100% free with no obligation. You only pay if you accept and close on funding.'],
      ['How does the partner program work?','Brokers, CPAs, and consultants can refer clients and earn industry-leading commissions on every funded deal. See our Partner Program page for details.']
    ];
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'FAQ', title:'Answers to Your Questions', subtitle:'Everything you need to know about applying, qualifying, and funding with Lendiago.'}) + `
<section class="py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6 max-w-4xl">
    <div class="space-y-4">
      ${faqs.map((f,i) => `
        <details class="reveal group rounded-2xl border border-border/50 bg-white shadow-sm overflow-hidden" data-delay="${i*40}">
          <summary class="flex items-center justify-between gap-6 p-6 md:p-8 cursor-pointer list-none">
            <h3 class="text-lg md:text-xl font-bold font-headline text-primary">${f[0]}</h3>
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 group-open:bg-accent/15 group-open:text-accent text-primary flex items-center justify-center transition-colors">
              <svg class="h-4 w-4 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div class="px-6 md:px-8 pb-6 md:pb-8 text-muted-foreground leading-relaxed text-base md:text-lg">${f[1]}</div>
        </details>`).join('')}
    </div>
  </div>
</section>` + genericCTA('Still have questions? Our team is happy to help.');
  };

  /* Contact */
  window.LendiagoRenderContact = function(){
    document.title = 'Contact Us, Lendiago';
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Get in Touch', title:'Let\u2019s talk about your business', subtitle:'Whether you have questions, need a custom solution, or are ready to apply, we\u2019re here to help.'}) + `
<section class="py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <div class="grid lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 reveal-l">
        <div class="rounded-[2rem] border border-border/50 bg-white shadow-premium overflow-hidden">
          <div class="bg-primary text-primary-foreground p-10">
            <h2 class="text-3xl font-bold font-headline mb-2">Send Us a Message</h2>
            <p class="text-primary-foreground/70">We typically respond within a few hours during business days.</p>
          </div>
          <form action="https://formsubmit.co/sam@lendiago.com" method="POST" class="p-10 space-y-6">
            <input type="hidden" name="_subject" value="New contact form submission — Lendiago"/>
            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="text" name="_honey" style="display:none"/>
            <div class="grid md:grid-cols-2 gap-6">
              ${cField('Full Name','name','John Doe')}${cField('Email','email','john@company.com','email')}
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              ${cField('Phone','phone','(555) 555-1234','tel')}${cField('Company','company','Acme Inc.')}
            </div>
            ${cField('Subject','subject','How can we help?')}
            <div class="space-y-2">
              <label class="text-sm font-bold text-primary">Message</label>
              <textarea name="message" required class="w-full rounded-xl border border-border/60 bg-background px-4 py-3 min-h-[140px] focus:border-accent focus:outline-none" placeholder="Tell us a bit about your business..."></textarea>
            </div>
            <button type="submit" class="w-full bg-primary text-primary-foreground hover:bg-accent rounded-full py-4 text-lg font-bold transition">Send Message</button>
          </form>
        </div>
      </div>
      <div class="space-y-6 reveal-r">
        ${contactCard('phone','Phone','516-835-0757','tel:5168350757')}
        ${contactCard('mail','Email','info@lendiago.com','mailto:info@lendiago.com')}
        ${contactCard('mappin','Office','Long Island, NY 11023','#')}
        <div class="rounded-2xl bg-primary text-primary-foreground p-7 shadow-premium">
          <h3 class="font-headline text-xl font-bold mb-3">Business Hours</h3>
          <ul class="space-y-2 text-primary-foreground/80 text-sm">
            <li class="flex justify-between"><span>Monday to Friday</span><span>9am to 7pm ET</span></li>
            <li class="flex justify-between"><span>Saturday</span><span>10am to 2pm ET</span></li>
            <li class="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`;
  };

  /* Apply */
  window.LendiagoRenderApply = function(){
    document.title = 'Apply for Funding, Lendiago';
    const params = new URLSearchParams(location.search);
    const initial = D.products.find(p => p.slug === params.get('product'));
    const formUrl = 'https://form.jotform.com/261271610738051';
    document.getElementById('page-content').innerHTML = `
<section class="bg-background py-12 md:py-20 border-b border-border/60">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <nav class="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-10 reveal">
      <a href="index.html" class="hover:text-primary transition-colors">Home</a>
      <span class="opacity-50">/</span>
      <span class="text-primary">Apply</span>
    </nav>
    <div class="reveal max-w-3xl">
      <div class="flex items-center gap-4 mb-8">
        <span class="block h-px w-10 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Funding Application</span>
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[1.02] tracking-tight mb-6">Apply for funding<span class="text-accent">.</span></h1>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">A short application, around two minutes. No impact on your credit score${initial ? `. Pre-filled for <span class="text-primary font-semibold">${initial.title}</span>` : ''}.</p>
    </div>
  </div>
</section>

<section class="bg-background py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-8 reveal-l space-y-12">
        <div>
          <div class="flex items-center gap-4 mb-8">
            <span class="block h-px w-10 bg-accent"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Step 1</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold font-headline text-primary leading-[1.1] mb-4">Open the application</h2>
          <p class="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">The form opens in a new tab so you can keep this page handy. Most applicants finish in under two minutes.</p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="${formUrl}" target="_blank" rel="noopener" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-primary rounded-full px-10 py-5 text-base font-bold transition-all">
              Start application
              <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
            <a href="${formUrl}" class="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border">or open in this tab</a>
          </div>
        </div>

        <div class="border-t border-border/60 pt-12">
          <div class="flex items-center gap-4 mb-8">
            <span class="block h-px w-10 bg-accent"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">What you'll need</span>
          </div>
          <dl class="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            ${[
              ['Basic business info','Legal name, DBA, time in business.'],
              ['Owner contact','Name, email, and phone number.'],
              ['Monthly revenue','A rough average is fine for a quote.'],
              ['Funding goal','How much you need and what for.']
            ].map(([t,d])=>`
              <div class="border-t border-border/60 pt-5">
                <dt class="font-bold font-headline text-primary text-lg mb-1">${t}</dt>
                <dd class="text-sm text-muted-foreground leading-relaxed">${d}</dd>
              </div>`).join('')}
          </dl>
        </div>

        <div class="border-t border-border/60 pt-12">
          <div class="flex items-center gap-4 mb-8">
            <span class="block h-px w-10 bg-accent"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">After you apply</span>
          </div>
          <ol class="space-y-5">
            ${[
              ['A funding advisor reviews your file.','Usually within a few business hours.'],
              ['We match offers to your goals.','Multiple structures, side by side.'],
              ['You choose the option that fits.','Funds typically arrive in 24 to 48 hours.']
            ].map(([t,d],i)=>`
              <li class="flex gap-5">
                <span class="shrink-0 w-8 h-8 rounded-full bg-accent/15 text-primary font-mono text-sm font-bold flex items-center justify-center">${i+1}</span>
                <div>
                  <p class="font-bold text-primary">${t}</p>
                  <p class="text-sm text-muted-foreground">${d}</p>
                </div>
              </li>`).join('')}
          </ol>
        </div>
      </div>

      <aside class="lg:col-span-4 reveal-r">
        <div class="lg:sticky top-32 space-y-12">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <span class="block h-px w-10 bg-accent"></span>
              <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Why apply with us</span>
            </div>
            <dl class="divide-y divide-border/60">
              ${[['Fast Decisions','Get pre-qualified offers in minutes.'],['Secure & Private','Bank-level encryption for your data.'],['No Credit Impact','Soft credit pull only for initial offers.']].map(([t,d])=>`
                <div class="py-5">
                  <dt class="font-bold font-headline text-primary text-lg mb-1">${t}</dt>
                  <dd class="text-sm text-muted-foreground leading-relaxed">${d}</dd>
                </div>`).join('')}
            </dl>
          </div>

          <div>
            <div class="flex items-center gap-4 mb-8">
              <span class="block h-px w-10 bg-accent"></span>
              <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Need help?</span>
            </div>
            <p class="text-muted-foreground leading-relaxed mb-6">Our funding specialists are available to guide you through the process.</p>
            <div class="space-y-3">
              <a href="tel:5168350757" class="flex items-center justify-between py-3 border-t border-border/60 group">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Phone</span>
                <span class="font-bold text-primary group-hover:text-accent transition-colors">516-835-0757</span>
              </a>
              <a href="mailto:info@lendiago.com" class="flex items-center justify-between py-3 border-t border-border/60 group">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</span>
                <span class="font-bold text-primary group-hover:text-accent transition-colors">info@lendiago.com</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>`;
  };

  /* About */
  window.LendiagoRenderAbout = function(){
    document.title = 'About Us, Lendiago';
    const timeline = [
      ['2015','Founded','Lendiago was founded with a mission to bridge the gap between ambitious businesses and the capital they need to grow.'],
      ['2018','Reached $50M Funded','Crossed a major milestone, having helped fund over $50 million in business loans across the United States.'],
      ['2020','Expanded Nationwide','Expanded operations to serve businesses in all 50 states, with a focus on underserved markets.'],
      ['2023','Launched AI Matching','Launched our proprietary AI-powered platform to match businesses with the most suitable funding options instantly.'],
      ['2024','$1B+ Funded','Surpassed $1 billion in total funding facilitated for our clients, solidifying our position as a market leader.']
    ];
    const team = [
      ['Daniel Maor','CEO & Founder','A visionary leader with over 15 years of experience in fintech and business funding.','https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'],
      ['Sarah Chen','Chief Operating Officer','Drives operational excellence and ensures a seamless experience for every client.','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'],
      ['Michael Reyes','Head of Lending Partnerships','Curates a robust network of lending partners to deliver the best terms.','https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'],
      ['Emily Patel','Director of Client Success','Champions a client-first approach across the funding lifecycle.','https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600']
    ];
    document.getElementById('page-content').innerHTML = `
<section class="relative py-24 md:py-32 overflow-hidden bg-primary text-primary-foreground">
  <div class="absolute inset-0 opacity-10 pointer-events-none">
    <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" /></svg>
  </div>
  <div class="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-4xl reveal">
    <h1 class="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight">Empowering Business Growth Through Strategic Capital</h1>
    <p class="max-w-3xl mx-auto text-xl text-primary-foreground/80 leading-relaxed">At Lendiago, we believe that every business deserves access to the capital it needs to thrive. We combine cutting-edge technology with deep financial expertise to bridge the gap between ambition and achievement.</p>
  </div>
</section>

<section class="py-24 md:py-32">
  <div class="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
    <div class="space-y-10 reveal-l">
      <div class="space-y-4">
        <div class="flex items-center gap-3 text-primary"><span class="block h-px w-10 bg-accent"></span><span class="text-[11px] font-semibold uppercase tracking-[0.28em]">Our Mission</span></div>
        <h2 class="text-3xl md:text-4xl font-bold font-headline text-primary">Democratizing Access to Capital</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">Our mission is to simplify the complex world of business financing. We strive to provide transparent, accessible, and tailored funding solutions that empower entrepreneurs to scale their operations and contribute to a vibrant economy.</p>
      </div>
      <div class="space-y-4">
        <div class="flex items-center gap-3 text-primary"><span class="block h-px w-10 bg-accent"></span><span class="text-[11px] font-semibold uppercase tracking-[0.28em]">Our Vision</span></div>
        <h2 class="text-3xl md:text-4xl font-bold font-headline text-primary">The Future of Business Finance</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">We envision a future where securing business capital is as seamless as a digital transaction. By leveraging AI and strategic partnerships, we aim to be the premier global platform for business growth and financial empowerment.</p>
      </div>
    </div>
    <div class="reveal-r relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Lendiago office" class="w-full h-full object-cover" referrerpolicy="no-referrer"/>
      <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
    </div>
  </div>
</section>

<section class="py-24 md:py-32 bg-muted/30">
  <div class="container mx-auto px-4 md:px-6">
    <div class="text-center mb-20 reveal">
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Our Journey</h2>
      <p class="text-muted-foreground max-w-2xl mx-auto">A decade of innovation, growth, and unwavering commitment to our clients.</p>
    </div>
    <div class="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      ${timeline.map(([y,t,d],i) => `
        <div class="reveal relative flex items-center justify-between md:justify-normal ${i%2?'md:flex-row-reverse':''} group" data-delay="${i*80}">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 ${i%2?'md:translate-x-1/2':'md:-translate-x-1/2'}"><div class="w-3 h-3 rounded-full bg-primary"></div></div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md transition">
            <div class="flex items-center justify-between space-x-2 mb-1"><div class="font-bold text-primary font-headline text-xl">${t}</div><time class="font-mono text-accent font-bold">${y}</time></div>
            <div class="text-muted-foreground leading-relaxed">${d}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="py-24 md:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <div class="text-center mb-20 reveal">
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Our Leadership Team</h2>
      <p class="text-muted-foreground max-w-2xl mx-auto">Meet the experts dedicated to your business success.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      ${team.map(([n,t,b,img],i)=>`
        <div class="reveal group" data-delay="${i*100}">
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
            <img src="${img}" alt="${n}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerpolicy="no-referrer"/>
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h3 class="text-xl font-bold font-headline text-primary mb-1">${n}</h3>
          <p class="text-accent text-sm font-bold uppercase tracking-widest mb-3">${t}</p>
          <p class="text-sm text-muted-foreground leading-relaxed">${b}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="py-16 bg-muted/50 border-y border-border/50">
  <div class="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12">
    ${[['phone','Phone','516-835-0757','tel:5168350757'],['mail','Email','info@lendiago.com','mailto:info@lendiago.com'],['mappin','Office','Long Island, NY 11023','#']].map(([icon,t,c,h])=>`
      <a href="${h}" class="flex items-center gap-6 group">
        <div class="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">${miniIcon(icon)}</div>
        <div><h4 class="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">${t}</h4><span class="text-lg font-bold text-primary group-hover:text-accent transition-colors">${c}</span></div>
      </a>`).join('')}
  </div>
</section>`;
  };

  /* Resource articles */
  window.LendiagoRenderResource = function(slug){
    const r = D.resources.find(x => x.slug === slug);
    if(!r) return;
    document.title = r.title + ', Lendiago';
    document.getElementById('page-content').innerHTML = `
<article>
  <section class="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
    <img src="${r.image}" alt="${r.title}" class="absolute inset-0 w-full h-full object-cover" referrerpolicy="no-referrer"/>
    <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
    <div class="container mx-auto px-4 md:px-6 relative z-10 pb-16 md:pb-24 max-w-4xl reveal">
      <a href="../resources.html" class="inline-flex items-center text-white/80 hover:text-accent text-sm font-bold mb-4">
        <svg class="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        All Resources
      </a>
      <p class="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-3">${r.date}</p>
      <h1 class="text-4xl md:text-6xl font-bold font-headline text-white leading-tight">${r.title}</h1>
    </div>
  </section>
  <section class="py-20 md:py-28">
    <div class="container mx-auto px-4 md:px-6 max-w-3xl prose-lendiago">
      <p class="text-2xl text-primary leading-relaxed font-headline">${r.description}</p>
      <h2>Why This Matters for Business Owners</h2>
      <p>Securing the right financing is one of the most important decisions you'll make as a business owner. The wrong choice can saddle you with high interest payments, restrictive covenants, or a repayment schedule that strangles your cash flow. The right choice fuels growth without compromising your operations.</p>
      <p>In this article, we'll break down the key considerations, walk through real-world examples, and give you a practical framework for making a confident decision.</p>
      <h2>Key Considerations</h2>
      <ul>
        <li>Your business stage and revenue model</li>
        <li>Time-to-funding and repayment flexibility</li>
        <li>Total cost of capital, not just the headline rate</li>
        <li>Collateral and personal guarantee requirements</li>
        <li>How the financing aligns with your growth plan</li>
      </ul>
      <h2>A Practical Framework</h2>
      <p>Before signing on any dotted line, run through this short checklist. Match the product's structure to the use case: short-term needs (payroll, inventory) work best with revolving credit or a Merchant Cash Advance. Long-term investments (real estate, acquisitions) deserve longer-term, lower-rate products like Term Loans and SBA Loans.</p>
      <h3>1. Define the use of funds precisely</h3>
      <p>"Working capital" is too vague. Are you buying inventory for a seasonal push? Bridging a 60-day receivables gap? Financing a one-time equipment purchase? Each of these calls for a different product.</p>
      <h3>2. Calculate the all-in cost</h3>
      <p>Look beyond APR. Factor in origination fees, prepayment penalties, and the structure of repayments. A 0% intro APR card, used responsibly for 12 months, can be cheaper than a 10% term loan over five years, even with annual fees.</p>
      <h3>3. Stress-test your repayment plan</h3>
      <p>Run your projected repayments against a conservative revenue scenario. If a slow quarter would put you in a cash-flow squeeze, choose a more flexible product (e.g., a revenue-based MCA over a fixed-payment loan).</p>
      <h2>What's Next</h2>
      <p>Once you've narrowed your options, talk to a funding specialist who can shop your application across multiple lenders. The right partner will save you both time and money, and will be honest when a particular product isn't the right fit.</p>
      <p class="disclaimer">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Please consult with a qualified professional regarding your specific situation. Lendiago operates as a financial marketplace and strategic brokerage, connecting business owners with a curated network of premier lending partners.</p>
    </div>
  </section>
  <section class="py-20 bg-muted/30">
    <div class="container mx-auto px-4 md:px-6 max-w-3xl text-center reveal">
      <h2 class="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Ready to Apply What You've Learned?</h2>
      <p class="text-lg text-muted-foreground mb-8">Get matched with the right funding option in minutes, with no impact on your credit.</p>
      <a href="https://form.jotform.com/261271610738051" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent rounded-full px-10 py-4 text-lg font-bold transition">Apply Now</a>
    </div>
  </section>
</article>`;
  };

  /* Legal pages */
  window.LendiagoRenderLegal = function(kind){
    const titles = {
      'privacy-policy':'Privacy Policy',
      'terms-of-service':'Terms of Service',
      'licenses':'Licenses & Disclosures'
    };
    const t = titles[kind] || 'Legal';
    document.title = t + ', Lendiago';
    const sections = {
      'privacy-policy':[
        ['Ownership','This website is owned and operated by Lendiago ("Lendiago," "we," "our," "us"). We respect the privacy of visitors to our websites and the privacy of our customers. This Privacy Policy describes our information-handling practices when you access our services, which include content located on this website or any other websites, pages, features, or content we own or operate (collectively, the "Sites") and any related services (collectively, the "Services").'],
        ['1. Acceptance of This Privacy Policy','Lendiago is a financial marketplace and strategic brokerage that helps small and medium-sized businesses access and manage capital. This Privacy Policy applies to everyone who uses our Sites. By accessing, browsing, or using our Sites, you agree to this Privacy Policy. If you do not agree with any aspect of this Privacy Policy, you should discontinue use of our Services immediately.'],
        ['2. Information We Collect','We collect several types of information about you and your business when you access our Sites. This includes information that identifies, relates to, describes, references, or could reasonably be linked, directly or indirectly, with a particular consumer, household, or device ("Personal Information"). Personal Information does not include publicly available information from government records or de-identified or aggregated consumer information. To establish an account, submit an application, or use our Services, you will be asked to provide information that is either required by law (e.g., to verify your identity), necessary to provide the requested services (e.g., bank statements), or relevant to the funding process. If you choose not to share certain information, we may not be able to serve you or our Services may be degraded.'],
        ['2.1 Information We Collect Directly From You','Personal Identification Information: full name, date of birth, signature, phone number, home address, IP address, social security number, and email. Formal Identification Information: government-issued identity documents such as Passport, Driver\u2019s License, State ID, Tax ID number, and any other information required to comply with our legal obligations under financial, consumer protection, and commercial lending laws. Institutional Information: Employer Identification Number, proof of legal formation (e.g., Articles of Incorporation), and personal identification information for material beneficial owners. Financial Information: bank account information, tax return information, federal and state tax IDs, profit and loss statements, income statements, credit score, business invoices, and wire instructions. Transaction Information: information about transactions you make on our Services, such as the name of the recipient, your name, the amount, and timestamp. Employment Information: office location, job title, and description of role. Correspondence: survey responses and information provided to our support or research teams. Business Information: type of business, list of officers, members, or managers, articles of incorporation, certificates of good standing, and ownership structure.'],
        ['2.2 Information Collected From Third Parties','From time to time, we may obtain information about you from third-party sources as required or permitted by applicable law. These sources may include public databases and ID verification partners (to verify your identity), credit bureaus (to better match you with appropriate lenders, ensure your identity, and prevent fraud), and joint marketing partners or resellers (so that we can better understand which of our Services may be of interest to you).'],
        ['2.3 Data Anonymization and Aggregation','We may use data we have anonymized and aggregated for any business purpose. Anonymization removes or modifies personal information so it cannot be associated with a specific individual. Except for this section, none of the other provisions of this Privacy Policy applies to anonymized or aggregated customer data. We may use such data to better understand customer needs and behaviors, improve our products and services, conduct business intelligence and marketing, and detect security threats.'],
        ['3. How Information Is Collected','We obtain information about you during the application process and through your interactions with our Sites. We collect Personal Information directly from you (forms you complete, products and services you use), indirectly from you (your actions on our Sites), and from third parties (e.g., services you connect as part of using our Services). During the application process, we may require your name, address, phone number, email address, business name, business address, federal and state tax ID, type of business, business location, average monthly sales, state of incorporation, and other operational details. We use email for both transactional purposes (application status, application confirmation) and promotional purposes (newsletters, event notifications, partner offers). We may also contact you by telephone or text message at numbers you provide in connection with our Services.'],
        ['4. Opt-In Consent for Communications','By providing your phone number during the application or inquiry process, you expressly consent to receive communications from Lendiago and our lending partners via phone calls, text messages (SMS/MMS), and emails. These communications may include informational, transactional, or promotional messages related to our Services. Standard message and data rates may apply. You may opt out of promotional messages at any time by following the unsubscribe instructions in the messages or by contacting us using the information at the bottom of this page. You may still receive essential service-related communications.'],
        ['5. How Your Information Is Used','We use your information to provide our Services (e.g., when you seek business financing from one of our funding partners), to send service communications (administrative or account-related updates, security notices), to provide customer service (responding to questions, resolving disputes, troubleshooting), for research and development (understanding how you use our Services and improving them), and for quality control and staff training. You may not opt out of receiving essential service communications sent for legal or security purposes.'],
        ['6. Disclosure of Information to Third Parties','We may disclose your Personal Information as required by law, to provide the Services, and for legitimate business purposes. We do not sell Personal Information. We may disclose information you provide if required to do so by law, at the request of a third party, or if we believe in good faith that disclosure is reasonable to comply with the law or to protect or defend the rights or property of Lendiago or a third party. By submitting a request for a business funding product or service on the Sites, you consent to the disclosure of your information to lenders, funders, and/or brokers within our network. We will not perform a credit check without your authorization. Lenders, funders, brokers, and other service providers with whom you are matched may retain your information even if you do not enter into an agreement with them; please contact each such party directly regarding their privacy practices. We may also disclose information to our professional advisors (banking, legal, compliance, insurance, accounting) and to other service providers who help operate our business.'],
        ['7. Updating, Accessing, Retaining, and Deleting Your Information','You may update or delete your information at any time by contacting us. If you want to stop using your account, you may deactivate it; once deactivated, your information will not be sent to any further lenders, funders, brokers, or other third parties, but it will not be deleted, and you may restore the account in its entirety later. Certain federal and state regulations require us to retain your information for specified periods. Due to these regulations, we may be unable to completely delete your information from our database until the applicable retention periods have expired.'],
        ['8. Choice / Opt-Out of Marketing','You may stop receiving our newsletter or marketing emails by following the unsubscribe instructions in those emails or by contacting us. You can choose not to provide us with certain information, but this will likely result in your inability to use certain features or to obtain the Services you are seeking. If, after signing up for our Services, you decide you no longer wish to receive contact from lenders, funders, brokers, or other third parties to which your information has been referred, you may cancel your account. Cancellation does not guarantee that third parties already in possession of your information will cease contacting you; please reach out to each such party directly.'],
        ['9. Security','We use industry-standard administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security. You are responsible for safeguarding your account credentials and for notifying us promptly of any unauthorized use.'],
        ['10. Changes to This Privacy Policy','We reserve the right to update this Privacy Policy at any time to reflect changes to our information practices. We encourage you to periodically review this page for the latest information. When we make changes, we will revise the effective date at the top of this Privacy Policy.'],
        ['11. Contact Information','If you have questions or concerns about this Privacy Policy, please contact us using the information at the bottom of this page.']
      ],
      'terms-of-service':[
        ['Introduction','This website (including all sub-sites) is operated by Lendiago or a subsidiary or affiliate thereof (collectively, "Lendiago," "we," or "us"). By accessing a Lendiago website, mobile application, interface, or platform (collectively, "Site" or "Sites") that links to these Terms of Service (the "Terms of Use" or "Agreement"), you agree to abide by this Agreement and by our Privacy Policy (which is hereby incorporated by reference), regardless of the device used (e.g., personal computer, mobile device, or any other technology or software) for access. Please read these Terms of Use carefully to understand each provision. This constitutes a legal agreement between you and Lendiago for the use of the Services and shall apply to all users of the Sites. If you do not agree to these Terms of Use, then you are expressly prohibited from using the Sites, Services, and/or content.'],
        ['1. Use of Sites','You may view and use the Sites and any of the information or Services only in accordance with these Terms of Use. You agree to use the Sites and Services only for lawful purposes. The Sites are intended for individual business owners and legal entities organized and authorized to do business in the United States. To access certain features, you may need to register for an account and provide us with documentation or information. By using the Sites, you represent that you are 18 years old or older and that all information you submit is true, accurate, and complete.'],
        ['2. Prohibitions on Use','You agree that you will not violate any law, contract, intellectual property right, or other third-party right. You will not: provide false information; impersonate any person; use the Site in any manner that could interfere with, disrupt, or negatively affect other users; reverse engineer any aspect of the Site; transmit any malicious code; or post any offensive, defamatory, or illegal content.'],
        ['3. Account Security','You are responsible for any misuse of your account. You must take all reasonable steps to protect your account from unauthorized access, including protecting your password and not sharing it with others. We reserve the right to terminate your access at any time for any reason.'],
        ['4. Marketplace Role','Lendiago operates as a financial marketplace and strategic brokerage that connects small and medium-sized businesses with a curated network of lending partners. Lendiago is not a direct lender and does not provide loans or funding directly. All final funding decisions, including rates and approval, are determined by our partner lenders. Lendiago does not guarantee loan approval or any specific terms, rates, or outcomes.'],
        ['5. Ownership and Intellectual Property','All information, materials, images, software, and other content provided by Lendiago on any Site ("Site Content") is the sole property of Lendiago or our licensors. The Sites and Site Content are protected by copyright, trademark, and other intellectual property laws. The Lendiago name, logo, and all related names are trademarks of Lendiago. You may not copy, imitate, or use them, in whole or in part, without our prior written permission.'],
        ['6. User Content','Any information or content you provide to us ("User Content") must comply with these Terms. By submitting User Content, you grant Lendiago a non-exclusive, perpetual, royalty-free, and transferable license to use, reproduce, distribute, and display such content in connection with providing the Services. You are solely responsible for any User Content you submit and represent that it is accurate and complete.'],
        ['7. Information Disclosure and Authorization','By using the Services, you authorize Lendiago to share your information with lenders, funders, and brokers within our network as necessary to facilitate funding opportunities. You authorize us to obtain credit reports and verification information as needed. Lendiago does not guarantee loan approval or specific terms from any partner lender.'],
        ['8. Third-Party Content & Affiliate Marketing','We may link to other websites or provide information about third-party products. We do not control or endorse, and make no representations or warranties regarding, any third-party content. Your use of such content is at your own risk. We do not provide your information to affiliates or third parties for their own marketing purposes without your explicit consent.'],
        ['9. Telephone Communications & Opt-In','By using the Sites and providing your phone number, you expressly consent to receive servicing, collection, and marketing calls and messages, including auto-dialed and pre-recorded messages, and SMS messages (including text messages) from us and our partners at any telephone numbers you provide. You understand that this consent is not a condition of any purchase. You may opt out of marketing communications by following the unsubscribe instructions in any message or by contacting us using the information at the bottom of this page. Standard message and data rates may apply.'],
        ['10. Disclaimers','The Sites and Services are made available "as is," "at your own risk," and "as available," without warranty of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, accuracy, and non-infringement. Lendiago does not warrant that the Services will meet your specific requirements, that the Services will be uninterrupted, timely, secure, or error-free, or that the results obtained from using the Services will be accurate or reliable.'],
        ['11. Limitation of Liability','To the fullest extent permitted by law, Lendiago shall not be liable for any damages whatsoever (including any direct, special, indirect, incidental, or consequential damages, or any loss of profits, revenues, data, or goodwill) arising out of or relating to these Terms of Use or your access to or use of any Site or the Services.'],
        ['12. Indemnification','You agree to indemnify, defend, and hold harmless Lendiago, its affiliates, officers, directors, employees, and agents from all claims, actions, liabilities, damages, costs, and expenses (including attorney\u2019s fees) arising from your use of the Sites or Services, your breach of these Terms of Use, or your violation of any third-party right.'],
        ['13. Arbitration and Class Action Waiver','Please read this section carefully. You agree to resolve any dispute with Lendiago through private, binding arbitration. You waive your right to a jury trial and to participate in any class action lawsuit against Lendiago. All disputes shall be resolved on an individual basis only.'],
        ['14. Modification of Terms','Lendiago reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting the updated Terms on our website. Your continued use of the Services following the posting of revised Terms constitutes your acceptance of those changes.'],
        ['15. Termination','Lendiago may terminate or suspend your access to the Services at any time, for any reason, without prior notice or liability. Upon termination, your right to use the Services will immediately cease.'],
        ['16. Governing Law and Jurisdiction','The use of this Site shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict-of-law principles. Any suit or action arising from or relating to these Terms or the Services shall be instituted exclusively in the state or federal courts located in New York, New York.'],
        ['17. Miscellaneous','These Terms of Use constitute the entire agreement between you and Lendiago regarding your use of the Sites and Services. If any part of these Terms is found to be invalid or unenforceable, the remaining parts will continue in full force and effect. These Terms may not be assigned by you but may be assigned by Lendiago without restriction.'],
        ['18. Contact Information','If you have any questions or concerns about these Terms of Service, please contact us using the information at the bottom of this page.']
      ],
      'licenses':[
        ['Marketplace Disclosure','Lendiago operates as a financial marketplace and strategic brokerage, connecting business owners with a curated network of premier lending partners. We are not a direct lender. All final funding decisions, including rates and approval, are determined by our partner lenders.'],
        ['State Licensing','Where required, Lendiago and its principals maintain appropriate state licenses or exemptions for brokerage activities. A current list of state registrations is available upon request to compliance@lendiago.com.'],
        ['Lender Disclosures','Each lending partner provides its own loan disclosures, including APR, finance charges, and total payment information. Please review all loan documents carefully before signing.'],
        ['NMLS Notice','Where applicable, individual mortgage loan originators acting through Lendiago partners are licensed under the Nationwide Multistate Licensing System (NMLS). NMLS registration information is available at nmlsconsumeraccess.org.'],
        ['Equal Credit Opportunity','Our lending partners are committed to the principles of the Equal Credit Opportunity Act and applicable state laws. Credit decisions are based on objective criteria.'],
        ['Contact','For questions about licensing or to verify a registration, please email compliance@lendiago.com or call 516-835-0757.']
      ]
    }[kind] || [];
    const fmt = (d)=> d.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric', timeZone:'America/New_York' });
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Legal', title:t, subtitle:'Effective date: <span id="lendiago-effective-date">\u2014</span>'}) + `
<section class="py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6 max-w-3xl prose-lendiago">
    ${sections.map(([h,p],i)=>`<div class="reveal" data-delay="${i*60}"><h2>${h}</h2><p>${p}</p></div>`).join('')}
    <p class="disclaimer">This document is provided for informational purposes and does not constitute legal advice. For specific questions, please contact your legal advisor or email us at info@lendiago.com.</p>
  </div>
</section>`;
    (async function(){
      const el = document.getElementById('lendiago-effective-date');
      if(!el) return;
      const sources = [
        { url:'https://timeapi.io/api/time/current/zone?timeZone=America/New_York', pick:(j)=> j && j.dateTime },
        { url:'https://worldtimeapi.org/api/timezone/America/New_York', pick:(j)=> j && j.datetime }
      ];
      let iso = null;
      for(const s of sources){
        try {
          const ctrl = new AbortController();
          const to = setTimeout(()=>ctrl.abort(), 3500);
          const r = await fetch(s.url, { signal: ctrl.signal, cache: 'no-store' });
          clearTimeout(to);
          if(!r.ok) continue;
          const j = await r.json();
          const v = s.pick(j);
          if(v){ iso = v; break; }
        } catch(_){}
      }
      const d = iso ? new Date(iso) : new Date();
      el.textContent = fmt(d);
    })();
  };

  /* Helpers */
  function field(label, name, ph, type='text', req=false){
    return `<div class="space-y-3">
      <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">${label}</label>
      <input name="${name}" type="${type}" placeholder="${ph}" ${req?'required':''} class="w-full h-12 border-0 border-b border-border/60 bg-transparent focus:border-accent focus:outline-none text-primary text-base placeholder:text-muted-foreground/60"/>
    </div>`;
  }
  function cField(label, name, ph, type='text', req=false){
    return `<div class="space-y-2">
      <label class="text-sm font-bold text-primary">${label}</label>
      <input name="${name}" type="${type}" placeholder="${ph}" ${req?'required':''} class="w-full rounded-xl border border-border/60 bg-background px-4 py-3 focus:border-accent focus:outline-none text-primary placeholder:text-muted-foreground/60"/>
    </div>`;
  }
  function contactCard(icon, title, value, href){
    return `<a href="${href}" class="flex items-center gap-5 p-6 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-premium transition group">
      <div class="h-12 w-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-primary flex items-center justify-center transition-colors">${miniIcon(icon)}</div>
      <div><p class="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-0.5">${title}</p><p class="text-base font-bold text-primary group-hover:text-accent transition-colors">${value}</p></div>
    </a>`;
  }
  function miniIcon(name){
    const paths = {
      phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
      mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
      mappin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
    };
    return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name]||''}</svg>`;
  }
  function genericCTA(headline){
    return `
<section class="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <svg class="absolute -top-20 -left-20 w-[500px] h-[500px] text-accent/15" viewBox="0 0 200 200" fill="currentColor"><circle cx="60" cy="60" r="40"/></svg>
    <svg class="absolute -bottom-32 -right-20 w-[600px] h-[600px] text-accent/10" viewBox="0 0 200 200" fill="currentColor"><path d="M150 20 L180 80 L120 80 Z"/><rect x="60" y="100" width="80" height="80" rx="12"/></svg>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative">
    <div class="grid md:grid-cols-12 gap-12 items-center reveal">
      <div class="md:col-span-7">
        <div class="flex items-center gap-3 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Next step</span>
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold font-headline leading-[1.05] tracking-tight mb-6">${headline}</h2>
        <p class="text-lg text-primary-foreground/75 leading-relaxed max-w-xl">Apply once. We'll match you to the best option in minutes, with no impact to your credit.</p>
      </div>
      <div class="md:col-span-5 flex flex-col gap-3 md:items-end">
        <a href="https://form.jotform.com/261271610738051" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto">Apply Now
          <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="contact.html" class="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto transition-colors">Talk to Us</a>
      </div>
    </div>
  </div>
</section>`;
  }
})();
