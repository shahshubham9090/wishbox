// â”€â”€â”€ Edit this file to make the site yours â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const SITE = {
  name: 'Wishbox',
  // Your WhatsApp number with country code, digits only. Example: 919876543210
  whatsappNumber: '91XXXXXXXXXX',
  upiId: 'yourname@upi',
  // Put your QR image in the /public folder and change this path, e.g. '/upi-qr.png'
  qrImage: `${import.meta.env.BASE_URL}upi-qr.svg`,
  // Plans shown on the home page and used in the admin panel.
  plans: [
    { days: 1, price: 19, label: '1 day', note: 'Good for a same-day surprise.' },
    { days: 10, price: 49, label: '10 days', note: 'Time to open it again and again.' },
    { days: 30, price: 99, label: '30 days', note: 'Includes a video up to 1 minute.' },
  ],
}

// From Firebase console â†’ Project settings â†’ Your apps â†’ Web app â†’ Config
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
}

// From Cloudinary dashboard (cloud name) and Settings â†’ Upload â†’ Upload presets
export const CLOUDINARY = {
  cloudName: 'YOUR_CLOUD_NAME',
  uploadPreset: 'YOUR_UNSIGNED_PRESET',
}
