import './style.css';

const API_BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) || '';

// High-fidelity sample produce illustrations encoded as SVG Data URIs for instant preview
const sampleProducePhotos = {
  Tomatoes: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><radialGradient id="t1" cx="35%" cy="35%" r="65%"><stop offset="0%" stop-color="%23ff6b6b"/><stop offset="50%" stop-color="%23e02424"/><stop offset="100%" stop-color="%23990e0e"/></radialGradient><radialGradient id="t2" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="%23ff7a7a"/><stop offset="60%" stop-color="%23d61b1b"/><stop offset="100%" stop-color="%23800a0a"/></radialGradient><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231a3323"/><stop offset="100%" stop-color="%230e2016"/></linearGradient></defs><rect width="400" height="300" fill="url(%23bg)"/><circle cx="160" cy="170" r="75" fill="url(%23t1)"/><circle cx="245" cy="155" r="82" fill="url(%23t2)"/><circle cx="195" cy="135" r="58" fill="url(%23t1)"/><path d="M195 105 Q190 75 205 60 Q212 55 210 70 Q215 88 198 105" fill="%232f7535"/><path d="M195 105 L175 95 L190 108 L165 115 L192 118 L185 130 L198 118 L215 132 L202 115 L225 110 L202 105 L215 90 Z" fill="%233e9b46"/><ellipse cx="140" cy="140" rx="14" ry="7" fill="%23ff9999" opacity="0.6" transform="rotate(-30 140 140)"/><ellipse cx="230" cy="120" rx="18" ry="9" fill="%23ff9999" opacity="0.6" transform="rotate(-25 230 120)"/><text x="20" y="275" fill="%238eeab4" font-family="monospace" font-size="13" font-weight="bold">SAMPLE LOT #VF-902 · ROMA TOMATOES (SONIPAT)</text></svg>',
  Cauliflower: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231a3323"/><stop offset="100%" stop-color="%230e2016"/></linearGradient><radialGradient id="curd" cx="40%" cy="35%" r="65%"><stop offset="0%" stop-color="%23ffffff"/><stop offset="60%" stop-color="%23f4f7f2"/><stop offset="100%" stop-color="%23d6ded1"/></radialGradient></defs><rect width="400" height="300" fill="url(%23cbg)"/><path d="M80 180 Q130 110 200 130 Q270 110 320 180 Q290 250 200 240 Q110 250 80 180 Z" fill="%232d663b"/><path d="M60 210 Q100 150 160 170 Q120 250 60 210 Z" fill="%23397d4a"/><path d="M340 210 Q300 150 240 170 Q280 250 340 210 Z" fill="%23397d4a"/><ellipse cx="200" cy="165" rx="85" ry="65" fill="url(%23curd)"/><circle cx="160" cy="145" r="30" fill="%23fafff8"/><circle cx="210" cy="135" r="32" fill="%23ffffff"/><circle cx="240" cy="160" r="28" fill="%23f0f5ee"/><circle cx="170" cy="180" r="32" fill="%23edf2ea"/><circle cx="215" cy="185" r="30" fill="%23f4f7f2"/><circle cx="195" cy="160" r="26" fill="%23ffffff"/><text x="20" y="275" fill="%238eeab4" font-family="monospace" font-size="13" font-weight="bold">SAMPLE LOT #VF-840 · SNOW WHITE CAULIFLOWER</text></svg>',
  Okra: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="obg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231a3323"/><stop offset="100%" stop-color="%230e2016"/></linearGradient><linearGradient id="o1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2356ab2f"/><stop offset="100%" stop-color="%232b6814"/></linearGradient></defs><rect width="400" height="300" fill="url(%23obg)"/><path d="M120 70 Q140 130 180 220 Q185 230 188 220 Q160 140 145 70 Z" fill="url(%23o1)"/><path d="M170 65 Q195 130 225 225 Q230 235 232 225 Q210 140 195 65 Z" fill="url(%23o1)"/><path d="M210 75 Q240 140 270 215 Q275 225 277 215 Q250 140 235 75 Z" fill="url(%23o1)"/><ellipse cx="132" cy="70" rx="14" ry="6" fill="%231e4e0e"/><ellipse cx="182" cy="65" rx="14" ry="6" fill="%231e4e0e"/><ellipse cx="222" cy="75" rx="14" ry="6" fill="%231e4e0e"/><text x="20" y="275" fill="%238eeab4" font-family="monospace" font-size="13" font-weight="bold">SAMPLE LOT #VF-712 · TENDER OKRA (KARNAL)</text></svg>',
  Potatoes: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="pbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231a3323"/><stop offset="100%" stop-color="%230e2016"/></linearGradient><radialGradient id="pot1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="%23e8c385"/><stop offset="60%" stop-color="%23be9352"/><stop offset="100%" stop-color="%237a541e"/></radialGradient></defs><rect width="400" height="300" fill="url(%23pbg)"/><ellipse cx="170" cy="165" rx="75" ry="55" fill="url(%23pot1)" transform="rotate(-15 170 165)"/><ellipse cx="250" cy="155" rx="70" ry="50" fill="url(%23pot1)" transform="rotate(20 250 155)"/><circle cx="150" cy="145" r="3" fill="%23614013"/><circle cx="190" cy="170" r="3" fill="%23614013"/><circle cx="230" cy="140" r="2.5" fill="%23614013"/><circle cx="270" cy="165" r="3" fill="%23614013"/><text x="20" y="275" fill="%238eeab4" font-family="monospace" font-size="13" font-weight="bold">SAMPLE LOT #VF-604 · GOLDEN HARVEST POTATOES</text></svg>'
};

async function syncWithBackend() {
  try {
    const url = API_BASE ? `${API_BASE}/api/products` : '/api/products';
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
        state.products = json.data;
        render();
      }
    }
  } catch {
    // Graceful offline fallback
  }
}

const initialProducts = [
  { id: 1, name: 'Tomatoes', category: 'vegetable', farm: 'Varun FPO', place: 'Sonipat, Haryana', price: 27, oldPrice: 36, stock: 1000, grade: 'Grade A', icon: '🍅', tone: 'tomato', distance: 18, distanceText: '18 km', availableToday: true },
  { id: 2, name: 'Cauliflower', category: 'vegetable', farm: 'Savitri Farms', place: 'Panipat, Haryana', price: 32, oldPrice: 42, stock: 680, grade: 'Premium', icon: '🥦', tone: 'cauliflower', distance: 26, distanceText: '26 km', availableToday: true },
  { id: 3, name: 'Okra', category: 'vegetable', farm: 'Greenfield Collective', place: 'Karnal, Haryana', price: 38, oldPrice: 49, stock: 450, grade: 'Grade A', icon: '🥬', tone: 'okra', distance: 34, distanceText: '34 km', availableToday: false },
  { id: 4, name: 'Potatoes', category: 'vegetable', farm: 'Nandini FPO', place: 'Hisar, Haryana', price: 22, oldPrice: 29, stock: 2200, grade: 'Fresh harvest', icon: '🥔', tone: 'potato', distance: 47, distanceText: '47 km', availableToday: true },
  { id: 5, name: 'Kinnow Mandarin', category: 'fruit', farm: 'Varun FPO', place: 'Sirsa, Haryana', price: 45, oldPrice: 58, stock: 1500, grade: 'Premium Sweet', icon: '🍊', tone: 'citrus', distance: 22, distanceText: '22 km', availableToday: true },
  { id: 6, name: 'Crisp Apples', category: 'fruit', farm: 'Himalayan Orchards', place: 'Shimla / Delhi Hub', price: 95, oldPrice: 130, stock: 850, grade: 'Royal Delicious', icon: '🍎', tone: 'apple', distance: 19, distanceText: '19 km', availableToday: true },
  { id: 7, name: 'Baby Spinach', category: 'vegetable', farm: 'Varun FPO', place: 'Sonipat, Haryana', price: 28, oldPrice: 38, stock: 400, grade: 'Organic', icon: '🌱', tone: 'spinach', distance: 16, distanceText: '16 km', availableToday: true },
  { id: 8, name: 'Red Carrots', category: 'vegetable', farm: 'Sonipat Organic Hub', place: 'Sonipat, Haryana', price: 30, oldPrice: 40, stock: 1200, grade: 'Grade A', icon: '🥕', tone: 'carrot', distance: 15, distanceText: '15 km', availableToday: true }
];

const aiCropInsights = {
  tomatoes: {
    name: 'Tomatoes',
    emoji: '🍅',
    demandScore: 87,
    demandLevel: 'High',
    suggestedPrice: 27,
    marketAvg: 24,
    bars: [37, 52, 48, 64, 58, 80, 93],
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
    bars: [45, 55, 60, 68, 70, 75, 78],
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
    bars: [50, 62, 70, 81, 85, 90, 95],
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
    bars: [40, 42, 45, 50, 60, 65, 71],
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
    bars: [30, 45, 58, 65, 75, 82, 90],
    expectedDemand: '2,100 kg',
    advice: [
      'Supermarket fresh green counters restock daily at dawn.',
      'Cold chain route via North Hub prevents wilting loss.',
      'Recommended immediate dispatch within 4 hours of picking.'
    ]
  }
};

const state = {
  screen: 'home',
  products: [...initialProducts],
  cart: [],
  wishlist: [1],
  activeFilter: 'all',
  search: '',
  modal: null,
  modalProductId: 1,
  modalQty: 500,
  prefillProduce: null,
  activeAiCrop: 'tomatoes',
  selectedOrderId: '#KS-2049',
  orders: [
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
  ],
  farmerInventory: [
    { emoji: '🍅', name: 'Tomatoes', quantity: 1000, price: '₹27/kg' },
    { emoji: '🥦', name: 'Cauliflower', quantity: 680, price: '₹32/kg' },
    { emoji: '🥔', name: 'Potatoes', quantity: 770, price: '₹22/kg' },
    { emoji: '🍊', name: 'Kinnow Mandarin', quantity: 1500, price: '₹45/kg' }
  ],
  deliveryStarted: false,
  deliveryStep: 1,
  toast: '',
  unreadNotifications: 3,
  notifications: [
    { id: 1, title: 'Tomato demand surge', time: '10 min ago', desc: 'NCR retail buyers requesting 4,000 kg today. AI recommends ₹27/kg for Varun FPO lots.', read: false },
    { id: 2, title: 'Collection vehicle dispatched', time: '35 min ago', desc: 'Route Sonipat-Panipat-North Hub is on schedule for 4:30 PM pickup at Varun FPO.', read: false },
    { id: 3, title: 'Quality check passed', time: '2h ago', desc: 'Varun FPO batch #VF-902 certified Grade A at automated hub.', read: false }
  ],
  adminChartRange: '7d',
  // AI Interactive State & Gemini Vision
  simVolume: 1000,
  simRadius: 25,
  scannerCrop: 'Tomatoes',
  scannerImage: null,
  scannerImageName: '',
  scannerRunning: false,
  scannerDone: false,
  scannerResult: null,
  harvestImage: null,
  aiChatQuery: '',
  aiChatHistory: [
    {
      sender: 'ai',
      text: "Namaste Varun Singh! I am your Kisan AI Copilot powered by Google Gemini. I analyze live mandi rates, buyer requests across Delhi NCR, and produce quality photos. How can I help Varun FPO today?",
      action: null
    }
  ]
};

const icon = (name, size = 20) => {
  const paths = {
    leaf: '<path d="M20 4C11 4 5 8.5 5 15c0 2.2 1.8 4 4 4 6.5 0 11-6 11-15Z"/><path d="M3 21c3-4 7-6 12-8"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L20 8H7"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
    sparkle: '<path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z"/><path d="m19 15-.7 2.3L16 18l2.3.7L19 21l.7-2.3L22 18l-2.3-.7L19 15Z"/>',
    chart: '<path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/>',
    box: '<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>',
    route: '<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h5a3 3 0 0 1 3 3v8a3 3 0 0 0 3 3h-1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    trend: '<path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    bot: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.leaf}</svg>`;
};

const productById = (id) => state.products.find((p) => p.id === Number(id)) || state.products[0];
const money = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`;

function setScreen(screen) {
  state.screen = screen;
  state.modal = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function toast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = '';
    render();
  }, 2600);
}

function nav(active) {
  const cartItemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  return `
    <header class="topbar">
      <button class="brand" data-screen="home" aria-label="Kisan Setu home">
        <span class="brand-mark">${icon('leaf', 22)}</span>
        <span>Kisan <b>Setu</b></span>
      </button>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${navItem('home', 'Home', active)}
        ${navItem('marketplace', 'Marketplace', active)}
        ${navItem('farmer', 'For farmers', active)}
        ${navItem('logistics', 'Logistics', active)}
        ${navItem('admin', 'Platform stats', active)}
      </nav>
      <div class="nav-actions">
        <button class="ai-header-btn" data-action="open-ai-chat" title="Ask Kisan AI Assistant">
          ${icon('sparkle', 16)} <span>Ask AI</span>
        </button>
        <button class="icon-button notification" data-action="open-notifications" aria-label="Notifications">
          ${icon('bell', 19)}
          ${state.unreadNotifications > 0 ? `<i></i>` : ''}
        </button>
        <button class="cart-button" data-action="open-cart">
          ${icon('cart', 19)} <span>${cartItemCount > 0 ? `${cartItemCount.toLocaleString('en-IN')} kg` : 'Cart'}</span>
        </button>
        <button class="avatar" data-screen="farmer" aria-label="Open farmer profile" title="Varun Singh · Varun FPO">V</button>
        <button class="icon-button mobile-menu-btn" data-action="open-mobile-menu" aria-label="Open navigation menu">
          ${icon('menu', 22)}
        </button>
      </div>
    </header>`;
}

function navItem(screen, label, active) {
  return `<button class="nav-link ${active === screen ? 'active' : ''}" data-screen="${screen}">${label}</button>`;
}

function home() {
  return `
    <main class="home-page">
      ${nav('home')}
      <section class="hero section-wrap">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> Direct from farms, made simple</p>
          <h1>Fair food has a<br/><em>shorter journey.</em></h1>
          <p class="hero-lede">A smarter farm-to-market network connecting verified growers like Varun Singh (Varun FPO) directly with commercial buyers, powered by AI pricing and route bundling.</p>
          <div class="hero-actions">
            <button class="primary-button" data-screen="marketplace">Explore fresh produce ${icon('arrow', 18)}</button>
            <button class="text-button" data-screen="farmer">I’m a farmer <span>→</span></button>
          </div>
          <div class="trust-row">
            <div class="people"><span>V</span><span>S</span><span>A</span><span>+</span></div>
            <p><b>2,400+ growers</b><br/>selling closer to home</p>
          </div>
        </div>
        <div class="hero-visual reveal-delayed" aria-label="Illustration of produce moving from farms to market">
          <div class="sun"></div><div class="cloud c1"></div><div class="cloud c2"></div>
          <div class="hill hill-back"></div><div class="hill hill-front"></div>
          <div class="field field-one"></div><div class="field field-two"></div><div class="field field-three"></div>
          <div class="path"></div>
          <div class="farm-card"><span class="mini-avatar">V</span><div><small>Fresh from</small><b>Varun FPO</b></div><span class="verify">${icon('check', 13)}</span></div>
          <div class="produce-crate"><span>🍅</span><span>🥬</span><span>🥦</span></div>
          <div class="route-badge"><span class="route-icon">${icon('route', 17)}</span><div><small>Optimized route</small><b>18 km · 42 min</b></div></div>
          <div class="hero-stat"><span>${icon('sparkle', 20)}</span><div><small>AI market insight</small><b>Tomatoes trending +23%</b></div></div>
        </div>
      </section>
      <section class="purpose-band">
        <div class="section-wrap purpose-grid">
          <p class="eyebrow light"><span></span> Better for everyone</p>
          <p>We make the route from field to table more <i>fair, visible, and efficient.</i></p>
          <div class="purpose-link" data-screen="marketplace">Explore harvests ${icon('arrow', 17)}</div>
        </div>
      </section>
      <section class="section-wrap impact-section">
        <div class="section-heading"><p class="eyebrow"><span></span> Built around the people who grow and buy</p><h2>Less distance.<br/><em>More value.</em></h2></div>
        <div class="impact-grid">
          ${impactCard('01', icon('sparkle', 25), 'AI Price Guidance', 'Varun Singh and local growers earn 31% more with real-time demand scoring and quality vision.', 'Explore AI advisor', 'farmer')}
          ${impactCard('02', icon('cart', 25), 'For Buyers', 'Know exactly where your food comes from - and what each rupee pays for.', 'Shop marketplace', 'marketplace')}
          ${impactCard('03', icon('route', 25), 'Smart Logistics', 'Bundle pickups automatically to move produce with near-zero waste.', 'See logistics route', 'logistics')}
        </div>
      </section>
      <section class="quote-section section-wrap"><div class="quote-leaf">${icon('leaf', 28)}</div><p>“Food should travel with care,<br/>not through layers.”</p><span>Kisan Setu's promise</span></section>
      ${footer()}
      ${modal()}
    </main>`;
}

function impactCard(number, svg, title, description, action, screen) {
  return `<article class="impact-card"><span class="card-number">${number}</span><span class="impact-icon">${svg}</span><h3>${title}</h3><p>${description}</p><button data-screen="${screen}">${action} ${icon('arrow', 16)}</button></article>`;
}

function farmer() {
  const totalStock = state.farmerInventory.reduce((acc, curr) => acc + curr.quantity, 0);
  const activeOrdersCount = state.orders.filter(o => o.statusStep < 5).length;

  // Simulator dynamic calculations
  const vol = state.simVolume;
  const rad = state.simRadius;
  const simDemandScore = Math.min(98, Math.round(92 - (vol / 400) + (rad / 8)));
  const simSuggestedPrice = (27 + (simDemandScore > 85 ? 1.5 : 0) - (rad > 40 ? 1 : 0)).toFixed(1);
  const simMatchHours = (vol < 800 ? 1.2 : vol < 2000 ? 2.4 : 3.8).toFixed(1);
  const simRevenue = Math.round(vol * Number(simSuggestedPrice));

  return `
    <main class="dashboard-page">
      ${nav('farmer')}
      <div class="dashboard-layout">
        ${sideNav('farmer')}
        <section class="dashboard-content">
          <div class="welcome-row">
            <div>
              <p class="eyebrow"><span></span> Grower workspace</p>
              <h1>Good morning, Varun Singh <span>🌿</span></h1>
              <p>Here’s what’s happening with your harvest today at Varun FPO.</p>
            </div>
            <div class="farmer-action-buttons">
              <button class="ai-button-accent" data-action="open-ai-scanner" title="Scan produce with computer vision">
                ${icon('camera', 16)} <span>AI Quality Scan</span>
              </button>
              <button class="outline-button" data-action="add-produce">+ Add produce</button>
            </div>
          </div>
          <div class="farmer-kpis">
            ${kpi('Today’s earnings', '₹24,850', '+12.4%', 'up')}
            ${kpi('Active orders', `${activeOrdersCount}`, `${activeOrdersCount} in progress`, 'soft')}
            ${kpi('Available stock', `${totalStock.toLocaleString('en-IN')} kg`, `Across ${state.farmerInventory.length} crops`, 'soft')}
            ${kpi('Buyer reach', '86', '+18 this week', 'up')}
          </div>
          <div class="dashboard-grid two-one">
            <article class="panel insight-panel">
              <div class="panel-top">
                <div>
                  <p class="panel-label">AI market insight</p>
                  <h2>Tomato demand is <em>high</em></h2>
                </div>
                <button class="round-icon" data-action="ai-advisor" aria-label="Open AI advisor">${icon('sparkle', 19)}</button>
              </div>
              <div class="insight-chart">
                <div class="chart-bars">
                  <i style="height:37%"></i><i style="height:52%"></i><i style="height:48%"></i>
                  <i style="height:64%"></i><i style="height:58%"></i><i style="height:80%"></i>
                  <i class="highlight" style="height:93%"></i>
                </div>
                <div class="chart-labels">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
              <div class="insight-footer">
                <div><span>Suggested price</span><b>₹27/kg</b></div>
                <div><span>Expected demand</span><b>8,420 kg</b></div>
                <button class="small-dark" data-action="ai-advisor">See advice ${icon('arrow', 15)}</button>
              </div>
            </article>
            <article class="panel harvest-card">
              <p class="panel-label">Next pickup</p>
              <div class="pickup-illustration">
                <div class="mini-field"></div>
                <span>🚚</span><i></i>
              </div>
              <h3>Today's collection route</h3>
              <p>Pickup at Varun FPO between <b>4:30 - 5:00 PM</b></p>
              <div class="pickup-meta">
                <span>${icon('clock', 16)} 42 min away</span>
                <span>${icon('box', 16)} 730 kg</span>
              </div>
              <button data-screen="logistics" class="inline-link">View route ${icon('arrow', 15)}</button>
            </article>
          </div>

          <!-- Dynamic AI Simulator Panel -->
          <article class="panel simulator-panel">
            <div class="panel-header">
              <div>
                <p class="panel-label">AI Pricing & Demand Simulator</p>
                <h2>Simulate harvest market conditions</h2>
              </div>
              <span class="ai-live-badge">${icon('sparkle', 14)} Live AI Engine</span>
            </div>
            <div class="sim-grid">
              <div class="sim-controls">
                <label class="sim-slider-row">
                  <span>Harvest batch: <b data-sim-vol-label>${vol.toLocaleString('en-IN')} kg</b></span>
                  <input type="range" min="200" max="4000" step="100" value="${vol}" data-action="sim-vol-change" />
                </label>
                <label class="sim-slider-row">
                  <span>Target delivery radius: <b data-sim-rad-label>${rad} km</b></span>
                  <input type="range" min="10" max="60" step="5" value="${rad}" data-action="sim-rad-change" />
                </label>
              </div>
              <div class="sim-results">
                <div class="sim-stat">
                  <span>AI Demand Score</span>
                  <strong data-sim-score>${simDemandScore} / 100</strong>
                </div>
                <div class="sim-stat">
                  <span>Recommended Price</span>
                  <strong data-sim-price>₹${simSuggestedPrice}<small>/kg</small></strong>
                </div>
                <div class="sim-stat">
                  <span>Est. Buyer Match</span>
                  <strong data-sim-match>${simMatchHours} hrs</strong>
                </div>
                <div class="sim-stat highlight">
                  <span>Est. Gross Revenue</span>
                  <strong data-sim-rev>${money(simRevenue)}</strong>
                </div>
              </div>
            </div>
            <div class="sim-footer">
              <p>Based on live Azadpur Mandi intake & 42 verified NCR retailers currently bidding for Sonipat produce.</p>
              <button class="primary-button small-btn" data-sim-list-btn data-action="prefill-produce" data-crop="Tomatoes" data-price="${Math.round(simSuggestedPrice)}">
                List ${vol.toLocaleString('en-IN')} kg at ₹${Math.round(simSuggestedPrice)}/kg ${icon('arrow', 14)}
              </button>
            </div>
          </article>

          <div class="dashboard-grid order-and-inventory">
            <article class="panel orders-panel">
              <div class="panel-header">
                <div>
                  <p class="panel-label">Recent orders</p>
                  <h2>Keep the harvest moving</h2>
                </div>
                <button class="inline-link" data-action="show-orders" data-order-id="${state.orders[0]?.id || ''}">View all ${icon('arrow', 15)}</button>
              </div>
              ${orderRows()}
            </article>
            <article class="panel inventory-panel">
              <div class="panel-header">
                <div>
                  <p class="panel-label">Your harvest</p>
                  <h2>Available now</h2>
                </div>
                <button class="round-icon" data-action="add-produce" title="Add new harvest produce">+</button>
              </div>
              ${inventoryRows()}
            </article>
          </div>
        </section>
      </div>
      ${modal()}
    </main>`;
}

function kpi(label, value, subtext, variant) {
  return `<article class="kpi"><p>${label}</p><h3>${value}</h3><span class="${variant}">${variant === 'up' ? '↗ ' : ''}${subtext}</span></article>`;
}

function sideNav(active) {
  const options = active === 'farmer'
    ? [['farmer','Overview', 'chart'], ['marketplace','Marketplace','cart'], ['logistics','Logistics','route'], ['admin','Analytics','trend']]
    : [['marketplace','Marketplace','cart'], ['farmer','Grower workspace','leaf'], ['logistics','Deliveries','route'], ['admin','Analytics','trend']];
  return `
    <aside class="side-nav">
      <div class="profile-card">
        <span class="profile-avatar">V</span>
        <div>
          <b>Varun Singh</b>
          <small>Varun FPO · Verified</small>
        </div>
        <span class="verified">${icon('check', 12)}</span>
      </div>
      <div class="side-links">
        ${options.map(([id,label,ic]) => `<button data-screen="${id}" class="${active === id ? 'active' : ''}">${icon(ic, 18)}<span>${label}</span>${active === id ? '<i></i>' : ''}</button>`).join('')}
      </div>
      <div class="side-support">
        <p>Need a hand, Varun?</p>
        <button data-action="support">Talk to Kisan Setu</button>
      </div>
    </aside>`;
}

function orderRows() {
  return `
    <div class="order-table">
      ${state.orders.map((ord) => `
        <div class="order-row">
          <b>${ord.id}</b>
          <div>
            <strong>${ord.buyer}</strong>
            <small>${ord.items} · ${ord.farm}</small>
          </div>
          <span class="status ${ord.statusClass}">${ord.statusLabel}</span>
          <button class="row-arrow" data-action="show-orders" data-order-id="${ord.id}" title="Inspect order ${ord.id}">${icon('chevron', 17)}</button>
        </div>
      `).join('')}
    </div>`;
}

function inventoryRows() {
  return `
    <div class="inventory-list">
      ${state.farmerInventory.map((item) => `
        <div>
          <span class="produce-emoji">${item.emoji}</span>
          <p>
            <b>${item.name}</b>
            <small>${item.quantity.toLocaleString('en-IN')} kg available</small>
          </p>
          <strong>${item.price}</strong>
        </div>
      `).join('')}
    </div>`;
}

function marketplace() {
  let filtered = state.products;

  if (state.activeFilter === 'vegetable') {
    filtered = filtered.filter(p => p.category === 'vegetable');
  } else if (state.activeFilter === 'fruit') {
    filtered = filtered.filter(p => p.category === 'fruit');
  } else if (state.activeFilter === 'nearby') {
    filtered = filtered.filter(p => p.distance <= 25);
  } else if (state.activeFilter === 'today') {
    filtered = filtered.filter(p => p.availableToday);
  }

  if (state.search.trim()) {
    const q = state.search.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.farm.toLowerCase().includes(q) ||
      p.place.toLowerCase().includes(q)
    );
  }

  return `
    <main class="market-page">
      ${nav('marketplace')}
      <section class="market-hero">
        <div class="section-wrap">
          <p class="eyebrow light"><span></span> From growers you can know</p>
          <h1>Freshness, delivered<br/>with <em>clarity.</em></h1>
          <p>Buy directly from verified local FPOs like Varun FPO and partner growers. Every price tells the whole transparent story.</p>
          <div class="market-leaves">🍅 <span>🥬</span> 🥦</div>
        </div>
      </section>
      <section class="section-wrap marketplace-body">
        <div class="market-toolbar">
          <div>
            <p class="eyebrow"><span></span> Today’s harvest</p>
            <h2>What’s fresh nearby</h2>
          </div>
          <label class="search-box">
            ${icon('search',18)}
            <input value="${state.search}" data-input="search" placeholder="Search produce, farm, or city" aria-label="Search produce" />
          </label>
        </div>
        <div class="filter-row">
          <button class="filter ${state.activeFilter === 'all' ? 'active' : ''}" data-action="set-filter" data-filter="all">All produce</button>
          <button class="filter ${state.activeFilter === 'vegetable' ? 'active' : ''}" data-action="set-filter" data-filter="vegetable">Vegetables</button>
          <button class="filter ${state.activeFilter === 'fruit' ? 'active' : ''}" data-action="set-filter" data-filter="fruit">Fruit</button>
          <button class="filter ${state.activeFilter === 'nearby' ? 'active' : ''}" data-action="set-filter" data-filter="nearby">Within 25 km</button>
          <button class="filter ${state.activeFilter === 'today' ? 'active' : ''}" data-action="set-filter" data-filter="today">Available today</button>
          <span>${filtered.length} harvests available</span>
        </div>
        <div class="market-grid">
          ${filtered.map(productCard).join('') || `
            <div class="empty-state">
              <span>🌱</span>
              <h3>No harvests match that search</h3>
              <p>Try clearing filters or search query to see all fresh produce.</p>
              <button data-action="clear-search">Reset search & filters</button>
            </div>
          `}
        </div>
        <section class="market-promise">
          <span>${icon('sparkle',25)}</span>
          <div>
            <b>Fair trade built on algorithmic transparency.</b>
            <p>Every order shows exact farmer payouts for Varun FPO, smart delivery costs, and verified margins.</p>
          </div>
          <button data-screen="admin">See the platform impact ${icon('arrow',17)}</button>
        </section>
      </section>
      ${footer()}
      ${modal()}
    </main>`;
}

function productCard(p) {
  const isWishlisted = state.wishlist.includes(p.id);
  return `
    <article class="product-card">
      <div class="product-image ${p.tone} ${p.image ? 'has-real-photo' : ''}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-card-real-img" />` : `<span>${p.icon}</span>`}
        ${p.image ? `<span class="verified-photo-chip">${icon('camera', 11)} Farm Photo</span>` : ''}
        <div class="product-chip">${p.grade}</div>
        <button class="heart ${isWishlisted ? 'active' : ''}" data-action="toggle-wishlist" data-id="${p.id}" aria-label="Save ${p.name}">
          ${isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div class="product-details">
        <p class="farm-name">
          <span class="tiny-avatar">${p.farm[0]}</span> ${p.farm} <i>${icon('check', 11)}</i>
        </p>
        <h3>${p.name}</h3>
        <p class="location">${icon('pin', 14)} ${p.place} · ${p.distanceText}</p>
        <div class="product-price">
          <div>
            <strong>₹${p.price}<small>/kg</small></strong>
            <s>₹${p.oldPrice}/kg</s>
          </div>
          <span>${p.stock.toLocaleString('en-IN')} kg left</span>
        </div>
        <button class="product-action" data-action="open-product" data-id="${p.id}">
          See price breakdown ${icon('arrow',16)}
        </button>
      </div>
    </article>`;
}

function logistics() {
  const stops = [
    { num: '01', name: 'Varun FPO', place: 'Sonipat', details: '730 kg pickup', time: '4:30 PM', stopKey: 1 },
    { num: '02', name: 'Savitri Farms', place: 'Panipat', details: '970 kg pickup', time: '5:10 PM', stopKey: 2 },
    { num: '03', name: 'North Hub', place: 'Karnal bypass', details: 'Consolidate & quality check', time: '5:45 PM', stopKey: 3 },
    { num: '04', name: 'Green Basket Stores', place: 'Delhi NCR', details: '500 kg delivery', time: '6:42 PM', stopKey: 4 }
  ];

  return `
    <main class="dashboard-page logistics-page">
      ${nav('logistics')}
      <div class="dashboard-layout">
        ${sideNav('logistics')}
        <section class="dashboard-content">
          <div class="welcome-row">
            <div>
              <p class="eyebrow"><span></span> Intelligent logistics</p>
              <h1>One route. More good food. <span>🚚</span></h1>
              <p>We group nearby farm orders from Varun FPO and partner growers to keep produce fresh and eliminate wasted miles.</p>
            </div>
            <div class="route-action-buttons">
              <button class="outline-button" data-action="start-delivery">
                ${state.deliveryStarted ? 'Pause delivery' : 'Start live route'}
              </button>
              ${state.deliveryStarted ? `
                <button class="primary-button small-btn" data-action="advance-delivery-step">
                  Next stop (${state.deliveryStep}/4) ${icon('arrow', 14)}
                </button>
              ` : ''}
            </div>
          </div>
          <div class="route-summary">
            <div class="route-label">
              <span class="route-icon">${icon('sparkle',18)}</span>
              <div>
                <p>AI route optimizer</p>
                <h2>Sonipat collection route</h2>
              </div>
            </div>
            <div class="route-metrics">
              <div><b>48 km</b><span>Distance</span></div>
              <div><b>1h 42m</b><span>Est. time</span></div>
              <div><b>₹350</b><span>Fuel estimate</span></div>
              <div><b>1,700 kg</b><span>Current load</span></div>
            </div>
          </div>
          <div class="dashboard-grid route-grid">
            <article class="panel route-map">
              <div class="map-toolbar">
                <span>${icon('route',16)} Live route preview</span>
                <span class="map-live">
                  <i></i>${state.deliveryStarted ? `Vehicle moving · Stop ${state.deliveryStep} of 4` : 'Ready at Varun FPO'}
                </span>
              </div>
              <div class="map-canvas">
                <div class="map-road road-one"></div>
                <div class="map-road road-two"></div>
                <div class="map-road road-three"></div>
                <div class="route-line"><i></i><i></i><i></i><i></i></div>
                <div class="map-stop farm-stop ${state.deliveryStep === 1 ? 'active' : ''}">
                  <span>1</span>
                  <p><b>Varun FPO</b><small>730 kg pickup</small></p>
                </div>
                <div class="map-stop farm-stop two ${state.deliveryStep === 2 ? 'active' : ''}">
                  <span>2</span>
                  <p><b>Savitri Farms</b><small>970 kg pickup</small></p>
                </div>
                <div class="map-stop warehouse ${state.deliveryStep === 3 ? 'active' : ''}">
                  <span>3</span>
                  <p><b>North Hub</b><small>Consolidation</small></p>
                </div>
                <div class="map-stop buyer-stop ${state.deliveryStep === 4 ? 'active' : ''}">
                  <span>4</span>
                  <p><b>Green Basket</b><small>500 kg delivery</small></p>
                </div>
                <div class="truck ${state.deliveryStarted ? `moving stop-${state.deliveryStep}` : 'stop-1'}">🚚</div>
              </div>
            </article>
            <article class="panel route-stops">
              <p class="panel-label">Pickup & delivery sequence</p>
              <h2>Built for freshness</h2>
              <ol>
                ${stops.map((stop) => `
                  <li class="${state.deliveryStep === stop.stopKey ? 'active-stop' : state.deliveryStep > stop.stopKey ? 'completed-stop' : ''}">
                    <span>${state.deliveryStep > stop.stopKey ? icon('check', 11) : stop.num}</span>
                    <div>
                      <b>${stop.name}</b>
                      <small>${stop.place} · ${stop.details}</small>
                    </div>
                    <em>${stop.time}</em>
                  </li>
                `).join('')}
              </ol>
            </article>
          </div>
          <div class="logistics-tips">
            <span>${icon('sparkle',20)}</span>
            <p><b>Why this route?</b> Combining pickups at Varun FPO and Savitri Farms cuts 18 km and prevents 22 kg of likely spoilage compared with separate runs.</p>
            <button data-action="route-details">View optimization notes ${icon('arrow',16)}</button>
          </div>
        </section>
      </div>
      ${modal()}
    </main>`;
}

function admin() {
  const chartPoints = state.adminChartRange === '30d'
    ? { pathD: 'M0 130 C50 140 100 90 180 110 S300 70 420 50 S520 40 600 15', fillD: 'M0 130 C50 140 100 90 180 110 S300 70 420 50 S520 40 600 15 L600 190 L0 190Z', demand: '34,200 kg' }
    : { pathD: 'M0 150 C40 135 58 158 94 135 S150 118 184 125 S230 98 267 110 S315 128 350 86 S410 98 443 72 S500 77 535 40 S577 62 600 22', fillD: 'M0 150 C40 135 58 158 94 135 S150 118 184 125 S230 98 267 110 S315 128 350 86 S410 98 443 72 S500 77 535 40 S577 62 600 22 L600 190 L0 190Z', demand: '8,420 kg' };

  return `
    <main class="dashboard-page">
      <div class="admin-nav">${nav('admin')}</div>
      <div class="admin-layout section-wrap">
        <div class="admin-title">
          <div>
            <p class="eyebrow"><span></span> Platform view</p>
            <h1>Growing a fairer food system.</h1>
          </div>
          <p>Live network analytics · Haryana & Delhi NCR</p>
        </div>
        <div class="admin-kpis">
          ${kpi('Total farmer earnings','₹12.8L','+24% this month','up')}
          ${kpi('Buyer savings','₹3.6L','₹6.50 avg. per kg','up')}
          ${kpi('Produce moving','41,200 kg','Across 86 active routes','soft')}
          ${kpi('On-time delivery','96.8%','+2.1% this month','up')}
        </div>
        <div class="admin-grid">
          <article class="panel admin-chart">
            <div class="panel-header">
              <div>
                <p class="panel-label">Supply meets demand</p>
                <h2>Tomatoes are trending <em>up</em></h2>
              </div>
              <div class="chart-toggles">
                <button class="toggle-btn ${state.adminChartRange === '7d' ? 'active' : ''}" data-action="toggle-chart" data-range="7d">7 Days</button>
                <button class="toggle-btn ${state.adminChartRange === '30d' ? 'active' : ''}" data-action="toggle-chart" data-range="30d">30 Days</button>
              </div>
            </div>
            <div class="big-chart">
              <div class="line-graphic">
                <svg viewBox="0 0 600 190" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="#d6aa55" stop-opacity=".32"/>
                      <stop offset="100%" stop-color="#d6aa55" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="${chartPoints.fillD}" fill="url(#chartFill)"/>
                  <path d="${chartPoints.pathD}" fill="none" stroke="#c98c24" stroke-width="3"/>
                </svg>
                <span class="chart-tooltip">
                  <b>${chartPoints.demand}</b>
                  <small>Expected demand</small>
                </span>
              </div>
              <div class="chart-days">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </article>
          <article class="panel mini-activity">
            <p class="panel-label">Network health</p>
            <h2>Good things in motion</h2>
            <div class="ring-wrap">
              <div class="ring">
                <b>86%</b>
                <span>fulfilled<br/>locally</span>
              </div>
              <div>
                <p><i class="dot green"></i> Direct farm sales <b>68%</b></p>
                <p><i class="dot gold"></i> FPO collections <b>18%</b></p>
                <p><i class="dot grey"></i> Other supply <b>14%</b></p>
              </div>
            </div>
            <button data-screen="marketplace" class="inline-link">Explore marketplace ${icon('arrow',15)}</button>
          </article>
        </div>
        <div class="dashboard-grid admin-bottom">
          <article class="panel impact-table">
            <div class="panel-header">
              <div>
                <p class="panel-label">Impact snapshot</p>
                <h2>This month, together</h2>
              </div>
            </div>
            <div class="impact-table-row">
              <span>🌾</span>
              <div><b>₹4.2L</b><small>extra income retained by growers</small></div>
              <em>+31%</em>
            </div>
            <div class="impact-table-row">
              <span>🛒</span>
              <div><b>₹2.1L</b><small>saved by buyers through direct trade</small></div>
              <em>+19%</em>
            </div>
            <div class="impact-table-row">
              <span>🌱</span>
              <div><b>1,860 km</b><small>unnecessary travel avoided</small></div>
              <em>−14%</em>
            </div>
          </article>
          <article class="panel needs-attention">
            <p class="panel-label">Needs attention</p>
            <h2>2 harvests need a buyer</h2>
            <p>Fresh okra and spinach are ready in Karnal. A demand nudge will alert nearby institutional buyers instantly.</p>
            <button class="small-dark" data-action="send-nudge">Send buyer nudge ${icon('arrow',15)}</button>
          </article>
        </div>
      </div>
      ${footer()}
      ${modal()}
    </main>`;
}

function footer() {
  return `
    <footer>
      <div class="section-wrap footer-inner">
        <button class="brand" data-screen="home">
          <span class="brand-mark">${icon('leaf',22)}</span>
          <span>Kisan <b>Setu</b></span>
        </button>
        <p>Fair food, closer to home · Empowering growers like Varun Singh.</p>
        <span>Prototype · Verified supply network</span>
      </div>
    </footer>`;
}

function modal() {
  if (!state.modal) return '';
  let body = '';

  if (state.modal === 'ai-chat') {
    body = `
      <div class="modal ai-chat-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close AI chat">${icon('close',20)}</button>
        <div class="ai-chat-header">
          <div class="ai-chat-avatar">${icon('sparkle', 20)}</div>
          <div>
            <h2>Kisan AI Copilot</h2>
            <small>Live supply-chain intelligence for Varun Singh</small>
          </div>
        </div>
        <div class="ai-chat-body">
          ${state.aiChatHistory.map(msg => `
            <div class="chat-bubble-wrap ${msg.sender}">
              <div class="chat-bubble">
                <p>${msg.text}</p>
                ${msg.action ? `
                  <button class="ai-chat-action-btn" data-action="${msg.action.action}" data-crop="${msg.action.crop || ''}" data-price="${msg.action.price || ''}" data-screen="${msg.action.screen || ''}">
                    ${msg.action.label} ${icon('arrow', 14)}
                  </button>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="ai-quick-prompts">
          <button data-action="quick-prompt" data-query="price">💰 Price advice for Tomatoes</button>
          <button data-action="quick-prompt" data-query="logistics">🚚 Route savings breakdown</button>
          <button data-action="quick-prompt" data-query="quality">🔍 AI Quality standards</button>
          <button data-action="quick-prompt" data-query="buyers">🛒 Active NCR retail demand</button>
        </div>
        <form class="ai-chat-input-form" data-form="ai-chat">
          <input type="text" placeholder="Ask anything (e.g. 'Should I sell cauliflower today?')" name="query" value="${state.aiChatQuery}" required />
          <button type="submit" class="primary-button small-btn">Send</button>
        </form>
      </div>`;
  } else if (state.modal === 'ai-scanner') {
    const res = state.scannerResult || {
      crop: state.scannerCrop || 'Tomatoes',
      lotId: 'VF-902',
      ripeness: '94.2%',
      firmness: '9.1 / 10',
      surfaceDefect: '0.4%',
      shelfLife: '4-5 Days',
      predictedGrade: 'Grade A Certified',
      suggestedPrice: 27.5,
      certifier: 'Google Gemini Vision 1.5',
      notes: 'Optimal coloration and skin firmness. Certified Grade A for Delhi NCR supermarket chains.'
    };

    body = `
      <div class="modal ai-scanner-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close scanner">${icon('close',20)}</button>
        <div class="ai-top">
          <span>${icon('camera',22)}</span>
          <div>
            <p class="eyebrow"><span></span> Gemini Multimodal Vision</p>
            <h2>AI Crop Quality Scanner</h2>
          </div>
        </div>
        <p class="form-intro">Upload or capture a photo of your harvest. Google Gemini AI inspects ripeness, surface defects, and calculates certified fair market price.</p>

        <!-- Hidden Native File Input -->
        <input type="file" id="scanner-file-input" accept="image/*" style="display:none;" />

        <div class="scanner-viewport">
          <div class="scanner-crop-display ${state.scannerImage ? 'has-image' : ''}">
            ${state.scannerImage ? `
              <img src="${state.scannerImage}" alt="Produce inspection target" class="scanner-preview-img" />
            ` : `
              <span class="big-scanner-emoji">${state.scannerCrop === 'Cauliflower' ? '🥦' : (state.scannerCrop === 'Okra' ? '🥬' : (state.scannerCrop === 'Potatoes' ? '🥔' : '🍅'))}</span>
            `}
            <div class="scan-laser ${state.scannerRunning ? 'active' : ''}"></div>
            <div class="scanner-hud">
              <span class="hud-tag">ROI: ${state.scannerCrop.toUpperCase()}</span>
              <span class="hud-tag right">${state.scannerRunning ? 'GEMINI SCANNING' : (state.scannerDone ? 'GRADED' : 'READY')}</span>
            </div>
            ${state.scannerImageName ? `<span class="hud-filename">${state.scannerImageName}</span>` : ''}
          </div>
        </div>

        <!-- Photo Upload Controls & Quick Sample Selector -->
        <div class="photo-controls-row">
          <button type="button" class="upload-pic-btn" data-action="choose-produce-photo">
            ${icon('camera', 16)} <span>${state.scannerImage ? '📷 Change Photo' : '📸 Take or Upload Photo'}</span>
          </button>
          <div class="sample-crops-pills">
            <span class="pills-label">Samples:</span>
            <button type="button" class="sample-pill ${state.scannerCrop === 'Tomatoes' ? 'active' : ''}" data-action="select-sample-crop" data-crop="Tomatoes">🍅 Tomatoes</button>
            <button type="button" class="sample-pill ${state.scannerCrop === 'Cauliflower' ? 'active' : ''}" data-action="select-sample-crop" data-crop="Cauliflower">🥦 Cauliflower</button>
            <button type="button" class="sample-pill ${state.scannerCrop === 'Okra' ? 'active' : ''}" data-action="select-sample-crop" data-crop="Okra">🥬 Okra</button>
            <button type="button" class="sample-pill ${state.scannerCrop === 'Potatoes' ? 'active' : ''}" data-action="select-sample-crop" data-crop="Potatoes">🥔 Potatoes</button>
          </div>
        </div>

        ${state.scannerRunning ? `
          <div class="scan-progress-bar">
            <div class="scan-progress-fill"></div>
          </div>
          <p class="scan-status-text">${icon('sparkle', 14)} Google Gemini Vision inspecting color saturation, surface defects & turgidity...</p>
        ` : state.scannerDone ? `
          <div class="scan-results-box">
            <div class="scan-score-header">
              <div>
                <span class="badge-grade">${res.predictedGrade || 'Grade A Certified'}</span>
                <h3>${res.crop || state.scannerCrop} · Lot #${res.lotId || 'VF-902'}</h3>
              </div>
              <strong class="scan-fair-price">₹${Number(res.suggestedPrice || 27.5).toFixed(2)}<small>/kg</small></strong>
            </div>
            <div class="scan-metrics-grid">
              <div class="metric-pill"><span>Ripeness</span><b>${res.ripeness || '94.2%'}</b></div>
              <div class="metric-pill"><span>Firmness</span><b>${res.firmness || '9.1 / 10'}</b></div>
              <div class="metric-pill"><span>Surface defect</span><b>${res.surfaceDefect || '0.4%'}</b></div>
              <div class="metric-pill"><span>Shelf life</span><b>${res.shelfLife || '4-5 Days'}</b></div>
            </div>
            <p class="scan-note">${icon('sparkle', 14)} <span>${res.notes || 'Certified Grade A lot. Approved for NCR retail supermarket distribution.'}</span></p>
            <div class="certifier-badge-row">
              <small>Verified by: <b>${res.certifier || 'Google Gemini 1.5 Flash Vision'}</b></small>
            </div>
            <div class="scan-actions">
              <button class="primary-button full btn-post-scanned-lot" data-action="post-scanned-lot">
                🚀 Post Scanned Lot & Picture to Marketplace ${icon('arrow', 17)}
              </button>
              <div class="scan-sub-actions">
                <button class="outline-button small-btn" data-action="prefill-produce" data-crop="${res.crop || state.scannerCrop}" data-price="${Math.round(res.suggestedPrice || 28)}">
                  Prefill Harvest Form
                </button>
                <button class="outline-button small-btn" data-action="reset-scanner">
                  Scan Another Picture
                </button>
              </div>
            </div>
          </div>
        ` : `
          <div class="scanner-init-controls">
            <button class="primary-button full btn-post-scanned-lot" data-action="run-scan">
              ${icon('sparkle', 18)} Scan Picture with Gemini AI Vision
            </button>
          </div>
        `}
      </div>`;
  } else if (state.modal === 'product') {
    const product = productById(state.modalProductId);
    const qty = state.modalQty;
    const farming = product.price * qty;
    const logistics = 3 * qty;
    const platform = 1.5 * qty;
    const total = farming + logistics + platform;
    const savings = (product.oldPrice - product.price - 4.5) * qty;

    body = `
      <div class="modal product-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close modal">${icon('close',20)}</button>
        <div class="modal-product-header">
          <div class="modal-emoji ${product.tone} ${product.image ? 'has-real-photo' : ''}">
            ${product.image ? `<img src="${product.image}" alt="${product.name}" class="modal-real-img" />` : product.icon}
          </div>
          <div>
            <p class="farm-name"><span class="tiny-avatar">${product.farm[0]}</span> ${product.farm} <i>${icon('check', 11)}</i></p>
            <h2>${product.name}</h2>
            <p>${product.grade} · ${product.place} · ${product.distanceText} away</p>
          </div>
        </div>
        <div class="price-story">
          <p class="panel-label">A transparent price, from farm to you</p>
          <div class="price-line"><span>Farmer receives (${product.farm})</span><b>₹${product.price}.00/kg (₹${farming.toLocaleString('en-IN')})</b></div>
          <div class="price-line"><span>Pickup & smart logistics</span><b>₹3.00/kg (₹${logistics.toLocaleString('en-IN')})</b></div>
          <div class="price-line"><span>Platform quality & verification</span><b>₹1.50/kg (₹${platform.toLocaleString('en-IN')})</b></div>
          <div class="price-total"><span>You pay</span><b>₹${(product.price + 4.5).toFixed(2)}/kg · Total: ${money(total)}</b></div>
          <p class="saving-note">You save ₹${Math.round(savings).toLocaleString('en-IN')} (₹${(product.oldPrice - product.price - 4.5).toFixed(2)}/kg) vs. traditional wholesale markups.</p>
        </div>
        <label class="quantity-label">
          Order quantity (${qty} kg selected)
          <div class="quantity-stepper">
            <button data-action="decrease-qty" aria-label="Decrease quantity">−</button>
            <input value="${qty}" aria-label="Quantity in kilograms" readonly />
            <span>kg</span>
            <button data-action="increase-qty" aria-label="Increase quantity">+</button>
          </div>
        </label>
        <div class="modal-total">
          <div>
            <small>Estimated total (${qty} kg)</small>
            <b>${money(total)}</b>
          </div>
          <button class="primary-button" data-action="add-cart" data-id="${product.id}">
            Add to cart ${icon('cart',17)}
          </button>
        </div>
      </div>`;
  } else if (state.modal === 'cart') {
    const totalWeight = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const farmerSum = state.cart.reduce((sum, item) => sum + (productById(item.id).price * item.qty), 0);
    const logisticsSum = state.cart.reduce((sum, item) => sum + (3 * item.qty), 0);
    const platformSum = state.cart.reduce((sum, item) => sum + (1.5 * item.qty), 0);
    const grandTotal = farmerSum + logisticsSum + platformSum;

    body = `
      <div class="modal cart-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close cart">${icon('close',20)}</button>
        <p class="eyebrow"><span></span> Your collection</p>
        <h2>${state.orderPlaced ? 'Order confirmed!' : 'Ready for a fresher route?'}</h2>
        ${state.orderPlaced ? `
          <div class="success-state">
            <span>${icon('check',28)}</span>
            <p>
              <b>Order #${state.orders[0]?.id || 'KS-2050'} is confirmed!</b><br/>
              Varun FPO and partner growers are preparing your fresh batch for collection.
            </p>
          </div>
          <button class="primary-button full" data-screen="logistics">Track delivery route ${icon('arrow',17)}</button>
        ` : state.cart.length > 0 ? `
          <div class="cart-list">
            ${state.cart.map((cItem) => {
              const p = productById(cItem.id);
              const itemTotal = (p.price + 4.5) * cItem.qty;
              return `
                <div class="cart-item">
                  <div class="cart-thumb ${p.tone}">${p.icon}</div>
                  <div>
                    <b>${p.name}</b>
                    <small>${p.farm} · ${cItem.qty} kg</small>
                  </div>
                  <div class="cart-item-right">
                    <strong>${money(itemTotal)}</strong>
                    <button class="cart-remove" data-action="remove-cart-item" data-id="${p.id}" title="Remove item">
                      ${icon('trash', 14)}
                    </button>
                  </div>
                </div>`;
            }).join('')}
          </div>
          <div class="cart-price-lines">
            <p><span>Total produce weight</span><b>${totalWeight.toLocaleString('en-IN')} kg</b></p>
            <p><span>Farmers receive</span><b>${money(farmerSum)}</b></p>
            <p><span>Smart logistics route</span><b>${money(logisticsSum)}</b></p>
            <p><span>Platform verification</span><b>${money(platformSum)}</b></p>
            <p class="cart-total"><span>Grand total</span><b>${money(grandTotal)}</b></p>
          </div>
          <button class="primary-button full" data-action="place-order">Confirm order ${icon('arrow',17)}</button>
          <button class="modal-text-button" data-screen="marketplace">Continue shopping</button>
        ` : `
          <div class="empty-cart">
            <span>🧺</span>
            <p>Your cart is waiting for something fresh.</p>
            <button class="primary-button" data-screen="marketplace">Explore harvests ${icon('arrow',17)}</button>
          </div>
        `}
      </div>`;
  } else if (state.modal === 'add-produce') {
    const prefill = state.prefillProduce || {};
    body = `
      <div class="modal form-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close modal">${icon('close',20)}</button>
        <p class="eyebrow"><span></span> New harvest</p>
        <h2>List produce · Varun FPO</h2>
        <p class="form-intro">Put Varun Singh's harvest in front of verified wholesale & retail buyers.</p>
        <form data-form="produce">
          <label>Produce name
            <select name="produce">
              <option value="Tomatoes" ${prefill.produce === 'Tomatoes' ? 'selected' : ''}>Tomatoes</option>
              <option value="Cauliflower" ${prefill.produce === 'Cauliflower' ? 'selected' : ''}>Cauliflower</option>
              <option value="Okra" ${prefill.produce === 'Okra' ? 'selected' : ''}>Okra (Bhindi)</option>
              <option value="Potatoes" ${prefill.produce === 'Potatoes' ? 'selected' : ''}>Potatoes</option>
              <option value="Baby Spinach" ${prefill.produce === 'Baby Spinach' ? 'selected' : ''}>Baby Spinach</option>
              <option value="Red Carrots" ${prefill.produce === 'Red Carrots' ? 'selected' : ''}>Red Carrots</option>
              <option value="Kinnow Mandarin" ${prefill.produce === 'Kinnow Mandarin' ? 'selected' : ''}>Kinnow Mandarin</option>
            </select>
          </label>
          <div class="form-grid">
            <label>Quantity (kg)
              <input name="quantity" type="number" value="${prefill.quantity || '1000'}" min="50" step="50" required />
            </label>
            <label>Price (₹/kg)
              <input name="price" type="number" value="${prefill.price || '27'}" min="5" step="1" required />
            </label>
          </div>
          <div class="form-grid">
            <label>Quality Grade
              <select name="quality">
                <option value="Grade A">Grade A</option>
                <option value="Premium">Premium</option>
                <option value="Fresh harvest">Fresh harvest</option>
                <option value="Organic">Organic certified</option>
              </select>
            </label>
            <label>Category
              <select name="category">
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
              </select>
            </label>
          </div>
          <div class="ai-hint">
            ${icon('sparkle',17)}
            <span>AI recommendation: <b>₹27/kg</b> for tomatoes, <b>₹32/kg</b> for cauliflower. Direct matching within 2 hours.</span>
          </div>
          <div class="photo-upload-field">
            <label>Attach Produce Photo (Optional)
              <input type="file" id="harvest-file-input" accept="image/*" />
            </label>
            ${state.harvestImage ? `
              <div class="harvest-thumb-preview">
                <img src="${state.harvestImage}" alt="Harvest preview" />
                <button type="button" data-action="remove-harvest-image">✕ Remove</button>
              </div>
            ` : ''}
          </div>
          <button class="primary-button full" type="submit">List this harvest ${icon('arrow',17)}</button>
        </form>
      </div>`;
  } else if (state.modal === 'ai') {
    const cropKey = state.activeAiCrop || 'tomatoes';
    const crop = aiCropInsights[cropKey] || aiCropInsights.tomatoes;

    body = `
      <div class="modal ai-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close AI advisor">${icon('close',20)}</button>
        <div class="ai-top">
          <span>${icon('sparkle',22)}</span>
          <div>
            <p class="eyebrow"><span></span> Kisan AI Advisor</p>
            <h2>${crop.name} insight</h2>
          </div>
        </div>
        <div class="ai-crop-tabs">
          ${Object.keys(aiCropInsights).map((k) => `
            <button class="ai-crop-tab ${k === cropKey ? 'active' : ''}" data-action="select-ai-crop" data-crop="${k}">
              ${aiCropInsights[k].emoji} ${aiCropInsights[k].name}
            </button>
          `).join('')}
        </div>
        <div class="ai-score">
          <div>
            <span>Demand score</span>
            <strong>${crop.demandScore}<small>/100</small></strong>
          </div>
          <div class="score-ring">
            <span>${crop.demandLevel}</span>
          </div>
        </div>
        <div class="ai-recommendation">
          <p>Recommended selling price for Varun FPO</p>
          <h3>₹${crop.suggestedPrice} <small>/kg</small></h3>
          <span>₹${crop.suggestedPrice - crop.marketAvg} above conventional mandi price</span>
        </div>
        <ul class="advice-list">
          ${crop.advice.map(adv => `<li>${icon('check',16)} ${adv}</li>`).join('')}
        </ul>
        <button class="primary-button full" data-action="prefill-produce" data-crop="${crop.name}" data-price="${crop.suggestedPrice}">
          List ${crop.name} at ₹${crop.suggestedPrice}/kg ${icon('arrow',17)}
        </button>
      </div>`;
  } else if (state.modal === 'orders') {
    const order = state.orders.find(o => o.id === state.selectedOrderId) || state.orders[0];
    const steps = ['Placed','Confirmed','Packed','Pickup','In transit','Delivered'];

    body = `
      <div class="modal orders-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close order modal">${icon('close',20)}</button>
        <p class="eyebrow"><span></span> Order ${order.id}</p>
        <h2>${order.buyer}</h2>
        <div class="status-tracker">
          ${steps.map((step, i) => `
            <div class="${i <= order.statusStep ? 'done' : ''}">
              <i>${i < order.statusStep ? icon('check',13) : i + 1}</i>
              <span>${step}</span>
            </div>
          `).join('')}
        </div>
        <div class="order-detail-card">
          <span>${order.emoji || '🍅'}</span>
          <p>
            <b>${order.items}</b>
            <small>${order.farm} · ${order.place} · Scheduled: ${order.time}</small>
          </p>
          <strong>${money(order.amount)}</strong>
        </div>
        <div class="order-actions-row">
          <button class="primary-button full" data-action="advance-order" data-order-id="${order.id}">
            ${order.statusStep >= 5 ? 'Order is delivered' : 'Advance demo status'} ${icon('arrow',17)}
          </button>
        </div>
      </div>`;
  } else if (state.modal === 'route-details') {
    body = `
      <div class="modal route-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close modal">${icon('close',20)}</button>
        <p class="eyebrow"><span></span> Route intelligence</p>
        <h2>Why this path works</h2>
        <div class="route-note">
          <span>${icon('route',19)}</span>
          <div>
            <b>Distance-first grouping</b>
            <p>Varun FPO, Savitri Farms, and North Hub share 48 km instead of traveling 66 km across separate runs.</p>
          </div>
        </div>
        <div class="route-note">
          <span>${icon('box',19)}</span>
          <div>
            <b>Capacity-aware loading</b>
            <p>1,700 kg fills 85% of vehicle capacity, maximizing fuel economy and minimizing emissions.</p>
          </div>
        </div>
        <div class="route-note">
          <span>${icon('clock',19)}</span>
          <div>
            <b>Freshness priority</b>
            <p>Tomatoes and delicate greens are collected from Varun FPO last before direct NCR store delivery.</p>
          </div>
        </div>
        <button class="primary-button full" data-action="close-modal">Got it ${icon('check',17)}</button>
      </div>`;
  } else if (state.modal === 'notifications') {
    body = `
      <div class="modal notif-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close notifications">${icon('close',20)}</button>
        <p class="eyebrow"><span></span> Platform updates</p>
        <h2>Notifications</h2>
        <div class="notif-list">
          ${state.notifications.map(n => `
            <div class="notif-item ${n.read ? 'read' : 'unread'}">
              <div class="notif-header">
                <b>${n.title}</b>
                <small>${n.time}</small>
              </div>
              <p>${n.desc}</p>
            </div>
          `).join('')}
        </div>
        <button class="primary-button full" data-action="mark-notifications-read">Mark all as read ${icon('check',16)}</button>
      </div>`;
  } else if (state.modal === 'mobile-menu') {
    body = `
      <div class="modal mobile-menu-modal">
        <button class="modal-close" data-action="close-modal" aria-label="Close menu">${icon('close',20)}</button>
        <div class="profile-card" style="border:0; padding:0 0 18px;">
          <span class="profile-avatar">V</span>
          <div>
            <b>Varun Singh</b>
            <small>Varun FPO · Sonipat</small>
          </div>
        </div>
        <nav class="mobile-nav-links">
          <button data-screen="home" class="${state.screen === 'home' ? 'active' : ''}">${icon('leaf', 18)} Home</button>
          <button data-screen="marketplace" class="${state.screen === 'marketplace' ? 'active' : ''}">${icon('cart', 18)} Marketplace</button>
          <button data-screen="farmer" class="${state.screen === 'farmer' ? 'active' : ''}">${icon('users', 18)} Grower workspace</button>
          <button data-screen="logistics" class="${state.screen === 'logistics' ? 'active' : ''}">${icon('route', 18)} Logistics</button>
          <button data-screen="admin" class="${state.screen === 'admin' ? 'active' : ''}">${icon('chart', 18)} Analytics</button>
          <button data-action="open-ai-chat" class="mobile-ai-link">${icon('sparkle', 18)} Ask Kisan AI Copilot</button>
        </nav>
      </div>`;
  }

  return `
    <div class="modal-backdrop" data-action="backdrop">
      <div class="modal-wrap">${body}</div>
    </div>`;
}

function floatingAiWidget() {
  return `
    <button class="floating-ai-btn" data-action="open-ai-chat" aria-label="Ask Kisan AI Assistant">
      <span class="sparkle-orbit">${icon('sparkle', 18)}</span>
      <span class="ai-btn-text">Ask Kisan AI</span>
    </button>`;
}

function app() {
  const screens = { home, farmer, marketplace, logistics, admin };
  const currentView = screens[state.screen] || home;
  return `
    ${currentView()}
    ${floatingAiWidget()}
    ${state.toast ? `<div class="toast">${icon('check',17)} ${state.toast}</div>` : ''}`;
}

function render() {
  const appContainer = document.querySelector('#app');
  if (appContainer) {
    appContainer.innerHTML = app();
  }
}

function generateAiReply(query) {
  const q = query.toLowerCase();
  if (q.includes('price') || q.includes('rate') || q.includes('bhav')) {
    return {
      text: "Based on current NCR retail demand, Tomatoes from Varun FPO are valued at ₹27/kg (₹3 above mandi average). Cauliflower is trading strong at ₹32/kg. Would you like to list a batch now?",
      action: { label: "List Tomatoes at ₹27/kg", action: "prefill-produce", crop: "Tomatoes", price: 27 }
    };
  } else if (q.includes('route') || q.includes('logistics') || q.includes('delivery') || q.includes('truck')) {
    return {
      text: "The Sonipat collection route bundles Varun FPO (730 kg) and Savitri Farms (970 kg) into a single 48 km trip, cutting 18 km and saving ₹160 in fuel while preventing 22 kg of heat spoilage.",
      action: { label: "View Live Route Simulation", action: "set-screen", screen: "logistics" }
    };
  } else if (q.includes('quality') || q.includes('grade') || q.includes('scan')) {
    return {
      text: "Grade A requires >90% color uniformity, <1% surface blemishes, and firmness index >8.5. You can use our AI Vision scanner to certify your lot in 10 seconds.",
      action: { label: "Launch AI Quality Scan", action: "open-ai-scanner" }
    };
  } else if (q.includes('buyer') || q.includes('demand') || q.includes('ncr')) {
    return {
      text: "Green Basket Stores and 3 other verified supermarket chains in Delhi NCR are active right now. Estimated match time for Varun FPO produce is under 90 minutes.",
      action: { label: "Send Buyer Nudge", action: "send-nudge" }
    };
  } else {
    return {
      text: `Understood, Varun Singh. Kisan AI monitors live spot prices across Sonipat, Panipat, and Delhi. Tomatoes and Okra are showing strong upwards momentum this week.`,
      action: { label: "Check AI Market Advisor", action: "ai-advisor" }
    };
  }
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-screen], [data-action]');
  if (!target) return;

  if (target.dataset.screen) {
    return setScreen(target.dataset.screen);
  }

  const { action, id, filter, crop, price, range, orderId, query } = target.dataset;

  if (action === 'open-ai-chat') {
    state.modal = 'ai-chat';
    render();
  } else if (action === 'open-ai-scanner') {
    state.scannerRunning = false;
    state.scannerDone = false;
    state.scannerResult = null;
    if (!state.scannerImage) {
      state.scannerCrop = 'Tomatoes';
      state.scannerImage = sampleProducePhotos.Tomatoes;
      state.scannerImageName = 'Sample Roma Tomatoes';
    }
    state.modal = 'ai-scanner';
    render();
  } else if (action === 'choose-produce-photo') {
    const fileInput = document.getElementById('scanner-file-input');
    if (fileInput) fileInput.click();
  } else if (action === 'select-sample-crop') {
    const selectedCrop = crop || 'Tomatoes';
    state.scannerCrop = selectedCrop;
    state.scannerImage = sampleProducePhotos[selectedCrop] || sampleProducePhotos.Tomatoes;
    state.scannerImageName = `Sample ${selectedCrop}`;
    state.scannerDone = false;
    state.scannerResult = null;
    render();
  } else if (action === 'reset-scanner') {
    state.scannerDone = false;
    state.scannerRunning = false;
    state.scannerResult = null;
    render();
  } else if (action === 'remove-harvest-image') {
    state.harvestImage = null;
    render();
  } else if (action === 'run-scan') {
    state.scannerRunning = true;
    state.scannerDone = false;
    state.scannerResult = null;
    render();

    if (!state.scannerImage) {
      state.scannerImage = sampleProducePhotos[state.scannerCrop] || sampleProducePhotos.Tomatoes;
    }

    (async () => {
      try {
        const url = API_BASE ? `${API_BASE}/api/ai/scan` : '/api/ai/scan';
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            crop: state.scannerCrop,
            image: state.scannerImage
          })
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.data) {
            state.scannerResult = json.data;
            state.scannerRunning = false;
            state.scannerDone = true;
            render();
            toast(`Inspection complete: ${json.data.predictedGrade} (${json.data.certifier || 'Gemini Vision'})`);
            return;
          }
        }
      } catch (err) {
        console.warn('API scan fallback:', err);
      }

      // Offline simulation fallback
      state.scannerRunning = false;
      state.scannerDone = true;
      state.scannerResult = {
        crop: state.scannerCrop || 'Tomatoes',
        lotId: `VF-${Math.floor(800 + Math.random() * 190)}`,
        ripeness: '94.6%',
        firmness: '9.2 / 10',
        surfaceDefect: '0.3%',
        shelfLife: '4-5 Days',
        predictedGrade: 'Grade A Certified',
        suggestedPrice: state.scannerCrop === 'Cauliflower' ? 32 : (state.scannerCrop === 'Okra' ? 38 : (state.scannerCrop === 'Potatoes' ? 22 : 27.5)),
        certifier: 'Google Gemini Vision 1.5 (Simulation)',
        notes: 'Optimal coloration, firm cell walls, zero skin lesions. Approved for Delhi NCR supermarket distribution.'
      };
      render();
      toast('AI Quality Scan completed: Grade A Certified');
    })();
  } else if (action === 'post-scanned-lot') {
    const res = state.scannerResult || {
      crop: state.scannerCrop || 'Tomatoes',
      suggestedPrice: 27.5,
      predictedGrade: 'Grade A Certified'
    };
    const cropName = res.crop || state.scannerCrop || 'Tomatoes';
    const price = Math.round(Number(res.suggestedPrice) || 28);
    const quantity = 1000;
    const grade = res.predictedGrade || 'Grade A Certified';
    const image = state.scannerImage || null;

    const emojiMap = {
      'Tomatoes': { icon: '🍅', tone: 'tomato', cat: 'vegetable' },
      'Cauliflower': { icon: '🥦', tone: 'cauliflower', cat: 'vegetable' },
      'Okra': { icon: '🥬', tone: 'okra', cat: 'vegetable' },
      'Potatoes': { icon: '🥔', tone: 'potato', cat: 'vegetable' },
      'Baby Spinach': { icon: '🌱', tone: 'spinach', cat: 'vegetable' },
      'Red Carrots': { icon: '🥕', tone: 'carrot', cat: 'vegetable' },
      'Kinnow Mandarin': { icon: '🍊', tone: 'citrus', cat: 'fruit' }
    };
    const meta = emojiMap[cropName] || { icon: '🌱', tone: 'spinach', cat: 'vegetable' };

    const newProduct = {
      id: Date.now(),
      name: cropName,
      category: meta.cat,
      farm: 'Varun FPO',
      place: 'Sonipat, Haryana',
      price: price,
      oldPrice: Math.round(price * 1.3),
      stock: quantity,
      grade: grade,
      image: image,
      icon: meta.icon,
      tone: meta.tone,
      distance: 18,
      distanceText: '18 km',
      availableToday: true
    };

    state.products.unshift(newProduct);

    const existingInv = state.farmerInventory.find(i => i.name === cropName);
    if (existingInv) {
      existingInv.quantity += quantity;
      existingInv.price = `₹${price}/kg`;
      if (image) existingInv.image = image;
    } else {
      state.farmerInventory.unshift({
        emoji: meta.icon,
        name: cropName,
        quantity: quantity,
        price: `₹${price}/kg`,
        image: image
      });
    }

    try {
      const url = API_BASE ? `${API_BASE}/api/products` : '/api/products';
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cropName,
          category: meta.cat,
          quantity: quantity,
          price: price,
          grade: grade,
          image: image
        })
      }).catch(() => {});
    } catch {}

    state.modal = null;
    state.screen = 'marketplace';
    render();
    toast(`🎉 ${cropName} (${quantity.toLocaleString('en-IN')} kg) posted to Marketplace with verified farm picture!`);
  } else if (action === 'quick-prompt') {
    let userText = "";
    if (query === 'price') userText = "What is the recommended price for Tomatoes today?";
    else if (query === 'logistics') userText = "How does intelligent route grouping work?";
    else if (query === 'quality') userText = "What are the criteria for Grade A certification?";
    else if (query === 'buyers') userText = "Who are the active buyers in NCR today?";

    state.aiChatHistory.push({ sender: 'user', text: userText, action: null });
    state.aiChatHistory.push({ sender: 'ai', text: 'Analyzing with Gemini AI...', action: null });
    render();

    (async () => {
      try {
        const url = API_BASE ? `${API_BASE}/api/ai/chat` : '/api/ai/chat';
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: userText })
        });
        if (res.ok) {
          const json = await res.json();
          state.aiChatHistory.pop();
          state.aiChatHistory.push({
            sender: 'ai',
            text: json?.reply?.text || "Mandi data reviewed.",
            action: json?.reply?.action || null
          });
          render();
          return;
        }
      } catch {}

      state.aiChatHistory.pop();
      const reply = generateAiReply(query);
      state.aiChatHistory.push({ sender: 'ai', text: reply.text, action: reply.action });
      render();
    })();
  } else if (action === 'open-product') {
    state.modalProductId = Number(id);
    state.modalQty = 500;
    state.modal = 'product';
    render();
  } else if (action === 'decrease-qty') {
    state.modalQty = Math.max(50, state.modalQty - 50);
    render();
  } else if (action === 'increase-qty') {
    const p = productById(state.modalProductId);
    state.modalQty = Math.min(p.stock, state.modalQty + 50);
    render();
  } else if (action === 'open-cart') {
    state.orderPlaced = false;
    state.modal = 'cart';
    render();
  } else if (action === 'close-modal' || action === 'backdrop') {
    if (action === 'backdrop' && event.target !== target) return;
    state.modal = null;
    render();
  } else if (action === 'add-cart') {
    const prodId = Number(id);
    const prod = productById(prodId);
    const existing = state.cart.find(item => item.id === prodId);
    if (existing) {
      existing.qty += state.modalQty;
    } else {
      state.cart.push({ id: prodId, qty: state.modalQty });
    }
    state.modal = 'cart';
    toast(`${prod.name} (${state.modalQty} kg) added to your cart`);
  } else if (action === 'remove-cart-item') {
    const prodId = Number(id);
    state.cart = state.cart.filter(item => item.id !== prodId);
    render();
    toast('Item removed from cart');
  } else if (action === 'place-order') {
    if (state.cart.length === 0) return;
    const firstItem = productById(state.cart[0].id);
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalCost = state.cart.reduce((sum, item) => sum + ((productById(item.id).price + 4.5) * item.qty), 0);
    const newOrderId = `#KS-${Math.floor(2050 + Math.random() * 50)}`;

    state.orders.unshift({
      id: newOrderId,
      buyer: 'Green Basket Stores',
      items: `${totalQty.toLocaleString('en-IN')} kg ${firstItem.name}${state.cart.length > 1 ? ` +${state.cart.length - 1} more` : ''}`,
      produceName: firstItem.name,
      emoji: firstItem.icon,
      qty: totalQty,
      farm: firstItem.farm,
      place: firstItem.place.split(',')[0],
      amount: totalCost,
      statusStep: 1,
      statusLabel: 'Confirmed',
      statusClass: 'confirmed',
      time: 'Just now'
    });

    state.cart.forEach(item => {
      const p = productById(item.id);
      if (p) p.stock = Math.max(0, p.stock - item.qty);
    });

    state.cart = [];
    state.orderPlaced = true;
    render();
    toast(`Order ${newOrderId} confirmed! Varun FPO notified.`);
  } else if (action === 'show-orders') {
    if (orderId) state.selectedOrderId = orderId;
    state.modal = 'orders';
    render();
  } else if (action === 'advance-order') {
    const oId = orderId || state.selectedOrderId;
    const ord = state.orders.find(o => o.id === oId);
    if (ord) {
      ord.statusStep = Math.min(5, ord.statusStep + 1);
      const labels = ['Placed', 'Confirmed', 'Packed', 'Pickup today', 'In transit', 'Delivered'];
      const classes = ['soft', 'confirmed', 'confirmed', 'pickup', 'transit', 'delivered'];
      ord.statusLabel = labels[ord.statusStep];
      ord.statusClass = classes[ord.statusStep];
      render();
      toast(ord.statusStep === 5 ? `Order ${ord.id} marked as delivered!` : `Order ${ord.id} advanced to ${ord.statusLabel}`);
    }
  } else if (action === 'add-produce') {
    state.prefillProduce = null;
    state.modal = 'add-produce';
    render();
  } else if (action === 'ai-advisor') {
    state.modal = 'ai';
    render();
  } else if (action === 'select-ai-crop') {
    state.activeAiCrop = crop;
    render();
  } else if (action === 'prefill-produce') {
    state.prefillProduce = { produce: crop, price: Number(price), quantity: 1000 };
    state.modal = 'add-produce';
    render();
  } else if (action === 'start-delivery') {
    state.deliveryStarted = !state.deliveryStarted;
    if (state.deliveryStarted && state.deliveryStep === 0) state.deliveryStep = 1;
    render();
    toast(state.deliveryStarted ? 'Collection route started - Vehicle moving from Varun FPO' : 'Delivery simulation paused');
  } else if (action === 'advance-delivery-step') {
    state.deliveryStep = (state.deliveryStep % 4) + 1;
    render();
    const stopNames = ['Varun FPO (Sonipat)', 'Savitri Farms (Panipat)', 'North Hub (Quality Check)', 'Green Basket Stores (Delhi NCR)'];
    toast(`Arrived at Stop ${state.deliveryStep}: ${stopNames[state.deliveryStep - 1]}`);
  } else if (action === 'route-details') {
    state.modal = 'route-details';
    render();
  } else if (action === 'set-filter') {
    state.activeFilter = filter;
    render();
  } else if (action === 'clear-search') {
    state.search = '';
    state.activeFilter = 'all';
    render();
  } else if (action === 'toggle-wishlist') {
    const prodId = Number(id);
    const prod = productById(prodId);
    if (state.wishlist.includes(prodId)) {
      state.wishlist = state.wishlist.filter(wId => wId !== prodId);
      toast(`Removed ${prod.name} from saved harvests`);
    } else {
      state.wishlist.push(prodId);
      toast(`Saved ${prod.name} to favorites`);
    }
    render();
  } else if (action === 'open-notifications') {
    state.modal = 'notifications';
    render();
  } else if (action === 'mark-notifications-read') {
    state.unreadNotifications = 0;
    state.notifications.forEach(n => n.read = true);
    render();
    toast('All notifications marked as read');
  } else if (action === 'open-mobile-menu') {
    state.modal = 'mobile-menu';
    render();
  } else if (action === 'toggle-chart') {
    state.adminChartRange = range;
    render();
  } else if (action === 'support') {
    toast('Varun Singh, Kisan Setu grower helpline is active at 1800-123-KISAN');
  } else if (action === 'send-nudge') {
    toast('Buyer nudge sent to 42 verified NCR retailers');
  }
});

document.addEventListener('input', (event) => {
  if (event.target.dataset.input === 'search') {
    state.search = event.target.value;
    render();
    const input = document.querySelector('[data-input="search"]');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  } else if (event.target.dataset.action === 'sim-vol-change') {
    state.simVolume = Number(event.target.value);
    updateSimulatorUi();
  } else if (event.target.dataset.action === 'sim-rad-change') {
    state.simRadius = Number(event.target.value);
    updateSimulatorUi();
  }
});

function updateSimulatorUi() {
  const vol = state.simVolume;
  const rad = state.simRadius;
  const simDemandScore = Math.min(98, Math.round(92 - (vol / 400) + (rad / 8)));
  const simSuggestedPrice = (27 + (simDemandScore > 85 ? 1.5 : 0) - (rad > 40 ? 1 : 0)).toFixed(1);
  const simMatchHours = (vol < 800 ? 1.2 : vol < 2000 ? 2.4 : 3.8).toFixed(1);
  const simRevenue = Math.round(vol * Number(simSuggestedPrice));

  const simBox = document.querySelector('.simulator-panel');
  if (simBox) {
    const volLabel = simBox.querySelector('[data-sim-vol-label]');
    if (volLabel) volLabel.textContent = `${vol.toLocaleString('en-IN')} kg`;
    const radLabel = simBox.querySelector('[data-sim-rad-label]');
    if (radLabel) radLabel.textContent = `${rad} km`;
    const scoreVal = simBox.querySelector('[data-sim-score]');
    if (scoreVal) scoreVal.textContent = `${simDemandScore} / 100`;
    const priceVal = simBox.querySelector('[data-sim-price]');
    if (priceVal) priceVal.innerHTML = `₹${simSuggestedPrice}<small>/kg</small>`;
    const matchVal = simBox.querySelector('[data-sim-match]');
    if (matchVal) matchVal.textContent = `${simMatchHours} hrs`;
    const revVal = simBox.querySelector('[data-sim-rev]');
    if (revVal) revVal.textContent = money(simRevenue);
    const listBtn = simBox.querySelector('[data-sim-list-btn]');
    if (listBtn) {
      listBtn.dataset.price = Math.round(simSuggestedPrice);
      listBtn.innerHTML = `List ${vol.toLocaleString('en-IN')} kg at ₹${Math.round(simSuggestedPrice)}/kg ${icon('arrow', 14)}`;
    }
  }
}

document.addEventListener('submit', (event) => {
  if (event.target.dataset.form === 'produce') {
    event.preventDefault();
    const form = event.target;
    const produceName = form.produce.value;
    const quantity = Number(form.quantity.value) || 1000;
    const price = Number(form.price.value) || 27;
    const quality = form.quality.value;
    const category = form.category.value;

    const emojiMap = {
      'Tomatoes': { icon: '🍅', tone: 'tomato' },
      'Cauliflower': { icon: '🥦', tone: 'cauliflower' },
      'Okra': { icon: '🥬', tone: 'okra' },
      'Potatoes': { icon: '🥔', tone: 'potato' },
      'Baby Spinach': { icon: '🌱', tone: 'spinach' },
      'Red Carrots': { icon: '🥕', tone: 'carrot' },
      'Kinnow Mandarin': { icon: '🍊', tone: 'citrus' }
    };
    const meta = emojiMap[produceName] || { icon: '🌱', tone: 'spinach' };

    const existingInventory = state.farmerInventory.find(i => i.name === produceName);
    const image = state.harvestImage || null;
    if (existingInventory) {
      existingInventory.quantity += quantity;
      existingInventory.price = `₹${price}/kg`;
      if (image) existingInventory.image = image;
    } else {
      state.farmerInventory.unshift({
        emoji: meta.icon,
        name: produceName,
        quantity: quantity,
        price: `₹${price}/kg`,
        image
      });
    }

    const existingProduct = state.products.find(p => p.name.toLowerCase() === produceName.toLowerCase() && p.farm === 'Varun FPO');
    if (existingProduct) {
      existingProduct.stock += quantity;
      existingProduct.price = price;
      existingProduct.oldPrice = Math.round(price * 1.3);
      existingProduct.grade = quality;
      if (image) existingProduct.image = image;
    } else {
      state.products.unshift({
        id: Date.now(),
        name: produceName,
        category: category,
        farm: 'Varun FPO',
        place: 'Sonipat, Haryana',
        price: price,
        oldPrice: Math.round(price * 1.3),
        stock: quantity,
        grade: quality,
        image: image,
        icon: meta.icon,
        tone: meta.tone,
        distance: 18,
        distanceText: '18 km',
        availableToday: true
      });
    }

    try {
      const url = API_BASE ? `${API_BASE}/api/products` : '/api/products';
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: produceName,
          category,
          quantity,
          price,
          grade: quality,
          image
        })
      }).catch(() => {});
    } catch {}

    state.harvestImage = null;
    state.modal = null;
    render();
    toast(`${quantity.toLocaleString('en-IN')} kg of ${produceName} is now live in marketplace under Varun FPO`);
  } else if (event.target.dataset.form === 'ai-chat') {
    event.preventDefault();
    const input = event.target.querySelector('input[name="query"]');
    if (!input || !input.value.trim()) return;
    const query = input.value.trim();
    state.aiChatHistory.push({ sender: 'user', text: query, action: null });
    state.aiChatHistory.push({ sender: 'ai', text: 'Gemini Copilot analyzing...', action: null });
    state.aiChatQuery = '';
    render();

    (async () => {
      try {
        const url = API_BASE ? `${API_BASE}/api/ai/chat` : '/api/ai/chat';
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        });
        if (res.ok) {
          const json = await res.json();
          state.aiChatHistory.pop();
          state.aiChatHistory.push({
            sender: 'ai',
            text: json?.reply?.text || "Mandi data analyzed.",
            action: json?.reply?.action || null
          });
          render();
          return;
        }
      } catch {}

      state.aiChatHistory.pop();
      const reply = generateAiReply(query);
      state.aiChatHistory.push({ sender: 'ai', text: reply.text, action: reply.action });
      render();
    })();
  }
});

// File input change handlers for produce photos
document.addEventListener('change', (event) => {
  if (event.target && event.target.id === 'scanner-file-input') {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        state.scannerImage = e.target.result;
        state.scannerImageName = file.name;
        state.scannerDone = false;
        state.scannerResult = null;
        render();
        toast(`Photo "${file.name}" loaded! Click 'Scan Picture with Gemini'`);
      };
      reader.readAsDataURL(file);
    }
  } else if (event.target && event.target.id === 'harvest-file-input') {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        state.harvestImage = e.target.result;
        render();
        toast(`Farm photo "${file.name}" attached`);
      };
      reader.readAsDataURL(file);
    }
  }
});

render();
syncWithBackend();

