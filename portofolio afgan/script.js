// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    }
});

// ============================================
// AOS ANIMATION INIT
// ============================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Hamburger menu
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// TYPING EFFECT - Lebih keren
// ============================================
class TypingEffect {
    constructor(element, phrases, speed = 80, delay = 2000) {
        this.element = element;
        this.phrases = phrases;
        this.speed = speed;
        this.delay = delay;
        this.currentPhrase = 0;
        this.isDeleting = false;
        this.text = '';
        this.type();
    }
    
    type() {
        const current = this.currentPhrase % this.phrases.length;
        const fullText = this.phrases[current];
        
        if (this.isDeleting) {
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }
        
        this.element.textContent = this.text;
        
        let speed = this.speed;
        if (this.isDeleting) {
            speed /= 2;
        }
        
        if (!this.isDeleting && this.text === fullText) {
            speed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.currentPhrase++;
            speed = 500;
        }
        
        setTimeout(() => this.type(), speed);
    }
}

// Initialize typing - kata-kata lebih keren
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const phrases = [
        'Web Developer ✦',
        'UI/UX Enthusiast ✦',
        'Vibe Coder ✦',
        'Creative Thinker ✦',
        'Problem Solver ✦'
    ];
    new TypingEffect(typingElement, phrases, 100, 2000);
}

// ============================================
// SCROLL TO TOP
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO SHAPES
// ============================================
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = 20 + index * 10;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// ============================================
// PROJECT CARD 3D TILT EFFECT (Desktop only)
// ============================================
if (window.innerWidth > 768) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = 
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// CONSOLE WELCOME - Dengan kata-kata keren
// ============================================
console.log('%c✦ AFGAN PORTFOLIO ✦', 'font-size: 28px; font-weight: bold; color: #6c5ce7; text-align: center;');
console.log('%c💜 "Membangun masa depan digital, satu baris kode pada satu waktu."', 'font-size: 14px; color: #2d2d3d; font-style: italic;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'font-size: 12px; color: #6c5ce7;');
console.log('%c📧 Email   : afganarinalhak19@gmail.com', 'font-size: 14px; color: #2d2d3d;');
console.log('%c📱 TikTok  : @aganishere', 'font-size: 14px; color: #2d2d3d;');
console.log('%c📞 Telepon : 0855-4520-0134', 'font-size: 14px; color: #2d2d3d;');
console.log('%c🔗 MY NOTES: https://jolly-rugelach-62aa66.netlify.app/', 'font-size: 14px; color: #2d2d3d;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'font-size: 12px; color: #6c5ce7;');
console.log('%c✨ Mari berkolaborasi dan ciptakan sesuatu yang luar biasa! ✨', 'font-size: 14px; color: #6c5ce7; font-weight: bold;');

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Press 'H' for Home, 'P' for Projects, 'C' for Contact
    if (e.key === 'h' || e.key === 'H') {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (e.key === 'p' || e.key === 'P') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
});