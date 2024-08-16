// scripts.js

// Example of interactive functionality: Change the background color on button hover
document.querySelector('.cta').addEventListener('mouseenter', function() {
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #0f3460)';
});

document.querySelector('.cta').addEventListener('mouseleave', function() {
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
});


//Animation after Onlick
$(document).ready(function() {
    $('a').click(function(event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr('href'); // Get the href of the link
        $('body').fadeOut(500, function() {
            window.location.href = url; // Redirect after fade out
        });
    });
});

// Burger Menu when Tablet and Mobile View
document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Burger Menu shows navigation
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.getElementById('navbar');

    if (!burgerMenu || !navbar) {
        console.error('Burger menu or navbar element not found');
        return;
    }

    burgerMenu.addEventListener('click', function() {
        console.log('Burger menu clicked'); // For debugging
        navbar.classList.toggle('active');
    });
});

//Click to expand animation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const details = this.querySelector('.project-details');
        details.style.display = 'block';
    });
});
