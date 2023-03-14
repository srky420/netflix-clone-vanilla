document.addEventListener('DOMContentLoaded', () => {

    // Dynamic Text Field Placeholder

    var text_fields = document.querySelectorAll('.text-field');

    text_fields.forEach(text_field => {

        text_field.addEventListener('focus', (e) => {
            text_field.nextSibling.nextElementSibling.classList.add('placeholder-sm');
        });

        text_field.addEventListener('focusout', (e) => {
            if (!text_field.value) {
                text_field.nextSibling.nextElementSibling.classList.remove('placeholder-sm');
            }
        });
    });

    // Accordions

    var accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.querySelector('.accordion-outer').addEventListener('click', (e) => {
            var inner = accordion.querySelector('.accordion-inner');
            var svgs = accordion.querySelector('.accordion-outer').querySelectorAll('svg');

            svgs.forEach(svg => {
                svg.classList.toggle('hidden');
            });

            inner.classList.toggle('accordion-hidden');
        });
    });

});