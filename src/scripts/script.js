// ── DARK MODE ──
function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
        document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }
    // Restore saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeBtn').textContent = '☀️';
    }

    // ── SMOOTH SCROLL for all anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile nav if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navMenu)?.hide();
            }
        });
    });

// const announcement = document.querySelector('.announcement');

// setInterval(() => {
//     if (announcement.style.display === "none") {
//         announcement.style.display = "block";
//     } else {
//         announcement.style.display = "none";
//     }
// }, 3000); // 3 seconds

document.addEventListener("DOMContentLoaded", function () {

    const announcementText = document.querySelector('.announcement-text');

    let pos = window.innerWidth;
    const speed = window.innerWidth < 768 ? 0.5 : 1; // Slower on mobile

    setInterval(() => {
        pos -= speed;

        if (pos < -announcementText.offsetWidth) {
            pos = window.innerWidth;
        }

        announcementText.style.left = pos + "px";
    }, 10);

});
   
