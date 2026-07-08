/**
 * Bloosom DSP — Vanilla JavaScript
 * Smooth scrolling + scroll-triggered reveal animations
 */

(function () {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==========================================
    // Smooth scroll for anchor links
    // ==========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (event) {
                var href = this.getAttribute('href');
                if (!href || href === '#') return;

                var target = document.querySelector(href);
                if (!target) return;

                event.preventDefault();

                var navHeight = document.querySelector('.nav').offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                var offsetPosition = targetPosition - navHeight;

                if (prefersReducedMotion) {
                    window.scrollTo(0, offsetPosition);
                } else {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================
    // Scroll-triggered reveal animations
    // ==========================================
    function initRevealAnimations() {
        var revealElements = document.querySelectorAll('.reveal-up, .reveal-text');

        if (revealElements.length === 0) return;

        // Immediately show elements if reduced motion is preferred
        if (prefersReducedMotion) {
            revealElements.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after revealing to prevent re-animation
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // Hero entrance animation on page load
    // ==========================================
    function initHeroEntrance() {
        if (prefersReducedMotion) {
            document.querySelectorAll('.reveal-up').forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        // Small delay for natural feel
        setTimeout(function () {
            document.querySelectorAll('.hero .reveal-up').forEach(function (el) {
                el.classList.add('visible');
            });
        }, 200);
    }

    // ==========================================
    // Hide scroll indicator when scrolling down
    // ==========================================
    function initScrollIndicator() {
        var indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;

        var fadeThreshold = 100;

        function handleScroll() {
            var scrollY = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollY > fadeThreshold) {
                indicator.style.opacity = '0';
                indicator.style.transition = 'opacity 0.5s ease';
            } else {
                var opacity = 1 - (scrollY / fadeThreshold);
                indicator.style.opacity = String(Math.max(0, opacity * 0.4));
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ==========================================
    // Initialize everything when DOM is ready
    // ==========================================
    function init() {
        initSmoothScroll();
        initRevealAnimations();
        initHeroEntrance();
        initScrollIndicator();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
