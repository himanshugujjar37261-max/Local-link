/* ============================================
   LOCALLINK — Main JavaScript
   ============================================ */

// ─── Business Data ───
const businesses = [
  {
    id: 1, name: "Gupta Steel Traders", category: "Hardware & Construction",
    address: "Railway Road, Near Hanuman Mandir, Shamli, Uttar Pradesh 247776",
    phone: "+91 98765 43210", email: "info@guptasteelshamli.com",
    website: "https://www.guptasteelshamli.com",
    description: "Supplier of TMT bars, pipes, cement, and construction materials for bulk and retail purchase.",
    tags: ["B2B", "B2C"], color: "#1e40af",
    services: ["TMT Bars & Rods", "Cement & Concrete", "Pipes & Fittings", "Construction Tools", "Bulk Supply", "Retail Sales"],
    initials: "GS"
  },
  {
    id: 2, name: "Shamli Agro Seeds", category: "Agriculture Supplies",
    address: "Delhi Road, Opp. Krishi Mandi Gate, Shamli, UP 247776",
    phone: "+91 98123 45678", email: "sales@shamliagroseeds.in",
    website: "https://www.shamliagroseeds.in",
    description: "High-quality seeds, fertilizers, and agricultural tools.",
    tags: ["B2B", "B2C"], color: "#166534",
    services: ["Hybrid Seeds", "Organic Fertilizers", "Pesticides", "Agricultural Tools", "Irrigation Equipment", "Soil Testing"],
    initials: "SA"
  },
  {
    id: 3, name: "Royal Furniture House", category: "Furniture & Interiors",
    address: "Budhana Road, Near State Bank of India, Shamli",
    phone: "+91 98234 11223", email: "royal@furniturehouse.in",
    website: "https://www.royalfurniturehouse.in",
    description: "Modern and custom wooden furniture for homes and offices.",
    tags: ["B2C"], color: "#92400e",
    services: ["Living Room Furniture", "Bedroom Sets", "Office Furniture", "Custom Designs", "Interior Consultation", "Modular Kitchens"],
    initials: "RF"
  },
  {
    id: 4, name: "Verma Electronics", category: "Electronics & Appliances",
    address: "Subhash Chowk, Main Market, Shamli",
    phone: "+91 98976 55443", email: "contact@vermaelectronics.in",
    website: "https://www.vermaelectronics.in",
    description: "Authorized dealer of home appliances and electronics.",
    tags: ["B2C"], color: "#7c3aed",
    services: ["LED TVs", "Washing Machines", "Refrigerators", "Air Conditioners", "Mobile Phones", "Home Theater Systems"],
    initials: "VE"
  },
  {
    id: 5, name: "Shamli Dairy Products", category: "FMCG & Dairy",
    address: "Kandhla Road, Shamli",
    phone: "+91 98760 99887", email: "orders@shamlidairy.com",
    website: "https://www.shamlidairy.com",
    description: "Fresh milk, paneer, ghee, and dairy products supplied locally and in bulk.",
    tags: ["B2B", "B2C"], color: "#0e7490",
    services: ["Fresh Milk", "Paneer", "Desi Ghee", "Curd & Yogurt", "Bulk Supply", "Home Delivery"],
    initials: "SD"
  },
  {
    id: 6, name: "Modern Medical Store", category: "Pharmacy",
    address: "Near District Hospital, Shamli",
    phone: "+91 97531 22446", email: "support@modernmedicalshamli.in",
    website: "https://www.modernmedicalshamli.in",
    description: "All types of medicines and healthcare products available.",
    tags: ["B2C"], color: "#dc2626",
    services: ["Prescription Medicines", "OTC Medicines", "Healthcare Products", "Baby Care", "Surgical Items", "Home Delivery"],
    initials: "MM"
  },
  {
    id: 7, name: "Jindal Transport Company", category: "Logistics & Transport",
    address: "Industrial Area Phase 1, Shamli",
    phone: "+91 98100 77889", email: "dispatch@jindaltransport.in",
    website: "https://www.jindaltransport.in",
    description: "Reliable goods transportation services across Uttar Pradesh.",
    tags: ["B2B"], color: "#ea580c",
    services: ["Full Truck Load", "Part Load", "Warehouse Storage", "Express Delivery", "Packaging Services", "GPS Tracking"],
    initials: "JT"
  },
  {
    id: 8, name: "Green Valley Nursery", category: "Plants & Gardening",
    address: "Panipat Road, Shamli",
    phone: "+91 98989 12345", email: "info@greenvalleynursery.in",
    website: "https://www.greenvalleynursery.in",
    description: "Indoor and outdoor plants, landscaping services.",
    tags: ["B2C"], color: "#15803d",
    services: ["Indoor Plants", "Outdoor Plants", "Landscaping", "Garden Tools", "Pots & Planters", "Maintenance Services"],
    initials: "GV"
  },
  {
    id: 9, name: "Bright Coaching Institute", category: "Education",
    address: "Near Arya Samaj Mandir, Shamli",
    phone: "+91 98888 77665", email: "admin@brightcoaching.in",
    website: "https://www.brightcoaching.in",
    description: "Coaching for classes 9–12 and competitive exams.",
    tags: ["B2C"], color: "#4338ca",
    services: ["Class 9-10 Coaching", "Class 11-12 Coaching", "JEE Preparation", "NEET Preparation", "Online Classes", "Study Material"],
    initials: "BC"
  },
  {
    id: 10, name: "Sharma Textiles", category: "Clothing & Wholesale",
    address: "Bara Bazaar, Shamli",
    phone: "+91 98711 22334", email: "sales@sharmatextiles.in",
    website: "https://www.sharmatextiles.in",
    description: "Wholesale and retail garments supplier.",
    tags: ["B2B", "B2C"], color: "#be185d",
    services: ["Men's Clothing", "Women's Clothing", "Kids Wear", "Wholesale Orders", "Fabric Rolls", "Custom Stitching"],
    initials: "ST"
  }
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Owner, Kumar General Store", text: "LocalLink helped us reach more customers in Shamli. Our orders increased by 40% within two months!", color: "#2563eb", initials: "RK", stars: 5 },
  { name: "Priya Sharma", role: "Resident, Shamli", text: "Finding trusted local businesses has never been easier. The platform is very user-friendly and convenient.", color: "#7c3aed", initials: "PS", stars: 5 },
  { name: "Amit Gupta", role: "Manager, Gupta Steel Traders", text: "Our B2B connections grew significantly after listing on LocalLink. Great platform for local businesses!", color: "#0e7490", initials: "AG", stars: 4 }
];

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initMobileMenu();
  if (document.getElementById('businessGrid')) renderBusinessCards(businesses);
  if (document.getElementById('testimonialGrid')) renderTestimonials();
  if (document.getElementById('registerForm')) initRegisterForm();
  if (document.getElementById('contactForm')) initContactForm();
  if (document.getElementById('detailPage')) initDetailPage();
  if (document.getElementById('searchInput')) initSearch();
});

// ─── Navbar ───
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const isSubPage = nav.classList.contains('no-hero');
  window.addEventListener('scroll', () => {
    if (!isSubPage) {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
  if (!isSubPage && window.scrollY > 50) nav.classList.add('scrolled');
}

// ─── Mobile Menu ───
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');
  if (!hamburger) return;
  const toggle = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  };
  hamburger.addEventListener('click', toggle);
  if (overlay) overlay.addEventListener('click', toggle);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) toggle();
  }));
}

// ─── Scroll Reveal ───
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); observer.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// ─── Render Business Cards ───
function renderBusinessCards(data) {
  const grid = document.getElementById('businessGrid');
  if (!grid) return;
  if (!data.length) {
    grid.innerHTML = `<div class="no-results"><div class="icon">🔍</div><h3>No businesses found</h3><p>Try adjusting your search or category filter.</p></div>`;
    return;
  }
  grid.innerHTML = data.map((b, i) => `
    <div class="business-card reveal" style="transition-delay:${i * 0.05}s">
      <div class="business-card-image" style="background:linear-gradient(135deg,${b.color},${b.color}dd)">
        <div class="logo-placeholder">${b.initials}</div>
        <div class="business-card-tags">
          ${b.tags.map(t => `<span class="tag tag-${t.toLowerCase()}">${t}</span>`).join('')}
        </div>
      </div>
      <div class="business-card-body">
        <div class="business-card-category">${b.category}</div>
        <h3>${b.name}</h3>
        <p class="description">${b.description}</p>
        <div class="business-card-info">
          <div class="info-item"><span class="icon">📍</span>${b.address}</div>
          <div class="info-item"><span class="icon">📞</span>${b.phone}</div>
        </div>
        <div class="business-card-footer">
          <a href="business.html?id=${b.id}" class="btn btn-primary btn-sm">View Details</a>
          <a href="tel:${b.phone.replace(/\s/g,'')}" class="btn btn-outline btn-sm">Call Now</a>
        </div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ─── Search & Filter ───
function initSearch() {
  const input = document.getElementById('searchInput');
  const select = document.getElementById('categoryFilter');
  const searchBtn = document.getElementById('searchBtn');
  const filter = () => {
    const q = input.value.toLowerCase().trim();
    const cat = select.value;
    const filtered = businesses.filter(b => {
      const matchQ = !q || b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
      const matchCat = !cat || b.category === cat;
      return matchQ && matchCat;
    });
    renderBusinessCards(filtered);
  };
  input.addEventListener('input', filter);
  select.addEventListener('change', filter);
  if (searchBtn) searchBtn.addEventListener('click', filter);
}

// ─── Render Testimonials ───
function renderTestimonials() {
  const grid = document.getElementById('testimonialGrid');
  if (!grid) return;
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="testimonial-quote">"</div>
      <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p>${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.color}">${t.initials}</div>
        <div class="testimonial-info"><h4>${t.name}</h4><span>${t.role}</span></div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ─── Business Detail Page ───
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const biz = businesses.find(b => b.id === id);
  if (!biz) { document.getElementById('detailPage').innerHTML = '<div class="container" style="padding:100px 0;text-align:center"><h2>Business not found</h2><p>Please go back and try again.</p><a href="index.html" class="btn btn-primary" style="margin-top:20px">Back to Home</a></div>'; return; }

  // Page header
  document.getElementById('detailName').textContent = biz.name;
  document.getElementById('detailBreadcrumbName').textContent = biz.name;

  // Gallery
  const mainImg = document.getElementById('mainImage');
  mainImg.style.background = `linear-gradient(135deg,${biz.color},${biz.color}dd)`;
  mainImg.innerHTML = `<span style="font-size:5rem;font-weight:900;color:rgba(255,255,255,0.9)">${biz.initials}</span>`;
  document.getElementById('galleryThumbs').innerHTML = [1,2,3,4].map((n,i) => `<div class="thumb ${i===0?'active':''}" style="background:linear-gradient(135deg,${biz.color}${i===0?'':'99'},${biz.color}${i===0?'dd':'66'})">${biz.initials}</div>`).join('');

  // Overview
  document.getElementById('detailCategory').textContent = biz.category;
  document.getElementById('detailTitle').textContent = biz.name;
  document.getElementById('detailTags').innerHTML = biz.tags.map(t => `<span class="tag tag-${t.toLowerCase()}">${t}</span>`).join(' ');
  document.getElementById('detailDesc').textContent = biz.description;

  // Services
  document.getElementById('detailServices').innerHTML = biz.services.map(s => `<li><span class="icon">✓</span>${s}</li>`).join('');

  // Contact info
  document.getElementById('detailAddress').textContent = biz.address;
  document.getElementById('detailPhone').textContent = biz.phone;
  document.getElementById('detailEmail').textContent = biz.email;
  document.getElementById('detailWebsite').textContent = biz.website;
  document.getElementById('detailWebsite').href = biz.website;

  // WhatsApp
  const waBtn = document.getElementById('whatsappBtn');
  waBtn.href = `https://wa.me/${biz.phone.replace(/[^0-9]/g,'')}`;

  // Reviews
  const reviews = [
    { name: "Suresh M.", stars: 5, text: `Excellent service from ${biz.name}. Very professional and reliable. Highly recommend!`, color: "#2563eb", initials: "SM" },
    { name: "Neha P.", stars: 4, text: "Good quality products and fair pricing. The staff is friendly and helpful.", color: "#7c3aed", initials: "NP" },
    { name: "Vikram S.", stars: 5, text: "Been a regular customer for over 2 years. Consistent quality and great customer support.", color: "#0e7490", initials: "VS" }
  ];
  document.getElementById('reviewsList').innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar" style="background:${r.color}">${r.initials}</div>
        <div class="review-meta"><h4>${r.name}</h4><div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div></div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>
  `).join('');

  // Detail contact form
  const form = document.getElementById('detailContactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Your inquiry has been sent to ' + biz.name + '! They will contact you shortly.');
      form.reset();
    });
  }
}

// ─── Register Form ───
function initRegisterForm() {
  const form = document.getElementById('registerForm');
  const formContent = document.getElementById('formContent');
  const successMsg = document.getElementById('successMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    formContent.style.display = 'none';
    successMsg.classList.add('show');
    window.scrollTo({ top: successMsg.offsetTop - 100, behavior: 'smooth' });
  });
}

// ─── Contact Form ───
function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    form.reset();
  });
}

// ─── Validation ───
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = '#ef4444';
      valid = false;
      field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
    }
  });
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.style.borderColor = '#ef4444';
    valid = false;
  }
  if (!valid) {
    const firstInvalid = form.querySelector('[style*="border-color"]');
    if (firstInvalid) firstInvalid.focus();
  }
  return valid;
}

// ─── Smooth Scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
