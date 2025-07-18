// Product Data with 100 items
const products = [
    // Electronics (20 items)
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra",
        description: "Latest flagship smartphone with AI features",
        category: "electronics",
        prices: { naira: 1250000, dollar: 850, euro: 780 },
        image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
        rating: 4.8,
        inStock: true,
        discount: 10
    },
    {
        id: 2,
        name: "MacBook Pro M3",
        description: "Powerful laptop for professionals",
        category: "electronics",
        prices: { naira: 2500000, dollar: 1699, euro: 1560 },
        image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg",
        rating: 4.9,
        inStock: true
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        description: "Premium noise-cancelling headphones",
        category: "electronics",
        prices: { naira: 485000, dollar: 330, euro: 303 },
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
        rating: 4.7,
        inStock: true,
        discount: 15
    },
    {
        id: 4,
        name: "iPad Air 5th Gen",
        description: "Versatile tablet for work and play",
        category: "electronics",
        prices: { naira: 850000, dollar: 579, euro: 532 },
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
        rating: 4.6,
        inStock: true
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        description: "Advanced smartwatch with health features",
        category: "electronics",
        prices: { naira: 610000, dollar: 415, euro: 381 },
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 6,
        name: "Canon EOS R5",
        description: "Professional mirrorless camera",
        category: "electronics",
        prices: { naira: 5200000, dollar: 3540, euro: 3252 },
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
        rating: 4.8,
        inStock: true,
        discount: 8
    },
    {
        id: 7,
        name: "Nintendo Switch OLED",
        description: "Popular gaming console with OLED screen",
        category: "electronics",
        prices: { naira: 485000, dollar: 330, euro: 303 },
        image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
        rating: 4.6,
        inStock: true
    },
    {
        id: 8,
        name: "Samsung 55\" QLED TV",
        description: "Smart TV with quantum dot technology",
        category: "electronics",
        prices: { naira: 1150000, dollar: 782, euro: 719 },
        image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 12
    },
    {
        id: 9,
        name: "JBL Charge 5 Speaker",
        description: "Portable Bluetooth speaker with powerbank",
        category: "electronics",
        prices: { naira: 155000, dollar: 105, euro: 97 },
        image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 10,
        name: "DJI Mini 3 Pro Drone",
        description: "Compact drone with professional features",
        category: "electronics",
        prices: { naira: 1050000, dollar: 714, euro: 656 },
        image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
        rating: 4.7,
        inStock: true
    },
    {
        id: 11,
        name: "Gaming Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard",
        category: "electronics",
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 20
    },
    {
        id: 12,
        name: "Wireless Gaming Mouse",
        description: "High-precision wireless gaming mouse",
        category: "electronics",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 13,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI",
        category: "electronics",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/163125/play-stone-network-networked-interactive-163125.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 14,
        name: "Portable Power Bank",
        description: "20000mAh fast charging power bank",
        category: "electronics",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 25
    },
    {
        id: 15,
        name: "Smart Home Speaker",
        description: "Voice-activated smart speaker",
        category: "electronics",
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: "https://images.pexels.com/photos/4790254/pexels-photo-4790254.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 16,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with case",
        category: "electronics",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 17,
        name: "Smart Fitness Tracker",
        description: "Health and fitness monitoring device",
        category: "electronics",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 18
    },
    {
        id: 18,
        name: "Electric Toothbrush",
        description: "Smart electric toothbrush with app",
        category: "electronics",
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: "https://images.pexels.com/photos/6621184/pexels-photo-6621184.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 19,
        name: "Robot Vacuum Cleaner",
        description: "Smart robot vacuum with mapping",
        category: "electronics",
        prices: { naira: 450000, dollar: 306, euro: 281 },
        image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 20,
        name: "Smart Ring Doorbell",
        description: "Video doorbell with motion detection",
        category: "electronics",
        prices: { naira: 195000, dollar: 133, euro: 122 },
        image: "https://images.pexels.com/photos/4790624/pexels-photo-4790624.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 10
    },

    // Fashion (20 items)
    {
        id: 21,
        name: "Designer Leather Handbag",
        description: "Premium leather handbag with gold accents",
        category: "fashion",
        prices: { naira: 285000, dollar: 194, euro: 178 },
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
        rating: 4.6,
        inStock: true,
        discount: 15
    },
    {
        id: 22,
        name: "Men's Formal Suit",
        description: "Tailored business suit in navy blue",
        category: "fashion",
        prices: { naira: 425000, dollar: 289, euro: 266 },
        image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 23,
        name: "Women's Evening Dress",
        description: "Elegant evening dress for special occasions",
        category: "fashion",
        prices: { naira: 195000, dollar: 133, euro: 122 },
        image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg",
        rating: 4.7,
        inStock: true
    },
    {
        id: 24,
        name: "Designer Sneakers",
        description: "Limited edition designer sneakers",
        category: "fashion",
        prices: { naira: 385000, dollar: 262, euro: 241 },
        image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 12
    },
    {
        id: 25,
        name: "Luxury Watch",
        description: "Swiss-made automatic luxury watch",
        category: "fashion",
        prices: { naira: 1850000, dollar: 1259, euro: 1157 },
        image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg",
        rating: 4.8,
        inStock: true
    },
    {
        id: 26,
        name: "Silk Scarf",
        description: "Premium silk scarf with floral pattern",
        category: "fashion",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 27,
        name: "Leather Boots",
        description: "Handcrafted leather boots for men",
        category: "fashion",
        prices: { naira: 265000, dollar: 180, euro: 166 },
        image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 8
    },
    {
        id: 28,
        name: "Designer Sunglasses",
        description: "UV protection designer sunglasses",
        category: "fashion",
        prices: { naira: 145000, dollar: 99, euro: 91 },
        image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 29,
        name: "Cashmere Sweater",
        description: "Soft cashmere sweater for women",
        category: "fashion",
        prices: { naira: 325000, dollar: 221, euro: 203 },
        image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
        rating: 4.6,
        inStock: true
    },
    {
        id: 30,
        name: "Diamond Earrings",
        description: "Elegant diamond stud earrings",
        category: "fashion",
        prices: { naira: 750000, dollar: 510, euro: 469 },
        image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg",
        rating: 4.7,
        inStock: true,
        discount: 20
    },
    {
        id: 31,
        name: "Men's Polo Shirt",
        description: "Classic cotton polo shirt",
        category: "fashion",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 32,
        name: "Women's Jeans",
        description: "Premium denim jeans with perfect fit",
        category: "fashion",
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 33,
        name: "Leather Belt",
        description: "Genuine leather belt with metal buckle",
        category: "fashion",
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg",
        rating: 4.1,
        inStock: true,
        discount: 15
    },
    {
        id: 34,
        name: "Wedding Ring",
        description: "18k gold wedding ring with diamonds",
        category: "fashion",
        prices: { naira: 950000, dollar: 646, euro: 594 },
        image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg",
        rating: 4.8,
        inStock: true
    },
    {
        id: 35,
        name: "Designer Backpack",
        description: "Stylish backpack for daily use",
        category: "fashion",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/1545224/pexels-photo-1545224.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 36,
        name: "High Heel Shoes",
        description: "Elegant high heel shoes for women",
        category: "fashion",
        prices: { naira: 165000, dollar: 112, euro: 103 },
        image: "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 10
    },
    {
        id: 37,
        name: "Men's Tie",
        description: "Silk tie for formal occasions",
        category: "fashion",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 38,
        name: "Perfume",
        description: "Premium fragrance for women",
        category: "fashion",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 39,
        name: "Winter Coat",
        description: "Warm winter coat with fur lining",
        category: "fashion",
        prices: { naira: 485000, dollar: 330, euro: 303 },
        image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
        rating: 4.6,
        inStock: true
    },
    {
        id: 40,
        name: "Sports Cap",
        description: "Adjustable sports cap with logo",
        category: "fashion",
        prices: { naira: 25000, dollar: 17, euro: 16 },
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
        rating: 4.1,
        inStock: true,
        discount: 5
    },

    // Home & Garden (20 items)
    {
        id: 41,
        name: "Modern Sofa Set",
        description: "3-piece modern living room sofa set",
        category: "home",
        prices: { naira: 850000, dollar: 579, euro: 532 },
        image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
        rating: 4.5,
        inStock: true,
        discount: 12
    },
    {
        id: 42,
        name: "Dining Table Set",
        description: "6-seater wooden dining table with chairs",
        category: "home",
        prices: { naira: 650000, dollar: 442, euro: 406 },
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 43,
        name: "King Size Bed",
        description: "Luxury king size bed with mattress",
        category: "home",
        prices: { naira: 750000, dollar: 510, euro: 469 },
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
        rating: 4.6,
        inStock: true
    },
    {
        id: 44,
        name: "Coffee Table",
        description: "Glass-top coffee table with storage",
        category: "home",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 8
    },
    {
        id: 45,
        name: "Air Conditioner",
        description: "Energy-efficient split AC unit",
        category: "home",
        prices: { naira: 485000, dollar: 330, euro: 303 },
        image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
        rating: 4.4,
        inStock: true
    },
    {
        id: 46,
        name: "Refrigerator",
        description: "Double-door refrigerator with freezer",
        category: "home",
        prices: { naira: 725000, dollar: 493, euro: 454 },
        image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg",
        rating: 4.5,
        inStock: true,
        discount: 15
    },
    {
        id: 47,
        name: "Washing Machine",
        description: "Front-loading washing machine",
        category: "home",
        prices: { naira: 425000, dollar: 289, euro: 266 },
        image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 48,
        name: "Microwave Oven",
        description: "Digital microwave with grill function",
        category: "home",
        prices: { naira: 145000, dollar: 99, euro: 91 },
        image: "https://images.pexels.com/photos/4790624/pexels-photo-4790624.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 49,
        name: "Ceiling Fan",
        description: "Energy-efficient ceiling fan with LED",
        category: "home",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        rating: 4.0,
        inStock: true,
        discount: 10
    },
    {
        id: 50,
        name: "Bookshelf",
        description: "5-tier wooden bookshelf",
        category: "home",
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 51,
        name: "Table Lamp",
        description: "Modern LED table lamp",
        category: "home",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 52,
        name: "Curtains Set",
        description: "Blackout curtains for bedroom",
        category: "home",
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        rating: 4.0,
        inStock: true,
        discount: 20
    },
    {
        id: 53,
        name: "Area Rug",
        description: "Persian-style area rug for living room",
        category: "home",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 54,
        name: "Wall Mirror",
        description: "Decorative wall mirror with frame",
        category: "home",
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 55,
        name: "Plant Pot Set",
        description: "Ceramic plant pots with saucers",
        category: "home",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/1084542/pexels-photo-1084542.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 56,
        name: "Vacuum Cleaner",
        description: "Cordless stick vacuum cleaner",
        category: "home",
        prices: { naira: 285000, dollar: 194, euro: 178 },
        image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 18
    },
    {
        id: 57,
        name: "Kitchen Utensil Set",
        description: "Complete stainless steel utensil set",
        category: "home",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 58,
        name: "Wardrobe",
        description: "3-door wooden wardrobe with mirror",
        category: "home",
        prices: { naira: 450000, dollar: 306, euro: 281 },
        image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 59,
        name: "Study Desk",
        description: "Computer desk with drawers",
        category: "home",
        prices: { naira: 165000, dollar: 112, euro: 103 },
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 12
    },
    {
        id: 60,
        name: "Garden Tool Set",
        description: "Complete gardening tool set",
        category: "home",
        prices: { naira: 55000, dollar: 37, euro: 34 },
        image: "https://images.pexels.com/photos/1084542/pexels-photo-1084542.jpeg",
        rating: 4.1,
        inStock: true
    },

    // Beauty & Personal Care (15 items)
    {
        id: 61,
        name: "Anti-Aging Serum",
        description: "Premium anti-aging facial serum",
        category: "beauty",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 15
    },
    {
        id: 62,
        name: "Makeup Palette",
        description: "Professional makeup palette set",
        category: "beauty",
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 63,
        name: "Hair Dryer",
        description: "Professional ionic hair dryer",
        category: "beauty",
        prices: { naira: 145000, dollar: 99, euro: 91 },
        image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 64,
        name: "Skincare Set",
        description: "Complete skincare routine set",
        category: "beauty",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.5,
        inStock: true,
        discount: 10
    },
    {
        id: 65,
        name: "Hair Straightener",
        description: "Ceramic hair straightener with temperature control",
        category: "beauty",
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 66,
        name: "Nail Polish Set",
        description: "Collection of 12 nail polish colors",
        category: "beauty",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        rating: 4.0,
        inStock: true,
        discount: 25
    },
    {
        id: 67,
        name: "Face Mask Set",
        description: "Hydrating face mask collection",
        category: "beauty",
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 68,
        name: "Lipstick Collection",
        description: "Matte lipstick collection in 6 shades",
        category: "beauty",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 69,
        name: "Shampoo & Conditioner",
        description: "Organic shampoo and conditioner set",
        category: "beauty",
        prices: { naira: 55000, dollar: 37, euro: 34 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.1,
        inStock: true,
        discount: 12
    },
    {
        id: 70,
        name: "Makeup Brushes",
        description: "Professional makeup brush set",
        category: "beauty",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        rating: 4.4,
        inStock: true
    },
    {
        id: 71,
        name: "Body Lotion",
        description: "Moisturizing body lotion with SPF",
        category: "beauty",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 72,
        name: "Eye Cream",
        description: "Anti-dark circle eye cream",
        category: "beauty",
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 20
    },
    {
        id: 73,
        name: "Facial Cleanser",
        description: "Gentle foam facial cleanser",
        category: "beauty",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 74,
        name: "Moisturizer",
        description: "Daily facial moisturizer with hyaluronic acid",
        category: "beauty",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.4,
        inStock: true
    },
    {
        id: 75,
        name: "Sunscreen",
        description: "Broad spectrum SPF 50 sunscreen",
        category: "beauty",
        prices: { naira: 55000, dollar: 37, euro: 34 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 8
    },

    // Sports & Fitness (10 items)
    {
        id: 76,
        name: "Yoga Mat",
        description: "Non-slip exercise yoga mat",
        category: "sports",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 15
    },
    {
        id: 77,
        name: "Dumbbells Set",
        description: "Adjustable dumbbells set 5-25kg",
        category: "sports",
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: "https://images.pexels.com/photos/28080/pexels-photo-28080.jpg",
        rating: 4.4,
        inStock: true
    },
    {
        id: 78,
        name: "Running Shoes",
        description: "Professional running shoes with cushioning",
        category: "sports",
        prices: { naira: 165000, dollar: 112, euro: 103 },
        image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
        rating: 4.5,
        inStock: true,
        discount: 10
    },
    {
        id: 79,
        name: "Exercise Bike",
        description: "Indoor exercise bike with digital display",
        category: "sports",
        prices: { naira: 485000, dollar: 330, euro: 303 },
        image: "https://images.pexels.com/photos/28080/pexels-photo-28080.jpg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 80,
        name: "Tennis Racket",
        description: "Professional tennis racket with strings",
        category: "sports",
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: "https://images.pexels.com/photos/28080/pexels-photo-28080.jpg",
        rating: 4.1,
        inStock: true,
        discount: 12
    },
    {
        id: 81,
        name: "Swimming Goggles",
        description: "Anti-fog swimming goggles",
        category: "sports",
        prices: { naira: 25000, dollar: 17, euro: 16 },
        image: "https://images.pexels.com/photos/28080/pexels-photo-28080.jpg",
        rating: 4.0,
        inStock: true
    },
    {
        id: 82,
        name: "Basketball",
        description: "Official size basketball",
        category: "sports",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/28080/pexels-photo-28080.jpg",
        rating: 4.2,
        inStock: true,
        discount: 8
    },
    {
        id: 83,
        name: "Protein Powder",
        description: "Whey protein powder for muscle building",
        category: "sports",
        prices: { naira: 155000, dollar: 105, euro: 97 },
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        rating: 4.3,
        inStock: true
    },
    {
        id: 84,
        name: "Gym Bag",
        description: "Spacious gym bag with shoe compartment",
        category: "sports",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        rating: 4.1,
        inStock: true,
        discount: 20
    },
    {
        id: 85,
        name: "Water Bottle",
        description: "Insulated stainless steel water bottle",
        category: "sports",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        rating: 4.0,
        inStock: true
    },

    // Books & Education (8 items)
    {
        id: 86,
        name: "Programming Cookbook",
        description: "Complete guide to modern programming",
        category: "books",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.6,
        inStock: true,
        discount: 15
    },
    {
        id: 87,
        name: "Business Strategy Book",
        description: "Essential business strategy handbook",
        category: "books",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.4,
        inStock: true
    },
    {
        id: 88,
        name: "Fiction Novel Collection",
        description: "Set of 5 bestselling fiction novels",
        category: "books",
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 10
    },
    {
        id: 89,
        name: "Children's Educational Set",
        description: "Interactive learning books for kids",
        category: "books",
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 90,
        name: "Cooking Recipes Book",
        description: "International cuisine recipe collection",
        category: "books",
        prices: { naira: 55000, dollar: 37, euro: 34 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.2,
        inStock: true,
        discount: 12
    },
    {
        id: 91,
        name: "Self-Help Guide",
        description: "Personal development and motivation",
        category: "books",
        prices: { naira: 25000, dollar: 17, euro: 16 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 92,
        name: "Science Encyclopedia",
        description: "Comprehensive science reference book",
        category: "books",
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.7,
        inStock: true
    },
    {
        id: 93,
        name: "Art & Design Book",
        description: "Modern art and design inspiration",
        category: "books",
        prices: { naira: 75000, dollar: 51, euro: 47 },
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 18
    },

    // Remaining items (7 items) - Mixed categories
    {
        id: 94,
        name: "Car Phone Mount",
        description: "Universal smartphone car mount",
        category: "electronics",
        prices: { naira: 25000, dollar: 17, euro: 16 },
        image: "https://images.pexels.com/photos/163125/play-stone-network-networked-interactive-163125.jpeg",
        rating: 4.1,
        inStock: true,
        discount: 10
    },
    {
        id: 95,
        name: "Baby Stroller",
        description: "Lightweight baby stroller with safety features",
        category: "home",
        prices: { naira: 285000, dollar: 194, euro: 178 },
        image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg",
        rating: 4.5,
        inStock: true
    },
    {
        id: 96,
        name: "Organic Honey",
        description: "Pure organic honey 500g jar",
        category: "home",
        prices: { naira: 15000, dollar: 10, euro: 9 },
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
        rating: 4.3,
        inStock: true,
        discount: 20
    },
    {
        id: 97,
        name: "Vitamin D Supplements",
        description: "High-potency vitamin D3 tablets",
        category: "beauty",
        prices: { naira: 45000, dollar: 31, euro: 28 },
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
        rating: 4.2,
        inStock: true
    },
    {
        id: 98,
        name: "Car Air Freshener",
        description: "Long-lasting car air freshener",
        category: "electronics",
        prices: { naira: 15000, dollar: 10, euro: 9 },
        image: "https://images.pexels.com/photos/163125/play-stone-network-networked-interactive-163125.jpeg",
        rating: 4.0,
        inStock: true,
        discount: 15
    },
    {
        id: 99,
        name: "Educational Puzzle",
        description: "1000-piece educational world map puzzle",
        category: "books",
        prices: { naira: 35000, dollar: 24, euro: 22 },
        image: "https://images.pexels.com/photos/163125/play-stone-network-networked-interactive-163125.jpeg",
        rating: 4.1,
        inStock: true
    },
    {
        id: 100,
        name: "Green Tea Collection",
        description: "Premium organic green tea variety pack",
        category: "home",
        prices: { naira: 25000, dollar: 17, euro: 16 },
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
        rating: 4.4,
        inStock: true,
        discount: 12
    }
];

// Services Data
const services = [
    // Catering Services
    {
        id: 'catering-1',
        name: 'Wedding Catering Service',
        description: 'Complete wedding catering with Nigerian and international cuisine',
        category: 'catering',
        prices: { naira: 450000, dollar: 306, euro: 281 },
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        features: [
            'Full course Nigerian meals',
            'International cuisine options',
            'Professional serving staff',
            'Table setup and decoration',
            'Up to 200 guests',
            'Free tasting session'
        ]
    },
    {
        id: 'catering-2',
        name: 'Corporate Event Catering',
        description: 'Professional catering for business events and conferences',
        category: 'catering',
        prices: { naira: 285000, dollar: 194, euro: 178 },
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        features: [
            'Business lunch packages',
            'Coffee break services',
            'Cocktail reception',
            'Professional presentation',
            'Up to 150 guests',
            'Same-day delivery'
        ]
    },
    {
        id: 'catering-3',
        name: 'Birthday Party Catering',
        description: 'Fun and delicious catering for birthday celebrations',
        category: 'catering',
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        features: [
            'Custom birthday cakes',
            'Kid-friendly menu options',
            'Party decoration setup',
            'Entertainment coordination',
            'Up to 100 guests',
            'Photo session included'
        ]
    },
    {
        id: 'catering-4',
        name: 'Traditional Owambe Catering',
        description: 'Authentic Nigerian party catering with traditional dishes',
        category: 'catering',
        prices: { naira: 385000, dollar: 262, euro: 241 },
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        features: [
            'Traditional Nigerian dishes',
            'Live cooking stations',
            'Traditional serving style',
            'Cultural music coordination',
            'Up to 300 guests',
            'Traditional outfit coordination'
        ]
    },
    {
        id: 'catering-5',
        name: 'Small Gathering Catering',
        description: 'Intimate catering service for small family gatherings',
        category: 'catering',
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        features: [
            'Home-style cooking',
            'Flexible menu options',
            'Personal chef service',
            'Kitchen cleanup included',
            'Up to 50 guests',
            'Dietary restrictions accommodated'
        ]
    },

    // Cleaning Services
    {
        id: 'cleaning-1',
        name: 'Deep House Cleaning',
        description: 'Comprehensive deep cleaning service for your entire home',
        category: 'cleaning',
        prices: { naira: 85000, dollar: 58, euro: 53 },
        image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
        features: [
            'All rooms deep cleaned',
            'Kitchen appliances cleaning',
            'Bathroom sanitization',
            'Window cleaning included',
            'Carpet and upholstery cleaning',
            'Eco-friendly products used'
        ]
    },
    {
        id: 'cleaning-2',
        name: 'Office Cleaning Service',
        description: 'Professional office and commercial space cleaning',
        category: 'cleaning',
        prices: { naira: 125000, dollar: 85, euro: 78 },
        image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
        features: [
            'Daily or weekly schedules',
            'Desk and workspace cleaning',
            'Floor mopping and vacuuming',
            'Restroom sanitization',
            'Trash removal service',
            'After-hours cleaning available'
        ]
    },
    {
        id: 'cleaning-3',
        name: 'Post-Construction Cleaning',
        description: 'Specialized cleaning after construction or renovation work',
        category: 'cleaning',
        prices: { naira: 185000, dollar: 126, euro: 116 },
        image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
        features: [
            'Dust and debris removal',
            'Paint splatter cleaning',
            'Window and glass cleaning',
            'Floor polishing',
            'Safety equipment provided',
            'Multiple visit options'
        ]
    },
    {
        id: 'cleaning-4',
        name: 'Move-in/Move-out Cleaning',
        description: 'Complete cleaning service for moving situations',
        category: 'cleaning',
        prices: { naira: 95000, dollar: 65, euro: 60 },
        image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
        features: [
            'Empty property cleaning',
            'Appliance cleaning',
            'Cabinet interior cleaning',
            'Light fixture cleaning',
            'Same-day service available',
            'Satisfaction guaranteed'
        ]
    },
    {
        id: 'cleaning-5',
        name: 'Carpet & Upholstery Cleaning',
        description: 'Specialized cleaning for carpets, rugs, and furniture',
        category: 'cleaning',
        prices: { naira: 65000, dollar: 44, euro: 41 },
        image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
        features: [
            'Steam cleaning method',
            'Stain removal treatment',
            'Odor elimination',
            'Quick drying techniques',
            'Fabric protection available',
            'Free pre-inspection'
        ]
    }
];

// Global variables
let currentCurrency = 'naira';
let cart = [];
let filteredProducts = [...products];

// Currency symbols
const currencySymbols = {
    naira: '₦',
    dollar: '$',
    euro: '€'
};

// DOM elements
const currencySelect = document.getElementById('currency-select');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const productsGrid = document.getElementById('products-grid');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const bookingModal = document.getElementById('booking-modal');
const closeBooking = document.getElementById('close-booking');
const cancelBooking = document.getElementById('cancel-booking');
const bookingForm = document.getElementById('booking-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    displayServices();
    updateCartUI();
    
    // Event listeners
    currencySelect.addEventListener('change', handleCurrencyChange);
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleCategoryFilter);
    sortFilter.addEventListener('change', handleSort);
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    closeBooking.addEventListener('click', closeBookingModal);
    cancelBooking.addEventListener('click', closeBookingModal);
    bookingForm.addEventListener('submit', handleBookingSubmit);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
        if (event.target === bookingModal) {
            closeBookingModal();
        }
    });
});

// Format price with currency symbol
function formatPrice(price, currency) {
    const symbol = currencySymbols[currency];
    return `${symbol}${price.toLocaleString()}`;
}

// Handle currency change
function handleCurrencyChange() {
    currentCurrency = currencySelect.value;
    displayProducts();
    displayServices();
    updateCartUI();
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    applyFiltersAndSort();
}

// Handle category filter
function handleCategoryFilter() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }
    
    // Apply search if there's a search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFiltersAndSort();
}

// Handle sorting
function handleSort() {
    applyFiltersAndSort();
}

// Apply filters and sorting
function applyFiltersAndSort() {
    const sortBy = sortFilter.value;
    
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price':
                return a.prices[currentCurrency] - b.prices[currentCurrency];
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    displayProducts();
}

// Display products
function displayProducts() {
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="color: #666; font-size: 1.2rem;">No products found matching your criteria.</p>
                <button onclick="clearFilters()" style="margin-top: 15px; color: #2c5530; background: none; border: none; font-size: 1rem; cursor: pointer; text-decoration: underline;">
                    Clear filters to see all products
                </button>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const price = product.prices[currentCurrency];
    const originalPrice = product.discount ? price / (1 - product.discount / 100) : price;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.discount ? `<div class="discount-badge">-${product.discount}%</div>` : ''}
            ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.rating})</span>
            </div>
            <div class="product-footer">
                <div class="price-info">
                    <div class="price">${formatPrice(price, currentCurrency)}</div>
                    ${product.discount ? `<div class="original-price">${formatPrice(originalPrice, currentCurrency)}</div>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i> Add
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Display services
function displayServices() {
    const cateringServices = services.filter(service => service.category === 'catering');
    const cleaningServices = services.filter(service => service.category === 'cleaning');
    
    displayServiceCategory('catering-services', cateringServices);
    displayServiceCategory('cleaning-services', cleaningServices);
}

// Display service category
function displayServiceCategory(containerId, serviceList) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    serviceList.forEach(service => {
        const serviceCard = createServiceCard(service);
        container.appendChild(serviceCard);
    });
}

// Create service card
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const price = service.prices[currentCurrency];
    
    card.innerHTML = `
        <img src="${service.image}" alt="${service.name}">
        <div class="service-info">
            <h4>${service.name}</h4>
            <p>${service.description}</p>
            <div class="service-features">
                <h5>Features:</h5>
                <ul>
                    ${service.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                    ${service.features.length > 3 ? `<li style="color: #999;">+${service.features.length - 3} more features</li>` : ''}
                </ul>
            </div>
            <div class="service-footer">
                <div class="service-price">Starting from ${formatPrice(price, currentCurrency)}</div>
                <button class="book-service" onclick="bookService('${service.id}')">Book Now</button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    
    // Show brief feedback
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Added';
    button.style.background = '#28a745';
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#ff6b35';
    }, 1000);
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    updateCartModal();
}

// Update cart modal
function updateCartModal() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Your cart is empty</div>';
        cartTotal.textContent = 'Total: ₦0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.prices[currentCurrency] * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.prices[currentCurrency], currentCurrency)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})" style="margin-left: 15px;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `Total: ${formatPrice(total, currentCurrency)}`;
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Open cart modal
function openCart() {
    cartModal.style.display = 'block';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Book service
function bookService(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;
    
    // Update booking modal with service details
    const modalHeader = bookingModal.querySelector('.modal-header h3');
    modalHeader.textContent = `Book ${service.name}`;
    
    bookingModal.style.display = 'block';
}

// Close booking modal
function closeBookingModal() {
    bookingModal.style.display = 'none';
    bookingForm.reset();
}

// Handle booking form submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    // In a real application, you would send this data to your backend
    alert('Booking request submitted! We will contact you shortly at 09013486102');
    closeBookingModal();
}

// Clear filters
function clearFilters() {
    categoryFilter.value = 'all';
    sortFilter.value = 'name';
    searchInput.value = '';
    filteredProducts = [...products];
    displayProducts();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});