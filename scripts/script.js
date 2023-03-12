document.addEventListener('DOMContentLoaded', () => {

    // Dynamic Text Field Placeholder

    var text_fields = document.querySelectorAll('.text-field');

    text_fields.forEach(text_field => {

        text_field.addEventListener('focus', (e) => {
            console.log(text_field.nextSibling.nextElementSibling);
            text_field.nextSibling.nextElementSibling.classList.add('placeholder-sm');
        });

        text_field.addEventListener('focusout', (e) => {
            if (!text_field.value) {
                console.log(text_field.nextSibling.nextElementSibling);
                text_field.nextSibling.nextElementSibling.classList.remove('placeholder-sm');
            }
        });
    });
    
});