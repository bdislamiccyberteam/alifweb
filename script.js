/* =============================================
   Alif Technology And Training Academy
   Portfolio Website - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Preloader ----------
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) preloader.classList.add('hidden');
        }, 800);
    });
    // Fallback: hide preloader after 3 seconds
    setTimeout(() => {
        if (preloader) preloader.classList.add('hidden');
    }, 3000);

    // ---------- Visitor Counter & Dynamic Sync ----------
    try {
        let currentVisits = parseInt(localStorage.getItem('alif_site_visits') || '120', 10);
        localStorage.setItem('alif_site_visits', currentVisits + 1);
        syncDataFromStorage();
    } catch (e) {
        console.error('Storage sync error:', e);
    }

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar shadow
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to top button
        if (backToTop) {
            if (scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        // Active nav link based on scroll
        updateActiveNavLink();
    });

    // ---------- Back to Top ----------
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- Mobile Nav Toggle ----------
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close nav on link click (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ---------- Active Nav Link ----------
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height && navLinks) {
                navLinks.querySelectorAll('a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ---------- Counter Animation ----------
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
            const duration = 2000;
            const step = Math.max(1, target / (duration / 16));
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });

        countersAnimated = true;
    }

    // Trigger counter animation when hero section is in view
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    const heroSection = document.getElementById('home');
    if (heroSection) heroObserver.observe(heroSection);

    // ---------- Scroll Reveal Animation ----------
    const revealElements = document.querySelectorAll('.course-card, .feature-card, .contact-card, .eligibility-item, .document-item, .gallery-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
        revealObserver.observe(el);
    });

    // ---------- Hero Particles ----------
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('hero-particle');
            const size = Math.random() * 8 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }
    }

    // ---------- Admission Form Submission (Connected to Admin Panel) ----------
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = admissionForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;

            const name = document.getElementById('appInputName') ? document.getElementById('appInputName').value.trim() : '';
            const phone = document.getElementById('appInputPhone') ? document.getElementById('appInputPhone').value.trim() : '';
            const email = document.getElementById('appInputEmail') ? document.getElementById('appInputEmail').value.trim() : '';
            const course = document.getElementById('appInputCourse') ? document.getElementById('appInputCourse').value : '';
            const message = document.getElementById('appInputMsg') ? document.getElementById('appInputMsg').value.trim() : '';

            // Save to localStorage for Admin Panel
            try {
                const subs = JSON.parse(localStorage.getItem('alif_submissions') || '[]');
                subs.push({
                    id: Date.now(),
                    name: name,
                    phone: phone,
                    email: email,
                    course: course,
                    message: message,
                    date: new Date().toLocaleString()
                });
                localStorage.setItem('alif_submissions', JSON.stringify(subs));
            } catch (err) {
                console.error('Error saving submission:', err);
            }

            // Simulate UI submission
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> জমা হচ্ছে...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> সফলভাবে জমা হয়েছে!';
                btn.style.background = '#25d366';

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    admissionForm.reset();
                }, 3000);
            }, 1000);
        });
    }

    // ---------- Gallery Lightbox ----------
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;

            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.9); display: flex; align-items: center;
                justify-content: center; z-index: 10000; cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;

            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.style.cssText = `
                max-width: 90%; max-height: 90vh; border-radius: 12px;
                box-shadow: 0 16px 48px rgba(0,0,0,0.5);
                animation: scaleIn 0.3s ease;
            `;

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '<i class="fas fa-times"></i>';
            closeBtn.style.cssText = `
                position: absolute; top: 20px; right: 20px;
                width: 44px; height: 44px; background: rgba(255,255,255,0.1);
                border: none; border-radius: 50%; color: white; font-size: 20px;
                cursor: pointer; display: flex; align-items: center;
                justify-content: center; transition: all 0.3s;
            `;
            closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255,255,255,0.2)';
            closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(255,255,255,0.1)';

            overlay.appendChild(bigImg);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            const closeLightbox = () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                    document.body.style.overflow = '';
                }, 300);
            };

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeLightbox();
            });
            closeBtn.addEventListener('click', closeLightbox);
            document.addEventListener('keydown', function handler(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', handler);
                }
            });
        });
    });

    // ---------- Smooth Scroll for Nav Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- Sync Data from LocalStorage (Dynamic Admin Updates) ----------
    function syncDataFromStorage() {
        // Hero
        const heroData = JSON.parse(localStorage.getItem('alif_hero') || 'null');
        if (heroData) {
            const badgeEl = document.querySelector('.hero-badge');
            if (badgeEl && heroData.badge) badgeEl.innerHTML = `<i class="fas fa-award"></i> ${heroData.badge}`;
            const t1 = document.querySelector('.hero-title-line1');
            if (t1 && heroData.title1) t1.textContent = heroData.title1;
            const t2 = document.querySelector('.hero-title-line2');
            if (t2 && heroData.title2) t2.textContent = heroData.title2;
            const sub = document.querySelector('.hero-subtitle');
            if (sub && heroData.subtitle) sub.textContent = heroData.subtitle;
            const desc = document.querySelector('.hero-desc');
            if (desc && heroData.desc) desc.textContent = heroData.desc;
            if (heroData.stats) {
                const statNums = document.querySelectorAll('.hero-stats .stat-number');
                if (statNums.length >= 4) {
                    statNums[0].setAttribute('data-target', heroData.stats.students);
                    statNums[1].setAttribute('data-target', heroData.stats.courses);
                    statNums[2].setAttribute('data-target', heroData.stats.trainers);
                    statNums[3].setAttribute('data-target', heroData.stats.success);
                }
            }
        }

        // Announcement
        const annData = JSON.parse(localStorage.getItem('alif_announcement') || 'null');
        if (annData) {
            const annSec = document.querySelector('.announcement');
            if (annSec) {
                if (annData.enabled === false) {
                    annSec.style.display = 'none';
                } else {
                    annSec.style.display = 'block';
                    const marqueeText = document.querySelector('.marquee-text');
                    if (marqueeText && annData.text) marqueeText.textContent = annData.text;
                }
            }
        }

        // About
        const aboutData = JSON.parse(localStorage.getItem('alif_about') || 'null');
        if (aboutData) {
            const aboutH3 = document.querySelector('.about-text h3');
            if (aboutH3 && aboutData.title) aboutH3.textContent = aboutData.title;
            const paras = document.querySelectorAll('.about-text p');
            if (paras[0] && aboutData.para1) paras[0].textContent = aboutData.para1;
            if (paras[1] && aboutData.para2) paras[1].textContent = aboutData.para2;
        }

        // Courses
        const coursesData = JSON.parse(localStorage.getItem('alif_courses') || 'null');
        if (coursesData && Array.isArray(coursesData) && coursesData.length > 0) {
            const coursesGrid = document.querySelector('.courses-grid');
            const courseSelect = document.getElementById('appInputCourse');
            if (coursesGrid) {
                coursesGrid.innerHTML = '';
                if (courseSelect) {
                    courseSelect.innerHTML = '<option value="">কোর্স নির্বাচন করুন *</option>';
                }
                coursesData.forEach((c, idx) => {
                    if (c.status === 'inactive') return;
                    const numStr = (idx + 1).toString().padStart(2, '0');
                    const topicsList = Array.isArray(c.topics) ? c.topics : (c.topics ? c.topics.split(',') : []);
                    const topicsHtml = topicsList.map(t => `<span>${t.trim()}</span>`).join('');
                    
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    card.innerHTML = `
                        <div class="course-icon"><i class="${c.icon || 'fas fa-laptop'}"></i></div>
                        <div class="course-number">${numStr}</div>
                        <h3 class="course-title">${c.name}</h3>
                        <p class="course-title-bn">${c.nameBn || ''}</p>
                        <ul class="course-details">
                            <li><i class="fas fa-clock"></i> কোর্সের মেয়াদ: ${c.duration}</li>
                            <li><i class="fas fa-users"></i> আসন সংখ্যা: ${c.seats}</li>
                            <li><i class="fas fa-certificate"></i> ${c.cert}</li>
                            <li><i class="fas fa-money-bill-wave"></i> ${c.stipend}</li>
                        </ul>
                        <div class="course-topics">${topicsHtml}</div>
                        <a href="#admission" class="btn btn-course">ভর্তি হোন <i class="fas fa-arrow-right"></i></a>
                    `;
                    coursesGrid.appendChild(card);

                    if (courseSelect) {
                        const opt = document.createElement('option');
                        opt.value = c.name;
                        opt.textContent = `${c.name} (${c.nameBn || ''})`;
                        courseSelect.appendChild(opt);
                    }
                });
            }
        }

        // Features
        const featData = JSON.parse(localStorage.getItem('alif_features') || 'null');
        if (featData && Array.isArray(featData) && featData.length > 0) {
            const featGrid = document.querySelector('.features-grid');
            if (featGrid) {
                featGrid.innerHTML = '';
                featData.forEach(f => {
                    const fCard = document.createElement('div');
                    fCard.className = 'feature-card';
                    fCard.innerHTML = `
                        <div class="feature-icon"><i class="${f.icon || 'fas fa-check'}"></i></div>
                        <h3>${f.title}</h3>
                        <p>${f.desc}</p>
                    `;
                    featGrid.appendChild(fCard);
                });
            }
        }

        // Contact
        const conData = JSON.parse(localStorage.getItem('alif_contact') || 'null');
        if (conData) {
            const cards = document.querySelectorAll('.contact-card');
            if (cards.length >= 4) {
                if (conData.address) cards[0].querySelector('p').innerHTML = conData.address.replace(/\n/g, '<br>');
                if (conData.phone1 || conData.phone2) {
                    cards[1].innerHTML = `
                        <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                        <h3>ফোন</h3>
                        <p><a href="tel:${conData.phone1}">${conData.phone1}</a></p>
                        <p><a href="tel:${conData.phone2}">${conData.phone2}</a></p>
                    `;
                }
                if (conData.email1 || conData.email2) {
                    cards[2].innerHTML = `
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <h3>ইমেইল</h3>
                        <p><a href="mailto:${conData.email1}">${conData.email1}</a></p>
                        <p><a href="mailto:${conData.email2}">${conData.email2}</a></p>
                    `;
                }
                if (conData.days || conData.hours) {
                    cards[3].innerHTML = `
                        <div class="contact-icon"><i class="fas fa-clock"></i></div>
                        <h3>কার্যদিবস</h3>
                        <p>${conData.days || ''}</p>
                        <p>${conData.hours || ''}</p>
                        <p class="text-muted">${conData.off || ''}</p>
                    `;
                }
            }
            if (conData.whatsapp) {
                const waFloat = document.querySelector('.whatsapp-float');
                if (waFloat) waFloat.href = `https://wa.me/${conData.whatsapp}?text=আলিফ%20টেকনোলজিতে%20ভর্তি%20সম্পর্কে%20জানতে%20চাই`;
            }
        }
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(style);

});
