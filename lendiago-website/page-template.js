/* Renders product detail and industry detail pages from window.LENDIAGO_DATA. */
(function(){
  const D = window.LENDIAGO_DATA;
  if(!D) return;

  function depthPrefix(){
    return location.pathname.match(/\/industries\//) ? '../' : '';
  }

  function productHero(p){
    return `
<!-- HERO: full-bleed photography matching industry hero pattern -->
<section class="relative w-full overflow-hidden">
  <div class="absolute inset-0">
    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" referrerpolicy="no-referrer"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
  </div>

  <div class="relative container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-20 md:pb-32">
    <nav class="flex items-center gap-2 text-xs text-white/70 mb-12 md:mb-20 reveal">
      <a href="index.html" class="hover:text-accent transition-colors">Home</a>
      <span class="opacity-60">/</span>
      <a href="financing-solutions.html" class="hover:text-accent transition-colors">Financing</a>
      <span class="opacity-60">/</span>
      <span class="text-white">${p.title}</span>
    </nav>

    <div class="max-w-3xl text-primary-foreground reveal-l">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">${p.badge || 'Funding Product'}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.02] tracking-tight mb-6" style="text-shadow:0 2px 16px rgba(0,0,0,.35)">
        ${p.title}<span class="text-accent">.</span>
      </h1>
      <p class="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10" style="text-shadow:0 1px 8px rgba(0,0,0,.35)">${p.description}</p>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-white rounded-full px-9 py-4 text-base font-bold transition-all">
          Pre-qualify
          <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#details" class="inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-colors group">
          See the details
          <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- QUICK SPECS: hairline-divided strip on light bg, matching home stats -->
<section class="bg-background border-b border-border/60">
  <div class="container mx-auto px-4 md:px-6 py-10 md:py-14">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:divide-x md:divide-border/60">
      ${(() => {
        const specs = (p.summary || []).filter(([k]) => !/time to funding/i.test(k)).slice(0,4);
        return specs.map(([label,val],i) => `
          <div class="reveal ${i>0 ? 'md:pl-8' : ''}" data-delay="${i*60}">
            <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground mb-2">${label}</p>
            <p class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight">${val}</p>
          </div>`).join('');
      })()}
    </div>
  </div>
</section>`;
  }

  // No longer used as a separate row (specs are inside hero), but kept for back-compat
  function summaryRow(){ return ''; }

  function productMain(p){
    const useCases = (p.useCases || p.longFeatures.slice(0,5)).slice(0,5);
    return `
<!-- OVERVIEW: editorial 2-column intro matching home why-section pattern -->
<!-- INTRO + BENEFITS: one editorial section, no repeated header pattern -->
<section id="details" class="bg-muted/30 border-y border-border/60 py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Editorial lede: centered, single column, large supporting copy -->
    <div class="max-w-4xl mx-auto text-center mb-20 md:mb-28">
      <div class="flex items-center justify-center gap-4 mb-8 reveal">
        <span class="block h-px w-10 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">What is a ${p.title.toLowerCase()}</span>
        <span class="block h-px w-10 bg-accent"></span>
      </div>
      <p class="reveal text-2xl md:text-[2rem] font-headline text-primary leading-[1.25] tracking-tight">
        ${p.longDescription}
      </p>
    </div>

    <!-- Benefits: numbered editorial grid, no eyebrow header above -->
    <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-8 md:mb-10">
      <div class="md:col-span-7 reveal">
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.05] tracking-tight">
          What you get<span class="text-accent">.</span>
        </h2>
      </div>
      <div class="md:col-span-5 reveal flex md:justify-end" data-delay="120">
        <p class="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
          Capital structured around how your business runs, paired with a specialist who knows your space.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-14 border-t border-border/60 pt-8 md:pt-10">
      ${p.longFeatures.map(([title,desc],i) => `
        <div class="reveal" data-delay="${i*60}">
          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-2xl font-headline font-bold text-accent leading-none">${String(i+1).padStart(2,'0')}</span>
            <span class="block h-px flex-1 bg-border"></span>
          </div>
          <h3 class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight mb-4">${title}</h3>
          <p class="text-[15px] text-muted-foreground leading-relaxed">${desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- USE CASES: dark navy band, image left + clean numbered list right -->
<section class="bg-background py-24 md:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
      <div class="md:col-span-5 reveal-l">
        <div class="relative aspect-[4/5] overflow-hidden">
          <img src="${p.image}" alt="${p.title} use cases" class="absolute inset-0 w-full h-full object-cover" referrerpolicy="no-referrer"/>
        </div>
      </div>

      <div class="md:col-span-7 reveal-r md:pt-8">
        <div class="flex items-center gap-4 mb-6">
          <span class="block h-px w-12 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Use cases</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.05] tracking-tight mb-10 md:mb-12">
          Built for the moments<br/>that move the business.
        </h2>

        <div class="space-y-0">
          ${useCases.map(([title,desc],i) => `
            <div class="py-6 ${i < useCases.length-1 ? 'border-b border-border/60' : ''}">
              <h4 class="text-lg md:text-xl font-bold font-headline text-primary leading-tight tracking-tight mb-2">${title}</h4>
              <p class="text-[15px] text-muted-foreground leading-relaxed">${desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>
`;
  }

  function productCTA(p){
    return `
<section class="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
  <!-- brand-aware geometric shapes (echoing the homepage hero green blobs) -->
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <svg class="absolute -top-20 -left-20 w-[500px] h-[500px] text-accent/15" viewBox="0 0 200 200" fill="currentColor">
      <circle cx="60" cy="60" r="40"/>
    </svg>
    <svg class="absolute -bottom-32 -right-20 w-[600px] h-[600px] text-accent/10" viewBox="0 0 200 200" fill="currentColor">
      <path d="M150 20 L180 80 L120 80 Z"/>
      <rect x="60" y="100" width="80" height="80" rx="12"/>
    </svg>
  </div>

  <div class="container mx-auto px-4 md:px-6 relative">
    <div class="grid md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-7">
        <div class="flex items-center gap-3 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Next step</span>
        </div>
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.02] tracking-tight mb-6">
          Get matched in <span class="text-accent italic">minutes.</span>
        </h2>
        <p class="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-xl">Applying for ${p.title} is fast, secure, and won't impact your credit score. We do the shopping. You pick the option that fits.</p>
      </div>
      <div class="md:col-span-5 flex flex-col gap-3 md:items-end">
        <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 rounded-full px-10 py-5 text-lg font-bold w-full md:w-auto">
          Apply Now
          <svg class="ml-3 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="contact.html" class="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto transition-colors">
          Speak with an Advisor
        </a>
      </div>
    </div>
  </div>
</section>`;
  }

  /* Industry detail — editorial direction matching rest of site */

  function industryHero(ind){
    const rangeRaw = (ind.expectations[0] && ind.expectations[0][1]) || '';
    const speedRaw = (ind.expectations[1] && ind.expectations[1][1]) || '24 hour decision';
    const useRaw   = (ind.expectations[2] && ind.expectations[2][1]) || '';
    const useTags  = useRaw.split(/\s*,\s*/).filter(Boolean);
    return `
<section class="relative w-full bg-background">
  <div class="pt-10 md:pt-14"></div>

  <!-- Editorial split: text left, image right (no overlay, no dark gradients) -->
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-stretch">

      <!-- Left: copy column -->
      <div class="md:col-span-6 lg:col-span-7 flex flex-col justify-center reveal py-4 md:py-12 lg:py-16">
        <p class="text-[11px] font-semibold uppercase tracking-[0.36em] text-accent mb-8">${ind.title}</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary leading-[0.98] font-headline mb-7">
          ${ind.headline}
        </h1>
        <p class="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl mb-10">
          ${ind.description}
        </p>
        <div class="flex flex-col sm:flex-row sm:items-center gap-5">
          <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 text-base shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] rounded-full">
            Pre-qualify
          </a>
          <a href="../financing-solutions.html" class="inline-flex items-center text-base font-bold text-primary hover:text-accent transition-colors group">
            See all solutions
            <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Right: clean image, no background decoration -->
      <div class="md:col-span-6 lg:col-span-5 relative reveal" data-delay="120">
        <div class="relative h-full min-h-[360px] md:min-h-[460px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
          <img src="${ind.image}" alt="${ind.title}" class="absolute inset-0 w-full h-full object-cover" referrerpolicy="no-referrer"/>
        </div>
      </div>

    </div>
  </div>

  <!-- Fact strip: hairline-bordered band, not a card. Sits inline below the hero. -->
  <div class="container mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-4 md:pb-8">
    <div class="border-t border-border/70 pt-8 md:pt-10">
      <div class="grid md:grid-cols-12 gap-x-10 gap-y-8 items-center">
        <div class="md:col-span-3 reveal">
          <p class="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground mb-3">Typical funding</p>
          <p class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight">${rangeRaw}</p>
        </div>
        <div class="md:col-span-3 reveal md:border-l md:border-border md:pl-10" data-delay="60">
          <p class="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground mb-3">Decision in</p>
          <p class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight">${speedRaw}</p>
        </div>
        <div class="md:col-span-4 reveal md:border-l md:border-border md:pl-10" data-delay="120">
          <p class="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground mb-3">Used most for</p>
          <p class="text-xl md:text-2xl font-bold font-headline text-primary leading-tight tracking-tight">${useTags.join(', ')}</p>
        </div>
        <div class="md:col-span-2 reveal flex md:justify-end" data-delay="180">
          <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-accent pb-1 hover:gap-3 transition-all text-sm whitespace-nowrap">
            Pre-qualify
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  function industryHowWeHelp(ind){
    const lower = ind.title.toLowerCase();
    const stickers = {
      'construction': 'A dedicated advisor who understands bonded jobs, draws, and seasonal cash flow.',
      'food-beverage': 'A specialist who knows seasonal swings, vendor terms, and daily card sales.',
      'retail': 'An advisor who tracks inventory turns, seasonality, and merchant volume.',
      'transportation': 'A specialist fluent in fuel, fleets, and freight factoring.',
      'healthcare': 'An advisor who navigates insurance receivables and equipment financing.',
      'real-estate': 'A specialist in bridge loans, hard money, and commercial property timing.',
      'other': 'A dedicated advisor who learns your business, end-to-end.'
    };
    const sticker = stickers[ind.slug] || `A dedicated advisor for ${lower}, end-to-end.`;
    return `
<section class="pt-20 md:pt-28 pb-16 md:pb-24 bg-background border-t border-border/60">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
      <!-- Left: image + sticker stat -->
      <div class="md:col-span-5 reveal">
        <div class="relative">
          <div aria-hidden="true" class="absolute -inset-4 -rotate-2 bg-accent/15 rounded-[2rem]"></div>
          <div class="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-border/60">
            <img src="${ind.image2 || ind.image}" alt="${ind.title}" class="w-full h-full object-cover" referrerpolicy="no-referrer"/>
          </div>
          <div class="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl border border-border/60 shadow-premium px-6 py-5 max-w-[220px]">
            <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent mb-2">Specialist team</p>
            <p class="text-sm font-bold text-primary leading-snug">${sticker}</p>
          </div>
        </div>
      </div>

      <!-- Right: heading + intro + points -->
      <div class="md:col-span-7 reveal" data-delay="100">
        <div class="flex items-center gap-4 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">How we help</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.02] tracking-tight mb-6">Funding tuned for ${lower}.</h2>
        <p class="text-base md:text-lg text-foreground/80 leading-relaxed mb-10 md:mb-12 max-w-2xl">${ind.introduction}</p>

        <div class="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          ${ind.points.map(([t,d],i) => `
            <article class="reveal pl-5 border-l border-border/70 hover:border-accent transition-colors" data-delay="${i*60}">
              <h3 class="font-bold font-headline text-primary text-lg md:text-xl leading-tight tracking-tight mb-2">${t}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">${d}</p>
            </article>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  function industryWhyChoose(ind){
    const lower = ind.title.toLowerCase();
    const reasons = [
      ['No collateral required', 'Approvals based on revenue and cash flow, not assets you can\'t risk.'],
      ['Soft credit check', 'Pre-qualify in minutes. No impact to your personal or business credit.'],
      ['Built around your cycles', 'Repayment structured to your industry\'s cash flow, not a generic schedule.'],
      ['One advisor, start to finish', 'A specialist who knows your industry handles your file end to end.']
    ];
    return `
<section class="bg-muted/30 border-y border-border/60 py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
      <div class="md:col-span-5 reveal">
        <div class="flex items-center gap-4 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Why us</span>
        </div>
        <h3 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.02] tracking-tight">Why ${lower} businesses choose us.</h3>
      </div>
      <div class="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-10">
        ${reasons.map((r,i) => `
          <div class="reveal" data-delay="${i*60}">
            <h4 class="text-lg md:text-xl font-bold font-headline text-primary mb-3 leading-tight">${r[0]}</h4>
            <p class="text-muted-foreground leading-relaxed">${r[1]}</p>
          </div>`).join('')}
      </div>
    </div>
  </div>
</section>`;
  }

  function industryBody(ind){
    const recProducts = D.products.slice(0,4);
    const lower = ind.title.toLowerCase();
    const story = (ind.stories && ind.stories[0]) || null; // [title, need, how, result]

    function productDuoIcon(icon){
      const ICONS = {
        award: '<svg viewBox="0 0 48 48" class="h-12 w-12"><circle cx="24" cy="20" r="11" fill="hsl(var(--accent))" opacity="0.25"/><circle cx="24" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M16 28l-3 12 11-5 11 5-3-12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        zap: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="10" y="6" width="28" height="36" rx="3" fill="hsl(var(--accent))" opacity="0.25"/><path d="M27 8l-12 18h8l-3 14 12-18h-8l3-14z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>',
        landmark: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="6" y="36" width="36" height="6" fill="hsl(var(--accent))" opacity="0.25"/><path d="M6 18l18-10 18 10v4H6z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M11 22v14M19 22v14M29 22v14M37 22v14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
        wrench: '<svg viewBox="0 0 48 48" class="h-12 w-12"><circle cx="14" cy="34" r="10" fill="hsl(var(--accent))" opacity="0.25"/><path d="M30 6a10 10 0 0 1 10 14l-4-4-6 6 4 4a10 10 0 0 1-14-10l-14 14a4 4 0 0 0 6 6l14-14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        layers: '<svg viewBox="0 0 48 48" class="h-12 w-12"><path d="M24 4l18 10-18 10L6 14z" fill="hsl(var(--accent))" opacity="0.25"/><path d="M24 4l18 10-18 10L6 14z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M6 24l18 10 18-10M6 34l18 10 18-10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>',
        creditcard: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="4" y="10" width="40" height="28" rx="3" fill="hsl(var(--accent))" opacity="0.25"/><rect x="4" y="10" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M4 18h40" stroke="currentColor" stroke-width="2.5"/><path d="M10 30h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
        building2: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="8" y="6" width="20" height="36" fill="hsl(var(--accent))" opacity="0.25"/><rect x="8" y="6" width="20" height="36" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="28" y="18" width="12" height="24" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M14 14h2M20 14h2M14 22h2M20 22h2M14 30h2M20 30h2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
        trendingup: '<svg viewBox="0 0 48 48" class="h-12 w-12"><path d="M6 36l12-12 8 8 16-16" fill="none" stroke="hsl(var(--accent))" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/><path d="M6 36l12-12 8 8 16-16M30 16h12v12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        briefcase: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="4" y="14" width="40" height="28" rx="3" fill="hsl(var(--accent))" opacity="0.25"/><rect x="4" y="14" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M18 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
        banknote: '<svg viewBox="0 0 48 48" class="h-12 w-12"><rect x="4" y="12" width="40" height="24" rx="2" fill="hsl(var(--accent))" opacity="0.25"/><rect x="4" y="12" width="40" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>'
      };
      return ICONS[icon] || ICONS.briefcase;
    }
    return `
<!-- Recommended products: richer cards with icons -->
<section class="py-20 md:py-28 bg-background">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-16 reveal">
      <div>
        <div class="flex items-center gap-4 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Built for ${ind.title}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.02] tracking-tight">Products that fit.</h2>
      </div>
      <a href="../financing-solutions.html" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group self-start md:self-auto">
        See all financing solutions
        <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      ${recProducts.map((p,i)=>`
        <a href="../${p.slug}.html" class="reveal group bg-white border border-border/60 rounded-2xl p-7 md:p-8 flex flex-col hover:border-primary hover:shadow-premium transition-all" data-delay="${i*60}">
          <div class="flex items-start justify-between mb-8">
            <div class="duo-flip text-primary">${productDuoIcon(p.icon)}</div>
            <span class="text-[10px] font-semibold tracking-[0.28em] text-muted-foreground/60">${String(i+1).padStart(2,'0')}</span>
          </div>
          <h3 class="font-bold font-headline text-lg md:text-xl text-primary leading-tight tracking-tight mb-3 group-hover:text-accent transition-colors">${p.title}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">${p.description||''}</p>
          <span class="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
            Learn more
            <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </a>`).join('')}
    </div>
  </div>
</section>`;
  }

  /* Credit report instructions, for products that need a credit report */
  const NEEDS_CREDIT_REPORT = ['credit-stacking','business-line-of-credit','personal-term-loans','credit-repair'];

  function creditReportSection(p){
    return `
<section class="py-24 md:py-32 bg-muted/30 border-y border-border/50">
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="max-w-2xl mb-16 md:mb-20 reveal">
        <div class="flex items-center gap-4 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Required for ${p.title}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.05] tracking-tight mb-6">How to send us your credit report.</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">A tri-bureau credit report is required to match you with the right offer. The whole process takes under five minutes.</p>
      </div>

      <!-- Steps as a clean vertical list -->
      <ol class="space-y-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden mb-10">
        <li class="bg-white p-6 md:p-8 flex items-start gap-6 md:gap-8 reveal">
          <span class="flex-shrink-0 text-3xl md:text-4xl font-bold font-headline text-accent leading-none w-8">1</span>
          <div class="flex-1 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div class="md:col-span-5">
              <h3 class="text-lg md:text-xl font-bold font-headline text-primary leading-tight">Sign up at CreditHeroScore</h3>
            </div>
            <div class="md:col-span-7">
              <p class="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">Create an account to access your full report from all three bureaus. Introductory access is one dollar for the first seven days, then a standard monthly fee, cancel anytime once you've downloaded.</p>
              <a href="https://www.creditheroscore.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group">
                Open creditheroscore.com
                <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </li>
        <li class="bg-white p-6 md:p-8 flex items-start gap-6 md:gap-8 reveal" data-delay="80">
          <span class="flex-shrink-0 text-3xl md:text-4xl font-bold font-headline text-accent leading-none w-8">2</span>
          <div class="flex-1 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div class="md:col-span-5">
              <h3 class="text-lg md:text-xl font-bold font-headline text-primary leading-tight">Open the Credit Report tab</h3>
            </div>
            <div class="md:col-span-7">
              <p class="text-sm md:text-base text-muted-foreground leading-relaxed">From your dashboard, click <strong class="text-primary">Credit Report</strong> in the top navigation, then make sure <strong class="text-primary">All Bureaus</strong> is selected.</p>
            </div>
          </div>
        </li>
        <li class="bg-white p-6 md:p-8 flex items-start gap-6 md:gap-8 reveal" data-delay="160">
          <span class="flex-shrink-0 text-3xl md:text-4xl font-bold font-headline text-accent leading-none w-8">3</span>
          <div class="flex-1 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div class="md:col-span-5">
              <h3 class="text-lg md:text-xl font-bold font-headline text-primary leading-tight">Click "Expand All" on the Accounts section</h3>
            </div>
            <div class="md:col-span-7">
              <p class="text-sm md:text-base text-muted-foreground leading-relaxed">Scroll to the Accounts section and click <strong class="text-primary">Expand All</strong>. A collapsed report won't qualify, every line needs to be visible.</p>
            </div>
          </div>
        </li>
        <li class="bg-white p-6 md:p-8 flex items-start gap-6 md:gap-8 reveal" data-delay="240">
          <span class="flex-shrink-0 text-3xl md:text-4xl font-bold font-headline text-accent leading-none w-8">4</span>
          <div class="flex-1 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div class="md:col-span-5">
              <h3 class="text-lg md:text-xl font-bold font-headline text-primary leading-tight">Download the PDF and send it to us</h3>
            </div>
            <div class="md:col-span-7">
              <p class="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">At the top of the report, click <strong class="text-primary">Download PDF</strong>. Then upload it below or email it to your advisor.</p>
              <a href="#credit-report-submit" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group">
                Jump to submit
                <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              </a>
            </div>
          </div>
        </li>
      </ol>

      <!-- Submit -->
      <div id="credit-report-submit" class="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden scroll-mt-24">
        <a href="https://form.jotform.com/261271610738051" target="_blank" rel="noopener" class="group bg-primary text-white p-8 md:p-10 flex flex-col gap-4 hover:bg-primary/95 transition-colors">
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Recommended</p>
          <h3 class="text-2xl md:text-3xl font-bold font-headline leading-tight">Upload via secure form</h3>
          <p class="text-white/70 leading-relaxed text-sm flex-1">Send your credit report PDF, last three months of bank statements, and your business + personal info, all in one place.</p>
          <span class="inline-flex items-center gap-2 text-accent font-semibold text-sm">
            Open intake form
            <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </span>
        </a>
        <a href="mailto:info@lendiago.com?subject=Credit%20Report%20%E2%80%94%20${encodeURIComponent(p.title)}%20Application" class="group bg-white p-8 md:p-10 flex flex-col gap-4 hover:bg-muted/40 transition-colors">
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Or email it</p>
          <h3 class="text-2xl md:text-3xl font-bold font-headline text-primary leading-tight">info@lendiago.com</h3>
          <p class="text-muted-foreground leading-relaxed text-sm flex-1">Mention the product you're applying for in the subject. We'll route it to the right specialist within one business hour.</p>
          <span class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-accent transition-colors">
            Compose email
            <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </a>
      </div>

      <p class="text-xs text-muted-foreground/70 mt-6 leading-relaxed">
        CreditHeroScore is a third-party service, any tri-bureau report (Experian, Equifax, TransUnion) works. We never share your information without your written consent.
      </p>
    </div>
  </div>
</section>`;
  }

  /* Public render fns */
  window.LendiagoRenderProduct = function(slug){
    const p = D.products.find(x => x.slug === slug);
    if(!p) return;
    document.title = p.title + ', Lendiago';
    const creditBlock = NEEDS_CREDIT_REPORT.includes(slug) ? creditReportSection(p) : '';
    document.getElementById('page-content').innerHTML =
      productHero(p) + summaryRow(p) + productMain(p) + creditBlock + productCTA(p);
  };

  window.LendiagoRenderIndustry = function(slug){
    const ind = D.industries.find(x => x.slug === slug);
    if(!ind) return;
    document.title = ind.title + ' Financing, Lendiago';
    document.getElementById('page-content').innerHTML =
      industryHero(ind) + industryHowWeHelp(ind) + industryWhyChoose(ind) + industryBody(ind);
  };
})();
