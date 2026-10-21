/* =============================================
   Admin Panel JavaScript
   Alif Technology And Training Academy
   ============================================= */

// Default Seed Data
const DEFAULT_COURSES = [
    {
        id: 1,
        name: "Web Design",
        nameBn: "ওয়েব ডিজাইন",
        icon: "fas fa-code",
        duration: "৩ মাস (৩৬০ ঘন্টা)",
        seats: "২৪ জন",
        cert: "NSDA সনদপত্র",
        stipend: "১১,৭০০/- টাকা বৃত্তি",
        topics: ["HTML", "CSS", "JavaScript", "WordPress"],
        status: "active"
    },
    {
        id: 2,
        name: "Professional Digital Content Management",
        nameBn: "ডিজিটাল কন্টেন্ট ম্যানেজমেন্ট",
        icon: "fas fa-photo-video",
        duration: "৩ মাস (৩৬০ ঘন্টা)",
        seats: "২৪ জন",
        cert: "NSDA সনদপত্র",
        stipend: "১১,৭০০/- টাকা বৃত্তি",
        topics: ["Content Creation", "SEO", "Social Media"],
        status: "active"
    },
    {
        id: 3,
        name: "CCTV Camera Installation & Maintenance",
        nameBn: "সিসিটিভি ক্যামেরা ইন্সটলেশন ও মেইনটেন্যান্স",
        icon: "fas fa-video",
        duration: "৩ মাস (৩৬০ ঘন্টা)",
        seats: "২৪ জন",
        cert: "NSDA সনদপত্র",
        stipend: "১১,৭০০/- টাকা বৃত্তি",
        topics: ["IP Camera", "DVR/NVR", "Networking"],
        status: "active"
    },
    {
        id: 4,
        name: "Professional Customer Service",
        nameBn: "প্রফেশনাল কাস্টমার সার্ভিস",
        icon: "fas fa-headset",
        duration: "৩ মাস (৩৬০ ঘন্টা)",
        seats: "২৪ জন",
        cert: "NSDA সনদপত্র",
        stipend: "১১,৭০০/- টাকা বৃত্তি",
        topics: ["Communication", "CRM", "Problem Solving"],
        status: "active"
    },
    {
        id: 5,
        name: "Laptop Servicing & Maintenance",
        nameBn: "ল্যাপটপ সার্ভিসিং এন্ড মেইনটেন্যান্স",
        icon: "fas fa-laptop-medical",
        duration: "৩ মাস (৩৬০ ঘন্টা)",
        seats: "২৪ জন",
        cert: "NSDA সনদপত্র",
        stipend: "১১,৭০০/- টাকা বৃত্তি",
        topics: ["Hardware", "Software", "Troubleshooting"],
        status: "active"
    },
    {
        id: 6,
        name: "Computer Office Application",
        nameBn: "কম্পিউটার অফিস এপ্লিকেশন",
        icon: "fas fa-desktop",
        duration: "৩ মাস",
        seats: "সীমিত",
        cert: "সনদপত্র প্রদান",
        stipend: "হাতে-কলমে প্রশিক্ষণ",
        topics: ["MS Word", "Excel", "PowerPoint"],
        status: "active"
    },
    {
        id: 7,
        name: "Digital Marketing",
        nameBn: "ডিজিটাল মার্কেটিং",
        icon: "fas fa-bullhorn",
        duration: "৩ মাস",
        seats: "সীমিত",
        cert: "সনদপত্র প্রদান",
        stipend: "হাতে-কলমে প্রশিক্ষণ",
        topics: ["Facebook Ads", "Google Ads", "SEO"],
        status: "active"
    },
    {
        id: 8,
        name: "Graphics Design",
        nameBn: "গ্রাফিক্স ডিজাইন",
        icon: "fas fa-paint-brush",
        duration: "৩ মাস",
        seats: "সীমিত",
        cert: "সনদপত্র প্রদান",
        stipend: "হাতে-কলমে প্রশিক্ষণ",
        topics: ["Photoshop", "Illustrator", "Canva"],
        status: "active"
    }
];

const DEFAULT_FEATURES = [
    { id: 1, icon: "fas fa-user-tie", title: "অভিজ্ঞ ও দক্ষ প্রশিক্ষক", desc: "অভিজ্ঞ ও দক্ষ প্রশিক্ষকদের দ্বারা মানসম্মত প্রশিক্ষণ প্রদান করা হয়" },
    { id: 2, icon: "fas fa-laptop-code", title: "আধুনিক কম্পিউটার ল্যাব", desc: "সম্পূর্ণ আধুনিক ও যুগোপযোগী কম্পিউটার ল্যাবে প্রশিক্ষণ" },
    { id: 3, icon: "fas fa-tools", title: "বাস্তবমুখী প্রশিক্ষণ", desc: "তাত্ত্বিক ও ব্যবহারিক উভয় ধরনের হাতে-কলমে প্রশিক্ষণ প্রদান" },
    { id: 4, icon: "fas fa-certificate", title: "NSDA সনদপত্র", desc: "প্রশিক্ষণ শেষে জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক সনদপত্র প্রদান" },
    { id: 5, icon: "fas fa-briefcase", title: "চাকরির সহায়তা", desc: "প্রশিক্ষণ শেষে চাকরি ও ফ্রিল্যান্সিং এ সহায়তা প্রদান করা হয়" },
    { id: 6, icon: "fas fa-hand-holding-usd", title: "১১,৭০০/- টাকা বৃত্তি", desc: "কোর্স শেষে প্রশিক্ষণার্থীদের ১১,৭০০/- টাকা ভাতা প্রদান করা হবে" },
    { id: 7, icon: "fas fa-dollar-sign", title: "সম্পূর্ণ ফ্রি প্রশিক্ষণ", desc: "ASSET প্রজেক্টের আওতায় সম্পূর্ণ বিনামূল্যে প্রশিক্ষণ প্রদান" },
    { id: 8, icon: "fas fa-wifi", title: "আধুনিক ল্যাব সুবিধা", desc: "হাই-স্পিড ইন্টারনেট, এসি রুম ও আধুনিক যন্ত্রপাতি সম্বলিত ল্যাব" }
];

const DEFAULT_HERO = {
    badge: "NSDA অনুমোদিত | STP-NAR-004882",
    title1: "আলিফ টেকনোলজি",
    title2: "এন্ড ট্রেনিং একাডেমী",
    subtitle: "দক্ষতা অর্জন করুন, গড়ুন উজ্জ্বল ভবিষ্যৎ",
    desc: "প্রধানমন্ত্রীর কার্যালয় কর্তৃক অনুমোদিত জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) এর আওতায় সম্পূর্ণ বিনামূল্যে কম্পিউটার প্রশিক্ষণ",
    stats: {
        students: 500,
        courses: 10,
        trainers: 15,
        success: 95
    }
};

const DEFAULT_ANNOUNCEMENT = {
    text: "🎓 সম্পূর্ণ ফ্রি প্রশিক্ষণে ভর্তি চলছে! | 📞 যোগাযোগ: ০১৯৬০০০৩১০২ | 🏆 NSDA সনদপত্র প্রদান | 💰 প্রশিক্ষণ শেষে ১১,৭০০/- টাকা বৃত্তি | 💼 চাকরির সুযোগ",
    enabled: true
};

const DEFAULT_ABOUT = {
    title: "রায়পুরা, নরসিংদীতে সেরা কম্পিউটার প্রশিক্ষণ কেন্দ্র",
    para1: "আলিফ টেকনোলজি এন্ড ট্রেনিং একাডেমী রায়পুরা, নরসিংদীতে অবস্থিত একটি সরকার অনুমোদিত কম্পিউটার প্রশিক্ষণ কেন্দ্র। আমরা ASSET (Accelerating and Strengthening Skills for Economic Transformation) প্রজেক্টের আওতায় বাংলাদেশ কম্পিউটার সমিতি (BCS) এর অধীনে সম্পূর্ণ বিনামূল্যে প্রশিক্ষণ প্রদান করি।",
    para2: "আমাদের লক্ষ্য হলো দক্ষ ও প্রশিক্ষিত জনশক্তি তৈরি করা যারা দেশে ও বিদেশে তথ্যপ্রযুক্তি খাতে অবদান রাখতে সক্ষম হবে। আমরা অভিজ্ঞ প্রশিক্ষকদের দ্বারা আধুনিক ল্যাবে হাতে-কলমে প্রশিক্ষণ প্রদান করি।"
};

const DEFAULT_CONTACT = {
    address: "মার্সেল শো-রুম এর ২য় তলা, শ্রীরামপুর রেলগেইট, রায়পুরা সদর রোড, রায়পুরা, নরসিংদী",
    phone1: "০১৯৬০০০৩১০২",
    phone2: "০১৭৯৬২৭৫৩৭২",
    email1: "info.aliftechnology.ta@gmail.com",
    email2: "a.technology.ta@gmail.com",
    days: "শনিবার - বৃহস্পতিবার",
    hours: "সকাল ৯:০০ - রাত ৯:০০",
    off: "শুক্রবার বন্ধ",
    whatsapp: "8801960003102",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
};

// ==================== APP INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    initAuth();
    initNavigation();
    initDataDefaults();
    loadAllForms();
    renderCoursesTable();
    renderFeaturesGrid();
    renderSubmissions();
    updateDashboardStats();
});

// ==================== AUTHENTICATION ====================
function initAuth() {
    const loginScreen = document.getElementById("loginScreen");
    const adminDashboard = document.getElementById("adminDashboard");
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    const logoutBtn = document.getElementById("logoutBtn");

    if (!localStorage.getItem("alif_admin_creds")) {
        localStorage.setItem("alif_admin_creds", JSON.stringify({ username: "admin", password: "admin123" }));
    }

    const isLoggedIn = sessionStorage.getItem("alif_admin_auth") === "true";
    if (isLoggedIn) {
        loginScreen.style.display = "none";
        adminDashboard.style.display = "flex";
    } else {
        loginScreen.style.display = "flex";
        adminDashboard.style.display = "none";
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("loginUsername").value.trim();
        const p = document.getElementById("loginPassword").value.trim();
        const creds = JSON.parse(localStorage.getItem("alif_admin_creds"));

        if (u === creds.username && p === creds.password) {
            sessionStorage.setItem("alif_admin_auth", "true");
            loginError.classList.remove("show");
            loginScreen.style.display = "none";
            adminDashboard.style.display = "flex";
            showToast("সফলভাবে লগইন হয়েছে!");
        } else {
            loginError.classList.add("show");
        }
    });

    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("alif_admin_auth");
        adminDashboard.style.display = "none";
        loginScreen.style.display = "flex";
        document.getElementById("loginPassword").value = "";
        showToast("লগআউট করা হয়েছে");
    });
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
    const sections = document.querySelectorAll(".admin-section");
    const topbarTitle = document.getElementById("topbarTitle");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle");
    const sidebarClose = document.getElementById("sidebarClose");

    const titles = {
        dashboard: '<i class="fas fa-tachometer-alt"></i> ড্যাশবোর্ড',
        hero: '<i class="fas fa-home"></i> হিরো সেকশন এডিটর',
        announcement: '<i class="fas fa-bullhorn"></i> নোটিশ ও ঘোষণা',
        about: '<i class="fas fa-info-circle"></i> আমাদের সম্পর্কে এডিটর',
        courses: '<i class="fas fa-book"></i> কোর্স ম্যানেজমেন্ট',
        features: '<i class="fas fa-star"></i> সুবিধাসমূহ ম্যানেজমেন্ট',
        contact: '<i class="fas fa-phone-alt"></i> যোগাযোগ তথ্য',
        submissions: '<i class="fas fa-envelope-open-text"></i> ভর্তির আবেদনসমূহ',
        settings: '<i class="fas fa-cog"></i> সিস্টেম সেটিংস'
    };

    function switchSection(secId) {
        navItems.forEach(item => {
            if (item.dataset.section === secId) item.classList.add("active");
            else item.classList.remove("active");
        });

        sections.forEach(sec => {
            if (sec.id === `sec-${secId}`) sec.classList.add("active");
            else sec.classList.remove("active");
        });

        if (titles[secId]) {
            topbarTitle.innerHTML = `<h2>${titles[secId]}</h2>`;
        }

        if (window.innerWidth <= 992) {
            sidebar.classList.remove("open");
        }
    }

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switchSection(item.dataset.section);
        });
    });

    document.querySelectorAll("[data-goto]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            switchSection(el.dataset.goto);
        });
    });

    menuToggle.addEventListener("click", () => sidebar.classList.add("open"));
    sidebarClose.addEventListener("click", () => sidebar.classList.remove("open"));
}

// ==================== DATA DEFAULTS ====================
function initDataDefaults() {
    if (!localStorage.getItem("alif_hero")) localStorage.setItem("alif_hero", JSON.stringify(DEFAULT_HERO));
    if (!localStorage.getItem("alif_announcement")) localStorage.setItem("alif_announcement", JSON.stringify(DEFAULT_ANNOUNCEMENT));
    if (!localStorage.getItem("alif_about")) localStorage.setItem("alif_about", JSON.stringify(DEFAULT_ABOUT));
    if (!localStorage.getItem("alif_courses")) localStorage.setItem("alif_courses", JSON.stringify(DEFAULT_COURSES));
    if (!localStorage.getItem("alif_features")) localStorage.setItem("alif_features", JSON.stringify(DEFAULT_FEATURES));
    if (!localStorage.getItem("alif_contact")) localStorage.setItem("alif_contact", JSON.stringify(DEFAULT_CONTACT));
    if (!localStorage.getItem("alif_submissions")) localStorage.setItem("alif_submissions", JSON.stringify([]));
}

// ==================== LOAD FORMS ====================
function loadAllForms() {
    // Hero
    const hero = JSON.parse(localStorage.getItem("alif_hero") || "{}");
    if (hero.badge) document.getElementById("heroBadge").value = hero.badge;
    if (hero.title1) document.getElementById("heroTitle1").value = hero.title1;
    if (hero.title2) document.getElementById("heroTitle2").value = hero.title2;
    if (hero.subtitle) document.getElementById("heroSubtitle").value = hero.subtitle;
    if (hero.desc) document.getElementById("heroDesc").value = hero.desc;
    if (hero.stats) {
        document.getElementById("statStudents").value = hero.stats.students || 500;
        document.getElementById("statCourses").value = hero.stats.courses || 10;
        document.getElementById("statTrainers").value = hero.stats.trainers || 15;
        document.getElementById("statSuccess").value = hero.stats.success || 95;
    }

    // Announcement
    const ann = JSON.parse(localStorage.getItem("alif_announcement") || "{}");
    if (ann.text) document.getElementById("announcementText").value = ann.text;
    document.getElementById("announcementEnabled").checked = ann.enabled !== false;

    // About
    const about = JSON.parse(localStorage.getItem("alif_about") || "{}");
    if (about.title) document.getElementById("aboutTitle").value = about.title;
    if (about.para1) document.getElementById("aboutPara1").value = about.para1;
    if (about.para2) document.getElementById("aboutPara2").value = about.para2;

    // Contact
    const con = JSON.parse(localStorage.getItem("alif_contact") || "{}");
    if (con.address) document.getElementById("contactAddress").value = con.address;
    if (con.phone1) document.getElementById("contactPhone1").value = con.phone1;
    if (con.phone2) document.getElementById("contactPhone2").value = con.phone2;
    if (con.email1) document.getElementById("contactEmail1").value = con.email1;
    if (con.email2) document.getElementById("contactEmail2").value = con.email2;
    if (con.days) document.getElementById("contactDays").value = con.days;
    if (con.hours) document.getElementById("contactHours").value = con.hours;
    if (con.off) document.getElementById("contactOff").value = con.off;
    if (con.whatsapp) document.getElementById("contactWhatsapp").value = con.whatsapp;
    if (con.facebook) document.getElementById("contactFacebook").value = con.facebook;
    if (con.youtube) document.getElementById("contactYoutube").value = con.youtube;
}

// Form Event Listeners
document.getElementById("heroForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const hero = {
        badge: document.getElementById("heroBadge").value,
        title1: document.getElementById("heroTitle1").value,
        title2: document.getElementById("heroTitle2").value,
        subtitle: document.getElementById("heroSubtitle").value,
        desc: document.getElementById("heroDesc").value,
        stats: {
            students: Number(document.getElementById("statStudents").value),
            courses: Number(document.getElementById("statCourses").value),
            trainers: Number(document.getElementById("statTrainers").value),
            success: Number(document.getElementById("statSuccess").value)
        }
    };
    localStorage.setItem("alif_hero", JSON.stringify(hero));
    showToast("হিরো সেকশন তথ্য সংরক্ষিত হয়েছে!");
});

document.getElementById("announcementForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const ann = {
        text: document.getElementById("announcementText").value,
        enabled: document.getElementById("announcementEnabled").checked
    };
    localStorage.setItem("alif_announcement", JSON.stringify(ann));
    showToast("নোটিশ সফলভাবে সংরক্ষিত হয়েছে!");
});

document.getElementById("aboutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const about = {
        title: document.getElementById("aboutTitle").value,
        para1: document.getElementById("aboutPara1").value,
        para2: document.getElementById("aboutPara2").value
    };
    localStorage.setItem("alif_about", JSON.stringify(about));
    showToast("আমাদের সম্পর্কে তথ্য সংরক্ষিত হয়েছে!");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const con = {
        address: document.getElementById("contactAddress").value,
        phone1: document.getElementById("contactPhone1").value,
        phone2: document.getElementById("contactPhone2").value,
        email1: document.getElementById("contactEmail1").value,
        email2: document.getElementById("contactEmail2").value,
        days: document.getElementById("contactDays").value,
        hours: document.getElementById("contactHours").value,
        off: document.getElementById("contactOff").value,
        whatsapp: document.getElementById("contactWhatsapp").value,
        facebook: document.getElementById("contactFacebook").value,
        youtube: document.getElementById("contactYoutube").value
    };
    localStorage.setItem("alif_contact", JSON.stringify(con));
    showToast("যোগাযোগ তথ্য সংরক্ষিত হয়েছে!");
});

// ==================== COURSES CRUD ====================
function renderCoursesTable() {
    const courses = JSON.parse(localStorage.getItem("alif_courses") || "[]");
    const tbody = document.getElementById("coursesTableBody");
    tbody.innerHTML = "";

    courses.forEach((c, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${index + 1}</strong></td>
            <td><i class="${c.icon}" style="margin-right: 6px; color: var(--primary);"></i> <strong>${c.name}</strong></td>
            <td>${c.nameBn}</td>
            <td>${c.duration}</td>
            <td>${c.seats}</td>
            <td><span class="badge-status ${c.status === 'active' ? 'badge-active' : 'badge-inactive'}">${c.status === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="btn-action btn-edit" title="Edit" onclick="editCourse(${index})"><i class="fas fa-edit"></i></button>
                    <button class="btn-action btn-del" title="Delete" onclick="deleteCourse(${index})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    updateDashboardStats();
}

function openCourseModal(editIdx = -1) {
    const modal = document.getElementById("courseModal");
    const form = document.getElementById("courseForm");
    const modalTitle = document.getElementById("courseModalTitle");

    document.getElementById("courseEditIndex").value = editIdx;

    if (editIdx >= 0) {
        const courses = JSON.parse(localStorage.getItem("alif_courses") || "[]");
        const c = courses[editIdx];
        modalTitle.innerHTML = '<i class="fas fa-edit"></i> কোর্স সম্পাদনা করুন';
        document.getElementById("courseName").value = c.name;
        document.getElementById("courseNameBn").value = c.nameBn;
        document.getElementById("courseIcon").value = c.icon;
        document.getElementById("courseDuration").value = c.duration;
        document.getElementById("courseSeats").value = c.seats;
        document.getElementById("courseCert").value = c.cert;
        document.getElementById("courseStipend").value = c.stipend;
        document.getElementById("courseTopics").value = Array.isArray(c.topics) ? c.topics.join(", ") : c.topics;
        document.getElementById("courseStatus").value = c.status || "active";
    } else {
        modalTitle.innerHTML = '<i class="fas fa-plus-circle"></i> নতুন কোর্স যোগ করুন';
        form.reset();
        document.getElementById("courseStatus").value = "active";
    }

    modal.classList.add("show");
}

function closeCourseModal() {
    document.getElementById("courseModal").classList.remove("show");
}

document.getElementById("courseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const editIdx = Number(document.getElementById("courseEditIndex").value);
    const courses = JSON.parse(localStorage.getItem("alif_courses") || "[]");

    const topicsInput = document.getElementById("courseTopics").value;
    const topicsArr = topicsInput.split(",").map(s => s.trim()).filter(Boolean);

    const courseObj = {
        id: editIdx >= 0 ? courses[editIdx].id : Date.now(),
        name: document.getElementById("courseName").value.trim(),
        nameBn: document.getElementById("courseNameBn").value.trim(),
        icon: document.getElementById("courseIcon").value.trim() || "fas fa-laptop",
        duration: document.getElementById("courseDuration").value.trim(),
        seats: document.getElementById("courseSeats").value.trim(),
        cert: document.getElementById("courseCert").value.trim(),
        stipend: document.getElementById("courseStipend").value.trim(),
        topics: topicsArr,
        status: document.getElementById("courseStatus").value
    };

    if (editIdx >= 0) {
        courses[editIdx] = courseObj;
        showToast("কোর্স তথ্য আপডেট হয়েছে!");
    } else {
        courses.push(courseObj);
        showToast("নতুন কোর্স যোগ করা হয়েছে!");
    }

    localStorage.setItem("alif_courses", JSON.stringify(courses));
    closeCourseModal();
    renderCoursesTable();
});

window.editCourse = function(idx) {
    openCourseModal(idx);
};

window.deleteCourse = function(idx) {
    if (confirm("আপনি কি নিশ্চিত যে এই কোর্সটি মুছে ফেলতে চান?")) {
        const courses = JSON.parse(localStorage.getItem("alif_courses") || "[]");
        courses.splice(idx, 1);
        localStorage.setItem("alif_courses", JSON.stringify(courses));
        renderCoursesTable();
        showToast("কোর্স মুছে ফেলা হয়েছে");
    }
};

// ==================== FEATURES CRUD ====================
function renderFeaturesGrid() {
    const features = JSON.parse(localStorage.getItem("alif_features") || "[]");
    const container = document.getElementById("featuresAdminGrid");
    container.innerHTML = "";

    features.forEach((f, idx) => {
        const card = document.createElement("div");
        card.className = "feature-admin-card";
        card.innerHTML = `
            <div>
                <div class="feature-admin-header">
                    <div class="feature-admin-icon"><i class="${f.icon}"></i></div>
                    <h4>${f.title}</h4>
                </div>
                <p>${f.desc}</p>
            </div>
            <div class="feature-admin-actions">
                <button class="btn-action btn-edit" title="Edit" onclick="editFeature(${idx})"><i class="fas fa-edit"></i></button>
                <button class="btn-action btn-del" title="Delete" onclick="deleteFeature(${idx})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        container.appendChild(card);
    });

    updateDashboardStats();
}

function openFeatureModal(editIdx = -1) {
    const modal = document.getElementById("featureModal");
    const form = document.getElementById("featureForm");
    const modalTitle = document.getElementById("featureModalTitle");

    document.getElementById("featureEditIndex").value = editIdx;

    if (editIdx >= 0) {
        const features = JSON.parse(localStorage.getItem("alif_features") || "[]");
        const f = features[editIdx];
        modalTitle.innerHTML = '<i class="fas fa-edit"></i> সুবিধা সম্পাদনা করুন';
        document.getElementById("featureIcon").value = f.icon;
        document.getElementById("featureTitle").value = f.title;
        document.getElementById("featureDesc").value = f.desc;
    } else {
        modalTitle.innerHTML = '<i class="fas fa-plus-circle"></i> নতুন সুবিধা যোগ করুন';
        form.reset();
    }

    modal.classList.add("show");
}

function closeFeatureModal() {
    document.getElementById("featureModal").classList.remove("show");
}

document.getElementById("featureForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const editIdx = Number(document.getElementById("featureEditIndex").value);
    const features = JSON.parse(localStorage.getItem("alif_features") || "[]");

    const featObj = {
        id: editIdx >= 0 ? features[editIdx].id : Date.now(),
        icon: document.getElementById("featureIcon").value.trim() || "fas fa-check",
        title: document.getElementById("featureTitle").value.trim(),
        desc: document.getElementById("featureDesc").value.trim()
    };

    if (editIdx >= 0) {
        features[editIdx] = featObj;
        showToast("সুবিধা আপডেট হয়েছে!");
    } else {
        features.push(featObj);
        showToast("নতুন সুবিধা যোগ করা হয়েছে!");
    }

    localStorage.setItem("alif_features", JSON.stringify(features));
    closeFeatureModal();
    renderFeaturesGrid();
});

window.editFeature = function(idx) {
    openFeatureModal(idx);
};

window.deleteFeature = function(idx) {
    if (confirm("আপনি কি এই সুবিধাটি মুছে ফেলতে চান?")) {
        const features = JSON.parse(localStorage.getItem("alif_features") || "[]");
        features.splice(idx, 1);
        localStorage.setItem("alif_features", JSON.stringify(features));
        renderFeaturesGrid();
        showToast("সুবিধা মুছে ফেলা হয়েছে");
    }
};

// ==================== SUBMISSIONS ====================
function renderSubmissions() {
    const subs = JSON.parse(localStorage.getItem("alif_submissions") || "[]");
    const tbody = document.getElementById("submissionsTableBody");
    const recentContainer = document.getElementById("recentSubmissions");

    tbody.innerHTML = "";

    if (subs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="empty-state"><i class="fas fa-inbox"></i> কোনো ভর্তির আবেদন জমা হয়নি</td></tr>`;
        recentContainer.innerHTML = `<p class="empty-state"><i class="fas fa-inbox"></i> কোনো আবেদন নেই</p>`;
    } else {
        subs.forEach((s, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${idx + 1}</strong></td>
                <td><strong>${s.name}</strong></td>
                <td><a href="tel:${s.phone}" style="color:var(--primary); font-weight:600;"><i class="fas fa-phone-alt"></i> ${s.phone}</a></td>
                <td>${s.email || '-'}</td>
                <td><span class="sub-course">${s.course}</span></td>
                <td><small style="color:var(--text-muted);">${s.date || '-'}</small></td>
                <td>
                    <button class="btn-action btn-del" onclick="deleteSubmission(${idx})"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Dashboard Recent submissions (show last 4)
        recentContainer.innerHTML = "";
        const recents = [...subs].reverse().slice(0, 4);
        recents.forEach(s => {
            const item = document.createElement("div");
            item.className = "submission-item";
            item.innerHTML = `
                <div class="sub-meta">
                    <strong>${s.name}</strong>
                    <span><i class="fas fa-phone-alt"></i> ${s.phone} &bull; ${s.date || ''}</span>
                </div>
                <span class="sub-course">${s.course}</span>
            `;
            recentContainer.appendChild(item);
        });
    }

    updateDashboardStats();
}

window.deleteSubmission = function(idx) {
    if (confirm("এই আবেদনটি মুছে ফেলতে চান?")) {
        const subs = JSON.parse(localStorage.getItem("alif_submissions") || "[]");
        subs.splice(idx, 1);
        localStorage.setItem("alif_submissions", JSON.stringify(subs));
        renderSubmissions();
        showToast("আবেদন মুছে ফেলা হয়েছে");
    }
};

window.clearSubmissions = function() {
    if (confirm("আপনি কি সব আবেদন মুছে ফেলতে চান? এটি পুনরুদ্ধার করা যাবে না!")) {
        localStorage.setItem("alif_submissions", JSON.stringify([]));
        renderSubmissions();
        showToast("সব আবেদন মুছে ফেলা হয়েছে");
    }
};

// ==================== DASHBOARD STATS ====================
function updateDashboardStats() {
    const courses = JSON.parse(localStorage.getItem("alif_courses") || "[]");
    const features = JSON.parse(localStorage.getItem("alif_features") || "[]");
    const subs = JSON.parse(localStorage.getItem("alif_submissions") || "[]");

    document.getElementById("totalCourses").textContent = courses.length;
    document.getElementById("totalFeatures").textContent = features.length;
    document.getElementById("totalSubmissions").textContent = subs.length;

    const visits = localStorage.getItem("alif_site_visits") || "120";
    document.getElementById("totalVisits").textContent = visits;
}

// ==================== SETTINGS & DATA ====================
document.getElementById("settingsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const curr = document.getElementById("currentPassword").value;
    const newP = document.getElementById("newPassword").value;
    const confP = document.getElementById("confirmPassword").value;

    const creds = JSON.parse(localStorage.getItem("alif_admin_creds"));

    if (curr !== creds.password) {
        alert("বর্তমান পাসওয়ার্ড সঠিক নয়!");
        return;
    }
    if (!newP || newP.length < 4) {
        alert("নতুন পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে!");
        return;
    }
    if (newP !== confP) {
        alert("নতুন পাসওয়ার্ড দুটি মিলছে না!");
        return;
    }

    creds.password = newP;
    localStorage.setItem("alif_admin_creds", JSON.stringify(creds));
    document.getElementById("settingsForm").reset();
    showToast("পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!");
});

window.exportData = function() {
    const backup = {
        hero: JSON.parse(localStorage.getItem("alif_hero") || "{}"),
        announcement: JSON.parse(localStorage.getItem("alif_announcement") || "{}"),
        about: JSON.parse(localStorage.getItem("alif_about") || "{}"),
        courses: JSON.parse(localStorage.getItem("alif_courses") || "[]"),
        features: JSON.parse(localStorage.getItem("alif_features") || "[]"),
        contact: JSON.parse(localStorage.getItem("alif_contact") || "{}"),
        submissions: JSON.parse(localStorage.getItem("alif_submissions") || "[]")
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `alif_technology_backup_${Date.now()}.json`);
    dlAnchor.click();
    showToast("ডাটা ব্যাকআপ ডাউনলোড সম্পন্ন!");
};

window.importData = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.hero) localStorage.setItem("alif_hero", JSON.stringify(data.hero));
            if (data.announcement) localStorage.setItem("alif_announcement", JSON.stringify(data.announcement));
            if (data.about) localStorage.setItem("alif_about", JSON.stringify(data.about));
            if (data.courses) localStorage.setItem("alif_courses", JSON.stringify(data.courses));
            if (data.features) localStorage.setItem("alif_features", JSON.stringify(data.features));
            if (data.contact) localStorage.setItem("alif_contact", JSON.stringify(data.contact));
            if (data.submissions) localStorage.setItem("alif_submissions", JSON.stringify(data.submissions));

            loadAllForms();
            renderCoursesTable();
            renderFeaturesGrid();
            renderSubmissions();
            updateDashboardStats();
            showToast("ডাটা সফলভাবে রিস্টোর হয়েছে!");
        } catch (err) {
            alert("ভুল ফাইল ফরম্যাট! অনুগ্রহ করে বৈধ JSON ফাইল নির্বাচন করুন।");
        }
    };
    reader.readAsText(file);
};

window.resetSection = function(section) {
    if (!confirm("আপনি কি এই সেকশনের সব পরিবর্তন রিসেট করতে চান?")) return;

    if (section === "hero") localStorage.setItem("alif_hero", JSON.stringify(DEFAULT_HERO));
    else if (section === "announcement") localStorage.setItem("alif_announcement", JSON.stringify(DEFAULT_ANNOUNCEMENT));
    else if (section === "about") localStorage.setItem("alif_about", JSON.stringify(DEFAULT_ABOUT));
    else if (section === "contact") localStorage.setItem("alif_contact", JSON.stringify(DEFAULT_CONTACT));

    loadAllForms();
    showToast("ডিফল্ট তথ্যে রিসেট হয়েছে");
};

window.resetAllData = function() {
    if (confirm("সতর্কতা: সব কাস্টমাইজেশন ও আবেদন মুছে ফ্যাক্টরি রিসেট হবে। এগিয়ে যেতে চান?")) {
        localStorage.setItem("alif_hero", JSON.stringify(DEFAULT_HERO));
        localStorage.setItem("alif_announcement", JSON.stringify(DEFAULT_ANNOUNCEMENT));
        localStorage.setItem("alif_about", JSON.stringify(DEFAULT_ABOUT));
        localStorage.setItem("alif_courses", JSON.stringify(DEFAULT_COURSES));
        localStorage.setItem("alif_features", JSON.stringify(DEFAULT_FEATURES));
        localStorage.setItem("alif_contact", JSON.stringify(DEFAULT_CONTACT));
        localStorage.setItem("alif_submissions", JSON.stringify([]));

        loadAllForms();
        renderCoursesTable();
        renderFeaturesGrid();
        renderSubmissions();
        updateDashboardStats();
        showToast("সব ডাটা ফ্যাক্টরি রিসেট সম্পন্ন হয়েছে!");
    }
};

// ==================== TOAST NOTIFICATION ====================
function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMessage");
    toastMsg.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}
