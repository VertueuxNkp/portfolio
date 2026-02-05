let navLink = document.getElementById("navBarLink")
let openBtn = document.getElementById("openBtn")
let closeBtn = document.getElementById("closeBtn")

openBtn.addEventListener('click', ()=>{
    navLink.style.display = 'block';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', ()=>{
    navLink.style.display = 'none';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none'
})


// Configuration de l'observateur
const observerOptions = {
  root: null, // par rapport à la fenêtre
  rootMargin: '0px 0px -100px 0px', // Déclenche 100px avant d'arriver
  threshold: 0.1 // Quand 10% est visible
};

// Créer l'observateur
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Optionnel : Arrêter d'observer après animation
      // observer.unobserve(entry.target);
    }
    // Optionnel : Pour animer aussi à la sortie
    // else {
    //   entry.target.classList.remove('revealed');
    // }
  });
}, observerOptions);

// Observer tous les blocs
document.querySelectorAll('.reveal-block').forEach(block => {
  observer.observe(block);
});