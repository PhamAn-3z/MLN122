// 1. Hiệu ứng Scroll Progress Bar (Thanh tiến trình đọc)
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";

    // 2. Tự động cập nhật menu active khi cuộn
    updateActiveMenu();
};

// 3. Scroll Reveal Effect (Hiện hình khi cuộn trang)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// 4. Smooth Scrolling cho các liên kết menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// 5. Cập nhật trạng thái Active trên Menu
function updateActiveMenu() {
    let fromTop = window.scrollY + 100;
    document.querySelectorAll('nav ul li a').forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

console.log("Modern Philosophy Web initialized with Advanced Effects!");
