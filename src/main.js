import './styles.css';

// Simple nav toggle for small screens (if needed later)
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-site-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('site-nav--open');
  });
}

// Pricing toggle logic
const pricingToggles = document.querySelectorAll('[data-pricing-toggle]');
const pricingPanels = document.querySelectorAll('[data-pricing-panel]');

if (pricingToggles.length && pricingPanels.length) {
  pricingToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const target = toggle.getAttribute('data-pricing-toggle');
      if (!target) return;

      pricingToggles.forEach((btn) => {
        btn.classList.toggle('tabs__tab--active', btn === toggle);
      });

      pricingPanels.forEach((panel) => {
        panel.classList.toggle(
          'tabs__panel--active',
          panel.getAttribute('data-pricing-panel') === target,
        );
      });
    });
  });
}

// FAQ accordion using <details> is mostly native, but we can ensure only one open at a time
const faqGroups = document.querySelectorAll('[data-faq-group]');

faqGroups.forEach((group) => {
  const detailsList = group.querySelectorAll('details');
  detailsList.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        detailsList.forEach((other) => {
          if (other !== details) other.open = false;
        });
      }
    });
  });
});
