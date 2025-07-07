/**
=========================================================================
=========================================================================
Template Name: SaasAble - Tailwind Multipurpose UI Kit and Dashboard Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: script.js
Description:  this file will contains code for handling Buynow link.
=========================================================================
=========================================================================
*/
function getQueryStringParameters() {
  let BuyNowLink = '';
  let isp = '';

  try {
    // Get the query string from the current URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    // Check if the 'isp' parameter is present and equals '1'
    if (params.get('isp') === '1') {
      isp = '?isp=1'; // Mark as a single product
      BuyNowLink = 'https://1.envato.market/baeyGk'; // Single product link
    } else {
      BuyNowLink = 'https://1.envato.market/zNkqj6'; // Default link for multiple products
    }
  } catch (err) {
    // Fallback in case of any error
    BuyNowLink = 'https://1.envato.market/zNkqj6';
  }

  // Update the 'href' attribute for all elements with class 'btn-buy' once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
      button.setAttribute('href', BuyNowLink);
    });
  });

  // Update the 'href' attribute for all elements inside 'technology-block' and 'drp-technology' once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    const techLinks = document.querySelectorAll('.technology-block a, .drp-technology a');
    techLinks.forEach(link => {
      const originalHref = link.getAttribute('href');
      link.setAttribute('href', originalHref + isp);
    });
  });
}

// Call the function to execute the logic
getQueryStringParameters();