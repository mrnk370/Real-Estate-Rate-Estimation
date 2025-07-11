const translations = {
  hi: {
    title: "🏠 अपनी संपत्ति की कीमत जानें",
    area_type: "क्षेत्र प्रकार",
    location: "स्थान",
    bhk: "बीएचके",
    bathrooms: "बाथरूम",
    balcony: "बालकनी",
    sqft: "कुल वर्ग फीट",
    features: "सुविधाएं चुनें",
    nearby: "निकटतम स्थान",
    predict: "🔍 कीमत पता करें",
    auto_nearby: "🗺️ स्वचालित रूप से पास की सुविधाएं दिखाएं (स्कूल, अस्पताल आदि)",
    download_pdf: "📥 पीडीएफ डाउनलोड करें",
    compare_properties: "🆚 संपत्तियों की तुलना करें"
  },
  kn: {
    title: "🏠 ನಿಮ್ಮ ಆಸ್ತಿ ಬೆಲೆಯನ್ನು ಊಹಿಸಿ",
    area_type: "ಪ್ರದೇಶದ ಪ್ರಕಾರ",
    location: "ಸ್ಥಳ",
    bhk: "ಬಿಎಚ್ಕೆ",
    bathrooms: "ಬಾತ್‌ರೂಮ್‌ಗಳು",
    balcony: "ಬಾಲ್ಕನಿ",
    sqft: "ಒಟ್ಟು ಚದರ ಅಡಿ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    nearby: "ಹತ್ತಿರದ ಸ್ಥಳಗಳು",
    predict: "🔍 ಬೆಲೆ ಊಹಿಸಿ",
    auto_nearby: "🗺️ ಸ್ಕೂಲ್, ಆಸ್ಪತ್ರೆ ಮುಂತಾದ ಹತ್ತಿರದ ಸೌಲಭ್ಯಗಳನ್ನು ತೋರಿಸಿ",
    download_pdf: "📥 ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    compare_properties: "🆚 ಆಸ್ತಿಗಳ ತಲಾಂತರ"
  },
  ta: {
    title: "🏠 உங்கள் சொத்தின் விலையை கணிக்கவும்",
    area_type: "பகுதி வகை",
    location: "இடம்",
    bhk: "பி.எச்.கே",
    bathrooms: "குளியறைகள்",
    balcony: "பால்கனி",
    sqft: "மொத்த சதுர அடிகள்",
    features: "வசதிகளை தேர்ந்தெடுக்கவும்",
    nearby: "அருகிலுள்ள இடங்கள்",
    predict: "🔍 விலையை கணிக்கவும்",
    auto_nearby: "🗺️ பள்ளிகள், மருத்துவமனைகள் போன்றவற்றை தானாகக் காட்டு",
    download_pdf: "📥 PDF ஐ பதிவிறக்கவும்",
    compare_properties: "🆚 சொத்துக்களை ஒப்பிடு"
  },
  ml: {
    title: "🏠 നിങ്ങളുടെ ആസ്തിയുടെ വില പ്രവചിക്കുക",
    area_type: "പ്രദേശ തരം",
    location: "സ്ഥലം",
    bhk: "ബിഎച്ച്കെ",
    bathrooms: "ബാത്ത്‌റൂം",
    balcony: "ബാൽക്കണി",
    sqft: "മൊത്തം ചതുരശ്ര അടി",
    features: "ഗൃഹസൗകര്യങ്ങൾ തിരഞ്ഞെടുക്കുക",
    nearby: "സമീപസ്ഥമായ സ്ഥലങ്ങൾ",
    predict: "🔍 വില പ്രവചിക്കുക",
    auto_nearby: "🗺️ സ്കൂളുകൾ, ആശുപത്രികൾ തുടങ്ങിയവ സ്വയം കാണിക്കുക",
    download_pdf: "📥 PDF ഡൗൺലോഡ് ചെയ്യുക",
    compare_properties: "🆚 ആസ്തികളുടെ താരതമ്യം ചെയ്യുക"
  }
};

document.getElementById('lang-select').addEventListener('change', function () {
  const selectedLang = this.value;
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (selectedLang === 'en') {
      el.textContent = el.getAttribute('data-original') || el.textContent;
    } else {
      if (!el.getAttribute('data-original')) {
        el.setAttribute('data-original', el.textContent);
      }
      el.textContent = translations[selectedLang][key] || el.textContent;
    }
  });
});
