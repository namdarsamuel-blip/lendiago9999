/* Renders product detail and industry detail pages from window.LENDIAGO_DATA. */
(function(){
  const D = window.LENDIAGO_DATA;
  if(!D) return;

  function depthPrefix(){
    return location.pathname.match(/\/industries\//) ? '../' : '';
  }

  function productHero(p){
    return `
<section class="relative bg-background overflow-hidden border-b border-border/60">
  <!-- subtle editorial accent, top right -->
  <div aria-hidden="true" class="hidden lg:block absolute top-0 right-0 w-[40%] h-full pointer-events-none">
    <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 relative pt-12 md:pt-20 pb-12 md:pb-20">
    <!-- breadcrumb -->
    <nav class="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-10 reveal">
      <a href="index.html" class="hover:text-primary transition-colors">Home</a>
      <span class="opacity-50">/</span>
      <a href="financing-solutions.html" class="hover:text-primary transition-colors">Financing</a>
      <span class="opacity-50">/</span>
      <span class="text-primary">${p.title}</span>
    </nav>

    <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <!-- LEFT: editorial title block -->
      <div class="lg:col-span-7 reveal">
        <div class="flex items-center gap-4 mb-8">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">${p.badge || 'Funding Product'}</span>
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[1.02] tracking-tight mb-6">
          ${p.title}<span class="text-accent">.</span>
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">${p.description}</p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a href="apply.html?product=${p.slug}" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-primary rounded-full px-10 py-4 text-base font-bold transition-all">
            Apply Now
            <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#details" class="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group">
            Read the details
            <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </a>
        </div>
      </div>

      <!-- RIGHT: vertical "datasheet" stat list -->
      <div class="lg:col-span-5 reveal w-full" data-delay="120">
        <div class="bg-secondary/40 border border-border/60 rounded-2xl p-6 md:p-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="block h-px w-8 bg-accent"></span>
            <span class="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Quick Specs</span>
          </div>
          <dl class="divide-y divide-border/60">
            ${p.summary.map(([label,val]) => `
              <div class="flex items-baseline justify-between gap-4 py-3.5">
                <dt class="text-sm text-muted-foreground flex-shrink-0">${label}</dt>
                <dd class="text-sm md:text-base font-bold font-headline text-primary text-right leading-tight">${val}</dd>
              </div>`).join('')}
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  // No longer used as a separate row (specs are inside hero), but kept for back-compat
  function summaryRow(){ return ''; }

  function productMain(p){
    const img = p.image;
    return `
<section id="details" class="py-20 md:py-28 bg-background">
  <div class="container mx-auto px-4 md:px-6">

    <!-- Long description: editorial wide-text -->
    <div class="max-w-4xl mb-20 md:mb-28 reveal-l">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Overview</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.1] tracking-tight mb-8">
        How <span class="text-accent italic">${p.title}</span> works.
      </h2>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">${p.longDescription}</p>
    </div>

    <!-- Full-bleed editorial image -->
    <figure class="relative mb-20 md:mb-28 -mx-4 md:-mx-6 lg:mx-0 reveal">
      <div class="relative overflow-hidden lg:rounded-3xl aspect-[16/7]">
        <img src="${img}" alt="${p.title}" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-md">
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 mb-2">Use case</p>
          <p class="text-xl md:text-2xl font-bold font-headline text-white leading-tight">Capital that works the way your business already works.</p>
        </div>
      </div>
    </figure>

    <!-- Benefits: editorial two-column list with hairline rules (no numbering) -->
    <div class="max-w-6xl">
      <div class="flex items-center gap-4 mb-12">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Why teams pick this</span>
      </div>
      <div class="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-14">
        ${p.longFeatures.map(([title,desc],i) => `
          <article class="reveal pt-6 border-t border-border/60" data-delay="${i*80}">
            <h4 class="font-bold font-headline text-primary text-xl md:text-2xl mb-3 leading-tight">${title}</h4>
            <p class="text-muted-foreground leading-relaxed">${desc}</p>
          </article>`).join('')}
      </div>
    </div>

    <!-- Disclaimer footnote -->
    <div class="max-w-3xl mt-20 md:mt-28 pt-10 border-t border-border/60">
      <p class="text-xs text-muted-foreground/70 leading-relaxed">Lendiago operates as a financial marketplace and strategic brokerage, connecting businesses with a curated network of premier lending partners. While we are not a direct lender, our role is to advocate for your business and help you secure the most competitive terms available.</p>
    </div>

  </div>
</section>`;
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
        <a href="apply.html?product=${p.slug}" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 rounded-full px-10 py-5 text-lg font-bold w-full md:w-auto">
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

  /* Industry detail */
  function industryHero(ind){
    return `
<section class="relative bg-background overflow-hidden border-b border-border/60">
  <div aria-hidden="true" class="hidden lg:block absolute top-0 right-0 w-[40%] h-full pointer-events-none">
    <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative pt-12 md:pt-20 pb-12 md:pb-20">
    <nav class="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-10 reveal">
      <a href="../index.html" class="hover:text-primary transition-colors">Home</a>
      <span class="opacity-50">/</span>
      <a href="../industries.html" class="hover:text-primary transition-colors">Industries</a>
      <span class="opacity-50">/</span>
      <span class="text-primary">${ind.title}</span>
    </nav>
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div class="lg:col-span-7 reveal">
        <div class="flex items-center gap-4 mb-8">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Industry Financing</span>
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[1.02] tracking-tight mb-6">${ind.headline}<span class="text-accent">.</span></h1>
        <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">${ind.description}</p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a href="../apply.html" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-primary rounded-full px-10 py-4 text-base font-bold transition-all">
            Apply Now
            <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="../contact.html" class="text-sm font-semibold text-primary hover:text-accent transition-colors">Speak with an Advisor →</a>
        </div>
      </div>
      <div class="lg:col-span-5 reveal" data-delay="120">
        <figure class="overflow-hidden rounded-2xl aspect-[4/5] bg-secondary/40 border border-border/60">
          <img src="${ind.image}" alt="${ind.title}" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
        </figure>
      </div>
    </div>
  </div>
</section>`;
  }

  function industryStats(ind){
    return `
<section class="py-10 md:py-12 bg-secondary/30 border-b border-border/60">
  <div class="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
    ${ind.expectations.map(([k,v]) => `
      <div class="reveal flex items-baseline justify-between md:flex-col md:items-start gap-2 md:gap-1 md:border-l md:border-border/60 md:pl-6">
        <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">${k}</p>
        <p class="text-xl md:text-2xl font-bold font-headline text-primary">${v}</p>
      </div>`).join('')}
  </div>
</section>`;
  }

  function industryBody(ind){
    return `
<section class="py-20 md:py-28 bg-background">
  <div class="container mx-auto px-4 md:px-6">

    <div class="max-w-4xl mb-20 md:mb-28 reveal-l">
      <div class="flex items-center gap-4 mb-6">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Overview</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary leading-[1.1] tracking-tight mb-8">A funding partner for <span class="text-accent italic">${ind.title}.</span></h2>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">${ind.introduction}</p>
    </div>

    <div class="max-w-6xl mb-20 md:mb-28">
      <div class="flex items-center gap-4 mb-12">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Tailored Solutions</span>
      </div>
      <div class="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-14">
        ${ind.points.map(([t,d],i) => `
          <article class="reveal pt-6 border-t border-border/60" data-delay="${i*80}">
            <h4 class="font-bold font-headline text-primary text-xl md:text-2xl mb-3 leading-tight">${t}</h4>
            <p class="text-muted-foreground leading-relaxed">${d}</p>
          </article>`).join('')}
      </div>
    </div>

    <div class="max-w-6xl mb-20 md:mb-28">
      <div class="flex items-center gap-4 mb-12">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Success Stories</span>
      </div>
      <div class="grid md:grid-cols-2 gap-x-12 gap-y-12">
        ${ind.stories.map(([title,need,how,result],i) => `
          <article class="reveal pt-6 border-t border-border/60" data-delay="${i*100}">
            <h4 class="font-bold font-headline text-primary text-xl md:text-2xl mb-4 leading-tight">${title}</h4>
            <dl class="space-y-3 text-base">
              <div class="flex gap-3"><dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground pt-1.5 w-16 flex-shrink-0">Need</dt><dd class="text-muted-foreground flex-1">${need}</dd></div>
              <div class="flex gap-3"><dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground pt-1.5 w-16 flex-shrink-0">Solution</dt><dd class="text-muted-foreground flex-1">${how}</dd></div>
              <div class="flex gap-3"><dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent pt-1.5 w-16 flex-shrink-0">Result</dt><dd class="text-primary font-semibold flex-1">${result}</dd></div>
            </dl>
          </article>`).join('')}
      </div>
    </div>

    <div class="max-w-6xl">
      <div class="flex items-center gap-4 mb-12">
        <span class="block h-px w-12 bg-accent"></span>
        <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Recommended Solutions</span>
      </div>
      <div class="grid sm:grid-cols-2 gap-x-12 gap-y-6">
        ${D.products.slice(0,4).map(p=>`<a href="../${p.slug}.html" class="flex items-center justify-between py-4 border-t border-border/60 group">
          <span class="text-primary font-semibold group-hover:text-accent transition-colors text-lg">${p.title}</span>
          <svg class="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>`).join('')}
      </div>
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
        <a href="apply.html?product=${p.slug}" target="_blank" rel="noopener" class="group bg-primary text-white p-8 md:p-10 flex flex-col gap-4 hover:bg-primary/95 transition-colors">
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
      industryHero(ind) + industryStats(ind) + industryBody(ind);
  };
})();
