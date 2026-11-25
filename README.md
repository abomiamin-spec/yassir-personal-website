# YASSER JABER – موقع شخصي

موقع ثابت (HTML + CSS + JavaScript) جاهز للنشر على GitHub Pages، بدون Build أو خادم.

## النشر على GitHub Pages
1. أنشئ مستودعاً جديداً على GitHub (مثلاً `yasser-personal-website`).
2. ارفع كل محتويات هذا المجلد إلى المستودع بحيث يكون `index.html` في الجذر.
3. من **Settings ← Pages** اختر **Deploy from a branch**، ثم الفرع `main` والمجلد `/ (root)`، واضغط **Save**.
4. بعد دقيقة يظهر الرابط: `https://USERNAME.github.io/REPO-NAME/`

## التعديل
كل البيانات في أعلى الملف `js/script.js` داخل `CONFIG`:
- **الاسم والوصف:** `profile`
- **إضافة/حذف حساب:** عنصر في `socials` (الأيقونات: instagram, tiktok, telegram, whatsapp, youtube, globe)
- **إضافة/تعديل مشروع:** عنصر في `projects` (الأيقونات: store, shield, globe)
- **الصورة الشخصية:** استبدل `assets/profile.jpg` بصورة بنفس الاسم (يفضّل 1200×800، النسبة 3:2)
- **صورة المشاركة:** `assets/og-image.jpg` (1200×630)
- **الألوان:** المتغيرات في أول `css/style.css`

> لتظهر صورة المشاركة (Open Graph) بشكل صحيح في بعض المنصات، غيّر قيمة `og:image` في `index.html` إلى الرابط الكامل بعد النشر.
