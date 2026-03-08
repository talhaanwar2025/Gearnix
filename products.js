const products = [
  {
    id: 1,
    name: "Razer Gaming Mouse",
    price: 59,
    oldPrice: 119,
    img: "images/gaming/mouse.png",
    images: ["images/gaming/mouse.png"],
    description: "Razer DeathAdder V2 – High-precision Gaming Mouse with Ergonomic Design",
    specs: {brand: "Razer", category: "Gaming Mouse", sku: "RZ-DV2-001", warranty: "2 Years", stock: "In Stock"},
    rating: 4,
    reviews: 98
  },
  {
    id: 2,
    name: "HyperX Gaming Headset",
    price: 85,
    oldPrice: 140,
    img: "images/gaming/headset.png",
    images: ["images/gaming/headset.png"],
    description: "HyperX Cloud II – Comfortable Gaming Headset with 7.1 Surround Sound",
    specs: {brand: "HyperX", category: "Gaming Headset", sku: "HX-CLD2-002", warranty: "1 Year", stock: "In Stock"},
    rating: 5,
    reviews: 120
  },
  {
    id: 3,
    name: "Corsair Mechanical Keyboard",
    price: 120,
    oldPrice: 185,
    img: "images/keyboard/teclado_mecânico-removebg-preview.png",
    images: ["images/keyboard/teclado_mecânico-removebg-preview.png"],
    description: "Corsair K70 RGB – Mechanical Gaming Keyboard with Blue Switches",
    specs: {brand: "Corsair", category: "Mechanical Keyboard", sku: "CR-K70-003", warranty: "2 Years", stock: "In Stock"},
    rating: 5,
    reviews: 110
  },
  {
    id: 4,
    name: "Xbox Wireless Controller",
    price: 60,
    oldPrice: 85,
    img: "images/gaming-controller/controller.png",
    images: ["images/gaming-controller/controller.png"],
    description: "Xbox Series X Controller – Ergonomic Wireless Game Controller for PC & Console",
    specs: {brand: "Microsoft", category: "Game Controller", sku: "XB-CNTR-004", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 95
  },
  {
    id: 5,
    name: "Razer Gaming Mouse",
    price: 59,
    oldPrice: 119,
    img: "images/gaming/mouse.png",
    images: ["images/gaming/mouse.png"],
    description: "Razer DeathAdder V2 – High-precision Gaming Mouse with Ergonomic Design",
    specs: {brand: "Razer", category: "Gaming Mouse", sku: "RZ-DV2-001", warranty: "2 Years", stock: "In Stock"},
    rating: 4,
    reviews: 98
  },
  
  {
    id: 6,
    name: "HP Pavilion Laptop",
    price: 899,
    oldPrice: 999,
    img: "images/hp/hp (3).png",
    images: ["images/hp/hp (3).png"],
    description: "HP Pavilion 15 – Intel i5 12th Gen, 16GB RAM, 512GB SSD, 15.6” Full HD Display",
    specs: {brand: "HP", category: "Laptop", sku: "HP-PAV15-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 180
  },
  {
    id: 7,
    name: "HyperX Gaming Mic",
    price: 120,
    oldPrice: 149,
    img: "images/mic/mic (1).png",
    images: ["images/mic/mic (1).png"],
    description: "HyperX QuadCast – USB Condenser Microphone for Streaming and Gaming",
    specs: {brand: "HyperX", category: "Mic", sku: "HX-QC-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 95
  },
  {
    id: 8,
    name: "Logitech C920 Webcam",
    price: 85,
    oldPrice: 99,
    img: "images/webcam/webcam (1).png",
    images: ["images/webcam/webcam (1).png"],
    description: "Logitech C920 HD Pro – Full HD 1080p Webcam for Streaming & Video Calls",
    specs: {brand: "Logitech", category: "Webcam", sku: "LG-C920-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 150
  },
  {
    id: 9,
    name: "Samsung Gaming Monitor",
    price: 250,
    oldPrice: 300,
    img: "images/monitor/monitor (1).png",
    images: ["images/monitor/monitor (1).png"],
    description: "Samsung 27-inch 144Hz Gaming Monitor – Smooth Gameplay Display with Crisp Colors",
    specs: {brand: "Samsung", category: "Monitor", sku: "SM-GM-009", warranty: "3 Years", stock: "In Stock"},
    rating: 4,
    reviews: 120
  },
  {
    id: 10,
    name: "Dell Inspiron Laptop",
    price: 850,
    oldPrice: 1000,
    img: "images/dell/dell (1).png",
    images: ["images/dell/dell (1).png"],
    description: "Dell Inspiron 15 – Intel i7, 16GB RAM, 512GB SSD, Full HD Display",
    specs: {brand: "Dell", category: "Laptop", sku: "DL-INSP-010", warranty: "2 Years", stock: "In Stock"},
    rating: 4,
    reviews: 85
  },
  {
    id: 11,
    name: "JBL Bluetooth Speaker",
    price: 120,
    oldPrice: 160,
    img: "images/speakers/speaker (2).png",
    images: ["images/speakers/speaker (2).png"],
    description: "JBL Flip 6 – Portable Waterproof Bluetooth Speaker with Powerful Sound",
    specs: {brand: "JBL", category: "Speaker", sku: "JBL-FLIP6-011", warranty: "1 Year", stock: "In Stock"},
    rating: 5,
    reviews: 145
  },
  {
    id: 12,
    name: "Anker 4-Port USB Hub",
    price: 25,
    oldPrice: 32,
    img: "images/usb hub/usb hub (1).png",
    images: ["images/usb hub/usb hub (1).png"],
    description: "Anker 4-Port USB 3.0 Hub – Expand Your Laptop/PC Connectivity with High-Speed Data Transfer",
    specs: {brand: "Anker", category: "USB Hub", sku: "ANK-USBH-012", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 75
  },
  {
    id: 13,
    name: "HyperX Cloud II",
    price: 85,
    oldPrice: null,
    img: "images/headset/headset1.png",
    images: ["images/headset/headset1.png"],
    description: "Comfortable Gaming Headset with 7.1 Surround Sound",
    specs: {brand: "HyperX", category: "Headset", sku: "HX-CLD2-013", warranty: "1 Year", stock: "In Stock"},
    rating: 5,
    reviews: 120
  },
  {
    id: 14,
    name: "Logitech G435",
    price: 70,
    oldPrice: null,
    img: "images/headset/headset2.png",
    images: ["images/headset/headset2.png"],
    description: "Wireless Gaming Headset – Ultra-light, Comfortable Fit",
    specs: {brand: "Logitech", category: "Gaming Headset", sku: "LG-G435-014", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 90
  },
  {
    id: 15,
    name: "SteelSeries Arctis 7",
    price: 120,
    oldPrice: null,
    img: "images/headset/headset1 (2).png",
    images: ["images/headset/headset1 (2).png"],
    description: "Wireless Gaming Headset with ClearCast Mic",
    specs: {brand: "SteelSeries", category: "Gaming Headset", sku: "SS-A7-015", warranty: "2 Years", stock: "In Stock"},
    rating: 5,
    reviews: 110
  },
  {
    id: 16,
    name: "HP Pavilion Laptop",
    price: 950,
    oldPrice: null,
    img: "images/hp/hp (2).png",
    images: ["images/hp/hp (2).png"],
    description: "Intel i7, 16GB RAM, 512GB SSD, Full HD Display",
    specs: {brand: "HP", category: "Laptop", sku: "HP-PAV-016", warranty: "2 Years", stock: "In Stock"},
    rating: 4,
    reviews: 105
  },
  {
    id: 17,
    name: "Dell Inspiron Laptop",
    price: 850,
    oldPrice: null,
    img: "images/dell/dell3.png",
    images: ["images/dell/dell3.png"],
    description: "Intel i7, 16GB RAM, 512GB SSD, Full HD Display",
    specs: {brand: "Dell", category: "Laptop", sku: "DL-INSP-017", warranty: "2 Years", stock: "In Stock"},
    rating: 4,
    reviews: 85
  },
  {
    id: 18,
    name: "Lenovo ThinkPad",
    price: 1200,
    oldPrice: null,
    img: "images/lenovo/lenovo (1).png",
    images: ["images/lenovo/lenovo (1).png"],
    description: "Intel i7, 16GB RAM, 1TB SSD, Business Laptop",
    specs: {brand: "Lenovo", category: "Laptop", sku: "LN-TPX1-018", warranty: "3 Years", stock: "In Stock"},
    rating: 5,
    reviews: 95
  },
  {
    id: 19,
    name: "Huawei P50",
    price: 700,
    oldPrice: null,
    img: "images/huawei/Huawei6 (3).png",
    images: ["images/huawei/Huawei6 (3).png"],
    description: "8GB RAM, 256GB Storage, 50MP Camera, 6.5-inch Display",
    specs: {brand: "Huawei", category: "Smartphone", sku: "HW-P50-019", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 90
  },
  {
    id: 20,
    name: "Samsung Galaxy S23",
    price: 900,
    oldPrice: null,
    img: "images/samsung/samsung (1).png",
    images: ["images/samsung/samsung (1).png"],
    description: "8GB RAM, 256GB Storage, 108MP Camera, 6.8-inch Display",
    specs: {brand: "Samsung", category: "Smartphone", sku: "SS-GS23-020", warranty: "1 Year", stock: "In Stock"},
    rating: 5,
    reviews: 150
  },
  {
    id: 21,
    name: "iPhone 14 Pro",
    price: 1100,
    oldPrice: null,
    img: "images/apple/apple (2).png",
    images: ["images/apple/apple (2).png"],
    description: "6GB RAM, 256GB Storage, Triple Camera System, 6.1-inch Display",
    specs: {brand: "Apple", category: "Smartphone", sku: "AP-IP14P-021", warranty: "1 Year", stock: "In Stock"},
    rating: 5,
    reviews: 200
  },
  {
    id: 22,
    name: "Huawei nova 13i",
    price: 45,
    oldPrice: null,
    img: "images/huawei/huawei.png",
    images: ["images/huawei/huawei.png"],
    description: "The Huawei nova 13i is a sleek and stylish mid-range smartphone",
    specs: {brand: "Huawei", category: "Mobile", sku: "HN13I-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 120
  },
  {
    id: 23,
    name: "Sony Headset",
    price: 45,
    oldPrice: null,
    img: "images/headset/headset3.png",
    images: ["images/headset/headset3.png"],
    description: "Sony WH-CH720N Noise Canceling Wireless",
    specs: {brand: "Sony", category: "Headset", sku: "HN13I-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 120
  },
  {
    id: 24,
    name: "Huawei Pura 80",
    price: 45,
    oldPrice: null,
    img: "images/huawei/huawei3.png",
    images: ["images/huawei/huawei3.png"],
    description: "The Huawei Pura 80 is a premium smartphone designed with a sleek modern look and powerful performance.",
    specs: {brand: "Huawei", category: "Mobile", sku: "HN13I-001", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 120
  },
  {
    id: 25,
    name: "Dell XPS 13 9345",
    price: 45,
    oldPrice: 60,
    img: "images/dell/dell1.png",
    images: ["images/dell/dell1.png"],
    description: "The Dell XPS 13 9345 is a premium ultrabook offering exceptional performance",
    specs: {brand: "Dell", category: "Laptop", sku: "DL-XPS-024", warranty: "1 Year", stock: "In Stock"},
    rating: 4,
    reviews: 120
  },

  // product page data

    {
      id: 16,
      name: "HP Pavilion Laptop",
      price: 950,
      oldPrice: 1100,
      img: "images/laptop/hp-pavilion.png",
      images: [
        "images/laptop/hp-pavilion.png",
        "images/laptop/hp-pavilion2.png",
        "images/laptop/hp-pavilion3.png"
      ],
      description: "HP Pavilion 15 – Intel i7, 16GB RAM, 512GB SSD, Full HD Display",
      specs: {brand: "HP", category: "Laptop", sku: "HP-PAV-016", warranty: "2 Years", stock: "In Stock"},
      rating: 4,
      reviews: 105
    },
    {
      id: 17,
      name: "Dell Inspiron Laptop",
      price: 850,
      oldPrice: 1000,
      img: "images/laptop/dell-inspiron.png",
      images: [
        "images/laptop/dell-inspiron.png",
        "images/laptop/dell-inspiron2.png",
        "images/laptop/dell-inspiron3.png"
      ],
      description: "Dell Inspiron 15 – Intel i7, 16GB RAM, 512GB SSD, Full HD Display",
      specs: {brand: "Dell", category: "Laptop", sku: "DL-INSP-017", warranty: "2 Years", stock: "In Stock"},
      rating: 4,
      reviews: 85
    },
    {
      id: 18,
      name: "Lenovo ThinkPad",
      price: 1200,
      oldPrice: 1350,
      img: "images/laptop/lenovo-thinkpad.png",
      images: [
        "images/laptop/lenovo-thinkpad.png",
        "images/laptop/lenovo-thinkpad2.png",
        "images/laptop/lenovo-thinkpad3.png"
      ],
      description: "Lenovo ThinkPad X1 – Intel i7, 16GB RAM, 1TB SSD, Business Laptop",
      specs: {brand: "Lenovo", category: "Laptop", sku: "LN-TPX1-018", warranty: "3 Years", stock: "In Stock"},
      rating: 5,
      reviews: 95
    },
    {
      id: 19,
      name: "Huawei P50",
      price: 700,
      oldPrice: 850,
      img: "images/mobile/huawei-p50.png",
      images: [
        "images/mobile/huawei-p50.png",
        "images/mobile/huawei-p50-2.png",
        "images/mobile/huawei-p50-3.png"
      ],
      description: "Huawei P50 – 8GB RAM, 256GB Storage, 50MP Camera, 6.5-inch Display",
      specs: {brand: "Huawei", category: "Smartphone", sku: "HW-P50-019", warranty: "1 Year", stock: "In Stock"},
      rating: 4,
      reviews: 90
    },
    {
      id: 20,
      name: "Samsung Galaxy S23",
      price: 900,
      oldPrice: 1050,
      img: "images/mobile/samsung-galaxy-s23.png",
      images: [
        "images/mobile/samsung-galaxy-s23.png",
        "images/mobile/samsung-galaxy-s23-2.png",
        "images/mobile/samsung-galaxy-s23-3.png"
      ],
      description: "Samsung Galaxy S23 – 8GB RAM, 256GB Storage, 108MP Camera, 6.8-inch Display",
      specs: {brand: "Samsung", category: "Smartphone", sku: "SS-GS23-020", warranty: "1 Year", stock: "In Stock"},
      rating: 5,
      reviews: 150
    },
    {
      id: 21,
      name: "iPhone 14 Pro",
      price: 1100,
      oldPrice: 1250,
      img: "images/mobile/iphone-14-pro.png",
      images: [
        "images/mobile/iphone-14-pro.png",
        "images/mobile/iphone-14-pro-2.png",
        "images/mobile/iphone-14-pro-3.png"
      ],
      description: "Apple iPhone 14 Pro – 6GB RAM, 256GB Storage, Triple Camera System, 6.1-inch Display",
      specs: {brand: "Apple", category: "Smartphone", sku: "AP-IP14P-021", warranty: "1 Year", stock: "In Stock"},
      rating: 5,
      reviews: 200
    },
    {
      id: 26,
      name: "HyperX Cloud Gaming Headset",
      price: 120,
      oldPrice: 150,
      img: "images/pngegg (1).png",
      images: [
        "images/pngegg (1).png",
        "images/pngegg (2).png",
        "images/pngegg.png"
      ],
      description: "HyperX Cloud II – Surround Sound, Noise Cancelling Mic",
      specs: {brand: "HyperX", category: "Headset", sku: "HX-CLD-026", warranty: "1 Year", stock: "In Stock"},
      rating: 5,
      reviews: 150
    },
    {
      id: 27,
      name: "Xbox Wireless Controller",
      price: 75,
      oldPrice: 95,
      img: "images/gaming-controller/Xbox Wireless Controller (1).png",
      images: [
        "images/gaming-controller/Xbox Wireless Controller (1).png",
        "images/gaming-controller/Xbox Wireless Controller (2).png",
        "images/gaming-controller/Xbox Wireless Controller ().png"
      ],
      description: "Xbox Series X Wireless Controller with Bluetooth",
      specs: {brand: "Microsoft", category: "Gaming", sku: "XB-CNT-027", warranty: "1 Year", stock: "In Stock"},
      rating: 5,
      reviews: 130
    },
    {
      id: 28,
      name: "ASUS Gaming Monitor",
      price: 320,
      oldPrice: 380,
      img: "images/monitor/ASUS Gaming Monitor (1).png",
      images: [
        "images/monitor/ASUS Gaming Monitor (1).png",
        "images/monitor/ASUS Gaming Monitor (2).png",
        "images/monitor/ASUS Gaming Monitor (3).png"
      ],
      description: "ASUS 27 inch – 165Hz Refresh Rate, 1ms Response",
      specs: {brand: "ASUS", category: "Monitor", sku: "AS-MON-028", warranty: "2 Years", stock: "In Stock"},
      rating: 5,
      reviews: 95
    },
    {
      id: 29,
      name: "JBL Bluetooth Speaker",
      price: 140,
      oldPrice: 160,
      img: "images/speakers/JBL Bluetooth Speaker (1).png",
      images: [
        "images/speakers/JBL Bluetooth Speaker (1).png",
        "images/speakers/JBL Bluetooth Speaker (2).png",
        "images/speakers/JBL Bluetooth Speaker (3).png"
      ],
      description: "JBL Flip 6 – Portable Waterproof Bluetooth Speaker",
      specs: {brand: "JBL", category: "Audio", sku: "JBL-FLP-029", warranty: "1 Year", stock: "In Stock"},
      rating: 5,
      reviews: 110
    },
    {
      id: 30,
      name: "Samsung 1TB SSD",
      price: 180,
      oldPrice: 220,
      img: "images/ssd/Samsung 1TB SSD (1).png",
      images: [
        "images/ssd/Samsung 1TB SSD (1).png",
        "images/ssd/Samsung 1TB SSD (2).png",
        "images/ssd/Samsung 1TB SSD (3).png"
      ],
      description: "Samsung 980 Pro NVMe SSD – Ultra Fast Storage",
      specs: {brand: "Samsung", category: "Storage", sku: "SM-SSD-030", warranty: "3 Years", stock: "In Stock"},
      rating: 5,
      reviews: 140
    },
      {
        id: 30,
        name: "Samsung 1TB SSD",
        price: 180,
        oldPrice: 220,
        img: "images/ssd/Samsung 1TB SSD (1).png",
        images: [
          "images/ssd/Samsung 1TB SSD (1).png",
          "images/ssd/Samsung 1TB SSD (2).png",
          "images/ssd/Samsung 1TB SSD (3).png"
        ],
        description: "Samsung 980 Pro NVMe SSD – Ultra Fast Storage",
        specs: {brand: "Samsung", category: "Storage", sku: "SM-SSD-030", warranty: "3 Years", stock: "In Stock"},
        rating: 5,
        reviews: 140
      },
      {
        id: 31,
        name: "TP-Link WiFi Router",
        price: 85,
        oldPrice: 100,
        img: "images/routers/TP-Link WiFi Router (1).png",
        images: [
          "images/routers/TP-Link WiFi Router (1).png",
          "images/routers/TP-Link WiFi Router (2).png",
          "images/routers/TP-Link WiFi Router (3).png"
        ],
        description: "TP-Link Archer AX50 – Dual Band, High Speed WiFi 6 Router",
        specs: {brand: "TP-Link", category: "Networking", sku: "TPL-RTR-031", warranty: "2 Years", stock: "In Stock"},
        rating: 4,
        reviews: 105
      },
      {
        id: 32,
        name: "Apple Watch Series 9",
        price: 400,
        oldPrice: 450,
        img: "images/watch/Apple Watch Series 9 (1).png",
        images: [
          "images/watch/Apple Watch Series 9 (1).png",
          "images/watch/Apple Watch Series 9 (2).png",
          "images/watch/Apple Watch Series 9 (3).png"
        ],
        description: "GPS, Fitness Tracker, Heart Rate Monitor",
        specs: {brand: "Apple", category: "Smart Watch", sku: "AP-WCH-032", warranty: "1 Year", stock: "In Stock"},
        rating: 5,
        reviews: 150
      },
      {
        id: 33,
        name: "Anker 20000mAh Power Bank",
        price: 50,
        oldPrice: 60,
        img: "images/power bank/Anker 20000mAh Power Bank (1).png",
        images: [
          "images/power bank/Anker 20000mAh Power Bank (1).png",
          "images/power bank/Anker 20000mAh Power Bank (2).png",
          "images/power bank/Anker 20000mAh Power Bank (3).png"
        ],
        description: "Anker PowerCore – 20000mAh, Fast Charging, USB-C",
        specs: {brand: "Anker", category: "Power Bank", sku: "ANK-PB-033", warranty: "1 Year", stock: "In Stock"},
        rating: 5,
        reviews: 130
      },
      {
        id: 34,
        name: "NVIDIA GeForce RTX 4070",
        price: 799,
        oldPrice: 899,
        img: "images/gpu/NVIDIA GeForce RTX 4070 (1).png",
        images: [
          "images/gpu/NVIDIA GeForce RTX 4070 (1).png",
          "images/gpu/NVIDIA GeForce RTX 4070 (2).png",
          "images/gpu/NVIDIA GeForce RTX 4070 (3).png"
        ],
        description: "NVIDIA RTX 4070 – 12GB GDDR6X, High Performance Gaming GPU",
        specs: {brand: "NVIDIA", category: "Graphics Card", sku: "NV-R4070-034", warranty: "3 Years", stock: "In Stock"},
        rating: 5,
        reviews: 90
      },
      {
        id: 35,
        name: "Corsair K70 RGB Keyboard",
        price: 180,
        oldPrice: 200,
        img: "images/keyboard/Corsair K70 RGB Keyboard (1).png",
        images: [
          "images/keyboard/Corsair K70 RGB Keyboard (1).png",
          "images/keyboard/Corsair K70 RGB Keyboard (2).png",
          "images/keyboard/Corsair K70 RGB Keyboard (3).png"
        ],
        description: "Mechanical Keys, RGB Backlit, Anti-Ghosting",
        specs: {brand: "Corsair", category: "Keyboard", sku: "CR-K70-035", warranty: "2 Years", stock: "In Stock"},
        rating: 5,
        reviews: 120
      },
      {
        id: 36,
        name: "ASUS ROG Strix G15",
        price: 1500,
        oldPrice: 1600,
        img: "images/asus/ASUS ROG Strix G15 (1).png",
        images: [
          "images/asus/ASUS ROG Strix G15 (1).png",
          "images/asus/ASUS ROG Strix G15 (2).png",
          "images/asus/ASUS ROG Strix G15 (3).png"
        ],
        description: "ASUS ROG – Ryzen 7, 16GB RAM, RTX 3060, 1TB SSD Gaming Laptop",
        specs: {brand: "ASUS", category: "Laptop", sku: "AS-ROG-036", warranty: "2 Years", stock: "In Stock"},
        rating: 5,
        reviews: 95
      },
      {
        id: 37,
        name: "LG 34-inch Ultrawide Monitor",
        price: 450,
        oldPrice: 500,
        img: "images/monitor/LG 34-inch Ultrawide Monitor (1).png",
        images: [
          "images/monitor/LG 34-inch Ultrawide Monitor (1).png",
          "images/monitor/LG 34-inch Ultrawide Monitor (2).png",
          "images/monitor/LG 34-inch Ultrawide Monitor (3).png"
        ],
        description: "LG 34WN80 – 34 inch, 3440x1440, IPS Panel, FreeSync",
        specs: {brand: "LG", category: "Monitor", sku: "LG-MON-037", warranty: "2 Years", stock: "In Stock"},
        rating: 4,
        reviews: 80
      },
      {
        id: 38,
        name: "Google Pixel 8",
        price: 850,
        oldPrice: 950,
        img: "images/Google Pixel/Google Pixel 8 (1).png",
        images: [
          "images/Google Pixel/Google Pixel 8 (1).png",
          "images/Google Pixel/Google Pixel 8 (2).png",
          "images/Google Pixel/Google Pixel 8 (3).png"
        ],
        description: "8GB RAM, 256GB Storage, 50MP Camera",
        specs: {brand: "Google", category: "Smartphone", sku: "GO-PIX-038", warranty: "1 Year", stock: "In Stock"},
        rating: 4,
        reviews: 90
      },
      {
        id: 39,
        name: "Bose SoundLink Mini II",
        price: 120,
        oldPrice: 140,
        img: "images/speakers/Bose SoundLink Mini II (1).png",
        images: [
          "images/speakers/Bose SoundLink Mini II (1).png",
          "images/speakers/Bose SoundLink Mini II (2).png",
          "images/speakers/Bose SoundLink Mini II (3).png"
        ],
        description: "Portable Bluetooth Speaker, Deep Bass",
        specs: {brand: "Bose", category: "Audio", sku: "BO-SND-040", warranty: "1 Year", stock: "In Stock"},
        rating: 4,
        reviews: 85
      },
      {
        id: 40,
        name: "Seagate 2TB External Hard Drive",
        price: 80,
        oldPrice: 95,
        img: "images/enternal hardrive/Seagate 2TB External Hard Drive (1).png",
        images: [
          "images/enternal hardrive/Seagate 2TB External Hard Drive (1).png",
          "images/enternal hardrive/Seagate 2TB External Hard Drive (2).png",
          "images/enternal hardrive/Seagate 2TB External Hard Drive (3).png"
        ],
        description: "Seagate Backup Plus – 2TB, USB 3.0, Portable Storage",
        specs: {brand: "Seagate", category: "Storage", sku: "SG-HDD-040", warranty: "2 Years", stock: "In Stock"},
        rating: 4,
        reviews: 95
      },
      {
        id: 42,
        name: "HyperX Cloud II",
        price: 100,
        oldPrice: 120,
        img: "images/headset/HyperX Cloud II (1).png",
        images: [
          "images/headset/HyperX Cloud II (1).png",
          "images/headset/HyperX Cloud II (2).png",
          "images/headset/HyperX Cloud II (3).png"
        ],
        description: "7.1 Surround Sound, Noise Cancelling, Comfortable Gaming Headset",
        specs: {brand: "HyperX", category: "Headset", sku: "HX-CL2-043", warranty: "1 Year", stock: "In Stock"},
        rating: 5,
        reviews: 140
      },
      {
        id: 43,
        name: "SteelSeries Arctis 7",
        price: 150,
        oldPrice: 170,
        img: "images/headset/SteelSeries Arctis 7 (1).png",
        images: [
          "images/headset/SteelSeries Arctis 7 (1).png",
          "images/headset/SteelSeries Arctis 7 (2).png",
          "images/headset/SteelSeries Arctis 7 (3).png"
        ],
        description: "Wireless Gaming Headset, DTS Headphone:X v2.0, ClearCast Mic",
        specs: {brand: "SteelSeries", category: "Headset", sku: "SS-ARC7-043", warranty: "1 Year", stock: "In Stock"},
        rating: 5,
        reviews: 110
      },
      {
        id: 44,
        name: "Razer BlackShark V2",
        price: 120,
        oldPrice: 140,
        img: "images/headset/Razer BlackShark V2 (1).png",
        images: [
          "images/headset/Razer BlackShark V2 (1).png",
          "images/headset/Razer BlackShark V2 (2).png",
          "images/headset/Razer BlackShark V2 (3).png"
        ],
        description: "Wired Gaming Headset, THX Spatial Audio, Noise Cancelling Mic",
        specs: {brand: "Razer", category: "Headset", sku: "RZ-BSV2-044", warranty: "1 Year", stock: "In Stock"},
        rating: 5,
        reviews: 100
      },
        // Samsung 4
        {
          id: 45,
          name: "Samsung Galaxy S23",
          price: 900,
          oldPrice: 999,
          img: "images/samsung/samsung (1).png",
          images: [
            "images/samsung/samsung (1).png",
            "images/samsung/samsung (2).png",
            "images/samsung/samsung (3).png"
          ],
          description: "8GB RAM, 256GB Storage, 108MP Camera, 6.8-inch Display",
          specs: {brand: "Samsung", category: "Smartphone", sku: "SS-GS23-045", warranty: "1 Year", stock: "In Stock"},
          rating: 5,
          reviews: 150
        },
        {
          id: 46,
          name: "Samsung 1TB SSD",
          price: 180,
          oldPrice: 220,
          img: "images/ssd/Samsung 1TB SSD (1).png",
          images: [
            "images/ssd/Samsung 1TB SSD (1).png",
            "images/ssd/Samsung 1TB SSD (2).png",
            "images/ssd/Samsung 1TB SSD (3).png"
          ],
          description: "NVMe Ultra Fast Storage",
          specs: {brand: "Samsung", category: "Storage", sku: "SS-SSD-046", warranty: "3 Years", stock: "In Stock"},
          rating: 5,
          reviews: 140
        },
        {
          id: 47,
          name: "Samsung TV 55 inch",
          price: 799,
          oldPrice: 899,
          img: "images/monitor/monitor (1).png",
          images: [
            "images/monitor/monitor (1).png",
            "images/monitor/monitor (2).png",
            "images/monitor/monitor (3).png"
          ],
          description: "LED TV, Smart, 4K",
          specs: {brand: "Samsung", category: "TV", sku: "SS-TV-047", warranty: "2 Years", stock: "In Stock"},
          rating: 4,
          reviews: 105
        },
        {
          id: 48,
          name: "Samsung Router",
          price: 85,
          oldPrice: 100,
          img: "images/routers/Samsung Router (1).png",
          images: [
            "images/routers/Samsung Router (1).png",
            "images/routers/Samsung Router (2).png",
            "images/routers/Samsung Router (3).png"
          ],
          description: "Dual Band, WiFi 6",
          specs: {brand: "Samsung", category: "Networking", sku: "SS-RTR-048", warranty: "2 Years", stock: "In Stock"},
          rating: 4,
          reviews: 90
        },
      
        // Huawei 4
        {
          id: 49,
          name: "Huawei P50",
          price: 700,
          oldPrice: 750,
          img: "images/huawei/Huawei6 (3).png",
          images: [
            "images/huawei/Huawei6 (3).png",
            "images/huawei/Huawei6 (4).png",
            "images/huawei/Huawei6 (5).png"
          ],
          description: "8GB RAM, 256GB Storage, 50MP Camera, 6.5-inch Display",
          specs: {brand: "Huawei", category: "Smartphone", sku: "HW-P50-049", warranty: "1 Year", stock: "In Stock"},
          rating: 4,
          reviews: 90
        },
        {
          id: 50,
          name: "Huawei Laptop",
          price: 950,
          oldPrice: 1050,
          img: "images/huawei leptop/Huawei Laptop (1).png",
          images: [
            "images/huawei leptop/Huawei Laptop (1).png",
            "images/huawei leptop/Huawei Laptop (2).png",
            "images/huawei leptop/Huawei Laptop (3).png"
          ],
          description: "Intel i7, 16GB RAM, 512GB SSD",
          specs: {brand: "Huawei", category: "Laptop", sku: "HW-LAP-050", warranty: "2 Years", stock: "In Stock"},
          rating: 4,
          reviews: 80
        },
        {
          id: 51,
          name: "Huawei Smartwatch",
          price: 200,
          oldPrice: 250,
          img: "images/watch/Huawei Smartwatch (1).png",
          images: [
            "images/watch/Huawei Smartwatch (1).png",
            "images/watch/Huawei Smartwatch (2).png",
            "images/watch/Huawei Smartwatch (3).png"
          ],
          description: "Fitness Tracker, Heart Rate Monitor",
          specs: {brand: "Huawei", category: "Smart Watch", sku: "HW-WCH-051", warranty: "1 Year", stock: "In Stock"},
          rating: 4,
          reviews: 95
        },
        {
          id: 52,
          name: "Huawei Power Bank",
          price: 50,
          oldPrice: 60,
          img: "images/power bank/Anker 20000mAh Power Bank (1).png",
          images: [
            "images/power bank/Anker 20000mAh Power Bank (1).png",
            "images/power bank/Anker 20000mAh Power Bank (2).png",
            "images/power bank/Anker 20000mAh Power Bank (3).png"
          ],
          description: "10000mAh, Fast Charging",
          specs: {brand: "Huawei", category: "Power Bank", sku: "HW-PB-052", warranty: "1 Year", stock: "In Stock"},
          rating: 4,
          reviews: 85
        },
          // Apple 4
          {
            id: 53,
            name: "iPhone 14 Pro",
            price: 1100,
            oldPrice: 1200,
            img: "images/apple/apple (2).png",
            images: [
              "images/apple/apple (2).png",
              "images/apple/apple (3).png",
              "images/apple/apple (4).png"
            ],
            description: "6GB RAM, 256GB Storage, Triple Camera, 6.1-inch Display",
            specs: {brand: "Apple", category: "Smartphone", sku: "AP-IPH14-053", warranty: "1 Year", stock: "In Stock"},
            rating: 5,
            reviews: 150
          },
          {
            id: 54,
            name: "Apple Watch Series 9",
            price: 400,
            oldPrice: 450,
            img: "images/watch/Apple Watch Series 9 (1).png",
            images: [
              "images/watch/Apple Watch Series 9 (1).png",
              "images/watch/Apple Watch Series 9 (2).png",
              "images/watch/Apple Watch Series 9 (3).png"
            ],
            description: "GPS, Fitness Tracker, Heart Rate Monitor",
            specs: {brand: "Apple", category: "Smart Watch", sku: "AP-WCH9-054", warranty: "1 Year", stock: "In Stock"},
            rating: 5,
            reviews: 140
          },
          {
            id: 55,
            name: "Apple MacBook Air",
            price: 1200,
            oldPrice: 1350,
            img: "images/macbook/macbook (1).png",
            images: [
              "images/macbook/macbook (1).png",
              "images/macbook/macbook (2).png",
              "images/macbook/macbook (3).png"
            ],
            description: "M2 Chip, 16GB RAM, 512GB SSD",
            specs: {brand: "Apple", category: "Laptop", sku: "AP-MBA-055", warranty: "2 Years", stock: "In Stock"},
            rating: 5,
            reviews: 130
          },
          {
            id: 56,
            name: "Apple AirPods Pro",
            price: 250,
            oldPrice: 300,
            img: "images/air pods/apple air pods (1).png",
            images: [
              "images/air pods/apple air pods (1).png",
              "images/air pods/apple air pods (2).png",
              "images/air pods/apple air pods (3).png"
            ],
            description: "Wireless, Noise Cancelling",
            specs: {brand: "Apple", category: "Audio", sku: "AP-APRO-056", warranty: "1 Year", stock: "In Stock"},
            rating: 4,
            reviews: 125
          },
        
          // HP 4
          {
            id: 57,
            name: "HP Pavilion Laptop",
            price: 950,
            oldPrice: 1050,
            img: "images/hp/hp (1).png",
            images: [
              "images/hp/hp (1).png",
              "images/hp/hp (2).png",
              "images/hp/hp (3).png"
            ],
            description: "Intel i7, 16GB RAM, 512GB SSD",
            specs: {brand: "HP", category: "Laptop", sku: "HP-LAP-057", warranty: "2 Years", stock: "In Stock"},
            rating: 4,
            reviews: 120
          },
          {
            id: 58,
            name: "HP Desktop",
            price: 850,
            oldPrice: 950,
            img: "images/hp/desktop (1).png",
            images: [
              "images/hp/desktop (1).png",
              "images/hp/desktop (2).png",
              "images/hp/desktop (3).png"
            ],
            description: "Intel i5, 16GB RAM, 1TB HDD",
            specs: {brand: "HP", category: "Desktop", sku: "HP-DESK-058", warranty: "2 Years", stock: "In Stock"},
            rating: 4,
            reviews: 110
          },
          {
            id: 59,
            name: "HP Monitor",
            price: 200,
            oldPrice: 250,
            img: "images/hp/hp monitor (1).png",
            images: [
              "images/hp/hp monitor (1).png",
              "images/hp/hp monitor (2).png",
              "images/hp/hp monitor (3).png"
            ],
            description: "24-inch, Full HD, IPS Panel",
            specs: {brand: "HP", category: "Monitor", sku: "HP-MON-059", warranty: "1 Year", stock: "In Stock"},
            rating: 4,
            reviews: 100
          },
          {
            id: 60,
            name: "HP Keyboard",
            price: 120,
            oldPrice: 150,
            img: "images/hp/hp keyboard (1).png",
            images: [
              "images/hp/hp keyboard (1).png",
              "images/hp/hp keyboard (2).png",
              "images/hp/hp keyboard (3).png"
            ],
            description: "Mechanical, Backlit",
            specs: {brand: "HP", category: "Keyboard", sku: "HP-KBD-060", warranty: "1 Year", stock: "In Stock"},
            rating: 4,
            reviews: 95
          },
        
          // Dell 4
          {
            id: 61,
            name: "Dell Inspiron Laptop",
            price: 850,
            oldPrice: 950,
            img: "images/dell/dell3.png",
            images: [
              "images/dell/dell3.png",
              "images/dell/dell4.png",
              "images/dell/dell5.png"
            ],
            description: "Intel i7, 16GB RAM, 512GB SSD",
            specs: {brand: "Dell", category: "Laptop", sku: "DE-LAP-061", warranty: "2 Years", stock: "In Stock"},
            rating: 4,
            reviews: 110
          },
          {
            id: 62,
            name: "Dell XPS Laptop",
            price: 1500,
            oldPrice: 1650,
            img: "images/dell/dell1.png",
            images: [
              "images/dell/dell1.png",
              "images/dell/dell2.png",
              "images/dell/dell3.png"
            ],
            description: "Intel i9, 32GB RAM, 1TB SSD",
            specs: {brand: "Dell", category: "Laptop", sku: "DE-XPS-062", warranty: "2 Years", stock: "In Stock"},
            rating: 5,
            reviews: 130
          },
          {
            id: 63,
            name: "Dell Monitor",
            price: 350,
            oldPrice: 400,
            img: "images/monitor/monitor (2).png",
            images: [
              "images/monitor/monitor (2).png",
              "images/monitor/monitor (3).png",
              "images/monitor/monitor (4).png"
            ],
            description: "27-inch, 2K, IPS Panel",
            specs: {brand: "Dell", category: "Monitor", sku: "DE-MON-063", warranty: "1 Year", stock: "In Stock"},
            rating: 4,
            reviews: 100
          },
          {
            id: 64,
            name: "Dell Wireless Mouse",
            price: 60,
            oldPrice: 75,
            img: "images/gaming/mouse.png",
            images: [
              "images/gaming/mouse.png",
              "images/gaming/mouse2.png",
              "images/gaming/mouse3.png"
            ],
            description: "Ergonomic, High Precision",
            specs: {brand: "Dell", category: "Mouse", sku: "DE-MOU-064", warranty: "1 Year", stock: "In Stock"},
            rating: 4,
            reviews: 90
          }
        
    
    
  
];


// product add karte he is trah
// products.push({
//   id: 14,
//   name: "New Gaming Mouse",
//   price: 59,
//   oldPrice: 79,
//   img: "images/mouse/mouse1.png",
//   images: ["images/mouse/mouse1.png"],
//   description: "Ergonomic RGB Gaming Mouse",
//   specs: { DPI: "16000", Connectivity: "Wired/Wireless" },
//   rating: 5,
//   reviews: 50,
//   // category: "Accessories",
//   // model: "GM-1"
// });



// is me product add karo id automatically add ho jaye gi
// const newProducts = [
//   {
//     name: "New Gaming Mouse",
//     price: 59,
//     oldPrice: 79,
//     img: "images/mouse/mouse1.png",
//     images: ["images/mouse/mouse1.png"],
//     description: "Ergonomic RGB Gaming Mouse",
//     specs: { DPI: "16000", Connectivity: "Wired/Wireless" },
//     rating: 5,
//     reviews: 50,
//     category: "Accessories",
//     model: "GM-1"
//   }
// ];

// newProducts.forEach(product => {
//   product.id = Math.max(...products.map(p => p.id)) + 1; // automatically next ID
//   products.push(product);
// });
