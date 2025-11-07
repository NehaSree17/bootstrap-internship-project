// js/main.js - small helpers
document.addEventListener('DOMContentLoaded', function() {
  // update year elements
  const years = document.querySelectorAll('#year, #year2, #year3');
  years.forEach(el => el && (el.textContent = new Date().getFullYear()));

  // Bootstrap form validation
  (function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
});
