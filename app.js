/**
 * Campus Life Companion - External JavaScript
 */

(function () {
  'use strict';

  function handleSignupSubmit(event) {
    event.preventDefault();

    var form = document.getElementById('signup');
    if (!form) return;

    var data = {};
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (!el.name || el.disabled) continue;

      if (el.type === 'checkbox') {
        data[el.name] = el.checked;
      } else if (el.type === 'radio') {
        if (el.checked) data[el.name] = el.value;
      } else {
        data[el.name] = el.value;
      }
    }

    var status = document.getElementById('form-status');
    if (status) {
      status.textContent = "Thank you! Your account has been created.";
    } else {
      alert("Thank you! Your account has been created.");
    }
  }

  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (localStorage.getItem('cookieChoice')) {
      banner.style.display = 'none';
      return;
    }

    var acceptBtn = banner.querySelector('[data-cookie-accept]');
    var rejectBtn = banner.querySelector('[data-cookie-reject]');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieChoice', 'accepted');
        banner.style.display = 'none';
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        localStorage.setItem('cookieChoice', 'rejected');
        banner.style.display = 'none';
      });
    }
  }

  function init() {
    var signupForm = document.getElementById('signup');
    if (signupForm) signupForm.addEventListener('submit', handleSignupSubmit);
    initCookieBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();