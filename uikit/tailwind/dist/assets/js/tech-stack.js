/**
=========================================================================
=========================================================================
Template Name: SaasAble - Tailwind Multipurpose UI Kit
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: tech-stack.js
Description:  this file will contains code for handling Buynow link.
=========================================================================
=========================================================================
*/

var BuyNowLink = '';
var ref = "";

function getQueryStringParameters() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  if (params.get('ref') == 'tf') {
    ref = "tf"
    sessionStorage.setItem('ref', ref);
  }
  check_auth();
  function check_auth() {
    if (sessionStorage.getItem('ref', ref)) {
      BuyNowLink = 'https://codedthemes.com/item/saasable-tailwind-ui-kit/';
    } else {
      try {
        BuyNowLink = 'https://codedthemes.com/item/saasable-tailwind-ui-kit/';
        if (ref == "tf") {
          BuyNowLink = 'https://codedthemes.com/item/saasable-tailwind-ui-kit/';
        }
      } catch (err) {
        BuyNowLink = 'https://codedthemes.com/item/saasable-tailwind-ui-kit/';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelectorAll('.buy_now_link');
    for (var j = 0; j < elem.length; j++) {
      elem[j].setAttribute('href', BuyNowLink);
    }
  });
}
getQueryStringParameters();

function changebrand(word) {
  // Map brand names to their corresponding classes
  const brandClasses = {
    Themeforest: 'tf',
    Codedthemes: 'ct' 
  };

  // Get the class to show based on the word
  const showClass = brandClasses[word] || null;
  if (!showClass) return;  // Exit if no matching brand

  // Select all elements for both classes
  const tfElements = document.querySelectorAll('.tf');
  const ctElements = document.querySelectorAll('.ct');

  // Helper to toggle display
  function toggleDisplay(elements, show) {
    elements.forEach(el => el.style.display = show ? '' : 'none');
  }

  // Show elements with the matched class, hide others
  toggleDisplay(tfElements, showClass === 'tf');
  toggleDisplay(ctElements, showClass === 'ct');
}

document.addEventListener('DOMContentLoaded', () => {
  if (ref === "tf") {
    changebrand('Themeforest');
  } else {
    changebrand('Codedthemes');
  }
})