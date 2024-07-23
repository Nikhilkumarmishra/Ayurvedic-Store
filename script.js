$(document).ready(function() {
    // Initialize the carousels
    $('.carousel').carousel({
        interval: 5000, // Adjust the interval for sliding speed
        wrap: true
    });

    // Typewriter effect for the contact section text
    let typewriterElement = $('.typewriter-effect');
    let text = typewriterElement.text();
    typewriterElement.text('');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.append(text.charAt(i));
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        }
    }

    typeWriter();
});
