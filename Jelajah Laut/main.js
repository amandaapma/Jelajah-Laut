// Toggle menu navbar (biar tetap jalan)
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Fitur cari fauna laut ke Wikipedia
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('wikiSearch');

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query) {
        const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;
        window.open(url, '_blank'); // Buka di tab baru
      }
    }
  });
});

