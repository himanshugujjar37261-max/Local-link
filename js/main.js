/* LOCALLINK — Main JavaScript */

// Business Data (15 businesses)
var businesses = [
  {
    id: 1, name: "Gupta Steel Traders", category: "Hardware & Construction",
    address: "Railway Road, Near Hanuman Mandir, Shamli, Uttar Pradesh 247776",
    phone: "+91 98765 43210", email: "info@guptasteelshamli.com",
    website: "https://www.guptasteelshamli.com",
    description: "Supplier of TMT bars, pipes, cement, and construction materials for bulk and retail purchase.",
    tags: ["B2B", "B2C"], color: "#1e40af", image: "images/steel_traders.png",
    services: ["TMT Bars & Rods", "Cement & Concrete", "Pipes & Fittings", "Construction Tools", "Bulk Supply", "Retail Sales"],
    initials: "GS"
  },
  {
    id: 2, name: "Shamli Agro Seeds", category: "Agriculture Supplies",
    address: "Delhi Road, Opp. Krishi Mandi Gate, Shamli, UP 247776",
    phone: "+91 98123 45678", email: "sales@shamliagroseeds.in",
    website: "https://www.shamliagroseeds.in",
    description: "High-quality seeds, fertilizers, and agricultural tools.",
    tags: ["B2B", "B2C"], color: "#166534", image: "images/agro_seeds.png",
    services: ["Hybrid Seeds", "Organic Fertilizers", "Pesticides", "Agricultural Tools", "Irrigation Equipment", "Soil Testing"],
    initials: "SA"
  },
  {
    id: 3, name: "Royal Furniture House", category: "Furniture & Interiors",
    address: "Budhana Road, Near State Bank of India, Shamli",
    phone: "+91 98234 11223", email: "royal@furniturehouse.in",
    website: "https://www.royalfurniturehouse.in",
    description: "Modern and custom wooden furniture for homes and offices.",
    tags: ["B2C"], color: "#92400e", image: "images/furniture_house.png",
    services: ["Living Room Furniture", "Bedroom Sets", "Office Furniture", "Custom Designs", "Interior Consultation", "Modular Kitchens"],
    initials: "RF"
  },
  {
    id: 4, name: "Verma Electronics", category: "Electronics & Appliances",
    address: "Subhash Chowk, Main Market, Shamli",
    phone: "+91 98976 55443", email: "contact@vermaelectronics.in",
    website: "https://www.vermaelectronics.in",
    description: "Authorized dealer of home appliances and electronics.",
    tags: ["B2C"], color: "#7c3aed", image: "images/electronics_store.png",
    services: ["LED TVs", "Washing Machines", "Refrigerators", "Air Conditioners", "Mobile Phones", "Home Theater Systems"],
    initials: "VE"
  },
  {
    id: 5, name: "Shamli Dairy Products", category: "FMCG & Dairy",
    address: "Kandhla Road, Shamli",
    phone: "+91 98760 99887", email: "orders@shamlidairy.com",
    website: "https://www.shamlidairy.com",
    description: "Fresh milk, paneer, ghee, and dairy products supplied locally and in bulk.",
    tags: ["B2B", "B2C"], color: "#0e7490", image: "images/dairy_products.png",
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
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    services: ["Indoor Plants", "Outdoor Plants", "Landscaping", "Garden Tools", "Pots & Planters", "Maintenance Services"],
    initials: "GV"
  },
  {
    id: 9, name: "Bright Coaching Institute", category: "Education",
    address: "Near Arya Samaj Mandir, Shamli",
    phone: "+91 98888 77665", email: "admin@brightcoaching.in",
    website: "https://www.brightcoaching.in",
    description: "Coaching for classes 9-12 and competitive exams.",
    tags: ["B2C"], color: "#4338ca",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    services: ["Men's Clothing", "Women's Clothing", "Kids Wear", "Wholesale Orders", "Fabric Rolls", "Custom Stitching"],
    initials: "ST"
  },
  {
    id: 11, name: "Annapurna Sweets & Restaurant", category: "Food & Restaurant",
    address: "Station Road, Near Old Bus Stand, Shamli, UP 247776",
    phone: "+91 98222 33445", email: "orders@annapurnashamli.in",
    website: "https://www.annapurnashamli.in",
    description: "Authentic North Indian cuisine, sweets, and catering services for events and daily dining.",
    tags: ["B2C"], color: "#b91c1c",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    services: ["North Indian Cuisine", "Sweets & Namkeen", "Event Catering", "Party Orders", "Home Delivery", "Breakfast Specials"],
    initials: "AS"
  },
  {
    id: 12, name: "TechVision IT Solutions", category: "IT & Technology",
    address: "Sadar Bazaar, Above Punjab National Bank, Shamli",
    phone: "+91 98333 44556", email: "hello@techvisionshamli.in",
    website: "https://www.techvisionshamli.in",
    description: "Computer sales, repair, CCTV installation, and web development services for local businesses.",
    tags: ["B2B", "B2C"], color: "#0369a1",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    services: ["Computer Sales", "Laptop Repair", "CCTV Installation", "Web Development", "Networking", "AMC Services"],
    initials: "TV"
  },
  {
    id: 13, name: "Malik Auto Parts", category: "Automobile",
    address: "GT Road, Near Petrol Pump, Shamli, UP 247776",
    phone: "+91 98444 55667", email: "contact@malikautoshamli.in",
    website: "https://www.malikautoshamli.in",
    description: "Genuine automobile spare parts, accessories, and servicing for all types of vehicles.",
    tags: ["B2B", "B2C"], color: "#374151",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    services: ["Spare Parts", "Engine Oil", "Batteries", "Tyre & Tubes", "Car Accessories", "Bike Parts"],
    initials: "MA"
  },
  {
    id: 14, name: "Sunrise Fitness Gym", category: "Health & Fitness",
    address: "Kairana Road, Opp. Community Hall, Shamli",
    phone: "+91 98555 66778", email: "join@sunrisefitness.in",
    website: "https://www.sunrisefitness.in",
    description: "Modern gym with cardio, weight training, yoga classes, and personal training sessions.",
    tags: ["B2C"], color: "#c2410c",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    services: ["Weight Training", "Cardio Zone", "Yoga Classes", "Personal Training", "Zumba", "Diet Consultation"],
    initials: "SF"
  },
  {
    id: 15, name: "Sachdeva Jewellers", category: "Jewellery",
    address: "Chowk Bazaar, Main Road, Shamli, UP 247776",
    phone: "+91 98666 77889", email: "info@sachdevajewellers.in",
    website: "https://www.sachdevajewellers.in",
    description: "Exquisite gold, silver, and diamond jewellery with certified hallmarking and custom designs.",
    tags: ["B2C"], color: "#a16207",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d727b750?w=600&h=400&fit=crop",
    services: ["Gold Jewellery", "Silver Jewellery", "Diamond Rings", "Custom Designs", "Hallmark Certified", "Exchange & Buyback"],
    initials: "SJ"
  }
];

var testimonials = [
  { name: "Rajesh Kumar", role: "Owner, Kumar General Store", text: "LocalLink helped us reach more customers in Shamli. Our orders increased by 40% within two months!", color: "#2563eb", initials: "RK", stars: 5 },
  { name: "Priya Sharma", role: "Resident, Shamli", text: "Finding trusted local businesses has never been easier. The platform is very user-friendly and convenient.", color: "#7c3aed", initials: "PS", stars: 5 },
  { name: "Amit Gupta", role: "Manager, Gupta Steel Traders", text: "Our B2B connections grew significantly after listing on LocalLink. Great platform for local businesses!", color: "#0e7490", initials: "AG", stars: 4 }
];

document.addEventListener("DOMContentLoaded", function () {
  initNavbar();
  initScrollReveal();
  initMobileMenu();
  if (document.getElementById("businessGrid")) { renderBusinessCards(businesses); }
  if (document.getElementById("testimonialGrid")) { renderTestimonials(); }
  if (document.getElementById("registerForm")) { initRegisterForm(); }
  if (document.getElementById("contactForm")) { initContactForm(); }
  if (document.getElementById("detailPage")) { initDetailPage(); }
  if (document.getElementById("searchInput")) { initSearch(); }
});

function initNavbar() {
  var nav = document.querySelector(".navbar");
  if (!nav) return;
  var isSubPage = nav.classList.contains("no-hero");
  window.addEventListener("scroll", function () {
    if (!isSubPage) { nav.classList.toggle("scrolled", window.scrollY > 50); }
  });
  if (!isSubPage && window.scrollY > 50) nav.classList.add("scrolled");
}

function initMobileMenu() {
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");
  var overlay = document.querySelector(".nav-overlay");
  if (!hamburger) return;
  function toggle() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
  }
  hamburger.addEventListener("click", toggle);
  if (overlay) overlay.addEventListener("click", toggle);
  var links = navLinks.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () { if (navLinks.classList.contains("active")) toggle(); });
  }
}

function initScrollReveal() {
  var els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (!els.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("active"); observer.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach(function (el) { observer.observe(el); });
}

function buildCard(b, i) {
  var tagsHtml = "";
  for (var t = 0; t < b.tags.length; t++) {
    tagsHtml += '<span class="tag tag-' + b.tags[t].toLowerCase() + '">' + b.tags[t] + "</span>";
  }
  var phone = b.phone.replace(/\s/g, "");
  return '<div class="business-card reveal" style="transition-delay:' + (i * 0.05) + 's">' +
    '<div class="business-card-image" style="background:linear-gradient(135deg,' + b.color + ',' + b.color + 'dd);position:relative">' +
    '<div class="logo-placeholder">' + b.initials + '</div>' +
    '<img src="' + b.image + '" alt="' + b.name + '" style="width:100%;height:180px;object-fit:cover;position:absolute;top:0;left:0;z-index:1" onerror="this.style.display=\'none\'">' +
    '<div class="business-card-tags" style="z-index:2;position:relative">' + tagsHtml + '</div>' +
    '</div>' +
    '<div class="business-card-body">' +
    '<div class="business-card-category">' + b.category + '</div>' +
    '<h3>' + b.name + '</h3>' +
    '<p class="description">' + b.description + '</p>' +
    '<div class="business-card-info">' +
    '<div class="info-item"><span class="icon">📍</span>' + b.address + '</div>' +
    '<div class="info-item"><span class="icon">📞</span>' + b.phone + '</div>' +
    '</div>' +
    '<div class="business-card-footer">' +
    '<a href="business.html?id=' + b.id + '" class="btn btn-primary btn-sm">View Details</a>' +
    '<a href="tel:' + phone + '" class="btn btn-outline btn-sm">Call Now</a>' +
    '</div>' +
    '</div>' +
    '</div>';
}

function renderBusinessCards(data) {
  var grid = document.getElementById("businessGrid");
  if (!grid) return;
  if (!data.length) {
    grid.innerHTML = '<div class="no-results"><div class="icon">🔍</div><h3>No businesses found</h3><p>Try adjusting your search or category filter.</p></div>';
    return;
  }
  var html = "";
  for (var i = 0; i < data.length; i++) { html += buildCard(data[i], i); }
  grid.innerHTML = html;
  initScrollReveal();
}

function initSearch() {
  var input = document.getElementById("searchInput");
  var select = document.getElementById("categoryFilter");
  var searchBtn = document.getElementById("searchBtn");
  function doFilter() {
    var q = input.value.toLowerCase().trim();
    var cat = select.value;
    var filtered = businesses.filter(function (b) {
      var matchQ = !q || b.name.toLowerCase().indexOf(q) >= 0 || b.description.toLowerCase().indexOf(q) >= 0 || b.category.toLowerCase().indexOf(q) >= 0;
      var matchCat = !cat || b.category === cat;
      return matchQ && matchCat;
    });
    renderBusinessCards(filtered);
  }
  input.addEventListener("input", doFilter);
  select.addEventListener("change", doFilter);
  if (searchBtn) searchBtn.addEventListener("click", doFilter);
}

function renderTestimonials() {
  var grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  var html = "";
  for (var i = 0; i < testimonials.length; i++) {
    var t = testimonials[i];
    var stars = "";
    for (var s = 0; s < 5; s++) { stars += s < t.stars ? "★" : "☆"; }
    html += '<div class="testimonial-card reveal" style="transition-delay:' + (i * 0.1) + 's">' +
      '<div class="testimonial-quote">"</div>' +
      '<div class="testimonial-stars">' + stars + '</div>' +
      '<p>' + t.text + '</p>' +
      '<div class="testimonial-author">' +
      '<div class="testimonial-avatar" style="background:' + t.color + '">' + t.initials + '</div>' +
      '<div class="testimonial-info"><h4>' + t.name + '</h4><span>' + t.role + '</span></div>' +
      '</div></div>';
  }
  grid.innerHTML = html;
  initScrollReveal();
}

function initDetailPage() {
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"));
  var biz = null;
  for (var i = 0; i < businesses.length; i++) { if (businesses[i].id === id) { biz = businesses[i]; break; } }
  if (!biz) {
    document.getElementById("detailPage").innerHTML = '<div class="container" style="padding:100px 0;text-align:center"><h2>Business not found</h2><p>Go back and try again.</p><a href="index.html" class="btn btn-primary" style="margin-top:20px">Back to Home</a></div>';
    return;
  }

  document.title = biz.name + " — LocalLink";
  document.getElementById("detailName").textContent = biz.name;
  document.getElementById("detailBreadcrumbName").textContent = biz.name;

  var mainImg = document.getElementById("mainImage");
  mainImg.style.background = "linear-gradient(135deg," + biz.color + "," + biz.color + "dd)";
  mainImg.innerHTML = '<img src="' + biz.image + '" alt="' + biz.name + '" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><span style="font-size:5rem;font-weight:900;color:rgba(255,255,255,0.9);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">' + biz.initials + '</span>';

  var thumbs = "";
  for (var t = 0; t < 4; t++) {
    thumbs += '<div class="thumb ' + (t === 0 ? "active" : "") + '" style="background:linear-gradient(135deg,' + biz.color + (t === 0 ? "" : "99") + ',' + biz.color + (t === 0 ? "dd" : "66") + ')">' + biz.initials + '</div>';
  }
  document.getElementById("galleryThumbs").innerHTML = thumbs;

  document.getElementById("detailCategory").textContent = biz.category;
  document.getElementById("detailTitle").textContent = biz.name;

  var tagsHtml = "";
  for (var j = 0; j < biz.tags.length; j++) { tagsHtml += '<span class="tag tag-' + biz.tags[j].toLowerCase() + '">' + biz.tags[j] + '</span> '; }
  document.getElementById("detailTags").innerHTML = tagsHtml;
  document.getElementById("detailDesc").textContent = biz.description;

  var servicesHtml = "";
  for (var k = 0; k < biz.services.length; k++) { servicesHtml += '<li><span class="icon">✓</span>' + biz.services[k] + '</li>'; }
  document.getElementById("detailServices").innerHTML = servicesHtml;

  document.getElementById("detailAddress").textContent = biz.address;
  document.getElementById("detailPhone").textContent = biz.phone;
  document.getElementById("detailEmail").textContent = biz.email;
  document.getElementById("detailWebsite").textContent = biz.website;
  document.getElementById("detailWebsite").href = biz.website;
  document.getElementById("whatsappBtn").href = "https://wa.me/" + biz.phone.replace(/[^0-9]/g, "");

  var reviews = [
    { name: "Suresh M.", stars: 5, text: "Excellent service from " + biz.name + ". Very professional and reliable. Highly recommend!", color: "#2563eb", initials: "SM" },
    { name: "Neha P.", stars: 4, text: "Good quality products and fair pricing. The staff is friendly and helpful.", color: "#7c3aed", initials: "NP" },
    { name: "Vikram S.", stars: 5, text: "Been a regular customer for over 2 years. Consistent quality and great customer support.", color: "#0e7490", initials: "VS" }
  ];
  var reviewsHtml = "";
  for (var r = 0; r < reviews.length; r++) {
    var rv = reviews[r];
    var rstars = "";
    for (var rs = 0; rs < 5; rs++) { rstars += rs < rv.stars ? "★" : "☆"; }
    reviewsHtml += '<div class="review-card"><div class="review-header"><div class="review-avatar" style="background:' + rv.color + '">' + rv.initials + '</div><div class="review-meta"><h4>' + rv.name + '</h4><div class="stars">' + rstars + '</div></div></div><p class="review-text">' + rv.text + '</p></div>';
  }
  document.getElementById("reviewsList").innerHTML = reviewsHtml;

  var form = document.getElementById("detailContactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your inquiry has been sent to " + biz.name + "! They will contact you shortly.");
      form.reset();
    });
  }
}

function initRegisterForm() {
  var form = document.getElementById("registerForm");
  var formContent = document.getElementById("formContent");
  var successMsg = document.getElementById("successMessage");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm(form)) return;
    formContent.style.display = "none";
    successMsg.classList.add("show");
    window.scrollTo({ top: successMsg.offsetTop - 100, behavior: "smooth" });
  });
}

function initContactForm() {
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm(form)) return;
    alert("Thank you for reaching out! We will get back to you within 24 hours.");
    form.reset();
  });
}

function validateForm(form) {
  var valid = true;
  var fields = form.querySelectorAll("[required]");
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value.trim()) {
      fields[i].style.borderColor = "#ef4444";
      valid = false;
      (function (f) { f.addEventListener("input", function () { f.style.borderColor = ""; }, { once: true }); })(fields[i]);
    }
  }
  var emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.style.borderColor = "#ef4444";
    valid = false;
  }
  if (!valid) {
    var firstInvalid = form.querySelector('[style*="border-color"]');
    if (firstInvalid) firstInvalid.focus();
  }
  return valid;
}

// Smooth scroll for anchor links
var anchors = document.querySelectorAll('a[href^="#"]');
for (var a = 0; a < anchors.length; a++) {
  anchors[a].addEventListener("click", function (e) {
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
