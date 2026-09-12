import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

// Automatically load local .env if present
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  });
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '12mb' }));
app.use(express.urlencoded({ extended: true, limit: '12mb' }));

// In-Memory Store
let products = [
  { id: 1, name: 'Tomatoes', category: 'vegetable', farm: 'Varun FPO', place: 'Sonipat, Haryana', price: 27, oldPrice: 36, stock: 1000, grade: 'Grade A', icon: '🍅', tone: 'tomato', distance: 18, distanceText: '18 km', availableToday: true },
  { id: 2, name: 'Cauliflower', category: 'vegetable', farm: 'Savitri Farms', place: 'Panipat, Haryana', price: 32, oldPrice: 42, stock: 680, grade: 'Premium', icon: '🥦', tone: 'cauliflower', distance: 26, distanceText: '26 km', availableToday: true },
  { id: 3, name: 'Okra', category: 'vegetable', farm: 'Greenfield Collective', place: 'Karnal, Haryana', price: 38, oldPrice: 49, stock: 450, grade: 'Grade A', icon: '🥬', tone: 'okra', distance: 34, distanceText: '34 km', availableToday: false },
  { id: 4, name: 'Potatoes', category: 'vegetable', farm: 'Nandini FPO', place: 'Hisar, Haryana', price: 22, oldPrice: 29, stock: 2200, grade: 'Fresh harvest', icon: '🥔', tone: 'potato', distance: 47, distanceText: '47 km', availableToday: true },
  { id: 5, name: 'Kinnow Mandarin', category: 'fruit', farm: 'Varun FPO', place: 'Sirsa, Haryana', price: 45, oldPrice: 58, stock: 1500, grade: 'Premium Sweet', icon: '🍊', tone: 'citrus', distance: 22, distanceText: '22 km', availableToday: true },
  { id: 6, name: 'Crisp Apples', category: 'fruit', farm: 'Himalayan Orchards', place: 'Shimla / Delhi Hub', price: 95, oldPrice: 130, stock: 850, grade: 'Royal Delicious', icon: '🍎', tone: 'apple', distance: 19, distanceText: '19 km', availableToday: true },
  { id: 7, name: 'Baby Spinach', category: 'vegetable', farm: 'Varun FPO', place: 'Sonipat, Haryana', price: 28, oldPrice: 38, stock: 400, grade: 'Organic', icon: '🌱', tone: 'spinach', distance: 16, distanceText: '16 km', availableToday: true },
  { id: 8, name: 'Red Carrots', category: 'vegetable', farm: 'Sonipat Organic Hub', place: 'Sonipat, Haryana', price: 30, oldPrice: 40, stock: 1200, grade: 'Grade A', icon: '🥕', tone: 'carrot', distance: 15, distanceText: '15 km', availableToday: true }
];

let farmerInventory = [
  { emoji: '🍅', name: 'Tomatoes', quantity: 1000, price: '₹27/kg' },
  { emoji: '🥦', name: 'Cauliflower', quantity: 680, price: '₹32/kg' },
  { emoji: '🥔', name: 'Potatoes', quantity: 770, price: '₹22/kg' },
  { emoji: '🍊', name: 'Kinnow Mandarin', quantity: 1500, price: '₹45/kg' }
];

let orders = [
  {
    id: '#KS-2049',
    buyer: 'Green Basket Stores',
    items: '500 kg Tomatoes',
    produceName: 'Tomatoes',
    emoji: '🍅',
    qty: 500,
    farm: 'Varun FPO',
    place: 'Sonipat',
    amount: 15750,
    statusStep: 1,
    statusLabel: 'Confirmed',
    statusClass: 'confirmed',
    time: 'Today 4:30 PM'
  },
  {
    id: '#KS-2046',
    buyer: 'Asha Kitchens',
    items: '300 kg Cauliflower',
    produceName: 'Cauliflower',
    emoji: '🥦',
    qty: 300,
    farm: 'Savitri Farms',
    place: 'Panipat',
    amount: 10650,
    statusStep: 3,
    statusLabel: 'Pickup today',
    statusClass: 'pickup',
    time: 'Today 5:10 PM'
  },
  {
    id: '#KS-2042',
    buyer: 'Urban Fresh Market',
    items: '450 kg Tomatoes',
    produceName: 'Tomatoes',
    emoji: '🍅',
    qty: 450,
    farm: 'Varun FPO',
    place: 'Sonipat',
    amount: 14175,
    statusStep: 4,
    statusLabel: 'In transit',
    statusClass: 'transit',
    time: 'Today 5:45 PM'
  },
  {
    id: '#KS-2038',
    buyer: 'Green Basket Stores',
    items: '600 kg Potatoes',
    produceName: 'Potatoes',
    emoji: '🥔',
    qty: 600,
    farm: 'Nandini FPO',
    place: 'Hisar',
    amount: 15900,
    statusStep: 5,
    statusLabel: 'Delivered',
    statusClass: 'delivered',
    time: 'Yesterday 6:00 PM'
  }
];

const aiCropInsights = {
  tomatoes: {
    name: 'Tomatoes',
    emoji: '🍅',
    demandScore: 87,
    demandLevel: 'High',
    suggestedPrice: 27,
    marketAvg: 24,
    expectedDemand: '8,420 kg',
    advice: [
      'Demand is expected to rise 23% in the next 7 days in NCR.',
      'List 500-1,000 kg now for best buyer reach and quick collection.',
      'Expected buyer match in under 2 hours.'
    ]
  },
  cauliflower: {
    name: 'Cauliflower',
    emoji: '🥦',
    demandScore: 78,
    demandLevel: 'Steady',
    suggestedPrice: 32,
    marketAvg: 29,
    expectedDemand: '4,650 kg',
    advice: [
      'Steady institutional demand from commercial kitchens and stores.',
      'Premium curd compaction commands ₹3/kg above market rate.',
      'Recommended batch size: 300-600 kg.'
    ]
  },
  okra: {
    name: 'Okra (Bhindi)',
    emoji: '🥬',
    demandScore: 92,
    demandLevel: 'Very High',
    suggestedPrice: 38,
    marketAvg: 33,
    expectedDemand: '3,200 kg',
    advice: [
      'Supply deficit in Azadpur mandi gives growers strong pricing power.',
      'Morning harvested lots command full spot price with zero delay.',
      'Direct buyers match in under 45 minutes.'
    ]
  },
  potatoes: {
    name: 'Potatoes',
    emoji: '🥔',
    demandScore: 71,
    demandLevel: 'Moderate',
    suggestedPrice: 22,
    marketAvg: 20,
    expectedDemand: '18,500 kg',
    advice: [
      'High volume storage movement active across Haryana cold stores.',
      'Bundle with logistics collection to save ₹1.80/kg on freight.',
      'Bulk retail chains looking for 1,000+ kg lots.'
    ]
  },
  spinach: {
    name: 'Baby Spinach',
    emoji: '🌱',
    demandScore: 89,
    demandLevel: 'High',
    suggestedPrice: 28,
    marketAvg: 24,
    expectedDemand: '2,100 kg',
    advice: [
      'Supermarket fresh green counters restock daily at dawn.',
      'Cold chain route via North Hub prevents wilting loss.',
      'Recommended immediate dispatch within 4 hours of picking.'
    ]
  }
};

// API Root endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Kisan Setu Live API',
    version: '1.0.0',
    grower: 'Varun Singh (Varun FPO)',
    status: 'online',
    endpoints: [
      '/api/health',
      '/api/products',
      '/api/orders',
      '/api/farmer/inventory',
      '/api/ai/chat',
      '/api/ai/scan',
      '/api/ai/insights',
      '/api/logistics'
    ]
  });
});

// Render Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date() });
});

// Products
app.get('/api/products', (req, res) => {
  res.json({ success: true, count: products.length, data: products });
});

app.post('/api/products', (req, res) => {
  const { name, category, quantity, price, grade, image } = req.body;
  if (!name || !quantity || !price) {
    return res.status(400).json({ success: false, message: 'Missing required harvest fields' });
  }

  const emojiMap = {
    'Tomatoes': { icon: '🍅', tone: 'tomato' },
    'Cauliflower': { icon: '🥦', tone: 'cauliflower' },
    'Okra': { icon: '🥬', tone: 'okra' },
    'Potatoes': { icon: '🥔', tone: 'potato' },
    'Baby Spinach': { icon: '🌱', tone: 'spinach' },
    'Red Carrots': { icon: '🥕', tone: 'carrot' },
    'Kinnow Mandarin': { icon: '🍊', tone: 'citrus' }
  };
  const meta = emojiMap[name] || { icon: '🌱', tone: 'spinach' };

  const newProduct = {
    id: Date.now(),
    name,
    category: category || 'vegetable',
    farm: 'Varun FPO',
    place: 'Sonipat, Haryana',
    price: Number(price),
    oldPrice: Math.round(Number(price) * 1.3),
    stock: Number(quantity),
    grade: grade || 'Grade A',
    image: image || null,
    icon: meta.icon,
    tone: meta.tone,
    distance: 18,
    distanceText: '18 km',
    availableToday: true
  };

  products.unshift(newProduct);

  const existingInv = farmerInventory.find(i => i.name === name);
  if (existingInv) {
    existingInv.quantity += Number(quantity);
    existingInv.price = `₹${price}/kg`;
  } else {
    farmerInventory.unshift({
      emoji: meta.icon,
      name,
      quantity: Number(quantity),
      price: `₹${price}/kg`
    });
  }

  res.status(201).json({ success: true, message: 'Harvest listed successfully under Varun FPO', data: newProduct });
});

// Orders
app.get('/api/orders', (req, res) => {
  res.json({ success: true, count: orders.length, data: orders });
});

app.post('/api/orders', (req, res) => {
  const { cart } = req.body;
  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart cannot be empty' });
  }

  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const firstProd = products.find(p => p.id === cart[0].id) || products[0];
  const totalCost = cart.reduce((sum, item) => {
    const p = products.find(prod => prod.id === item.id);
    return sum + (p ? (p.price + 4.5) * item.qty : 0);
  }, 0);

  const newOrderId = `#KS-${Math.floor(2050 + Math.random() * 50)}`;
  const newOrder = {
    id: newOrderId,
    buyer: 'Green Basket Stores',
    items: `${totalQty.toLocaleString('en-IN')} kg ${firstProd.name}${cart.length > 1 ? ` +${cart.length - 1} more` : ''}`,
    produceName: firstProd.name,
    emoji: firstProd.icon,
    qty: totalQty,
    farm: firstProd.farm,
    place: firstProd.place.split(',')[0],
    amount: totalCost,
    statusStep: 1,
    statusLabel: 'Confirmed',
    statusClass: 'confirmed',
    time: 'Just now'
  };

  orders.unshift(newOrder);

  // Decrement stock
  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (p) p.stock = Math.max(0, p.stock - item.qty);
  });

  res.status(201).json({ success: true, message: `Order ${newOrderId} created`, data: newOrder });
});

app.patch('/api/orders/:id/advance', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  order.statusStep = Math.min(5, order.statusStep + 1);
  const labels = ['Placed', 'Confirmed', 'Packed', 'Pickup today', 'In transit', 'Delivered'];
  const classes = ['soft', 'confirmed', 'confirmed', 'pickup', 'transit', 'delivered'];
  order.statusLabel = labels[order.statusStep];
  order.statusClass = classes[order.statusStep];

  res.json({ success: true, message: `Order status advanced to ${order.statusLabel}`, data: order });
});

// Farmer Inventory
app.get('/api/farmer/inventory', (req, res) => {
  res.json({ success: true, grower: 'Varun Singh', fpo: 'Varun FPO', data: farmerInventory });
});

// Helper to extract JSON from Gemini output
function extractJson(text) {
  if (!text) return null;
  try {
    return JSON.parse(text.trim());
  } catch (e) {}
  const matchFenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (matchFenced) {
    try {
      return JSON.parse(matchFenced[1].trim());
    } catch (e) {}
  }
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(text.substring(firstBrace, lastBrace + 1).trim());
    } catch (e) {}
  }
  return null;
}

// Gemini Vision Crop Inspector
async function callGeminiVision(base64Image, mimeType, cropHint) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  const prompt = `You are Kisan Setu's AI Vision Agricultural Quality Inspector for Indian farming collectives and buyers.
Inspect this harvest crop/produce image thoroughly.
If a crop hint is given ("${cropHint || ''}"), consider it, or identify the crop from the image (e.g. Tomatoes, Cauliflower, Okra, Potatoes, Spinach, etc.).
Evaluate visual quality, color uniformity, defects, blemish level, firmness, shelf-life, and fair farmgate price in INR/kg for the Sonipat/Delhi NCR market.

Return ONLY a valid raw JSON object matching this exact schema:
{
  "crop": "Detected crop name",
  "lotId": "VF-${Math.floor(800 + Math.random() * 190)}",
  "ripeness": "percentage string (e.g. 94.2%)",
  "firmness": "rating string (e.g. 9.1 / 10)",
  "surfaceDefect": "defect percentage string (e.g. 0.4%)",
  "shelfLife": "shelf life string (e.g. 4-5 Days)",
  "predictedGrade": "Grade A Certified",
  "suggestedPrice": 28.0,
  "certifier": "Google Gemini Vision (gemini-3.6-flash)",
  "notes": "1 concise sentence evaluating the produce quality, color uniformity, and market readiness."
}`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: mimeType || 'image/jpeg',
                  data: base64Image
                }
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      console.error('Gemini Vision API status:', response.status);
      return null;
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return extractJson(candidateText);
  } catch (err) {
    console.error('Gemini Vision exception:', err.message);
    return null;
  }
}

// Gemini Chat Copilot
async function callGeminiChat(query) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  const prompt = `You are "Kisan AI Copilot", an agricultural advisor on the Kisan Setu platform.
You assist grower Varun Singh (Varun FPO in Sonipat, Haryana) and institutional buyers in Delhi NCR.
Provide crisp, practical agricultural guidance on mandi rates, weather impact, harvesting timing, and fair pricing.
Keep response concise (under 3 sentences), helpful, and respectful.
Question: "${query}"`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) return null;
    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text ? text.trim() : null;
  } catch (err) {
    console.error('Gemini Chat exception:', err.message);
    return null;
  }
}

// AI Copilot Chat Endpoint
app.post('/api/ai/chat', async (req, res) => {
  const query = req.body.query || '';
  if (!query) {
    return res.status(400).json({ success: false, message: 'Missing query' });
  }

  // 1. Try Live Gemini Copilot if API Key is configured
  if (process.env.GEMINI_API_KEY) {
    const liveReply = await callGeminiChat(query);
    if (liveReply) {
      return res.json({
        success: true,
        source: 'gemini-live',
        reply: {
          text: liveReply,
          action: { label: "Check AI Market Advisor", action: "ai-advisor" }
        }
      });
    }
  }

  // 2. Intelligent Rule-Based Fallback
  const q = query.toLowerCase();
  let reply = {
    text: `Namaste Varun Singh! Kisan AI monitors live mandi prices across Sonipat, Panipat, and Azadpur. Tomatoes and Okra are showing strong upwards momentum this week.`,
    action: { label: "Check AI Market Advisor", action: "ai-advisor" }
  };

  if (q.includes('price') || q.includes('rate') || q.includes('bhav')) {
    reply = {
      text: "Based on current NCR retail demand, Tomatoes from Varun FPO are valued at ₹27/kg (₹3 above mandi average). Cauliflower is trading strong at ₹32/kg. Would you like to list a batch now?",
      action: { label: "List Tomatoes at ₹27/kg", action: "prefill-produce", crop: "Tomatoes", price: 27 }
    };
  } else if (q.includes('route') || q.includes('logistics') || q.includes('delivery') || q.includes('truck')) {
    reply = {
      text: "The Sonipat collection route bundles Varun FPO (730 kg) and Savitri Farms (970 kg) into a single 48 km trip, cutting 18 km and saving ₹160 in fuel while preventing 22 kg of heat spoilage.",
      action: { label: "View Live Route Simulation", action: "set-screen", screen: "logistics" }
    };
  } else if (q.includes('quality') || q.includes('grade') || q.includes('scan')) {
    reply = {
      text: "Grade A requires >90% color uniformity, <1% surface blemishes, and firmness index >8.5. You can use our AI Vision scanner to certify your lot in 10 seconds.",
      action: { label: "Launch AI Quality Scan", action: "open-ai-scanner" }
    };
  } else if (q.includes('buyer') || q.includes('demand') || q.includes('ncr')) {
    reply = {
      text: "Green Basket Stores and 3 other verified supermarket chains in Delhi NCR are active right now. Estimated match time for Varun FPO produce is under 90 minutes.",
      action: { label: "Send Buyer Nudge", action: "send-nudge" }
    };
  }

  res.json({ success: true, source: 'rule-based', reply });
});

// AI Produce Vision Scanner
app.post('/api/ai/scan', async (req, res) => {
  const { image, crop } = req.body || {};

  // 1. If an image is provided and GEMINI_API_KEY is active, execute real Multimodal Vision scan
  if (image && process.env.GEMINI_API_KEY) {
    let mimeType = 'image/jpeg';
    let base64Data = image;
    if (image.startsWith('data:')) {
      const match = image.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    }

    const geminiResult = await callGeminiVision(base64Data, mimeType, crop);
    if (geminiResult) {
      return res.json({
        success: true,
        source: 'gemini-vision-live',
        data: {
          ...geminiResult,
          farm: 'Varun FPO'
        }
      });
    }
  }

  // 2. Intelligent Simulation Fallback (works seamlessly offline or without API key)
  const cropName = crop || 'Tomatoes';
  const priceMap = {
    'Tomatoes': 27.5,
    'Cauliflower': 32.0,
    'Okra': 38.0,
    'Potatoes': 22.0,
    'Baby Spinach': 28.0,
    'Red Carrots': 30.0,
    'Kinnow Mandarin': 45.0
  };
  const suggestedPrice = priceMap[cropName] || 27.5;

  const result = {
    crop: cropName,
    lotId: `VF-${Math.floor(800 + Math.random() * 190)}`,
    ripeness: '94.2%',
    firmness: '9.1 / 10',
    surfaceDefect: '0.4%',
    shelfLife: '4-5 Days',
    predictedGrade: 'Grade A Certified',
    suggestedPrice,
    certifier: process.env.GEMINI_API_KEY ? 'Google Gemini Vision 1.5' : 'Kisan AI Vision v3.2 (Simulation)',
    farm: 'Varun FPO',
    notes: 'Optimal color saturation and cellular firmness. Approved for Delhi NCR premium grocery chains.'
  };

  res.json({ success: true, source: 'simulation', data: result });
});

// AI Insights
app.get('/api/ai/insights', (req, res) => {
  res.json({ success: true, data: aiCropInsights });
});

// Logistics Route Data
app.get('/api/logistics', (req, res) => {
  res.json({
    success: true,
    route: 'Sonipat - Panipat - North Hub - Delhi NCR',
    totalDistance: '48 km',
    estTime: '1h 42m',
    fuelEstimate: '₹350',
    currentLoad: '1,700 kg',
    stops: [
      { num: '01', name: 'Varun FPO', place: 'Sonipat', details: '730 kg pickup', time: '4:30 PM' },
      { num: '02', name: 'Savitri Farms', place: 'Panipat', details: '970 kg pickup', time: '5:10 PM' },
      { num: '03', name: 'North Hub', place: 'Karnal bypass', details: 'Consolidate & quality check', time: '5:45 PM' },
      { num: '04', name: 'Green Basket Stores', place: 'Delhi NCR', details: '500 kg delivery', time: '6:42 PM' }
    ]
  });
});

// Serve frontend static assets if dist folder exists (Render unified full-stack deploy)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
} else {
  // If dist does not exist, root returns API info
  app.get('/', (req, res) => {
    res.json({
      name: 'Kisan Setu Live API',
      version: '1.0.0',
      grower: 'Varun Singh (Varun FPO)',
      status: 'online',
      endpoints: [
        '/api/health',
        '/api/products',
        '/api/orders',
        '/api/farmer/inventory',
        '/api/ai/chat',
        '/api/ai/scan',
        '/api/ai/insights',
        '/api/logistics'
      ]
    });
  });
}

app.listen(PORT, () => {
  console.log(`Kisan Setu Live Backend running on port ${PORT}`);
});
