import './styles.css';

// Pricing tab toggle
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

// FAQ accordion — only one open at a time within each group
document.querySelectorAll('[data-faq-group]').forEach((group) => {
  const items = group.querySelectorAll('details.faq-item');
  items.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        items.forEach((other) => {
          if (other !== details) other.open = false;
        });
      }
    });
  });
});
