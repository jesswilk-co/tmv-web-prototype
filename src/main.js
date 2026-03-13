import './styles.css';

// Mobile nav hamburger toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-site-nav]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
  });
}

// Pricing tab toggle (existing pages using data-pricing-toggle on tabs)
const pricingToggles = document.querySelectorAll(
  '.tabs [data-pricing-toggle]',
);
const pricingPanels = document.querySelectorAll('.tabs [data-pricing-panel]');

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

// Pricing page toggle (PAYG / Pack Membership)
const pricingToggleGroup = document.querySelector(
  '[data-pricing-toggle-group]',
);
if (pricingToggleGroup) {
  const toggleBtns = pricingToggleGroup.querySelectorAll(
    '[data-pricing-toggle]',
  );
  const views = document.querySelectorAll(
    '.pricing-view[data-pricing-panel]',
  );
  const subtitle = document.querySelector('[data-pricing-subtitle]');

  const subtitleMap = {
    payg: 'Full flexibility, no commitment',
    sub: 'Save over \u00A3300 per year with the Pack Membership',
  };

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-pricing-toggle');
      if (!target) return;

      toggleBtns.forEach((b) =>
        b.classList.toggle('pricing-toggle__btn--active', b === btn),
      );

      views.forEach((view) =>
        view.classList.toggle(
          'pricing-view--active',
          view.getAttribute('data-pricing-panel') === target,
        ),
      );

      if (subtitle && subtitleMap[target]) {
        subtitle.textContent = subtitleMap[target];
      }
    });
  });
}

// FAQ accordion — only one open at a time within each group
document.querySelectorAll('[data-faq-group]').forEach((group) => {
  const items = group.querySelectorAll(
    'details.faq-item, details.pricing-faq__item',
  );
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

// Pricing FAQ filter buttons
const faqFilterGroup = document.querySelector('[data-faq-filter-group]');
if (faqFilterGroup) {
  const filterBtns = faqFilterGroup.querySelectorAll('[data-faq-filter]');
  const faqItems = document.querySelectorAll('.pricing-faq__item[data-category]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-faq-filter');

      filterBtns.forEach((b) =>
        b.classList.toggle('pricing-faq__filter-btn--active', b === btn),
      );

      faqItems.forEach((item) => {
        if (category === 'all' || item.dataset.category.split(' ').includes(category)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
        item.open = false;
      });
    });
  });
}
