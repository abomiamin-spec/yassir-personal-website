/* =====================================================
   بيانات الموقع — عدّل هنا فقط
   - لإضافة حساب: أضف عنصراً جديداً في socials
   - لإضافة مشروع: أضف عنصراً جديداً في projects
   - icon: أحد المفاتيح الموجودة في ICONS بالأسفل
   - الصورة الشخصية: استبدل الملف assets/profile.jpg
   ===================================================== */
const CONFIG = {
  profile: {
    nameEn: "YASSER JABER",
    nameAr: "ياسر جابر",
    title: "مصمم وهاوي برمجة",
    bio: "أهلاً بك في مساحتي الرقمية، هنا تجد جميع حساباتي الشخصية وروابطي ومشاريعي التقنية في مكان واحد."
  },
  socials: [
    { name: "Instagram",         icon: "instagram", url: "https://www.instagram.com/24ciq?bqrl=MWx6Z2FwbGhkMzNqdQ==" },
    { name: "TikTok",            icon: "tiktok",    url: "https://www.tiktok.com/@24ciq?_r=1&_t=ZS-9Bhs9LQA8Sl" },
    { name: "Telegram",          icon: "telegram",  url: "https://t.me/yassir_jabeer" },
    { name: "WhatsApp Channel",  icon: "whatsapp",  url: "https://whatsapp.com/channel/0029Vb93tU2LNSa6o2bLI53p" },
    { name: "YouTube",           icon: "youtube",   url: "https://youtube.com/@24ciq?si=1EzDSQ7qyc5LeTgw" }
  ],
  projects: [
    {
      name: "متجر ياسر جابر التقني",
      icon: "store",
      desc: "متجري الشخصي لعرض التطبيقات والبرامج والمشاريع التقنية التي أقوم بتطويرها.",
      url: "https://abomiamin-spec.github.io/appweb/#",
      button: "زيارة الموقع"
    },
    {
      name: "Telegram Proxies",
      icon: "shield",
      desc: "موقع مخصص لعرض بروكسيات تيليجرام وتسهيل الوصول إليها.",
      url: "https://abomiamin-spec.github.io/telegram-proxies/",
      button: "زيارة الموقع"
    }
  ]
};

/* أيقونات خطية بسيطة (SVG) */
const ICONS = {
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
  youtube:   '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.2 9.4v5.2l4.4-2.6z"/>',
  tiktok:    '<path d="M14 3.5v10.8a3.7 3.7 0 1 1-3.7-3.7"/><path d="M14 3.5c.3 2.5 2 4.2 4.5 4.4"/>',
  telegram:  '<path d="M21 4 3 11l6 2.2L11 20l3-4.3 4.6 3.5z"/><path d="m9 13.2 12-9.2"/>',
  whatsapp:  '<path d="M3.5 20.5l1.3-4.3A8.6 8.6 0 1 1 8 19.3z"/><path d="M9.2 8.6c0 3 2.3 5.5 5.6 6.5l1.2-1.4-2-1-.9.7c-.9-.4-1.9-1.4-2.3-2.3l.7-.9-1-2z"/>',
  store:     '<path d="M4 9.5 5.5 4h13L20 9.5M4 9.5V20h16V9.5"/><path d="M4 9.5c0 1.5 1.2 2.5 2.7 2.5s2.6-1 2.6-2.5c0 1.5 1.2 2.5 2.7 2.5s2.7-1 2.7-2.5c0 1.5 1.2 2.5 2.6 2.5S20 11 20 9.5"/>',
  shield:    '<path d="M12 3 4.5 6v6c0 4.4 3.1 7.8 7.5 9 4.4-1.2 7.5-4.6 7.5-9V6z"/><path d="m9 12 2 2 4-4"/>',
  globe:     '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9S14.5 18.5 12 21c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3z"/>',
  arrow:     '<path d="M19 12H5m6-6-6 6 6 6"/>'
};

const SVG_NS = "http://www.w3.org/2000/svg";
function svg(name, cls) {
  const el = document.createElementNS(SVG_NS, "svg");
  el.setAttribute("viewBox", "0 0 24 24");
  el.setAttribute("aria-hidden", "true");
  el.setAttribute("class", cls);
  el.innerHTML = ICONS[name] || ICONS.globe;
  return el;
}
function make(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text) el.textContent = text;
  return el;
}
function externalLink(url, cls) {
  const a = make("a", cls);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

/* بيانات الملف الشخصي */
document.querySelectorAll("[data-bind]").forEach(el => {
  const v = CONFIG.profile[el.dataset.bind];
  if (v) el.textContent = v;
});

/* التواصل الاجتماعي */
const socialsEl = document.getElementById("socials");
CONFIG.socials.forEach((s, i) => {
  const li = make("li");
  li.style.setProperty("--i", i);
  const a = externalLink(s.url, "link");
  a.append(svg(s.icon, "link-icon"), make("span", "link-name", s.name), svg("arrow", "link-arrow"));
  li.append(a);
  socialsEl.append(li);
});

/* المشاريع */
const projectsEl = document.getElementById("projects");
CONFIG.projects.forEach(p => {
  const card = make("article", "project");
  const tile = make("div", "project-tile");
  tile.append(svg(p.icon, "project-icon"));
  const a = externalLink(p.url, "project-btn");
  a.append(make("span", "", p.button || "زيارة الموقع"), svg("arrow", "link-arrow"));
  a.setAttribute("aria-label", (p.button || "زيارة الموقع") + ": " + p.name);
  card.append(tile, make("h3", "project-name", p.name), make("p", "project-desc", p.desc), a);
  projectsEl.append(card);
});

/* أيقونات التذييل */
const footEl = document.getElementById("footer-socials");
CONFIG.socials.forEach(s => {
  const li = make("li");
  const a = externalLink(s.url, "foot-link");
  a.setAttribute("aria-label", s.name);
  a.title = s.name;
  a.append(svg(s.icon, "foot-icon"));
  li.append(a);
  footEl.append(li);
});
