/**
 * Medical Device Website - Main JavaScript
 * Handles: Mobile menu, sidebar accordion, tabs, and other interactions
 */

document.addEventListener('DOMContentLoaded', function () {
  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // ============================================
  // Sidebar Accordion
  // ============================================
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebarItems.forEach(item => {
    const link = item.querySelector('.sidebar-link');
    const submenu = item.querySelector('.sidebar-submenu');

    if (link && submenu) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        item.classList.toggle('open');
      });
    }
  });

  // ============================================
  // Product Tabs
  // ============================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const tabId = this.dataset.tab;

      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active to clicked
      this.classList.add('active');
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // ============================================
  // Sticky Header Shadow
  // ============================================
  const header = document.querySelector('.main-header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }
    });
  }

  // ============================================
  // Dropdown Menu (Desktop)
  // ============================================
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      // Add arrow indicator if not present
      const link = item.querySelector('.nav-link');
      if (link && !link.querySelector('.arrow')) {
        // Arrow already in HTML
      }
    }
  });

  // ============================================
  // Form Validation (Basic)
  // ============================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Show simple success message
      alert('Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.');

      // Reset form
      this.reset();
    });
  }

  // ============================================
  // Newsletter Form
  // ============================================
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Đăng ký thành công! Bạn sẽ nhận được thông tin mới nhất qua email.');
      this.reset();
    });
  });

  // ============================================
  // Product Gallery Thumbnails
  // ============================================
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image .img-placeholder');

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', function () {
      // Remove active from all thumbnails
      thumbnails.forEach(t => t.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');

      // Update main image (placeholder will show number)
      if (mainImage) {
        mainImage.innerHTML = `<span>📸</span><p>Ảnh sản phẩm ${index + 1}</p>`;
      }
    });
  });

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
        const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
        const offset = headerHeight + topBarHeight + 20;

        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Hero Slider (Basic)
  // ============================================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
    });

    if (slides[index]) {
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
    }
  }

  // Auto-advance slides
  if (slides.length > 1) {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  // Dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  console.log('Medical Device Website initialized successfully');
});
