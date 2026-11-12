import { FiClock, FiGift, FiPackage, FiRefreshCw } from "react-icons/fi";

export const logo = "public/images/logo/freshcart-logo.svg";

export const departments = [
  "Dairy, Bread & Eggs",
  "Snacks & Munchies",
  "Fruits & Vegetables",
  "Cold Drinks & Juices",
  "Breakfast & Instant Food",
  "Bakery & Biscuits",
  "Chicken, Meat & Fish",
];

export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Dropdown Menu",
    to: "#",
    children: [
      { label: "Dropdown Link", to: "#" },
      { label: "Dropdown Link", to: "#" },
      { label: "Dropdown Link", to: "#" },
      { label: "Dropdown Link", to: "#" },
    ],
  },
  { label: "Mega menu", to: "#" },
  { label: "Dashboard", to: "#" },
];


export const heroSlides = [
  {
    id: 1,
    badge: "Opening Sale Discount 50%",
    title: "SuperMarket For Fresh Grocery",
    text: "Introduced a new model for online grocery shopping and convenient home delivery.",
    image: "public/images/slider/slide-1.jpg",
  },
  {
    id: 2,
    badge: "Free Shipping - orders over $100",
    title: "Free Shipping on orders over $100",
    text: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    image: "public/images/slider/slider-2.jpg",
  },
];

export const featuredCategories = [
  {
    id: 1,
    name: "Dairy, Bread & Eggs",
    image: "public/images/category/category-dairy-bread-eggs.jpg"
  },
  {
    id: 2,
    name: "Snack & Munchies",
    image: "public/images/category/category-snack-munchies.jpg"
  },
  {
    id: 3, name: "Bakery & Biscuits",
    image: "public/images/category/category-bakery-biscuits.jpg"
  },
  {
    id: 4,
    name: "Instant Food",
    image: "public/images/category/category-instant-food.jpg"
  },
  {
    id: 5,
    name: "Tea, Coffee & Drinks",
    image: "public/images/category/category-tea-coffee-drinks.jpg"
  },
  {
    id: 6,
    name: "Atta, Rice & Dal",
    image: "public/images/category/category-atta-rice-dal.jpg"
  },
  {
    id: 7,
    name: "Baby Care",
    image: "public/images/category/category-baby-care.jpg"
  },
  {
    id: 8,
    name: "Chicken, Meat & Fish",
    image: "public/images/category/category-chicken-meat-fish.jpg"
  },
  {
    id: 9,
    name: "Cleaning Essentials",
    image: "public/images/category/category-cleaning-essentials.jpg"
  },
  {
    id: 10,
    name: "Pet Care",
    image: "public/images/category/category-pet-care.jpg"
  },
];

export const promoBanners = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    text: "Get Upto 30% Off",
    image: "public/images/banner/grocery-banner.png",
    color: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Freshly Baked Buns",
    text: "Get Upto 25% Off",
    image: "public/images/banner/grocery-banner-2.jpg",
    color: "bg-yellow-100",
  },
];


export const popularProducts = [
  {
    id: 1,
    title: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies", rating: 4.5, reviews: 149, price: 18, oldPrice: 24, badge: "Sale",
    image: "public/images/products/product-img-1.jpg"
  },
  {
    id: 2,
    title: "NutriChoice Digestive",
    category: "Bakery & Biscuits", rating: 4.5, reviews: 25, price: 24,
    image: "public/images/products/product-img-2.jpg"
  },
  {
    id: 3, title: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits", rating: 5, reviews: 469, price: 32, oldPrice: 35,
    image: "public/images/products/product-img-3.jpg"
  },
  {
    id: 4,
    title: "Onion Flavour Potato",
    category: "Snack & Munchies", rating: 3.5, reviews: 456, price: 3, oldPrice: 5, badge: "Hot",
    image: "public/images/products/product-img-4.jpg"
  },
  {
    id: 5,
    title: "Salted Instant Popcorn",
    category: "Instant Food", rating: 4.5, reviews: 39, price: 13, oldPrice: 18,
    image: "public/images/products/product-img-5.jpg"
  },
  {
    id: 6,
    title: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs", rating: 4.5, reviews: 189, price: 18, oldPrice: 24, badge: "Sale",
    image: "public/images/products/product-img-6.jpg"
  },
  {
    id: 7, title: "Britannia Cheese Slices",
    category: "Dairy, Bread & Eggs", rating: 5, reviews: 345, price: 24,
    image: "public/images/products/product-img-7.jpg"
  },
  {
    id: 8,
    title: "Kellogg's Original Cereals",
    category: "Instant Food", rating: 4, reviews: 90, price: 32, oldPrice: 35,
    image: "public/images/products/product-img-8.jpg"
  },
  {
    id: 9,
    title: "Slurrp Millet Chocolate",
    category: "Snack & Munchies", rating: 4.5, reviews: 90, price: 3, oldPrice: 5,
    image: "public/images/products/product-img-9.jpg"
  },
  {
    id: 10, title: "Amul Butter - 500 g", category: "Dairy, Bread & Eggs", rating: 4.5, reviews: 90, price: 13, oldPrice: 18,
    image: "public/images/products/product-img-10.jpg"
  },
];

export const dailyBestSells = {
  title: "100% Organic Coffee Beans.",
  text: "Get the best deal before close.",
  banner: "public/images/banner/banner-deal.jpg",
  products: [
    {
      id: 11,
      title: "Roast Ground Coffee",
      category: "Tea, Coffee & Drinks", rating: 4.5, price: 13, oldPrice: 18,
      image: "public/images/products/product-img-11.jpg"
    },
    {
      id: 12,
      title: "Crushed Tomatoes",
      category: "Fruits & Vegetables", rating: 4.5, price: 13, oldPrice: 18,
      image: "public/images/products/product-img-12.jpg"
    },
    {
      id: 13,
      title: "Golden Pineapple",
      category: "Fruits & Vegetables", rating: 4.5, price: 13, oldPrice: 18,
      image: "public/images/products/product-img-13.jpg"
    },
  ],
};


export const features = [
  {
    id: 1,
    icon: FiClock,
    title: "10 minute grocery now",
    text: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    id: 2,
    icon: FiGift,
    title: "Best Prices & Offers",
    text: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
  },
  {
    id: 3,
    icon: FiPackage,
    title: "Wide Assortment",
    text: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    id: 4,
    icon: FiRefreshCw,
    title: "Easy Returns",
    text: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
  },
];


export const footerCategories = [
  "Vegetables & Fruits",
  "Breakfast & instant food",
  "Bakery & Biscuits",
  "Atta, rice & dal",
  "Sauces & spreads",
  "Organic & gourmet",
  "Baby care",
  "Cleaning essentials",
  "Personal care",
  "Dairy, bread & eggs",
  "Cold drinks & juices",
  "Tea, coffee & drinks",
  "Masala, oil & more",
  "Chicken, meat & fish",
  "Paan corner",
  "Pharma & wellness",
  "Home & office",
  "Pet care",
];

export const footerLinks = [
  {
    title: "Get to know us",
    links: ["Company", "About", "Blog", "Help Center", "Our Value"]
  },
  {
    title: "For Consumers",
    links: ["Payments", "Shipping", "Product Returns", "FAQ", "Shop Checkout"]
  },
  {
    title: "Become a Shopper",
    links: ["Shopper Opportunities", "Become a Shopper", "Earnings", "Ideas & Guides", "New Retailers"]
  },
  {
    title: "Freshcart programs",
    links: ["Freshcart programs", "Gift Cards", "Promos & Coupons", "Freshcart Ads", "Careers"]
  }
];

export const paymentPartners = [
  {
    id: 1,
    name: "Amazon Pay",
    image: "public/images/payment/amazonpay.svg"
  },
  {
    id: 2,
    name: "American Express",
    image: "public/images/payment/american-express.svg"
  },
  {
    id: 3,
    name: "Mastercard",
    image: "public/images/payment/mastercard.svg"
  },
  {
    id: 4,
    name: "PayPal",
    image: "public/images/payment/paypal.svg"
  },
  {
    id: 5,
    name: "Visa",
    image: "public/images/payment/visa.svg"
  },
];

export const appButtons = [
  {
    id: 1,
    name: "App Store",
    image: "public/images/appbutton/appstore-btn.svg"
  },

  {
    id: 2,
    name: "Google Play",
    image: "public/images/appbutton/googleplay-btn.svg"
  },
];
