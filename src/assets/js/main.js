document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      mainNav.setAttribute('data-expanded', !expanded);
    });
  }

  // Add decorative shapes (Wilf & Friends inspired style)
  const bookPage = document.querySelector('.book-page');
  if (bookPage) {
    // Add decorative shapes
    const shapes = [
      { className: 'decorative-shape circle1' },
      { className: 'decorative-shape circle2' },
      { className: 'decorative-shape blob1' }
    ];

    shapes.forEach(shape => {
      const element = document.createElement('div');
      element.className = shape.className;
      bookPage.appendChild(element);
    });
  }

  // Fun interactive elements for kids
  const plantCards = document.querySelectorAll('.plant-card');
  
  plantCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) rotate(1deg)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotate(0)';
    });
  });

  // Button interaction
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}); 