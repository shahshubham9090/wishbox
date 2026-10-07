# Wishbox: birthday surprise cards (MVP)

Customers pay you by UPI and send their photos, voice note, video and message on WhatsApp.
You create the card in `/admin` and send them the link. The recipient opens an envelope, sees
confetti, and gets the message, voice note, photos and video. The card stops working when its plan ends.

Pages:
- `/` home page with plans, UPI QR and WhatsApp button
- `/w/demo` sample card (works with no setup)
- `/w/<id>` a real card
- `/admin` your panel (login required)

Running cost: ₹0 (Firebase Spark plan + Cloudinary free plan + Cloudflare Pages). No credit card needed.

---

## 1. Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:5173/w/demo to see the sample card.

## 2. Firebase (database + your login)

1. Go to https://console.firebase.google.com → Add project. Keep the free Spark plan.
2. Build → **Firestore Database** → Create database → Production mode → region `asia-south1 (Mumbai)`.
3. Build → **Authentication** → Get started → enable **Email/Password**.
   Then Users → Add user → your email + a strong password. Copy the **User UID**.
4. Project settings (gear icon) → Your apps → add a **Web app** → copy the config object into
   `firebaseConfig` in `src/config.js`.
5. Open `firestore.rules`, replace `PASTE_YOUR_ADMIN_UID` with your UID, then paste the whole file into
   Firestore → **Rules** → Publish.

## 3. Cloudinary (photos, voice notes, videos)

1. Sign up free at https://cloudinary.com. Copy your **Cloud name** from the dashboard.
2. Settings → Upload → Upload presets → **Add upload preset**:
   - Signing mode: **Unsigned**
   - Restrict allowed formats if you like (jpg, png, webp, heic, mp4, mov, mp3, m4a, ogg, opus)
3. Put the cloud name and preset name in `CLOUDINARY` in `src/config.js`.

Note: an unsigned preset name is visible in the site code, so someone technical could upload to it.
That's fine for an MVP. Later we move uploads behind a small server function.

## 4. Your details

In `src/config.js` set your WhatsApp number, UPI ID and plans.
Put your QR image in `public/` (for example `public/upi-qr.png`) and set `qrImage: '/upi-qr.png'`.

## 5. Put it online (Cloudflare Pages, free)

1. Push this folder to a GitHub repo.
2. https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: **Vite**. Build command `npm run build`. Output directory `dist`.
4. You get `https://your-project.pages.dev`. Links like `/w/abc123` work automatically.
5. In Firebase → Authentication → Settings → **Authorized domains**, add `your-project.pages.dev`.

## 6. Daily use

1. Customer pays and sends everything on WhatsApp.
2. Save their files, open `/admin`, fill the form, pick the plan and (optionally) the unlock time.
3. Click **Create card**, then **Copy WhatsApp message** and send it to the customer.
4. Someone wants more time? Click **Extend** on their card.
5. Every week or so, delete expired cards and their Cloudinary folders (`wishes/<id>`) to free space.
   The admin list shows the folder name for each card.

Tips:
- WhatsApp compresses photos and video. Ask customers to send them as **Document** for better quality.
- Video limit is 100 MB on Cloudinary's free plan (check your account). Ask for short clips.
- WhatsApp voice notes (.opus) are converted to MP3 automatically so they play on iPhones too.

## Known MVP limits (fix later)

- The WhatsApp link preview is the same for every card ("You have a birthday surprise").
- Unlock time is checked in the browser only.
- Expired media isn't deleted automatically yet.
