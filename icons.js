// ==========================================
// Nova Digital — SVG Icon Sprite
// جایگزین Font Awesome: یه‌بار این اسپرایت به صفحه اضافه می‌شه،
// و همه‌جا با <svg class="icon"><use href="#icon-NAME"></use></svg> صداش می‌زنیم.
// ==========================================

(function injectIconStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .icon {
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: -0.125em;
      fill: none;
      overflow: visible;
    }
  `;
  document.head.appendChild(style);
})();

(function injectIconSprite() {
  const sprite = document.createElement("div");
  sprite.style.display = "none";
  sprite.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-bolt" viewBox="0 0 24 24">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/>
    </symbol>

    <symbol id="icon-cart-shopping" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="21" r="1.5" fill="currentColor"/>
      <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-cart-plus" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="21" r="1.5" fill="currentColor"/>
      <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 5h5M17.5 2.5v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-heart-outline" viewBox="0 0 24 24">
      <path d="M12 20s-7.5-4.6-10-9.3C.6 7 2 3.3 5.6 3c2.2-.2 4 1 6.4 3.4C14.4 4 16.2 2.8 18.4 3c3.6.3 5 4 3.6 7.7C19.5 15.4 12 20 12 20z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-heart-solid" viewBox="0 0 24 24">
      <path d="M12 20s-7.5-4.6-10-9.3C.6 7 2 3.3 5.6 3c2.2-.2 4 1 6.4 3.4C14.4 4 16.2 2.8 18.4 3c3.6.3 5 4 3.6 7.7C19.5 15.4 12 20 12 20z" fill="currentColor"/>
    </symbol>

    <symbol id="icon-user" viewBox="0 0 24 24">
      <circle cx="12" cy="7.5" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M4 20c1.2-4 4.4-6 8-6s6.8 2 8 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-magnifying-glass" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.5 19.5 15.2 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-xmark" viewBox="0 0 24 24">
      <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-ellipsis" viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="1.8" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      <circle cx="19" cy="12" r="1.8" fill="currentColor"/>
    </symbol>

    <symbol id="icon-house" viewBox="0 0 24 24">
      <path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-angle-left" viewBox="0 0 24 24">
      <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-angle-down" viewBox="0 0 24 24">
      <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-arrow-left" viewBox="0 0 24 24">
      <path d="M20 12H4M10 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-chevron-down" viewBox="0 0 24 24">
      <path d="M5 8l7 8 7-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-check" viewBox="0 0 24 24">
      <path d="M4 12.5l5.5 5.5L20 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-shield-halved" viewBox="0 0 24 24">
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M12 3v18" stroke="currentColor" stroke-width="1.2" opacity=".5"/>
    </symbol>

    <symbol id="icon-screwdriver-wrench" viewBox="0 0 24 24">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2-2 2.6-2.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-truck-fast" viewBox="0 0 24 24">
      <path d="M2 7h11v9H2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M13 10h4l4 3v3h-8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="6.5" cy="18" r="1.6" fill="currentColor"/>
      <circle cx="17" cy="18" r="1.6" fill="currentColor"/>
      <path d="M0 9h3M0 12h1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-mobile-screen" viewBox="0 0 24 24">
      <rect x="6" y="2.5" width="12" height="19" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M10.5 18.3h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-laptop" viewBox="0 0 24 24">
      <rect x="4" y="4.5" width="16" height="10.5" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M2 19.5h20l-2-3H4l-2 3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-tablet" viewBox="0 0 24 24">
      <rect x="4" y="2.5" width="16" height="19" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M11 18.3h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-headphones" viewBox="0 0 24 24">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <rect x="2.5" y="13" width="4" height="6.5" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <rect x="17.5" y="13" width="4" height="6.5" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </symbol>

    <symbol id="icon-layer-group" viewBox="0 0 24 24">
      <path d="M12 3 2 8l10 5 10-5-10-5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M2 12l10 5 10-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M2 16l10 5 10-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>

    <symbol id="icon-sliders" viewBox="0 0 24 24">
      <path d="M4 6h10M18 6h2M4 18h2M10 18h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M4 12h4M12 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="16" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="8" cy="12" r="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="6" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </symbol>

    <symbol id="icon-lock" viewBox="0 0 24 24">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="12" cy="15.5" r="1.5" fill="currentColor"/>
    </symbol>

    <symbol id="icon-eye" viewBox="0 0 24 24">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </symbol>

    <symbol id="icon-eye-slash" viewBox="0 0 24 24">
      <path d="M1 12s4-7 11-7c2.2 0 4 .6 5.5 1.5M23 12s-4 7-11 7c-2.2 0-4-.6-5.5-1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </symbol>

    <symbol id="icon-play" viewBox="0 0 24 24">
      <path d="M6 4l14 8-14 8V4z" fill="currentColor"/>
    </symbol>

    <symbol id="icon-trash" viewBox="0 0 24 24">
      <path d="M4 7h16M9 7V4.5h6V7M6 7l1 13.5h10L18 7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-instagram" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
    </symbol>

    <symbol id="icon-telegram" viewBox="0 0 24 24">
      <path d="M21 4 2.5 11.3c-.9.4-.9 1.6.1 1.9l4.6 1.5 1.8 5.6c.3.9 1.4 1.1 2 .4l2.6-2.9 4.7 3.5c.8.6 1.9.1 2.1-.9L23 5.2c.2-1-.9-1.7-1.7-1.2z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M8.5 15.5 17 8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-whatsapp" viewBox="0 0 24 24">
      <path d="M4 20l1.3-4A8 8 0 1 1 9 18.8L4 20z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M8.5 9.5c.3 2.8 2.2 4.7 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>

    <symbol id="icon-youtube" viewBox="0 0 24 24">
      <rect x="2" y="5.5" width="20" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor"/>
    </symbol>
  </svg>`;
  document.body.insertBefore(sprite, document.body.firstChild);
})();
