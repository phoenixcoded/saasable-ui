/**
=========================================================================
=========================================================================
Template Name: SaasAble - Tailwind Multipurpose UI Kit and Dashboard Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: script.js
Description:  this file will contains behavior, properties, 
              functionality and interactions of a small module of ui element 
              which used to build a theme layout.
=========================================================================
=========================================================================
*/
'use strict';
var flg = '0';

// scroll-top
var scrolltop = document.querySelector('.scroll-top');
if (scrolltop) {
  let ost = 500;
  document.addEventListener('scroll', function () {
    let cOst = document.documentElement.scrollTop;
    if (cOst > ost) {
      scrolltop.classList.add('scroll-show');
    } else {
      scrolltop.classList.remove('scroll-show');
    }
  });
}

// Event listener to initialize tooltips, popovers, and toasts on window load
window.addEventListener('load', function () {
  // Remove pre-loader after page load with a fade-out effect
  var loader = document.querySelector('.loader-bg');
  if (loader) {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';

    // Wait for the fade-out transition to complete before removing the element
    setTimeout(function () {
      loader.remove();
    }, 500);
    // Duration matches the CSS transition duration
  }
});

// Function to mark active menu items based on current page URL
var elem = document.querySelectorAll('#main-navbar-collapse a');
for (var l = 0; l < elem.length; l++) {
  // Check if current URL matches menu item URL
  var pageUrl = window.location.href.split(/[?#]/)[0];
  
  if (pageUrl.includes("\/block\/")) {
    if (elem[l].getAttribute('href').endsWith("block\/block.html") && elem[l].getAttribute('href') != '') {
      elem[l].setAttribute("open", "");
    }
  } else {
      // if (elem[l].href == pageUrl && elem[l].getAttribute('href') != '') {
      //   // Add active class to matching menu item and its parent elements
      //   elem[l].parentNode.classList.add('active');
      //   elem[l].parentNode.parentNode.parentNode.classList.add('pc-trigger');
      //   elem[l].parentNode.parentNode.parentNode.classList.add('active');
      //   elem[l].parentNode.parentNode.style.display = 'block';
      //   elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('pc-trigger');
      //   elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';
      // }
  }

}


var resizebtnGroups = document.querySelectorAll('.resize-button-group'); // Select all resize-button-group elements

resizebtnGroups.forEach(function (group) {
  var resizebtn = group.querySelectorAll('button'); // Select all buttons inside the current group
  resizebtn.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the parent div of the clicked button within the group
      var parentDiv = button.closest('div');

      // Remove the 'active' class from all divs inside the current resize-button-group
      var allParents = group.querySelectorAll('div');
      allParents.forEach(function (div) {
        div.classList.remove('active');
      });

      // Add the 'active' class to the clicked button's parent div
      parentDiv.classList.add('active');

      var parentCard = parentDiv.closest('.block-simulator');

      const classesToRemove = ['desktop', 'tablet', 'mobile'];
      classesToRemove.forEach((className) => {
        if (parentCard.classList.contains(className)) {
          parentCard.classList.remove(className);
        }
      });

      // Optionally, log the value of the 'data-frame-size' attribute
      var frameSize = parentDiv.getAttribute('data-frame-size');
      parentCard.classList.add(frameSize);
      adjustIframeHeight(parentCard.querySelector('iframe'), frameSize);
    });
  });
});

function adjustIframeHeight(iframe, frameSize="") {
  try {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (iframeDocument) {
      const iframeBody = iframeDocument.body;
      if (iframeBody) {
        var heightcheck = true;
        iframe.classList.forEach((className) => {
          if (/^h-\[\d+px\]$/.test(className)) {
            heightcheck = false;
          }
        });
        if(heightcheck){
          if(iframeBody.scrollHeight <= 450){
            if(frameSize == ""){
              iframe.style.height = '450px';
            }else{
              iframe.style.height = iframeBody.scrollHeight + 1 + 'px';  
            }
          } else {
            iframe.style.height = iframeBody.scrollHeight + 1 + 'px';
          }
        }
      }
    }
  } catch (error) {}
}

// Attach load event listener to all matching iframes
document.querySelectorAll('.block-iframe').forEach((iframe) => {
  iframe.addEventListener('load', () => adjustIframeHeight(iframe, ""));
});

// Function to remove CSS classes with a given prefix from a DOM node
function removeClassByPrefix(node, prefix) {
  // Create a copy of the class list to avoid issues with dynamic length
  node.classList.forEach((value) => {
    if (value.startsWith(prefix)) {
      node.classList.remove(value);
    }
  });
}

// Functions for sliding up, sliding down, and toggling visibility of elements
let slideUp = (target, duration = 0) => {
  // Slide up animation implementation
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
};

let slideDown = (target, duration = 0) => {
  // Slide down animation implementation
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = (target, duration = 0) => {
  // Slide toggle animation implementation
  if (window.getComputedStyle(target).height === '0px') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

// =======================================================
// =======================================================
