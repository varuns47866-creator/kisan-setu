# Kisan Setu prototype

An interactive frontend prototype for a fair farm-to-market supply chain. It uses demo data only - no live prices, accounts, payments, or backend services are connected.

## Live Deployment

### 1. Backend on Render (Live Server)
1. Push this repository to **GitHub**.
2. Log in to [Render](https://render.com/) and click **New + > Web Service**.
3. Select your GitHub repository.
4. Set the following settings (or let Render auto-detect from `render.yaml`):
   - **Name:** `kisan-setu-backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start` (or `node server/index.js`)
   - **Health Check Path:** `/api/health`
5. Click **Deploy Web Service**. Your live backend URL will be:
   `https://kisan-setu-backend.onrender.com` (copy this URL).

### 2. Frontend on Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New > Project**.
2. Import your GitHub repository.
3. Vercel automatically detects the **Vite** framework (configured in `vercel.json`):
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add the Environment Variable:
   - **`VITE_API_URL`**: `https://kisan-setu-backend.onrender.com` (your Render URL from step 1).
5. Click **Deploy**. Your frontend is live with full SSL and global CDN!

---

## Run Locally

```powershell
# Install all dependencies
npm install

# Run Frontend (Vite)
npm run dev

# Run Backend (Express API Server)
npm start
```


## Demo path

1. Open **I’m a farmer** to see the Grower Workspace for **Varun Singh (Varun FPO)**.
2. Check the **AI price advisor** across multiple crops (Tomatoes, Cauliflower, Okra, Spinach) and click **List produce** to pre-fill the harvest form.
3. Test the **AI Quality Scan** computer-vision tool to inspect crop ripeness, firmness, and blemish percentage to certify Grade A.
4. Try the **AI Pricing & Demand Simulator** sliders (batch weight & distance) to recalculate live demand and revenue.
5. Launch the conversational **Ask Kisan AI Copilot** (via floating button or header) to query live market rates and supply intelligence.
6. Visit **Explore fresh produce** (Marketplace), filter by Vegetables, Fruit, Distance, or Availability, or search by crop or location.
7. Click any produce card to inspect the interactive **transparent price breakdown**, adjust the quantity with the **stepper**, and click **Add to cart**.
8. Open the **Cart**, verify multi-item totals, and **Confirm order**.
9. Navigate to **Logistics** and click **Start live route** / **Next stop** to watch the truck simulate pickup and delivery between Varun FPO, Savitri Farms, North Hub, and Green Basket Stores.
10. Inspect orders with live step-by-step progress tracking, review platform analytics, and check real-time notifications from the bell icon.


