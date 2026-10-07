// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Edit this file to make the site yours ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬

export const SITE = {
  name: 'Wishbox',
  // Your WhatsApp number with country code, digits only. Example: 919876543210
  whatsappNumber: '918200495373',
  upiId: '8200495373@upi',
  // Put your QR image in the /public folder and change this path, e.g. '/upi-qr.png'
  qrImage: `${import.meta.env.BASE_URL}upi-qr.svg`,
  // Plans shown on the home page and used in the admin panel.
  plans: [
    { days: 1, price: 19, label: '1 day', note: 'Good for a same-day surprise.' },
    { days: 10, price: 49, label: '10 days', note: 'Time to open it again and again.' },
    { days: 30, price: 99, label: '30 days', note: 'Includes a video up to 1 minute.' },
  ],
}

// From Firebase console ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Project settings ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Your apps ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Web app ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Config
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
}

// From Cloudinary dashboard (cloud name) and Settings ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Upload ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ Upload presets
export const CLOUDINARY = {
  cloudName: 'YOUR_CLOUD_NAME',
  uploadPreset: 'YOUR_UNSIGNED_PRESET',
}
