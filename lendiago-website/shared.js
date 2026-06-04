/* Lendiago shared chrome — banner, header, dropdowns, mobile menu, footer.
   Inject by including this script at end of <body>; it auto-renders into placeholders
   #site-chrome-top and #site-chrome-bottom, plus wires up all interactions.

   Pages can set window.LENDIAGO_NAV = { current: 'home' | slug } before loading.
*/
(function(){
  const cur = (window.LENDIAGO_NAV && window.LENDIAGO_NAV.current) || '';
  const A = (href, label, extra='') => `<a href="${href}" class="${extra}">${label}</a>`;

  /* ---- MOBILE STYLE OVERRIDES (phones only — desktop/tablet untouched) ---- */
  const mobileStyles = `
<style id="lendiago-mobile-overrides">
  /* Phones only — desktop and tablet inherit existing design */
  @media (max-width: 1023px) {
    /* Prevent iOS auto-zoom on input focus */
    input, select, textarea { font-size: 16px !important; }
    /* Footer needs less padding on mobile */
    footer .py-16 { padding-top: 3rem; padding-bottom: 3rem; }
    /* Better mobile typography rhythm in heroes */
    h1.text-5xl, h1.text-6xl, h1.text-7xl { font-size: clamp(2.25rem, 9vw, 3rem); line-height: 1.05; letter-spacing: -0.02em; }
    /* Tighten oversized section padding on phones */
    .py-32 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-28 { padding-top: 3.5rem; padding-bottom: 3.5rem; }
    .py-24 { padding-top: 3rem; padding-bottom: 3rem; }
    .py-20 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
    /* Round, full-width primary buttons feel native */
    .rounded-lg { border-radius: 9999px; }
    /* Container padding feels more app-like */
    .container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }

    /* HEROES: reduce vertical bloat */
    [class*="min-h-screen"] { min-height: 0 !important; }
    .py-40 { padding-top: 4.5rem; padding-bottom: 3rem; }

    /* Body text: keep readable but not oversized */
    .text-xl { font-size: 1.0625rem; line-height: 1.55; }
    .text-2xl { font-size: 1.25rem; line-height: 1.35; }
    .text-3xl { font-size: 1.625rem; line-height: 1.2; }
    .text-4xl { font-size: 1.875rem; line-height: 1.15; }

    /* Big number stats: shrink so they fit on one line */
    .text-5xl { font-size: 2.25rem; line-height: 1.05; }

    /* CARDS / SECTIONS: more generous rounding, slightly less inner padding */
    .rounded-\\[2rem\\], .rounded-\\[2\\.5rem\\], .rounded-\\[3rem\\] { border-radius: 1.5rem !important; }
    .p-10 { padding: 1.5rem; }
    .p-12 { padding: 1.75rem; }
    .p-14 { padding: 2rem; }
    .p-16 { padding: 2rem; }
    .gap-10 { gap: 1.5rem; }
    .gap-12 { gap: 1.75rem; }

    /* FOOTER: collapse to single clean column with bigger tap targets */
    footer .grid { gap: 2.25rem !important; }
    footer h3 { font-size: 0.75rem !important; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.55; }
    footer ul li a { display: block; padding: 0.375rem 0; font-size: 0.9375rem; }
    footer .text-base { font-size: 0.9375rem; }
    /* Hide the cookies/privacy/terms duplicate row in footer bottom on phones */
    footer .mt-16 .flex.items-center.gap-6 { display: none; }

    /* HEADER: keep it compact */
    #siteHeader { height: 4rem !important; }
    #siteHeader.h-16 { height: 4rem !important; }

    /* TOP BANNER: tighter on phones */
    #topBanner p { font-size: 0.8125rem; padding-right: 1.5rem; }

    /* Hero "two button" rows: stack and let primary breathe */
    .hero-actions, [data-hero-actions] { flex-direction: column !important; gap: 0.625rem !important; }
    .hero-actions a, .hero-actions button { width: 100% !important; }

    /* FAQ details: bigger tap area */
    details summary { min-height: 56px; }

    /* FLUID MOBILE — smoother typography, breathing room, no edge cramping */
    html { scroll-behavior: smooth; }
    body { -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; touch-action: manipulation; padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right); }
    main { overflow-x: hidden; }
    img { -webkit-user-drag: none; user-select: none; -webkit-touch-callout: none; }
    a, button { -webkit-tap-highlight-color: transparent; }
    /* Snappier focus rings */
    input:focus-visible, select:focus-visible, textarea:focus-visible, button:focus-visible, a:focus-visible {
      outline: 2px solid hsl(var(--accent));
      outline-offset: 2px;
    }

    /* Section spacing rhythm: consistent across all pages */
    section { padding-top: clamp(3rem, 9vw, 4rem) !important; padding-bottom: clamp(3rem, 9vw, 4rem) !important; }
    /* Hero gets a little more breathing room */
    main > section:first-of-type { padding-top: 1.5rem !important; padding-bottom: 2.5rem !important; }

    /* Headline rhythm — tighter, premium banking feel */
    h1 { font-size: clamp(1.875rem, 7.5vw, 2.5rem) !important; line-height: 1.1 !important; letter-spacing: -0.022em !important; }
    h2 { font-size: clamp(1.5rem, 5.5vw, 1.875rem) !important; line-height: 1.15 !important; letter-spacing: -0.018em !important; }
    h3 { font-size: clamp(1.125rem, 4vw, 1.25rem) !important; line-height: 1.25 !important; letter-spacing: -0.01em !important; }
    h4 { font-size: 1rem !important; line-height: 1.35 !important; letter-spacing: -0.005em !important; }

    /* Body copy: tighter, more readable */
    main p { font-size: 0.9375rem; line-height: 1.6; color: hsl(var(--muted-foreground)); }
    main .text-xl, main .text-2xl { font-size: 1rem !important; line-height: 1.55 !important; }

    /* Cards: soften edges, smaller shadow, cleaner */
    .rounded-2xl, .rounded-3xl, .rounded-\\[1\\.5rem\\], .rounded-\\[1\\.75rem\\] { border-radius: 1.25rem !important; }
    .shadow-2xl, .shadow-premium { box-shadow: 0 2px 12px -4px rgba(15, 23, 42, 0.08), 0 1px 3px -1px rgba(15, 23, 42, 0.05) !important; }

    /* Eyebrow / accent rule — keep tight, simple */
    .text-\\[11px\\], .text-\\[10px\\] { font-size: 0.6875rem !important; letter-spacing: 0.18em !important; }

    /* Asymmetric grids -> single column, balanced */
    main [class*="md:col-span"][class*="reveal-l"],
    main [class*="md:col-span"][class*="reveal-r"],
    main [class*="lg:col-span"][class*="reveal-l"],
    main [class*="lg:col-span"][class*="reveal-r"] {
      max-width: 100% !important;
    }

    /* Stacking margins between grid items */
    main .grid > * + * { margin-top: 0; }
    main .grid:not([class*="grid-cols-2"]):not([class*="grid-cols-3"]):not([class*="grid-cols-4"]) > * + * { margin-top: 1.5rem; }

    /* Buttons: more tactile */
    a.inline-flex, button[type="submit"], .btn {
      min-height: 48px;
      transition: transform .15s ease, opacity .15s ease;
    }
    a.inline-flex:active, button:active { transform: scale(0.98); }

    /* Container padding — consistent rhythm */
    .container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }

    /* Hairline dividers between columns on desktop -> top borders on mobile */
    .md\\:border-l { border-left: 0 !important; }
    .md\\:pl-10, .md\\:pl-16 { padding-left: 0 !important; }

    /* Reduce reveal animation distance for smoother flow */
    .reveal:not(.is-visible), .reveal-l:not(.is-visible), .reveal-r:not(.is-visible), .reveal-fade:not(.is-visible) {
      transform: translateY(12px) !important;
    }

    /* Carousels: don't overflow */
    .carousel-viewport { overflow: hidden; }
    .carousel-item { width: 80vw !important; max-width: 340px; }

    /* Hero CTAs: stack and let them breathe */
    .hero-actions { flex-direction: column !important; gap: 0.75rem !important; }
    .hero-actions > * { width: 100% !important; }
  }

  /* Mobile-only centering + extra rules (real, not wrapped) */
  @media (max-width: 1023px) {
    /* Cards / sections more compact on phones */
    .p-8 { padding: 1.25rem !important; }
    .p-9 { padding: 1.25rem !important; }
    .md\\:p-10, .md\\:p-12 { padding: 1.25rem !important; }
    /* Card images / icon tiles: shrink */
    .h-14.w-14, .h-16.w-16 { height: 3rem !important; width: 3rem !important; }
    .h-12.w-12 { height: 2.5rem !important; width: 2.5rem !important; }
    .h-11.w-11 { height: 2.5rem !important; width: 2.5rem !important; }

    /* Hero illustration on home: smaller on phones */
    section .max-w-\\[500px\\], section .max-w-\\[600px\\], section .max-w-\\[560px\\], section .max-w-\\[640px\\] { max-width: 220px !important; }
    /* Industry / product hero photos: shrink the image card area on phones */
    section .min-h-\\[360px\\] { min-height: 240px !important; }
    section .min-h-\\[460px\\] { min-height: 260px !important; }
    section .min-h-\\[420px\\], section .min-h-\\[440px\\] { min-height: 260px !important; }
    section .min-h-\\[560px\\], section .min-h-\\[580px\\] { min-height: 300px !important; }
    section .aspect-\\[4\\/5\\], section .aspect-\\[5\\/4\\] { aspect-ratio: 4 / 3 !important; }
    section .aspect-square { aspect-ratio: 4 / 3 !important; max-width: 240px; margin-left: auto; margin-right: auto; }

    /* Sections with big bottom-only margins on dividers */
    .mb-20, .mb-24, .mb-28, .mb-16 { margin-bottom: 2rem !important; }
    .mt-20, .mt-24, .mt-28 { margin-top: 2.5rem !important; }

    /* Hairline dividers between columns on desktop -> top borders on mobile */
    .md\\:border-l { border-left: 0 !important; }
    .md\\:pl-10, .md\\:pl-16 { padding-left: 0 !important; }

    /* Carousels — let browser handle vertical scroll, JS handles horizontal swipe */
    .carousel-track { touch-action: pan-y; }
    .carousel-viewport { overflow: hidden; }
    .carousel-item { width: 80vw !important; max-width: 340px; }

    /* CENTER editorial content on mobile — applies to all text by default */
    main section h1, main section h2, main section h3, main section h4, main section h5 { text-align: center; }
    main section p { text-align: center; }
    main section > .container > .max-w-2xl,
    main section > .container > .max-w-3xl,
    main section > .container > .max-w-4xl,
    main section > .container > .max-w-5xl { margin-left: auto !important; margin-right: auto !important; text-align: center; }
    /* Eyebrow rule lockup (hairline + label) — center horizontally */
    main .flex.items-center.gap-4 { justify-content: center; }
    /* CTA / action rows — center */
    main .flex.flex-col.sm\\:flex-row { justify-content: center; align-items: center; }
    main .flex.items-baseline { justify-content: center; }
    /* Grid items: center contents (titles, icons, descriptions) */
    main .grid > * { text-align: center; }
    main .grid h3, main .grid h4, main .grid p { text-align: center; }
    main .grid .flex { justify-content: center; }
    main .grid .flex.items-center.gap-4,
    main .grid .flex.items-center.gap-3 { justify-content: center; }
    /* Block-level icon wrappers: center via auto margins */
    main .grid > * > svg,
    main .grid > * > .inline-flex,
    main .grid > * > .flex,
    main .grid > * > div > svg,
    main .grid > * > div > .inline-flex { margin-left: auto !important; margin-right: auto !important; }
    /* Numbered eyebrow rows — center */
    main .grid .flex.items-baseline { justify-content: center; }
    main .grid .flex.items-baseline > .block.h-px { display: none; }

    /* Forms keep left alignment (natural for input) */
    main form, main form * { text-align: left; }
    main ul:not(.text-center), main ol:not(.text-center), main details { text-align: left; }
    main dl { text-align: left; }
    main details p, main details h3 { text-align: left; }
    main details summary { justify-content: space-between; }

    /* Buttons: minimum 48px hit target */
    a.inline-flex, button, .btn { min-height: 48px; }
  }

  /* Disable hover transforms on touch devices — prevents glitches when tap state lingers */
  @media (hover: none) {
    /* Instant transitions on hover — kills the "lingering hover" feeling */
    *:hover, .group:hover * { transition-duration: 0s !important; }
    /* Defeat common Tailwind hover utilities so tap doesn't trigger a sticky state */
    [class*="hover:bg-"]:hover { background-color: unset !important; }
    [class*="hover:text-"]:hover { color: unset !important; }
    [class*="hover:border-"]:hover { border-color: unset !important; }
    [class*="hover:shadow-"]:hover { box-shadow: unset !important; }
    [class*="hover:opacity-"]:hover { opacity: unset !important; }
    [class*="group-hover:"]:hover, .group:hover [class*="group-hover:"] {
      background-color: unset !important;
      color: unset !important;
      border-color: unset !important;
      box-shadow: unset !important;
      opacity: unset !important;
    }
    /* Transforms — no scale/translate on tap */
    .hover\\:scale-105:hover, .hover\\:scale-110:hover, .hover\\:scale-\\[1\\.02\\]:hover,
    .hover\\:scale-\\[1\\.04\\]:hover, .group:hover .group-hover\\:scale-105,
    .group:hover .group-hover\\:scale-110, .group:hover .group-hover\\:scale-\\[1\\.02\\],
    .group:hover .group-hover\\:scale-\\[1\\.04\\] { transform: none !important; }
    .group:hover .group-hover\\:translate-x-1, .group:hover .group-hover\\:translate-y-1,
    .group:hover .group-hover\\:-translate-y-1, .group:hover .group-hover\\:translate-x-0\\.5,
    .group:hover .group-hover\\:-translate-y-0\\.5, .group:hover .group-hover\\:translate-x-2 { transform: none !important; }
    .hover\\:-translate-y-1:hover { transform: none !important; }
    .hover\\:underline:hover { text-decoration: none !important; }
    /* Card decorations that fade in on hover — keep them invisible on mobile */
    .group:hover .group-hover\\:opacity-100,
    .group:hover .group-hover\\:opacity-90 { opacity: unset !important; }
    /* Custom duotone icon flip — don't recolor on tap */
    .group:hover .duo-flip [stroke="hsl(var(--primary))"] { stroke: hsl(var(--primary)) !important; }
    .group:hover .duo-flip [fill="hsl(var(--primary))"] { fill: hsl(var(--primary)) !important; }
  }
  /* Mobile menu: rotate chevron when open */
  details[open] > summary .mobile-menu-chev { transform: rotate(180deg); }
  /* Mobile menu: slide-in animation */
  #mobileMenu:not(.hidden) > div {
    animation: lendiagoSlideIn 0.28s cubic-bezier(0.32, 0.72, 0, 1);
  }
  @keyframes lendiagoSlideIn {
    from { transform: translateX(8%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  /* Body scroll lock when menu is open */
  body.menu-open { overflow: hidden; }
  /* Mobile: header hides when scrolling down, returns when scrolling up */
  @media (max-width: 1023px) {
    #siteHeader { transition: transform 0.25s ease; }
    body.scroll-down #siteHeader { transform: translateY(-100%); }
    body.scroll-down #topBanner { display: none; }
  }
</style>`;

  /* ---- TOP CHROME ---- */
  const topHTML = mobileStyles + `
<!-- Top Banner -->
<div id="topBanner" class="relative bg-secondary text-secondary-foreground">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center text-center py-2 px-10 relative">
      <p class="text-sm font-medium">
        Want 1-on-1 support from a business funding expert?
        <a href="tel:5168350757" class="font-bold hover:underline">Call 516-835-0757</a>
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
      <a href="https://form.jotform.com/261271610738051" class="hidden lg:inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition">Apply Now</a>
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

<div id="mobileMenu" class="fixed inset-0 z-[100] hidden">
  <div class="absolute inset-0 bg-primary text-primary-foreground overflow-y-auto">
    <div class="sticky top-0 bg-primary z-10 px-6 py-5 flex items-center justify-between border-b border-white/10">
      <img src="${assetsPrefix()}assets/Full-Logo.svg" alt="Lendiago" class="h-8 brightness-0 invert opacity-95" />
      <button data-close class="-mr-2 p-2 rounded-full hover:bg-white/10 transition" aria-label="Close menu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>

    <div class="px-6 pt-7 pb-2 space-y-3">
      <a href="https://form.jotform.com/261271610738051" class="flex items-center justify-center gap-2 w-full bg-accent text-primary text-center font-bold text-base py-4 rounded-full shadow-lg">
        Apply Now
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a href="tel:5168350757" class="flex items-center justify-center gap-2 w-full border border-white/25 text-white/90 text-center py-3.5 rounded-full text-sm font-semibold">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        Call 516-835-0757
      </a>
    </div>

    <nav class="px-6 pt-6 pb-4">
      <a class="block py-4 text-xl font-headline font-bold border-b border-white/10 flex items-center justify-between group" href="index.html">
        Home
        <svg class="h-4 w-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>

      <details class="border-b border-white/10 mobile-menu-details">
        <summary class="py-4 text-xl font-headline font-bold list-none cursor-pointer flex items-center justify-between">
          Financing Solutions
          <svg class="h-5 w-5 opacity-60 transition-transform mobile-menu-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <div class="pb-3 -mt-1 grid gap-px bg-white/5 rounded-2xl overflow-hidden mb-3">
          ${productLinks().map(p=>`<a class="block px-4 py-3 text-base text-white/85 bg-white/0 hover:bg-white/10 transition" href="${p.href}">${p.label}</a>`).join('')}
          <a class="block px-4 py-3 text-sm font-bold text-accent bg-white/0 hover:bg-white/10 transition" href="financing-solutions.html">View all solutions →</a>
        </div>
      </details>

      <details class="border-b border-white/10 mobile-menu-details">
        <summary class="py-4 text-xl font-headline font-bold list-none cursor-pointer flex items-center justify-between">
          Industries
          <svg class="h-5 w-5 opacity-60 transition-transform mobile-menu-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <div class="pb-3 -mt-1 grid gap-px bg-white/5 rounded-2xl overflow-hidden mb-3">
          ${industryLinks().map(p=>`<a class="block px-4 py-3 text-base text-white/85 bg-white/0 hover:bg-white/10 transition" href="${p.href}">${p.label}</a>`).join('')}
          <a class="block px-4 py-3 text-sm font-bold text-accent bg-white/0 hover:bg-white/10 transition" href="industries.html">View all industries →</a>
        </div>
      </details>

      ${[['resources.html','Resources'],['partners.html','Partner Program'],['about.html','About'],['faq.html','FAQ'],['contact.html','Contact']].map(([h,l])=>`
      <a class="block py-4 text-xl font-headline font-bold border-b border-white/10 flex items-center justify-between" href="${h}">
        ${l}
        <svg class="h-4 w-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>`).join('')}
    </nav>

    <div class="px-6 py-7 mt-2 text-white/70 text-sm space-y-2.5">
      <p class="flex items-center gap-2.5">
        <svg class="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        Long Island, NY 11023
      </p>
      <a class="flex items-center gap-2.5 hover:text-white" href="mailto:info@lendiago.com">
        <svg class="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
        info@lendiago.com
      </a>
    </div>
    <div class="h-8"></div>
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
          <li><a href="tel:5168350757" class="hover:text-primary">516-835-0757</a></li>
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
    const openMenu = ()=>{ mm.classList.remove('hidden'); document.body.classList.add('menu-open'); };
    const closeMenu = ()=>{ mm.classList.add('hidden'); document.body.classList.remove('menu-open'); };
    mb.addEventListener('click', openMenu);
    mm.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeMenu));
    // Close menu when tapping any nav link inside it
    mm.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href') || '';
      if(!href.startsWith('tel:') && !href.startsWith('mailto:')) {
        a.addEventListener('click', closeMenu);
      }
    });
    // Close on ESC
    document.addEventListener('keydown', e => { if(e.key === 'Escape' && !mm.classList.contains('hidden')) closeMenu(); });
  }

  /* ---------- Mobile sticky CTA reveal ---------- */
  // (Replaced by bottom tab bar; tab bar is always visible.)
  // Header auto-hide on mobile when scrolling down
  (function(){
    let lastY = 0;
    window.addEventListener('scroll', ()=>{
      if(window.innerWidth >= 1024) return;
      const y = window.scrollY;
      if(y > 120 && y > lastY + 4) document.body.classList.add('scroll-down');
      else if(y < lastY - 4 || y < 80) document.body.classList.remove('scroll-down');
      lastY = y;
    }, { passive: true });
  })();
  const moreBtn = document.getElementById('mobileTabMore');
  if(moreBtn){
    moreBtn.addEventListener('click', ()=>{
      const m = document.getElementById('mobileMenu');
      if(m){ m.classList.remove('hidden'); document.body.classList.add('menu-open'); }
    });
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

  /* ---------- AJAX form submit (FormSubmit) ---------- */
  document.addEventListener('submit', async function(ev){
    const form = ev.target;
    if(!(form instanceof HTMLFormElement)) return;
    const action = form.getAttribute('action') || '';
    const m = action.match(/^https:\/\/formsubmit\.co\/(?!ajax\/)(.+)$/);
    if(!m) return;
    ev.preventDefault();
    const endpoint = 'https://formsubmit.co/ajax/' + m[1];
    const btn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = btn ? btn.innerHTML : '';
    if(btn){ btn.disabled = true; btn.innerHTML = 'Sending...'; }
    try {
      const fd = new FormData(form);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      });
      const ok = res.ok;
      // Replace form contents with inline confirmation
      const success = document.createElement('div');
      success.className = 'p-10 md:p-14 text-center';
      success.innerHTML = ok
        ? `<div class="mx-auto h-16 w-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-6">
             <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
           </div>
           <h3 class="font-headline text-2xl md:text-3xl font-bold text-primary mb-3">Thank you — we got it.</h3>
           <p class="text-muted-foreground text-base md:text-lg max-w-md mx-auto">A member of our team will follow up within one business day.</p>`
        : `<div class="mx-auto h-16 w-16 rounded-full bg-destructive/15 text-destructive flex items-center justify-center mb-6">
             <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
           </div>
           <h3 class="font-headline text-2xl md:text-3xl font-bold text-primary mb-3">Something went wrong.</h3>
           <p class="text-muted-foreground text-base md:text-lg max-w-md mx-auto">Please email us directly at <a class="underline" href="mailto:sam@lendiago.com">sam@lendiago.com</a> or call <a class="underline" href="tel:5168350757">516-835-0757</a>.</p>`;
      // Find the inner content container (skip the dark header) — fall back to form body
      const body = form.querySelector('.p-10, .p-8') || form;
      // Hide the form fields by replacing the form's inner HTML with the success block
      form.innerHTML = '';
      form.appendChild(success);
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch(err){
      if(btn){ btn.disabled = false; btn.innerHTML = originalBtnHTML; }
      alert('Submission failed. Please try again or email sam@lendiago.com.');
    }
  });
})();
