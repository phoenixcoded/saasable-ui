/**
=========================================================================
=========================================================================
Template Name: SaasAble - Tailwind Multipurpose UI Kit and Dashboard Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: component.js
Description:  this file will contains defining the behavior, properties, 
              and interactions of a UI component or a 
              modular piece of functionality in your application.
=========================================================================
=========================================================================
*/
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // alert component
  const alertDismissButtons = document.querySelectorAll('[data-pc-dismiss="alert"]');
  alertDismissButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let targetElement = event.target;

      // If the clicked element is an icon, traverse up to the button
      if (targetElement.tagName === 'I') {
        targetElement = targetElement.parentNode;
      }

      const alertElement = targetElement.closest('.alert');

      if (alertElement) {
        slideUp(alertElement, 200);
        setTimeout(() => {
          alertElement.remove();
        }, 200);
      }
    });
  });

  // collapse component
  // Select a bnll elements with the attribute 'data-pc-toggle="collapse"'
  var toggleElements = document.querySelectorAll('[data-pc-toggle="collapse"]');


  // Utility function to find the closest parent toggle element
  function getToggleElement(targetElement) {
    if (['I', 'svg', 'SPAN'].includes(targetElement.tagName)) {
      return targetElement.parentNode;
    }
    if (targetElement.tagName === 'use') {
      return targetElement.parentNode.parentNode;
    }
    return targetElement;
  }

  // Utility function to get target elements
  function getTargets(targetElement) {
    const targetSelector = targetElement.getAttribute('data-pc-target') || targetElement.getAttribute('href');
    return document.querySelectorAll(targetSelector);
  }

  // Utility function to handle collapsible child elements
  function handleCollapsibleChildren(target) {
    if (target.getAttribute('data-pc-parent')) {
      const parentSelector = target.getAttribute('data-pc-parent');
      const childElements = document.querySelectorAll(`${parentSelector} .show`);

      childElements.forEach((child) => {
        child.classList.remove('show');
        if (child.getAttribute('data-pc-parent')) {
          slideUp(child, 300);
          removeCSS(child);
          child.classList.add('hidden');
        }
      });
    }
  }

  // Main event listener for toggle elements
  toggleElements.forEach((toggleElement) => {
    toggleElement.addEventListener('click', (event) => {
      // Prevent default action
      event.preventDefault();

      // Get the actual toggle element
      let targetElement = getToggleElement(event.target);

      // Get the elements to toggle
      const targets = getTargets(targetElement);

      // Iterate over each target element
      targets.forEach((target) => {
        // Handle collapsible child elements if needed
        handleCollapsibleChildren(target);

        // Toggle visibility
        if (target.classList.contains('show')) {
          slideUp(target, 300);
          target.classList.remove('show');
          targetElement.classList.remove('show');
          removeCSS(target);
          target.classList.add('hidden');
        } else {
          slideDown(target, 300);
          target.classList.add('show');
          targetElement.classList.add('show');
        }
      });
    });
  });


  //  Removes inline styles from the target elements after a delay.
  function removeCSS(targets) {
    window.setTimeout(() => {
      if (Array.isArray(targets)) {
        targets.forEach((target) => {
          target.removeAttribute('style');
        });
      } else {
        targets.removeAttribute('style');
      }
    }, 500);
  }

  // dropdown component
  let drpopen = false;
  const dropdownToggles = document.querySelectorAll('[data-pc-toggle="dropdown"]');
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      let targetElement = event.target;

      // Traverse up to find the correct element
      while (targetElement && !targetElement.hasAttribute('data-pc-toggle')) {
        targetElement = targetElement.parentNode;
      }

      const dropdownMenu = targetElement.parentNode.querySelector('.dropdown-menu');
      const isMenucenter = dropdownMenu.classList.contains('dropdown-center');
      const isMenuEnd = dropdownMenu.classList.contains('dropdown-menu-end');
      var placement;
      if (isMenucenter) {
        placement = isMenuEnd ? 'bottom' : 'bottom';
      } else {
        placement = isMenuEnd ? 'bottom-end' : 'bottom-start';
      }

      if (targetElement.parentNode.classList.contains('drp-show')) {
        drpclose();
      } else {
        if (drpopen) {
          drpclose();
        }
        Popper.createPopper(targetElement, dropdownMenu, { placement, boundary: 'clippingParents', });
        targetElement.parentNode.classList.add('drp-show');
        setTimeout(() => {
          drpopen = true;
        }, 200);
      }
    });
  });

  window.addEventListener('click', (event) => {
    if (drpopen && !event.target.closest('.dropdown-menu')) {
      drpclose();
    }
  });

  function drpclose() {
    dropdownToggles.forEach((toggle) => {
      toggle.parentNode.classList.remove('drp-show');
      const dropdownMenu = toggle.parentNode.querySelector('.dropdown-menu');
      dropdownMenu.removeAttribute('style');
    });
    drpopen = false;
  }

  // offcanvas component
  const toggleButtons = document.querySelectorAll('[data-pc-toggle="offcanvas"]');
  const dismissButtons = document.querySelectorAll('[data-pc-dismiss]');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let targetElement = event.target;

      // Traverse up to find the correct element
      while (!targetElement.hasAttribute('data-pc-toggle') && targetElement.parentNode) {
        targetElement = targetElement.parentNode;
      }

      const targetSelector = targetElement.getAttribute('data-pc-target') || targetElement.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (target) target.classList.add('show');

      // Add backdrop if not already present
      let backdrop = document.getElementById('offcanvasoverlay');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 bg-gray-900/20 z-[1027] backdrop-blur-sm';
        backdrop.id = 'offcanvasoverlay';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', offcanvasclose);
      }
    });
  });

  dismissButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let targetElement = event.target;

      // Traverse up to find the correct element
      while (!targetElement.hasAttribute('data-pc-dismiss') && targetElement.parentNode) {
        targetElement = targetElement.parentNode;
      }

      const targetSelector = targetElement.getAttribute('data-pc-dismiss');
      const target = document.querySelector(targetSelector);
      if (target) target.classList.remove('show');

      // Remove backdrop if present
      const backdrop = document.getElementById('offcanvasoverlay');
      if (backdrop) backdrop.remove();
    });
  });

  // modal component
  // Select all elements with the attribute 'data-pc-toggle="modal"' and attach event listeners
  const modalToggles = document.querySelectorAll('[data-pc-toggle="modal"]');
  modalToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the actual target element, adjusting if clicked on an inner element
      let targetElement = event.target;
      if (['I', 'svg', 'SPAN'].includes(targetElement.tagName)) {
        targetElement = targetElement.parentNode;
      }
      if (targetElement.tagName === 'use') {
        targetElement = targetElement.parentNode.parentNode;
      }

      // Determine the modal element to show
      let targetModal;
      if (targetElement.getAttribute('data-pc-target')) {
        targetModal = document.querySelector(targetElement.getAttribute('data-pc-target'));
      } else {
        targetModal = document.querySelector(targetElement.getAttribute('href'));
      }
      if (targetElement.getAttribute('data-pc-animate')) {
        var animateClass = targetElement.getAttribute('data-pc-animate');
        targetModal.classList.add('anim-' + animateClass);
      }

      // Display the modal and apply animations
      targetModal.classList.add('show');
      setTimeout(() => {
        targetModal.classList.add('animate');
      }, 100);

      // Check for existing overlay, otherwise create one
      let backDropOverlay = document.getElementById('modaloverlay');
      if (!backDropOverlay) {
        backDropOverlay = document.createElement('div');
        backDropOverlay.className = 'fixed inset-0 bg-gray-900/20 z-[1028] backdrop-blur-sm';
        backDropOverlay.id = 'modaloverlay';
        document.body.appendChild(backDropOverlay);
        document.body.classList.add('modal-open');

        // Close modal if overlay is clicked
        backDropOverlay.addEventListener('click', modalclose);
      }
    });
  });

  // Attach event listeners to elements that can dismiss the modal
  const modalDismissals = document.querySelectorAll('[data-pc-modal-dismiss]');
  modalDismissals.forEach((dismissal) => {
    dismissal.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the actual target element, adjusting if clicked on an inner element
      let targetElement = event.target;
      if (targetElement.tagName === 'I') {
        targetElement = targetElement.parentNode;
      }

      // Determine the modal element to hide
      let targetModal = document.querySelector(targetElement.getAttribute('data-pc-modal-dismiss'));

      // Hide the modal and remove animations
      targetModal.classList.remove('animate');
      setTimeout(() => {
        targetModal.classList.remove('show');
        document.body.classList.remove('modal-open');

        removeClassByPrefix(targetModal, 'anim-');

        // Remove the overlay if it exists
        let backDropOverlay = document.getElementById('modaloverlay');
        if (backDropOverlay) {
          backDropOverlay.remove();
        }
      }, 300);
    });
  });

  // Close modal when clicking outside of modal content
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (!document.querySelector('.modal.show .modal-content').contains(event.target)) {
        modalclose();
      }
    });
  });

  // tab component
  document.querySelectorAll('.nav-tabs').forEach(function (event) {
    event.querySelectorAll('[data-pc-toggle="tab"]').forEach(function (tabItem) {
      tabItem.addEventListener('click', function () {
        var pcTargetTabID = tabItem.getAttribute('data-pc-target');
        var pcTabContents = document.getElementById(pcTargetTabID)?.parentElement.querySelectorAll('.tab-pane');
        if (pcTabContents) {
          var activeTabItem = event.querySelector('li.active');
          if (activeTabItem) activeTabItem.classList.remove('active');
          for (let i = 0; i < pcTabContents.length; i++) {
            pcTabContents[i].classList.add('hidden');
            pcTabContents[i].classList.remove('block');
          }
          tabItem.parentElement.classList.add('active');
          document.getElementById(pcTargetTabID).classList.remove('hidden');
          document.getElementById(pcTargetTabID).classList.add('block');
        }
      });
    });
  });

  // reposive navbar collapse

  // main-navbar-collapse

  // Select a bnll elements with the attribute 'data-pc-toggle="collapse"'
  var toggleElements = document.querySelectorAll('[data-pc-toggle="nav-collapse"]');

  // Iterate over each toggle element and add a click event listener
  toggleElements.forEach((toggleElement) => {
    toggleElement.addEventListener('click', (event) => {
      // Prevent the default action
      event.preventDefault();

      // Get the target element of the click event
      var targetElement = event.target;

      // Traverse up to find the actual toggle element if the target is an inner element
      if (['I', 'svg', 'SPAN'].includes(targetElement.tagName)) {
        targetElement = targetElement.parentNode;
      }
      if (targetElement.tagName === 'use') {
        targetElement = targetElement.parentNode.parentNode;
      }

      // Determine the target elements to be toggled
      var targets;
      if (targetElement.getAttribute('data-pc-target')) {
        targets = document.querySelectorAll(targetElement.getAttribute('data-pc-target'));
      } else {
        targets = document.querySelectorAll(targetElement.getAttribute('href'));
      }
      // Iterate over each target element and toggle its visibility

      targets.forEach((target) => {
        // Toggle the target element's visibility
        if (target.classList.contains('nav-show')) {
          target.classList.remove('nav-show');
          targetElement.classList.remove('nav-show');
        } else {
          target.classList.add('nav-show');
          targetElement.classList.add('nav-show');
        }
      });
    });
  });
});
// Function to close the modal and remove the overlay
function modalclose() {
  document.body.classList.remove('modal-open');
  const activeModal = document.querySelector('.modal.show');

  if (activeModal) {
    activeModal.classList.remove('animate');
    setTimeout(() => {
      activeModal.classList.remove('show');
      removeClassByPrefix(activeModal, 'anim-');

      // Remove the overlay if it exists
      const backDropOverlay = document.getElementById('modaloverlay');
      if (backDropOverlay) {
        backDropOverlay.remove();
      }
    }, 300);
  }
}
function offcanvasclose() {
  const offcanvasElements = document.querySelectorAll('.offcanvas');
  const overlay = document.getElementById('offcanvasoverlay');

  offcanvasElements.forEach((offcanvas) => {
    offcanvas.classList.remove('show');
  });

  if (overlay) {
    overlay.remove();
  }
}
// -----------------------------
// tooltip
const tooltipElements = document.querySelectorAll('[data-pc-toggle="tooltip"]');

tooltipElements.forEach((element) => {
  // Add event listener for when the mouse enters the element
  element.addEventListener('mouseenter', (event) => {
    const targetElement = event.target;

    // Get the tooltip text and placement from the element's attributes
    const tooltipText = targetElement.getAttribute('data-pc-title');
    const tooltipPlacement = targetElement.getAttribute('data-pc-placement');

    // Create the tooltip template
    const tooltipTemplate = `
      <div class="flex items-center p-1 z-[1024]" role="tooltip">
        <span class="relative max-w-48 rounded-lg  py-1 px-2 text-xs text-primary-100  whitespace-normal text-center bg-primary-900">
          ${tooltipText}
        </span>
      </div>
    `;

    // Create a new div element to hold the tooltip and set its inner HTML to the template
    const tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'pctooltip');
    tooltip.innerHTML = tooltipTemplate;
    tooltip.classList.add('z-[1024]');

    // Initialize the tooltip with Popper.js for positioning
    Popper.createPopper(targetElement, tooltip, {
      placement: tooltipPlacement,
      delay: 0, // No delay for showing the tooltip
      animation: true, // Enables animation for the tooltip
      boundary: 'clippingParents' // Restricts tooltip to visible boundaries
    });

    // Append the tooltip to the body
    document.body.appendChild(tooltip);
  });

  // Add event listener for when the mouse leaves the element
  element.addEventListener('mouseleave', () => {
    // Remove the tooltip if it exists
    const existingTooltip = document.getElementById('pctooltip');
    if (existingTooltip) {
      existingTooltip.remove();
    }
  });
});
// -----------------------------4
