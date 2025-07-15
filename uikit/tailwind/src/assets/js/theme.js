/**
=========================================================================
=========================================================================
Template Name: SaasAble - Tailwind Multipurpose UI Kit and Dashboard Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: themes.js
Description:  this file will contains overall theme setup and handle
              behavior of live custumizer like Dark/Light, LTR/RTL,
              preset color, theme layout, theme contarast etc.
=========================================================================
=========================================================================
*/

'use strict';

var rtl_flag = false;
var dark_flag = false;

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Storage !== 'undefined') {
    var theme_config = JSON.parse(localStorage.getItem('theme_config'));
    if(theme_config){
      layout_change(theme_config.dark == 'true' ? 'dark' : 'light');
      layout_rtl_change(theme_config.rtl);
    }
  }
});
// Function to change layout dark/light settings
function layout_change_default() {
  // Determine initial layout based on user's color scheme preference
  let dark_layout = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Apply the determined layout
  layout_change(dark_layout);

  // Set the active state for the default layout button
  const btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.add('active');
  }

  // Listen for changes in the user's color scheme preference and adjust layout accordingly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    dark_layout = event.matches ? 'dark' : 'light';
    layout_change(dark_layout);
  });
}

// This event listener executes when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Reset layout on button click
  var layout_reset = document.querySelector('#layoutreset');
  if (layout_reset) {
    layout_reset.addEventListener('click', function (e) {
      localStorage.clear();
      var theme_config = { dark: 'false', rtl: 'false', preset : 'ai' };
      localStorage.setItem('theme_config', JSON.stringify(theme_config));
      location.reload();
    });
  }

  // Utility function to handle theme changes
  const handleCheckboxChange = (checkbox, callback) => {
    checkbox.addEventListener('change', () => callback(checkbox.checked));
  };

  // Get checkbox elements
  const darkCheckbox = document.getElementById('theme-setup-dark');
  const rtlCheckbox = document.getElementById('theme-setup-rtl');

  // Handle dark theme change
  if (darkCheckbox) {
    handleCheckboxChange(darkCheckbox, (isChecked) => {
      layout_change(isChecked ? 'dark' : 'light');
      if (localStorage.getItem('theme_config') === null) {
        var theme_config = { dark: isChecked ? 'true' : 'false', rtl: 'false' };
        localStorage.setItem('theme_config', JSON.stringify(theme_config));
      } else {
        var theme_config = JSON.parse(localStorage.getItem('theme_config'));
        theme_config.dark = isChecked ? 'true' : 'false';
        localStorage.setItem('theme_config', JSON.stringify(theme_config));
      }
      reloadAllIframes();
      // change_theme();
    });
  }

  // Handle RTL layout change
  if (rtlCheckbox) {
    handleCheckboxChange(rtlCheckbox, (isChecked) => {
      layout_rtl_change(isChecked ? 'true' : 'false');
      if (localStorage.getItem('theme_config') === null) {
        var theme_config = { dark: 'false', rtl: isChecked ? 'true' : 'false' };
        localStorage.setItem('theme_config', JSON.stringify(theme_config));
      } else {
        var theme_config = JSON.parse(localStorage.getItem('theme_config'));
        theme_config.rtl = isChecked ? 'true' : 'false';
        localStorage.setItem('theme_config', JSON.stringify(theme_config));
      }
      reloadAllIframes();
    });
  }
});

// Function to handle layout direction change (LTR/RTL)
function layout_rtl_change(value) {
  // Get the HTML element
  var htmlElement = document.getElementsByTagName('html')[0];

  // Determine if RTL is enabled
  if (value === 'true') {
    rtl_flag = true; // Set global RTL flag
    htmlElement.setAttribute('data-pc-direction', 'rtl');
    htmlElement.setAttribute('dir', 'rtl');
    htmlElement.setAttribute('lang', 'ar');

    // Update button states for RTL
    var activeButton = document.querySelector('.theme-direction .btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    var rtlButton = document.querySelector(".theme-direction .btn[data-value='true']");
    if (rtlButton) {
      rtlButton.classList.add('active');
    }
  } else {
    rtl_flag = false; // Reset global RTL flag
    htmlElement.setAttribute('data-pc-direction', 'ltr');
    htmlElement.setAttribute('dir', 'ltr');
    htmlElement.removeAttribute('lang');

    // Update button states for LTR
    var activeButton = document.querySelector('.theme-direction .btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    var ltrButton = document.querySelector(".theme-direction .btn[data-value='false']");
    if (ltrButton) {
      ltrButton.classList.add('active');
    }
  }
  const rtlCheckbox = document.getElementById('theme-setup-rtl');
  if (rtlCheckbox) {
    rtlCheckbox.checked = value === 'true' ? true : false;
  }
}

// Function to handle layout change (dark/light) and update related elements
function layout_change(layout) {
  // Set the theme layout attribute on the <html> tag

  document.getElementsByTagName('html')[0].setAttribute('data-pc-theme', layout);

  // Determine which logos and buttons to update based on the selected layout (dark or light)
  var isDark = layout === 'dark';
  dark_flag = isDark;

  // Get the class list of the html element
  const htmlClasses = document.documentElement.classList;
  const presetClasses = Array.from(htmlClasses).filter((className) => className.startsWith('preset-'));
  document.documentElement.classList.remove(presetClasses[0]);

  if (presetClasses[0].endsWith('-dark')) {
    presetClasses[0] = presetClasses[0].replace(/-dark$/, '');
  }
  var presetClass = isDark ? presetClasses[0] + '-dark' : presetClasses[0];
  document.documentElement.classList.add(presetClass);

  var darkCheckbox = document.getElementById('theme-setup-dark');
  if (darkCheckbox) {
    darkCheckbox.checked = isDark ? true : false;
  }
}

function reloadAllIframes() {
  var iframes = document.querySelectorAll('iframe');
  iframes.forEach(function (iframe) {
    iframe.contentWindow.location.reload();
  });
}