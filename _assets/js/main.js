// Starts and initializes the pjax library, barba in order to create faster experience
// Yes it gracefully degrades!
Barba.Pjax.start();
Barba.Prefetch.init();

// iife to keep variables from poluting the global namespace

// Grabbing mobile menu elements 
const mobileMenuButton = document.getElementById('mobile-menu-button')
, closeButton       = document.getElementById('overlay-close')
, contentPush        = document.getElementById('overlay-contentpush')
, menuItems          = document.getElementById('menu-items')
, container          = document.getElementById('container');

// Classes to slide in and slide out the menu 
// as well as toggle and push content underneath for extra wow.
function toggleMenu(e) {
  container.classList.toggle('overlay-open');
  contentPush.classList.toggle('open');
  // Stops event from bubbling the rest of the way up to be more efficient.
  e.stopProgation;
};

// Adds event listener to mobile menu items so that when clicked the mobile menu closes.
menuItems.addEventListener('click', (e) => toggleMenu(e));

// Listens for clicks on the mobile menu button to open the mobile menu.
mobileMenuButton.addEventListener('click', (e) => toggleMenu(e));

// Listens for clicks on the mobile menu's close button and closes it.
closeButton.addEventListener('click', (e) => toggleMenu(e));

function initHomepageSlider() {
  
  // Sieam Slier
  const mySiema = new Siema({
    duration: 200
    , draggable: false
    , loop: true
    , perPage: 2
  });
  
  const prevTwo = document.querySelector('.prev-two');
  const nextTwo = document.querySelector('.next-two');
  
  prevTwo.addEventListener('click', () => mySiema.prev(2));
  nextTwo.addEventListener('click', () => mySiema.next(2));
}
initHomepageSlider();

function initHomepageTestimonials() {
  // Sieam Slier
  const mySiema = new Siema({
    duration: 200
    , draggable: false
    , loop: true
    , selector: '.testimonials'
  });
  
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  
  prev.addEventListener('click', () => mySiema.prev(1));
  next.addEventListener('click', () => mySiema.next(1));
}
initHomepageTestimonials();

// This hooks into Barba lifecycle. So when data-namespace='homepage' element 
// is loaded the contained functions are fired.
const Homepage = Barba.BaseView.extend({
  namespace: 'homepage'
  , onEnter: function() {
    initHomepageSlider();
    initHomepageTestimonials();
  }
});
Homepage.init();
