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
    const cards = D.products.map((p,i) => `
      <a href="${p.slug}.html" class="reveal group flex flex-col py-8 border-t border-border/60 hover:border-accent transition-colors" data-delay="${i*60}">
        <div class="flex items-center gap-3 mb-5">
          <span class="block h-1.5 w-1.5 rounded-full bg-accent"></span>
          <span class="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">${p.badge || 'Funding Product'}</span>
        </div>
        <h3 class="text-2xl md:text-3xl font-bold font-headline text-primary mb-4 leading-tight group-hover:text-accent transition-colors">${p.title}</h3>
        <p class="text-muted-foreground leading-relaxed mb-6 flex-1">${p.description}</p>
        <span class="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">Read more
          <svg class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </a>`).join('');
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Financing Solutions', title:'The right capital for every need', subtitle:'Eight tailored products covering working capital, equipment, real estate, and credit-building. Apply once, we match you to the best option.'}) +
      `<section class="py-16 md:py-24 bg-background"><div class="container mx-auto px-4 md:px-6"><div class="grid md:grid-cols-2 gap-x-12">${cards}</div></div></section>` +
      genericCTA('Not sure which product is right for your business?');
  };

  /* Industries listing */
  window.LendiagoRenderIndustriesListing = function(){
    document.title = 'Industries We Serve, Lendiago';
    const cards = D.industries.map((ind,i) => `
      <a href="industries/${ind.slug}.html" class="reveal group block" data-delay="${i*50}">
        <div class="overflow-hidden rounded-2xl aspect-[4/5] bg-secondary/40 mb-4">
          <img src="${ind.image}" alt="${ind.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer"/>
        </div>
        <h3 class="text-lg md:text-xl font-bold font-headline text-primary mb-1 leading-tight group-hover:text-accent transition-colors">${ind.title}</h3>
        <p class="text-sm text-muted-foreground line-clamp-2 leading-relaxed">${ind.description}</p>
      </a>`).join('');
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Industries', title:'Industry-specific funding that actually fits', subtitle:'From construction crews to e-commerce shops, we know how each industry makes money, and we structure capital around it.'}) +
      `<section class="py-16 md:py-24 bg-background"><div class="container mx-auto px-4 md:px-6"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">${cards}</div></div></section>` +
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
      ['Lucrative Commissions','Earn industry-leading commissions on every funded deal you refer. Our transparent structure ensures you\u2019re rewarded handsomely for every successful client.'],
      ['Dedicated Support','Get a dedicated partner manager and access to our streamlined platform, marketing materials, and underwriting team to help you succeed.'],
      ['Expand Your Offerings','Provide your clients with access to our comprehensive suite of funding solutions, strengthening your relationships and adding immense value to your services.']
    ];
    const audiences = [
      ['Brokers & ISOs','Tap into our wide network of lenders.'],
      ['CPAs & Accountants','Help your clients grow with smart capital.'],
      ['Real Estate Pros','Offer financing solutions to your clients.'],
      ['Business Consultants','Add a powerful new service to your toolkit.']
    ];
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Become a Partner', title:'Grow Your Business by Helping Others Grow Theirs', subtitle:'Join the Lendiago Partner Program and provide your clients with industry-leading funding solutions while earning competitive commissions.'}) + `
<section class="py-24 md:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <div class="text-center mb-16 reveal">
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Why Partner With Lendiago?</h2>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">A simple, powerful program designed to reward your referrals.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-x-12 gap-y-12">
      ${benefits.map(([t,d],i)=>`
        <div class="reveal pt-6 border-t border-border/60" data-delay="${i*100}">
          <h3 class="text-xl md:text-2xl font-bold font-headline text-primary mb-3 leading-tight">${t}</h3>
          <p class="text-muted-foreground leading-relaxed">${d}</p>
        </div>`).join('')}
    </div>
  </div>
</section>
<section class="py-24 bg-muted/30">
  <div class="container mx-auto px-4 md:px-6">
    <div class="text-center mb-16 reveal">
      <h2 class="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">Built for Trusted Advisors</h2>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">Our program is designed for professionals who serve business owners.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
      ${audiences.map(([t,d],i)=>`
        <div class="reveal pt-6 border-t border-border/60" data-delay="${i*80}">
          <h4 class="font-headline text-lg font-bold text-primary mb-2 leading-tight">${t}</h4>
          <p class="text-muted-foreground text-sm leading-relaxed">${d}</p>
        </div>`).join('')}
    </div>
  </div>
</section>
<section class="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <svg class="absolute -top-20 -left-20 w-[500px] h-[500px] text-accent/15" viewBox="0 0 200 200" fill="currentColor"><circle cx="60" cy="60" r="40"/></svg>
    <svg class="absolute -bottom-32 -right-20 w-[600px] h-[600px] text-accent/10" viewBox="0 0 200 200" fill="currentColor"><path d="M150 20 L180 80 L120 80 Z"/><rect x="60" y="100" width="80" height="80" rx="12"/></svg>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative">
    <div class="grid md:grid-cols-12 gap-12 items-center max-w-5xl reveal">
      <div class="md:col-span-7">
        <div class="flex items-center gap-3 mb-6">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Become a partner</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-headline leading-[1.05] tracking-tight">Ready to <span class="text-accent italic">partner?</span></h2>
        <p class="text-lg text-primary-foreground/75 leading-relaxed mt-6 max-w-xl">Tell us about your business and we'll be in touch within 24 hours to set up your partner account.</p>
      </div>
      <div class="md:col-span-5 md:flex md:justify-end">
        <a href="contact.html" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto">Apply to Partner Program
          <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
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
<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-8 reveal-l">
        <div class="flex items-center gap-4 mb-10">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Send us a message</span>
        </div>
        <form class="space-y-10" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Sent, we\\'ll be in touch'; this.querySelector('button').classList.add('bg-accent','text-primary');">
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            ${field('Full Name','name','John Doe')}${field('Email','email','john@company.com','email')}
          </div>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            ${field('Phone','phone','(555) 555-1234','tel')}${field('Company','company','Acme Inc.')}
          </div>
          ${field('Subject','subject','How can we help?')}
          <div class="space-y-3">
            <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Message</label>
            <textarea class="w-full border-0 border-b border-border/60 bg-transparent py-3 min-h-[120px] focus:border-accent focus:outline-none text-primary text-base placeholder:text-muted-foreground/60" placeholder="Tell us a bit about your business..."></textarea>
          </div>
          <div class="pt-6">
            <button class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-primary rounded-full px-12 py-5 text-base font-bold transition-all">
              Send Message
              <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </form>
      </div>
      <aside class="lg:col-span-4 reveal-r">
        <div class="lg:sticky top-32 space-y-12">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <span class="block h-px w-10 bg-accent"></span>
              <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Reach us</span>
            </div>
            <div class="divide-y divide-border/60">
              <a href="tel:5164399364" class="flex items-center justify-between py-4 group">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Phone</span>
                <span class="font-bold text-primary group-hover:text-accent transition-colors">516-439-9364</span>
              </a>
              <a href="mailto:info@lendiago.com" class="flex items-center justify-between py-4 group">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</span>
                <span class="font-bold text-primary group-hover:text-accent transition-colors">info@lendiago.com</span>
              </a>
              <div class="flex items-center justify-between py-4">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Office</span>
                <span class="font-bold text-primary">Long Island, NY 11023</span>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-4 mb-8">
              <span class="block h-px w-10 bg-accent"></span>
              <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Hours</span>
            </div>
            <ul class="divide-y divide-border/60">
              <li class="flex justify-between py-4 text-primary"><span class="text-muted-foreground">Mon to Fri</span><span class="font-bold">9am to 7pm ET</span></li>
              <li class="flex justify-between py-4 text-primary"><span class="text-muted-foreground">Saturday</span><span class="font-bold">10am to 2pm ET</span></li>
              <li class="flex justify-between py-4 text-primary"><span class="text-muted-foreground">Sunday</span><span class="font-bold">Closed</span></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>`;
  };

  /* Apply */
  window.LendiagoRenderApply = function(){
    document.title = 'Apply for Funding, Lendiago';
    const params = new URLSearchParams(location.search);
    const initial = D.products.find(p => p.slug === params.get('product'));
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
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">Complete our streamlined application in less than 2 minutes. No impact on your credit score.</p>
    </div>
  </div>
</section>

<section class="bg-background py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-8 reveal-l">
        <div class="flex items-center gap-4 mb-10">
          <span class="block h-px w-10 bg-accent"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Business Information</span>
        </div>
        <form id="applyForm" class="space-y-10">
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            ${field('First Name *','firstName','John','text',true)}${field('Last Name *','lastName','Doe','text',true)}
          </div>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            ${field('Email Address *','email','john@company.com','email',true)}${field('Phone Number *','phone','(555) 000-0000','tel',true)}
          </div>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            ${field('Company Name','company','Acme Inc.')}
            <div class="space-y-3">
              <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Financing Solution *</label>
              <select class="w-full h-12 border-0 border-b border-border/60 bg-transparent focus:border-accent focus:outline-none text-primary text-base">
                <option value="">Select a solution</option>
                ${D.products.map(p => `<option ${initial && initial.slug===p.slug?'selected':''}>${p.title}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div class="space-y-3">
              <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Desired Funding Amount</label>
              <select class="w-full h-12 border-0 border-b border-border/60 bg-transparent focus:border-accent focus:outline-none text-primary text-base">
                <option value="">Select amount range</option><option>Under $50,000</option><option>$50,000 - $250,000</option><option>$250,000 - $1,000,000</option><option>Over $1,000,000</option>
              </select>
            </div>
            <div class="space-y-3">
              <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Approximate Credit Score</label>
              <select class="w-full h-12 border-0 border-b border-border/60 bg-transparent focus:border-accent focus:outline-none text-primary text-base">
                <option value="">Select credit range</option><option>720+</option><option>680 - 719</option><option>620 - 679</option><option>Under 620</option>
              </select>
            </div>
          </div>
          <div class="space-y-3">
            <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Additional Details</label>
            <textarea class="w-full border-0 border-b border-border/60 bg-transparent py-3 min-h-[100px] focus:border-accent focus:outline-none text-primary text-base placeholder:text-muted-foreground/60" placeholder="Tell us about your business goals..."></textarea>
          </div>
          <div class="pt-6">
            <button class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-primary rounded-full px-12 py-5 text-base font-bold transition-all">
              Submit Application
              <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <p class="text-xs text-muted-foreground/70 mt-6 max-w-md leading-relaxed">By submitting, you agree to our Terms of Service and Privacy Policy. Your information is secure and encrypted.</p>
          </div>
        </form>
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
              <a href="tel:5164399364" class="flex items-center justify-between py-3 border-t border-border/60 group">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Phone</span>
                <span class="font-bold text-primary group-hover:text-accent transition-colors">516-439-9364</span>
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

    const form = document.getElementById('applyForm');
    if(form){
      form.addEventListener('submit', e => {
        e.preventDefault();
        form.innerHTML = `
          <div class="text-center py-20 space-y-6">
            <div class="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg class="h-12 w-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h2 class="text-4xl font-bold font-headline text-primary">Thank You!</h2>
            <p class="text-xl text-muted-foreground max-w-md mx-auto">Your application has been received. A funding specialist will review your details and contact you within 24 hours.</p>
            <a href="index.html" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent rounded-full px-8 py-3 font-bold mt-4">Return to Home</a>
          </div>`;
      });
    }
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
    ${[['phone','Phone','516-439-9364','tel:5164399364'],['mail','Email','info@lendiago.com','mailto:info@lendiago.com'],['mappin','Office','Long Island, NY 11023','#']].map(([icon,t,c,h])=>`
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
      <a href="../apply.html" class="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent rounded-full px-10 py-4 text-lg font-bold transition">Apply Now</a>
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
        ['Introduction','Lendiago ("we," "our," "us") respects your privacy. This Privacy Policy explains how we collect, use, and disclose information when you use our services. By using our website or applying for funding through Lendiago, you agree to the practices described here.'],
        ['Information We Collect','We collect information you provide directly (name, email, phone, business details, financial information needed to evaluate funding applications) and information collected automatically (device, browser, usage analytics, cookies).'],
        ['How We Use Information','To match you with appropriate lending partners, evaluate applications, communicate with you, comply with legal obligations, and improve our services.'],
        ['Sharing With Lending Partners','As a marketplace, we share application information with our network of lending partners so they can evaluate and present offers. Each partner has its own privacy practices.'],
        ['Your Rights','You may request access, correction, or deletion of your personal information by contacting privacy@lendiago.com. Some information may be retained as required by law or for legitimate business purposes.'],
        ['Security','We use industry-standard encryption and access controls to protect your information. No method of transmission is 100% secure; we encourage you to safeguard your account credentials.'],
        ['Changes','We may update this policy. Material changes will be posted on this page with a revised effective date.']
      ],
      'terms-of-service':[
        ['Acceptance of Terms','By accessing or using Lendiago, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.'],
        ['Eligibility','Services are intended for business owners and authorized representatives located in the United States. You must be at least 18 years old.'],
        ['Marketplace Role','Lendiago operates as a financial marketplace and strategic brokerage. We connect businesses with our curated network of lending partners. We are not a direct lender, and final approval, rates, and terms are determined by our partner lenders.'],
        ['User Submissions','By submitting an application, you authorize us to share your information with lending partners and to obtain credit reports as needed. You represent that all submitted information is accurate and complete.'],
        ['Fees','Applying with Lendiago is free of charge. Lending partners may charge fees as disclosed in their loan documents.'],
        ['Limitation of Liability','To the maximum extent permitted by law, Lendiago is not liable for indirect, incidental, or consequential damages arising from use of the service.'],
        ['Governing Law','These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles.']
      ],
      'licenses':[
        ['Marketplace Disclosure','Lendiago operates as a financial marketplace and strategic brokerage, connecting business owners with a curated network of premier lending partners. We are not a direct lender. All final funding decisions, including rates and approval, are determined by our partner lenders.'],
        ['State Licensing','Where required, Lendiago and its principals maintain appropriate state licenses or exemptions for brokerage activities. A current list of state registrations is available upon request to compliance@lendiago.com.'],
        ['Lender Disclosures','Each lending partner provides its own loan disclosures, including APR, finance charges, and total payment information. Please review all loan documents carefully before signing.'],
        ['NMLS Notice','Where applicable, individual mortgage loan originators acting through Lendiago partners are licensed under the Nationwide Multistate Licensing System (NMLS). NMLS registration information is available at nmlsconsumeraccess.org.'],
        ['Equal Credit Opportunity','Our lending partners are committed to the principles of the Equal Credit Opportunity Act and applicable state laws. Credit decisions are based on objective criteria.'],
        ['Contact','For questions about licensing or to verify a registration, please email compliance@lendiago.com or call 516-439-9364.']
      ]
    }[kind] || [];
    document.getElementById('page-content').innerHTML =
      pageHero({eyebrow:'Legal', title:t, subtitle:'Effective date: January 1, 2024'}) + `
<section class="py-20 md:py-28">
  <div class="container mx-auto px-4 md:px-6 max-w-3xl prose-lendiago">
    ${sections.map(([h,p],i)=>`<div class="reveal" data-delay="${i*60}"><h2>${h}</h2><p>${p}</p></div>`).join('')}
    <p class="disclaimer">This document is provided for informational purposes and does not constitute legal advice. For specific questions, please contact your legal advisor or email us at info@lendiago.com.</p>
  </div>
</section>`;
  };

  /* Helpers */
  function field(label, name, ph, type='text', req=false){
    return `<div class="space-y-3">
      <label class="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">${label}</label>
      <input name="${name}" type="${type}" placeholder="${ph}" ${req?'required':''} class="w-full h-12 border-0 border-b border-border/60 bg-transparent focus:border-accent focus:outline-none text-primary text-base placeholder:text-muted-foreground/60"/>
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
        <a href="apply.html" class="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto">Apply Now
          <svg class="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="contact.html" class="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-5 text-base font-bold w-full md:w-auto transition-colors">Talk to Us</a>
      </div>
    </div>
  </div>
</section>`;
  }
})();
