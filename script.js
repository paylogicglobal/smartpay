const translations = {
  en: {
    title: "PayLogicGlobal",
    subtitle: "Your smart & international payroll solution.",
    demoBtn: "Request Demo",
    featuresTitle: "Powerful Features",
    f1: "✅ Auto OT & public holiday calculation",
    f2: "✅ PDF Payslip with company logo",
    f3: "✅ Google Sheets Integration",
    f4: "✅ White-label & multilingual",
    f5: "✅ AI Assistant (LYRA) built-in",
    pricingTitle: "Plans & Pricing",
    starter: "Starter",
    starterDesc: "For small teams",
    business: "Business",
    businessDesc: "For growing companies",
    contactTitle: "Contact Us"
  },
  bm: {
    title: "PayLogicGlobal",
    subtitle: "Sistem gaji pintar untuk pasaran global.",
    demoBtn: "Mohon Demo",
    featuresTitle: "Ciri-Ciri Hebat",
    f1: "✅ Kiraan OT & cuti umum automatik",
    f2: "✅ Slip gaji PDF dengan logo syarikat",
    f3: "✅ Integrasi Google Sheets",
    f4: "✅ Sistem label sendiri & berbilang bahasa",
    f5: "✅ Pembantu AI (LYRA) terbina",
    pricingTitle: "Pelan & Harga",
    starter: "Permulaan",
    starterDesc: "Untuk pasukan kecil",
    business: "Perniagaan",
    businessDesc: "Untuk syarikat berkembang",
    contactTitle: "Hubungi Kami"
  }
};

function setLanguage(lang) {
  const keys = Object.keys(translations[lang]);
  keys.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = translations[lang][id];
  });
}
