// transition.js
document.addEventListener('DOMContentLoaded', () => {
    const ease = 'power4.inOut';
    const D = 0.6;

    function pageTransitionLoad() {
        gsap.to('.transition-block-edge', { y: 2000, duration: D, ease, delay: 0.25 });
        gsap.to('.transition-block',      { y: 2000, duration: D, ease, delay: 0.15 });

        // Optional: SplitText if present
        try {
            const header = SplitText.create('h1', { type: 'chars' });
            gsap.from(header.chars, { x: -20, autoAlpha: 0, duration: 0.25, ease, stagger: 0.075, delay: 0.3 });
        } catch (_) {}
    }

    function pageTransitionExit() {
        return new Promise(resolve => {
            const tl = gsap.timeline({ onComplete: resolve });
            tl.to('.transition-block-edge', { y: 0, duration: D, ease, delay: 0 })
                .to('.transition-block',      { y: 0, duration: D, ease }, '<0.15');
        });
    }

    const isSameOrigin = (href) => {
        const u = new URL(href, location.href);
        return u.origin === location.origin;
    };

    document.querySelectorAll('a[href]').forEach(a => {
        a.addEventListener('click', async (e) => {
            // Allow new-tab actions and non-left clicks
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

            const href = a.getAttribute('href');
            if (!href) return;

            // Don’t intercept special links
            if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ||
                a.hasAttribute('download') || a.target === '_blank' || !isSameOrigin(href)) {
                return;
            }

            // At this point, it's a same-origin, same-tab navigation → animate then go
            e.preventDefault();

            try {
                await pageTransitionExit();
            } finally {
                location.href = new URL(href, location.href).href;
            }
        });
    });

    pageTransitionLoad();

    // Re-run load animation on BFCache restore
    window.addEventListener('pageshow', (ev) => { if (ev.persisted) pageTransitionLoad(); });
});
