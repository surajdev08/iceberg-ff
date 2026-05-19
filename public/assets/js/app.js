/**
 * ICEBERG Interactive Engine
 * 100% Client-Side Simulation & Micro-Interactions
 */

(function bootIceberg() {
  if (window.__ICEBERG_BOOTED__) return;
  window.__ICEBERG_BOOTED__ = true;
  const run = () => {
  
  // ==========================================================================
  // 1. Floating Header & Responsive Nav
  // ==========================================================================
  const header = document.querySelector('.header');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Simple toggle animation
      const spans = mobileNavToggle.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
      spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = mobileNavToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // ==========================================================================
  // 2. Light / Dark Mockup Toggle
  // ==========================================================================
  const toggleBtnDark = document.getElementById('btn-term-dark');
  const toggleBtnLight = document.getElementById('btn-term-light');
  const mockupFrame = document.getElementById('hero-dashboard-mockup');

  let activeTheme = 'dark';

  if (toggleBtnDark && toggleBtnLight && mockupFrame) {
    toggleBtnDark.addEventListener('click', () => {
      toggleBtnDark.classList.add('active');
      toggleBtnLight.classList.remove('active');
      mockupFrame.classList.remove('light-theme');
      activeTheme = 'dark';
    });

    toggleBtnLight.addEventListener('click', () => {
      toggleBtnLight.classList.add('active');
      toggleBtnDark.classList.remove('active');
      mockupFrame.classList.add('light-theme');
      activeTheme = 'light';
    });
  }

  // ==========================================================================
  // 3. Dynamic Canvas Charting Engine (Hero & Mobile Mockups)
  // ==========================================================================
  const heroCanvas = document.getElementById('hero-canvas');
  const phoneCanvas = document.getElementById('phone-canvas');

  class ChartEngine {
    constructor(canvas, maxPoints = 50, isMobile = false) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.maxPoints = maxPoints;
      this.isMobile = isMobile;
      this.data = [];
      this.generateInitialData();
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.startLoop();
    }

    resize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = rect.width * window.devicePixelRatio;
      this.canvas.height = rect.height * window.devicePixelRatio;
      this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      this.width = rect.width;
      this.height = rect.height;
    }

    generateInitialData() {
      let baseVal = 100;
      for (let i = 0; i < this.maxPoints; i++) {
        let change = (Math.random() - 0.48) * 6;
        let open = baseVal;
        let close = baseVal + change;
        let high = Math.max(open, close) + Math.random() * 3;
        let low = Math.min(open, close) - Math.random() * 3;
        
        this.data.push({ open, close, high, low });
        baseVal = close;
      }
    }

    tick() {
      // Shift data left, append new simulated candle
      this.data.shift();
      const last = this.data[this.data.length - 1];
      let change = (Math.random() - 0.49) * 8;
      let open = last.close;
      let close = last.close + change;
      let high = Math.max(open, close) + Math.random() * 4;
      let low = Math.min(open, close) - Math.random() * 4;
      this.data.push({ open, close, high, low });
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      // Colors based on mockup theme
      let isDark = activeTheme === 'dark';
      if (this.isMobile) isDark = true; // Mobile screen is always dark theme

      const gridColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.05)';
      const maLineColor = isDark ? 'rgba(0, 240, 255, 0.85)' : 'rgba(0, 119, 182, 0.9)';
      const fillGradientStart = isDark ? 'rgba(0, 240, 255, 0.08)' : 'rgba(0, 119, 182, 0.05)';
      
      const bullColor = '#00e676';
      const bearColor = '#ff1744';

      // 1. Draw Grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const verticalSlices = 6;
      for (let i = 1; i < verticalSlices; i++) {
        const x = (this.width / verticalSlices) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.height);
        ctx.stroke();
      }

      const horizontalSlices = 4;
      for (let i = 1; i < horizontalSlices; i++) {
        const y = (this.height / horizontalSlices) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.width, y);
        ctx.stroke();
      }

      // Find min/max in current window
      let minVal = Infinity;
      let maxVal = -Infinity;
      this.data.forEach(d => {
        if (d.low < minVal) minVal = d.low;
        if (d.high > maxVal) maxVal = d.high;
      });

      const paddingY = 15;
      const scaleY = (this.height - paddingY * 2) / (maxVal - minVal);
      const candleWidth = (this.width / this.maxPoints) * 0.65;
      const gap = (this.width / this.maxPoints);

      // Helper function to map trading values to coordinates
      const getY = (val) => this.height - paddingY - (val - minVal) * scaleY;

      // 2. Draw Moving Average Line + Area Gradient
      ctx.beginPath();
      this.data.forEach((d, idx) => {
        // Calculate SMA 5
        let start = Math.max(0, idx - 4);
        let sum = 0;
        let count = 0;
        for (let j = start; j <= idx; j++) {
          sum += this.data[j].close;
          count++;
        }
        const ma = sum / count;
        const x = idx * gap + gap/2;
        const y = getY(ma);

        if (idx === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = maLineColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // 3. Draw Candlesticks
      this.data.forEach((d, idx) => {
        const isBull = d.close >= d.open;
        const x = idx * gap + gap/2;
        const yOpen = getY(d.open);
        const yClose = getY(d.close);
        const yHigh = getY(d.high);
        const yLow = getY(d.low);

        ctx.strokeStyle = isBull ? bullColor : bearColor;
        ctx.fillStyle = isBull ? bullColor : bearColor;
        ctx.lineWidth = 1.5;

        // Wick
        ctx.beginPath();
        ctx.moveTo(x, yHigh);
        ctx.lineTo(x, yLow);
        ctx.stroke();

        // Body
        const top = Math.min(yOpen, yClose);
        const height = Math.max(2, Math.abs(yOpen - yClose));
        ctx.fillRect(x - candleWidth/2, top, candleWidth, height);
      });
    }

    startLoop() {
      let ticks = 0;
      const loop = () => {
        ticks++;
        if (ticks % 30 === 0) {
          this.tick();
        }
        this.draw();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
  }

  // Initialize Canvas Engines if elements are available
  if (heroCanvas) {
    new ChartEngine(heroCanvas, 40, false);
  }
  if (phoneCanvas) {
    new ChartEngine(phoneCanvas, 25, true);
  }

  // ==========================================================================
  // 4. Live Updating Order Book
  // ==========================================================================
  const orderBookContainer = document.getElementById('live-order-book');
  
  if (orderBookContainer) {
    const generateOrderBook = () => {
      orderBookContainer.innerHTML = '';
      
      // Generate 4 ASKs (Red - High to Low)
      const asks = [];
      let startAsk = 1.08470 + Math.random() * 0.0003;
      for (let i = 0; i < 4; i++) {
        asks.push({
          price: (startAsk + i * 0.00005).toFixed(5),
          size: (Math.random() * 8.5 + 0.1).toFixed(2),
          total: (Math.random() * 250000 + 1000).toLocaleString(undefined, {maximumFractionDigits: 0})
        });
      }
      asks.reverse().forEach(a => {
        const row = document.createElement('div');
        row.className = 'order-book-row ask';
        row.innerHTML = `<span>${a.price}</span><span>${a.size}</span><span>${a.total}</span>`;
        orderBookContainer.appendChild(row);
      });

      // Simple spread indicator
      const spreadRow = document.createElement('div');
      spreadRow.className = 'order-book-row';
      spreadRow.style.color = 'var(--text-muted)';
      spreadRow.style.fontSize = '0.65rem';
      spreadRow.style.padding = '4px';
      spreadRow.style.borderTop = '1px solid var(--border-dim)';
      spreadRow.style.borderBottom = '1px solid var(--border-dim)';
      spreadRow.innerHTML = `<span>SPREAD</span><span>0.3 Pips</span><span>$1.08470</span>`;
      orderBookContainer.appendChild(spreadRow);

      // Generate 4 BIDs (Green - High to Low)
      const bids = [];
      let startBid = 1.08460 - Math.random() * 0.0003;
      for (let i = 0; i < 4; i++) {
        bids.push({
          price: (startBid - i * 0.00005).toFixed(5),
          size: (Math.random() * 9.2 + 0.2).toFixed(2),
          total: (Math.random() * 280000 + 1500).toLocaleString(undefined, {maximumFractionDigits: 0})
        });
      }
      bids.forEach(b => {
        const row = document.createElement('div');
        row.className = 'order-book-row bid';
        row.innerHTML = `<span>${b.price}</span><span>${b.size}</span><span>${b.total}</span>`;
        orderBookContainer.appendChild(row);
      });
    };

    // Initialize and run order book fluctuation loop
    generateOrderBook();
    setInterval(generateOrderBook, 2000);
  }

  // ==========================================================================
  // 5. Multi-Asset Live Ticker Engine
  // ==========================================================================
  const tickerItems = [
    { symbol: 'EURUSD', name: 'Euro / US Dollar', price: 1.08451, change: 0.04 },
    { symbol: 'BTCUSD', name: 'Bitcoin / US Dollar', price: 67240.25, change: -1.25 },
    { symbol: 'GBPUSD', name: 'Pound / US Dollar', price: 1.27218, change: 0.12 },
    { symbol: 'USDJPY', name: 'US Dollar / Yen', price: 155.845, change: -0.05 },
    { symbol: 'ETHUSD', name: 'Ethereum / US Dollar', price: 3412.80, change: 2.15 },
    { symbol: 'GOLD', name: 'Gold / US Dollar', price: 2418.60, change: 0.88 },
    { symbol: 'US30', name: 'Dow Jones Index', price: 39860.00, change: 0.24 },
    { symbol: 'CRUDE', name: 'WTI Crude Oil', price: 79.45, change: -0.62 }
  ];

  const priceTickerTrack = document.getElementById('price-ticker-track');

  if (priceTickerTrack) {
    // Generate double entries for infinite looping banner
    const doubleItems = [...tickerItems, ...tickerItems];
    doubleItems.forEach((item, idx) => {
      const isUp = item.change >= 0;
      const decimalCount = item.price > 1000 ? 2 : 5;
      const originalPrice = item.price;

      const card = document.createElement('div');
      card.className = `price-card`;
      card.id = `price-card-${idx}`;
      card.innerHTML = `
        <div class="price-card-info">
          <span class="price-card-symbol">${item.symbol}</span>
          <span class="price-card-label">${item.name}</span>
        </div>
        <div class="price-card-values">
          <span class="price-card-bid" data-price="${originalPrice}">${item.price.toFixed(decimalCount)}</span>
          <span class="price-card-change ${isUp ? 'up' : 'down'}">${isUp ? '+' : ''}${item.change.toFixed(2)}%</span>
        </div>
      `;
      priceTickerTrack.appendChild(card);
    });

    // Fluctuate prices randomly
    setInterval(() => {
      const cards = document.querySelectorAll('.price-card');
      const randomIdx = Math.floor(Math.random() * tickerItems.length);
      const isDoubleOne = randomIdx + tickerItems.length;

      // Select both original card and its loop duplicate to keep them synchronized
      const cardA = document.getElementById(`price-card-${randomIdx}`);
      const cardB = document.getElementById(`price-card-${isDoubleOne}`);

      if (cardA && cardB) {
        const valSpanA = cardA.querySelector('.price-card-bid');
        const valSpanB = cardB.querySelector('.price-card-bid');
        const currentVal = parseFloat(valSpanA.getAttribute('data-price'));
        
        const changePct = (Math.random() - 0.5) * 0.001; // tiny fluctuation
        const newVal = currentVal + (currentVal * changePct);
        const isUp = newVal > currentVal;
        const decimalCount = newVal > 1000 ? 2 : 5;

        valSpanA.textContent = newVal.toFixed(decimalCount);
        valSpanA.setAttribute('data-price', newVal);
        valSpanB.textContent = newVal.toFixed(decimalCount);
        valSpanB.setAttribute('data-price', newVal);

        // Flash colors
        cardA.classList.remove('tick-up', 'tick-down');
        cardB.classList.remove('tick-up', 'tick-down');
        const classToAdd = isUp ? 'tick-up' : 'tick-down';
        cardA.classList.add(classToAdd);
        cardB.classList.add(classToAdd);

        setTimeout(() => {
          cardA.classList.remove('tick-up', 'tick-down');
          cardB.classList.remove('tick-up', 'tick-down');
        }, 500);
      }
    }, 800);
  }

  // ==========================================================================
  // 6. Technology Stack Detail Switcher
  // ==========================================================================
  const techCards = document.querySelectorAll('.tech-card');
  const techDetailIcon = document.getElementById('tech-detail-icon');
  const techDetailTitle = document.getElementById('tech-detail-title-text');
  const techDetailSub = document.getElementById('tech-detail-sub');
  const techDetailDesc = document.getElementById('tech-detail-desc');
  const metricLatency = document.getElementById('m-latency');
  const metricCapacity = document.getElementById('m-capacity');
  const metricSecurity = document.getElementById('m-security');

  const techDatabase = {
    python: {
      title: 'Python Algorithmic Core',
      sub: 'Algorithmic Engines & Analytics',
      desc: 'Our high-performance core uses optimized Cython and native multi-threading algorithms to process immense sets of real-time financial matrices. Built directly for institutional traders requiring sub-millisecond mathematical analysis and custom strategy integrations.',
      metrics: { latency: '< 0.45ms Processing', capacity: '500,000 strategy loops/sec', security: 'Isolated Sandbox Environments' },
      svg: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`
    },
    angular: {
      title: 'Vibrant UI Interface',
      sub: 'Ultra-Responsive HTML & CSS Workspaces',
      desc: 'Powered by highly optimized component structures that leverage virtual DOM and multi-threaded Web Workers. Iceberg UIs achieve immediate state updates, 60FPS fluid CSS chart displays, and highly responsive transitions across desktop and mobile screens.',
      metrics: { latency: '60 FPS Render Rates', capacity: 'Unlimited active DOM elements', security: '100% Client-side sandboxed states' },
      svg: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>`
    },
    aurora: {
      title: 'AWS Aurora Ledger',
      sub: 'Enterprise Multi-Region Scalability',
      desc: 'Utilizes high-throughput transactional structures that guarantee ACID compliance under absolute financial loads. Built using distributed databases with read-replicas scattered across global nodes to ensure sub-millisecond local read pings for client balance portals.',
      metrics: { latency: '< 1.10ms DB Query', capacity: '100TB automatic cloud scaling', security: 'AES-256 Multi-layer Ledger Encryption' },
      svg: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`
    },
    rabbitmq: {
      title: 'RabbitMQ Order Bridge',
      sub: 'Low-latency Message Broker',
      desc: 'Our high-performance order pipeline routes client requests with sub-10 microsecond broker hops. Ensures immediate delivery of massive market streams and transactional order blocks under extreme volatility with zero message loss and complete queue persistence.',
      metrics: { latency: '< 10µs Queue Hops', capacity: '1,200,000 routed packets/sec', security: 'SASL & SSL Secure Queue Channels' },
      svg: `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/>`
    },
    redis: {
      title: 'Redis Ledger Cache',
      sub: 'Ultra-fast Session & Pricing State',
      desc: 'In-memory multi-tiered caching systems designed to store dynamic liquidity spreads, customer margins, and system-wide configurations. Ensures that global users receive instant visual updates and immediate order verification times in their portals.',
      metrics: { latency: '< 0.15ms Cache Read', capacity: '8,000,000 read operations/sec', security: 'Encrypted memory pipelines' },
      svg: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`
    },
    kubernetes: {
      title: 'Kubernetes Cloud Grid',
      sub: 'Self-Healing Automated Node Scaler',
      desc: 'Encapsulates components inside secure cloud containers, distributing systems dynamically across worldwide AWS instances. Monitors infrastructure health to scale processing nodes immediately as incoming trading spikes occur.',
      metrics: { latency: 'Auto-heals in < 5sec', capacity: 'Dynamic cluster auto-scaling', security: 'Encrypted Container namespaces' },
      svg: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>`
    }
  };

  if (techCards && techDetailIcon && techDetailTitle) {
    techCards.forEach(card => {
      card.addEventListener('click', () => {
        // Switch active card styling
        techCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Fetch dynamic information
        const techId = card.getAttribute('data-tech');
        const db = techDatabase[techId];

        if (db) {
          // Trigger smooth fade transition
          const panel = document.querySelector('.tech-detail-panel');
          panel.style.opacity = '0.3';
          panel.style.transform = 'translateY(10px)';

          setTimeout(() => {
            techDetailIcon.querySelector('svg').innerHTML = db.svg;
            techDetailTitle.textContent = db.title;
            techDetailSub.textContent = db.sub;
            techDetailDesc.textContent = db.desc;
            metricLatency.textContent = db.metrics.latency;
            metricCapacity.textContent = db.metrics.capacity;
            metricSecurity.textContent = db.metrics.security;

            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
          }, 200);
        }
      });
    });
  }

  // ==========================================================================
  // 7. Solutions Panel Carousel System
  // ==========================================================================
  const solutionsButtons = document.querySelectorAll('.solutions-menu-btn');
  const solutionsCards = document.querySelectorAll('.solutions-display-card');

  if (solutionsButtons && solutionsCards) {
    solutionsButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active menu button
        solutionsButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle solution display panel
        const cardId = btn.getAttribute('data-slide');
        solutionsCards.forEach(card => {
          if (card.getAttribute('data-card') === cardId) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      });
    });
  }

  // ==========================================================================
  // 8. FAQ Accordion smooth toggle mechanics
  // ==========================================================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  if (faqTriggers) {
    faqTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const parent = trigger.parentElement;
        const isActive = parent.classList.contains('active');
        const content = parent.querySelector('.faq-content');

        // Close all other FAQ items first
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.faq-content').style.maxHeight = null;
        });

        if (!isActive) {
          parent.classList.add('active');
          // Smooth slide calculation
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // ==========================================================================
  // 9. Contact Form Simulation
  // ==========================================================================
  const contactForm = document.getElementById('iceberg-contact-form');
  const formFeedback = document.getElementById('contact-form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Premium validation simulation
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="status-pulse-dot" style="display:inline-block; margin-right:8px; vertical-align:middle; width:8px; height:8px;" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="var(--bg-deep)"></circle></svg>
        PROCESSING INQUIRY...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Show success indicator
        formFeedback.classList.add('success');
        formFeedback.textContent = 'DEMO ACCESS GRANTED. An Iceberg integration specialist will contact you in < 15 minutes.';
        
        // Reset the form values
        contactForm.reset();

        // Fade feedback away after 6 seconds
        setTimeout(() => {
          formFeedback.classList.remove('success');
          formFeedback.textContent = '';
        }, 6000);
      }, 1500);
    });
  }

  // ==========================================================================
  // 10. Live Status Uptime & Dynamic Ping Widget
  // ==========================================================================
  const statusIndicatorText = document.getElementById('footer-live-ping');

  if (statusIndicatorText) {
    setInterval(() => {
      const randomPing = Math.floor(Math.random() * 8) + 3; // Ping fluctuations between 3ms and 10ms
      statusIndicatorText.textContent = `${randomPing}ms`;
    }, 3000);
  }

  // ==========================================================================
  // 11. Interactive Markets Sandbox Playground Engine
  // ==========================================================================
  const sandboxAssetTabs = document.querySelectorAll('.market-tab-btn');
  const sandboxAssetName = document.getElementById('sandbox-asset-name');
  const sandboxAssetCat = document.getElementById('sandbox-asset-cat');
  const sandboxSpreadVal = document.getElementById('sandbox-spread-val');
  const sandboxSellRate = document.getElementById('sandbox-sell-rate');
  const sandboxBuyRate = document.getElementById('sandbox-buy-rate');
  const sandboxLeverageSlider = document.getElementById('sandbox-leverage-slider');
  const sandboxLeverageText = document.getElementById('sandbox-leverage-text');
  const sandboxVolumeSlider = document.getElementById('sandbox-volume-slider');
  const sandboxVolumeText = document.getElementById('sandbox-volume-text');
  const sandboxTerminalLog = document.getElementById('sandbox-terminal-log');
  
  const btnSandboxSell = document.getElementById('btn-sandbox-sell');
  const btnSandboxBuy = document.getElementById('btn-sandbox-buy');

  const sandboxAssets = {
    FX: { name: 'EUR/USD (Euro / US Dollar)', category: 'Currency Pair', basePrice: 1.08451, spread: '0.3 pips', spreadOffset: 0.00003, decimals: 5, icon: '💱' },
    STOCKS: { name: 'AAPL (Apple Inc. Stock CFD)', category: 'Equities CFD', basePrice: 189.84, spread: '$0.02', spreadOffset: 0.02, decimals: 2, icon: '📈' },
    COMMODITIES: { name: 'WTI CRUDE (WTI Crude Oil)', category: 'Energies Futures', basePrice: 79.42, spread: '$0.03', spreadOffset: 0.03, decimals: 2, icon: '🔥' },
    INDICES: { name: 'SPX500 (S&P 500 Index)', category: 'Index CFD', basePrice: 5304.50, spread: '0.5 pts', spreadOffset: 0.50, decimals: 2, icon: '📊' },
    CRYPTO: { name: 'BTC/USD (Bitcoin)', category: 'Cryptocurrency', basePrice: 67240.25, spread: '$1.50', spreadOffset: 1.50, decimals: 2, icon: '🪙' },
    STOCKCFD: { name: 'TSLA (Tesla Inc. Stock CFD)', category: 'Equities CFD', basePrice: 174.95, spread: '$0.05', spreadOffset: 0.05, decimals: 2, icon: '🏢' },
    METALS: { name: 'XAU/USD (Gold Spot)', category: 'Precious Metals', basePrice: 2418.60, spread: '$0.15', spreadOffset: 0.15, decimals: 2, icon: '🏆' },
    TRADECFD: { name: 'ICE/USD (Iceberg HQ Premium Index)', category: 'Custom Fintech Index', basePrice: 1000.00, spread: '0.1 pts', spreadOffset: 0.10, decimals: 2, icon: '🚀' }
  };

  let activeSandboxKey = 'FX';

  // Format Helper
  const formatTime = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  };

  if (sandboxAssetName && sandboxTerminalLog) {
    // 1. Tab switching
    sandboxAssetTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        sandboxAssetTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeSandboxKey = btn.getAttribute('data-asset');
        const asset = sandboxAssets[activeSandboxKey];

        // Update UI
        document.querySelector('.sandbox-asset-icon').textContent = asset.icon;
        sandboxAssetName.textContent = asset.name;
        sandboxAssetCat.textContent = asset.category;
        sandboxSpreadVal.textContent = asset.spread;

        // Set Initial Prices
        const sellRate = asset.basePrice;
        const buyRate = asset.basePrice + asset.spreadOffset;
        sandboxSellRate.textContent = sellRate.toFixed(asset.decimals);
        sandboxBuyRate.textContent = buyRate.toFixed(asset.decimals);

        // Append log line
        const logLine = document.createElement('div');
        logLine.className = 'terminal-log-line init';
        logLine.innerHTML = `&gt; [${formatTime()}] SWITCHED ASSET: Loaded ${asset.name} feeds.`;
        sandboxTerminalLog.appendChild(logLine);
        sandboxTerminalLog.scrollTop = sandboxTerminalLog.scrollHeight;
      });
    });

    // 2. Continuous price fluctuation for active sandbox asset
    setInterval(() => {
      const asset = sandboxAssets[activeSandboxKey];
      const changePercent = (Math.random() - 0.5) * 0.0006;
      asset.basePrice += asset.basePrice * changePercent;

      const sellBox = document.querySelector('.sandbox-price-box.sell');
      const buyBox = document.querySelector('.sandbox-price-box.buy');

      const isUp = changePercent > 0;
      const sellPrice = asset.basePrice;
      const buyPrice = asset.basePrice + asset.spreadOffset;

      sandboxSellRate.textContent = sellPrice.toFixed(asset.decimals);
      sandboxBuyRate.textContent = buyPrice.toFixed(asset.decimals);

      // Trigger flash effect
      sellBox.classList.remove('tick-up', 'tick-down');
      buyBox.classList.remove('tick-up', 'tick-down');
      const classToAdd = isUp ? 'tick-up' : 'tick-down';
      
      sellBox.classList.add(classToAdd);
      buyBox.classList.add(classToAdd);

      setTimeout(() => {
        sellBox.classList.remove('tick-up', 'tick-down');
        buyBox.classList.remove('tick-up', 'tick-down');
      }, 400);
    }, 900);

    // 3. Slider updates
    if (sandboxLeverageSlider && sandboxLeverageText) {
      sandboxLeverageSlider.addEventListener('input', () => {
        sandboxLeverageText.textContent = `1:${sandboxLeverageSlider.value}`;
      });
    }

    if (sandboxVolumeSlider && sandboxVolumeText) {
      sandboxVolumeSlider.addEventListener('input', () => {
        sandboxVolumeText.textContent = parseFloat(sandboxVolumeSlider.value).toFixed(2);
      });
    }

    // 4. Simulated trade execution logging functions
    const executeSimulatedTrade = (type) => {
      const asset = sandboxAssets[activeSandboxKey];
      const volume = parseFloat(sandboxVolumeSlider.value).toFixed(2);
      const leverage = sandboxLeverageSlider.value;
      const rate = type === 'BUY' ? parseFloat(sandboxBuyRate.textContent) : parseFloat(sandboxSellRate.textContent);

      // Append Log Lines
      const line1 = document.createElement('div');
      line1.className = 'terminal-log-line process';
      line1.innerHTML = `&gt; [${formatTime()}] PLACING ${type} ORDER: ${volume} Lots ${activeSandboxKey} @ ${rate.toFixed(asset.decimals)} (Leverage 1:${leverage})`;
      sandboxTerminalLog.appendChild(line1);

      setTimeout(() => {
        const line2 = document.createElement('div');
        line2.className = 'terminal-log-line process';
        line2.innerHTML = `&gt; [${formatTime()}] ROUTING: Seeking execution path through Prime Liquidity Pool...`;
        sandboxTerminalLog.appendChild(line2);
        sandboxTerminalLog.scrollTop = sandboxTerminalLog.scrollHeight;
      }, 250);

      setTimeout(() => {
        const line3 = document.createElement('div');
        line3.className = 'terminal-log-line success';
        line3.innerHTML = `&gt; [${formatTime()}] SUCCESS: Filled ${volume} Lots ${activeSandboxKey} @ ${rate.toFixed(asset.decimals)} in <span class="cyan">0.72ms</span>. Slipped 0.00 pips.`;
        sandboxTerminalLog.appendChild(line3);
        sandboxTerminalLog.scrollTop = sandboxTerminalLog.scrollHeight;
      }, 550);
    };

    if (btnSandboxSell) {
      btnSandboxSell.addEventListener('click', () => executeSimulatedTrade('SELL'));
    }
    if (btnSandboxBuy) {
      btnSandboxBuy.addEventListener('click', () => executeSimulatedTrade('BUY'));
    }
  }

  // ==========================================================================
  // 12. Immersive HTML5 Canvas Snowfall Particle System (Ice Ocean Atmosphere)
  // ==========================================================================
  const snowfallCanvas = document.getElementById('snowfall-canvas');
  if (snowfallCanvas) {
    const sCtx = snowfallCanvas.getContext('2d');
    const sParent = snowfallCanvas.parentElement;
    let sWidth = sParent.offsetWidth || window.innerWidth;
    let sHeight = sParent.offsetHeight || 600;

    snowfallCanvas.width = sWidth;
    snowfallCanvas.height = sHeight;

    window.addEventListener('resize', () => {
      sWidth = sParent.offsetWidth || window.innerWidth;
      sHeight = sParent.offsetHeight || 600;
      snowfallCanvas.width = sWidth;
      snowfallCanvas.height = sHeight;
    });

    const particles = [];
    const maxParticles = 90; // Balanced value for outstanding visuals + 60FPS speed

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * sWidth,
        y: Math.random() * sHeight,
        r: Math.random() * 2 + 1.2, // Delicate snowflake radius: 1.2px to 3.2px
        speed: Math.random() * 0.8 + 0.4, // Falling velocity
        wind: (Math.random() - 0.4) * 0.4, // Gentle sway force
        swayOffset: Math.random() * 100 // Sine swing coordinate
      });
    }

    const drawParticles = () => {
      sCtx.clearRect(0, 0, sWidth, sHeight);
      sCtx.fillStyle = 'rgba(255, 255, 255, 0.48)';
      sCtx.beginPath();
      
      for (let i = 0; i < maxParticles; i++) {
        const p = particles[i];
        sCtx.moveTo(p.x, p.y);
        sCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      
      sCtx.fill();
      updateParticles();
    };

    const updateParticles = () => {
      for (let i = 0; i < maxParticles; i++) {
        const p = particles[i];
        p.y += p.speed;
        p.x += p.wind + Math.sin(p.y / 25 + p.swayOffset) * 0.15; // Natural swaying drift

        // Reset snow particles when they reach floor limits
        if (p.y > sHeight || p.x > sWidth || p.x < 0) {
          particles[i] = {
            x: Math.random() * sWidth,
            y: -10,
            r: p.r,
            speed: p.speed,
            wind: p.wind,
            swayOffset: p.swayOffset
          };
        }
      }
    };

    const snowfallLoop = () => {
      drawParticles();
      requestAnimationFrame(snowfallLoop);
    };

    // Begin rendering snowfall loops
    snowfallLoop();
  }

  // High-performance Floating Header Scroll Shrink
  const headerEl = document.querySelector('.header');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }, { passive: true });
  }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

