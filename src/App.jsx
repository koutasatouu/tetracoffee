import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, MapPin, ChevronRight } from "lucide-react";
import BlurText from "./components/BlurText";
import BorderGlow from "./components/BorderGlow";
import CardNav from "./components/CardNav";
import TextMenuReader from "./components/TextMenuReader";
import ColorBends from "./components/ColorBends";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

// --- KOMPONEN LOGO TETRA ---
const TetraLogo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="18" />
    <circle cx="18" cy="50" r="12" />
    <circle cx="82" cy="50" r="12" />
    <circle cx="50" cy="18" r="12" />
    <circle cx="50" cy="82" r="12" />
    <rect x="18" y="44" width="64" height="12" rx="6" />
    <rect x="44" y="18" width="12" height="64" rx="6" />
  </svg>
);

// --- DATA MENU DINAMIS DENGAN INGREDIENTS ---
const menuData = {
  coffee: [
    {
      name: "Dirty Latte",
      desc: "Artistic, layered coffee drink made by slowly pouring a hot, bold shot of espresso (or ristretto) over chilled milk without ice.",
      price: "31k",
      img: "/img/dirtylatte.webp",
      ingredients: ["..."],
    },
    {
      name: "Cold Brew Terranova",
      desc: "A smooth, rich, and refreshing cold brew coffee made with our signature Terranova blend.",
      price: "29k",
      img: "/img/coldbrewterranova.webp",
      ingredients: ["Magic Milk", "Signature Espresso", "Liquid Brown Sugar"],
    },
    {
      name: "Latte / Cappucino",
      desc: "Espresso based with steamed milk. Tastes like chocolate wafers.",
      price: "26k - 30k",
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Terranova House Blend Espresso",
        "Perfectly Steamed Milk",
        "Microfoam (Cappuccino)",
        "Notes: Chocolate Wafers",
      ],
    },
    {
      name: "Es Kopi Regal",
      desc: "No. 1 eskopi regal in Indonesia. Topped with famous regal biscuit.",
      price: "28k",
      img: "https://coffeeland.co.id/wp-content/uploads/2019/08/66704453_1406772666142147_5969864300346020653_n-1.jpg",
      ingredients: [
        "Espresso",
        "Slow Mixed Milk",
        "Vanilla Extract & Whip Cream",
        "Classic Regal Biscuit Topping",
      ],
    },
    {
      name: "Es Kopi Biscoff",
      desc: "Magic milk, espresso magic, topped with famous biscuit lotus biscoff.",
      price: "27k",
      img: "https://i0.wp.com/yesmooretea.com/wp-content/uploads/2020/07/Tea-Leaves-Boba-Kit-796x1024.jpg?resize=796%2C1024&ssl=1",
      ingredients: [
        "Magic Milk",
        "Magic Espresso",
        "Lotus Biscoff Biscuit & Spread",
      ],
    },
    {
      name: "Barista Flight",
      desc: "A tasting journey: Espresso, Hot Cappucino/Latte, and Filter Coffee.",
      price: "58k",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Single Shot Espresso",
        "Hot Cappucino / Latte",
        "Filter Coffee of the Day",
      ],
    },
    {
      name: "Es Kopi Rum",
      desc: "Magic milk, magic espresso, and rum drops.",
      price: "28k",
      img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1591182744/mgdo9iiap8wve5zwuacp.jpg",
      ingredients: [
        "Magic Milk",
        "Magic Espresso",
        "Signature Rum Drops (Halal/Syrup)",
      ],
    },
    {
      name: "Americano",
      desc: "Classic black coffee with our signature house blend.",
      price: "24k - 26k",
      img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Terranova House Blend Espresso",
        "Hot / Ice Filtered Water",
      ],
    },
  ],
  mocktails: [
    {
      name: "Black and Yellow",
      desc: "Espresso, lemon cuts, magic soda.",
      price: "32k",
      img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Fresh Espresso Shot",
        "Fresh Lemon Cuts",
        "Magic Soda Water",
        "Refreshing Kick Profile",
      ],
    },
    {
      name: "Tropical Paradise",
      desc: "Mixed tropical fruit and overnight coldbrew.",
      price: "33k",
      img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Overnight Coldbrew",
        "Mixed Tropical Fruit Extract",
        "Balanced Sour & Sweet",
      ],
    },
    {
      name: "Lavender Punch",
      desc: "Overnight coldbrew, lavender extract, lime, honey.",
      price: "33k",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Overnight Coldbrew",
        "Floral Lavender Extract",
        "Fresh Lime Squeeze",
        "Pure Honey",
      ],
    },
    {
      name: "Sunset Blush",
      desc: "Orange juice, lychee extract, coldbrew with aromatic cream rose.",
      price: "35k",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Overnight Coldbrew",
        "Orange Juice & Lychee Extract",
        "Aromatic Cream Rose Topping",
      ],
    },
    {
      name: "Ice Rose Americano",
      desc: "Espresso, rose extract, and ice cubes.",
      price: "36k",
      img: "/img/iceroseamericano.webp",
      ingredients: [
        "Premium Chocolate",
        "Cherry & Brown Spice",
        "Coconut Protein Cream",
      ],
    },
    {
      name: "Fireball",
      desc: "Black tea with tabasco drops, indonesian spice, and tropical fruit hint.",
      price: "26k",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Black Tea Base",
        "Tabasco Drops",
        "Indonesian Spices",
        "Tropical Fruit Hint",
      ],
    },
    {
      name: "Pinacolada",
      desc: "Coldbrew, coconut, pineapple, honey topped with cream coconut flakes.",
      price: "32k",
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Overnight Coldbrew",
        "Pineapple & Coconut Blend",
        "Honey Sweetener",
        "Cream & Coconut Flakes Topping",
      ],
    },
  ],
  mains: [
    {
      name: "Crusted Salmon",
      desc: "Served with mixed greens, mashed potato and lemon butter sauce.",
      price: "95k",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Premium Salmon Filet with Herb Crust",
        "Creamy Mashed Potato",
        "Mixed Greens & Grilled Tomatoes",
        "Zesty Lemon Butter Sauce",
      ],
    },
    {
      name: "Ribs & Macaroni",
      desc: "Creamy Macaroni and BBQ Ribs.",
      price: "80k",
      img: "https://cdn.sunbasket.com/92bb6f5d-67a4-4faa-8ddb-a0d0174f1a8f.jpg",
      ingredients: [
        "Slow-cooked Beef Ribs",
        "Signature BBQ Glaze",
        "Creamy Cheese Macaroni",
      ],
    },
    {
      name: "Japanese Omurice",
      desc: "Omelette rice with katsu and japanese curry.",
      price: "45k",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Fluffy Omelette Egg",
        "Crispy Chicken Katsu",
        "Authentic Japanese Curry",
        "Steamed Rice",
      ],
    },
    {
      name: "Saikoro Rice Bowl",
      desc: "Rice, Saikoro Beef Bbq Sauce and Scramble egg.",
      price: "48k",
      img: "https://www.lemon8-app.com/seo/image?item_id=7379447120291480065&index=0&sign=e62ce7a27c9b6ed55771e43947619a08",
      ingredients: [
        "Premium Saikoro Wagyu Beef cubes",
        "Sweet & Savory BBQ Sauce",
        "Soft Scrambled Egg",
        "Steamed Rice",
      ],
    },
    {
      name: "Nasi Iga Penyet",
      desc: "Beef short ribs with chilli and steamed rice.",
      price: "61k",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9UoLw_4tawfgjfwxBSfA1munKL77-92ZcFKnYkfnCdCIb0TUkeusC9EvApIYnasRRWQX3wfZ_WbtNQmiTkhOB6DXALmPdRRbNMOv-Ad8Eqz3sKQ9mHN1yDZW20-50OKGy5KoEQUc_O8o/s1350/214104328_128454656100190_1391601930047966614_n.jpg",
      ingredients: [
        "Fried Beef Short Ribs",
        "Traditional Chilli Paste (Sambal)",
        "Steamed Rice",
      ],
    },
    {
      name: "Sop Buntut Sagan",
      desc: "Authentic indonesian oxtail soup served with steamed rice.",
      price: "60k",
      img: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2020/03/shutterstock_341653109.jpg",
      ingredients: [
        "Authentic Indonesian Oxtail Soup",
        "Carrots & Potatoes",
        "Steamed Rice",
      ],
    },
    {
      name: "Parmigiana Fettucini",
      desc: "Fettucini pasta, buttered chicken with pomodoro sauce and mozarella.",
      price: "43k",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Fettucini Pasta",
        "Fried Buttered Chicken",
        "Pomodoro Sauce & Mozzarella Cheese",
      ],
    },
    {
      name: "Wagyu Sirloin",
      desc: "Australian Wagyu Sirloin (Marb 2-3) 140gr with mashed potato.",
      price: "96k",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Australian Wagyu Sirloin (Marb 2-3) 140gr",
        "Mixed Greens & Grilled Tomatoes",
        "Mashed Potato",
        "Beef Au Jus",
      ],
    },
  ],
  snacks: [
    {
      name: "Terra Mix Platter",
      desc: "Assorted fried items: onion rings, calamary, wonton, and potato wedges.",
      price: "35k",
      img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Crispy Onion Rings",
        "Fried Calamari Rings",
        "Chicken Wonton",
        "Potato Wedges",
        "Dipping Sauces",
      ],
    },
    {
      name: "Korean Spicy Wings",
      desc: "Korean Spicy chicken wings with cheese sauce.",
      price: "30k",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Deep-fried Chicken Wings",
        "Spicy Gochujang Glaze",
        "Melted Cheese Sauce Dip",
      ],
    },
    {
      name: "Caesar Salad Roll",
      desc: "Classic caesar salad rolled with tortilla sheet.",
      price: "48k",
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=800",
      ingredients: ["Classic Caesar Salad", "Tortilla Sheet Wrap"],
    },
    {
      name: "Cilok Mentai",
      desc: "Traditional cilok with spicy peanut and mentai sauce.",
      price: "26k",
      img: "https://img-global.cpcdn.com/recipes/d2a144307d3d55e9/680x781cq80/cilok-mentai-foto-resep-utama.jpg",
      ingredients: [
        "Chewy Tapioca Balls (Cilok)",
        "Spicy Peanut Sauce",
        "Torched Mentai Mayo",
      ],
    },
    {
      name: "Tomato Bruchetta",
      desc: "French Baguette with salsa and Cheese.",
      price: "28k",
      img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800",
      ingredients: ["French Baguette", "Tomato Salsa", "Melted Cheese"],
    },
    {
      name: "Vietnamese Roll",
      desc: "Lumpia Salad with sweet chilli sauce.",
      price: "28k",
      img: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&q=80&w=800",
      ingredients: ["Lumpia Salad Wraps", "Sweet Chilli Sauce"],
    },
    {
      name: "Banana Fritter",
      desc: "Fried Banana with Caramelized Brown Sugar.",
      price: "20k",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",
      ingredients: ["Fried Banana", "Caramelized Brown Sugar"],
    },
    {
      name: "Molten Lava Cake",
      desc: "Lava cake serve with strawberry jam, granola crumb & ice cream.",
      price: "48k",
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
      ingredients: [
        "Chocolate Lava Cake",
        "Strawberry Jam",
        "Peanut Granola Crumb",
        "Vanilla Ice Cream",
      ],
    },
  ],
};

const navItems = [
  {
    label: "Explore",
    bgColor: "#111111",
    textColor: "#ffffff",
    links: [
      { label: "Our Story", href: "#story", ariaLabel: "Our Story" },
      { label: "Curated Menu", href: "#menu", ariaLabel: "Menu" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#151515",
    textColor: "#ffffff",
    links: [
      { label: "Contact Us", href: "#contact", ariaLabel: "Contact Us" },
      { label: "Instagram", href: "#", ariaLabel: "Instagram" },
    ],
  },
  {
    label: "Homes",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
    links: [
      { label: "Yogyakarta", href: "#contact", ariaLabel: "Yogyakarta" },
      {
        label: "Find More",
        href: "#contact",
        ariaLabel: "Find More Locations",
      },
    ],
  },
];

export default function App() {
  const [appState, setAppState] = useState("loading");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("coffee");
  const [scrolled, setScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedMenuItem(null);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setAppState("fading");
    }, 2000);

    const readyTimer = setTimeout(() => {
      setAppState("ready");
    }, 2800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white overflow-x-hidden">
      {/* LOADING SCREEN CONTAINER */}
      {appState !== "ready" && (
        <div
          className={`fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col items-center justify-center transition-opacity duration-800 ease-in-out ${
            appState === "fading"
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <TetraLogo className="w-20 h-20 text-white mb-6 animate-pulse" />
            <h1 className="text-xl font-light tracking-[0.4em] text-white">
              TETRA
            </h1>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <CardNav
        className={`transition-all duration-1000 delay-500 ${
          appState === "ready"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-12"
        }`}
        logo={
          <div className="flex items-center gap-2 text-white">
            <TetraLogo className="w-6 h-6" />
            <span className="font-semibold tracking-widest text-md">TETRA</span>
          </div>
        }
        items={navItems}
        baseColor="#0a0a0a"
        menuColor="#ffffff"
        buttonBgColor="#ffffff"
        buttonTextColor="#000000"
        ctaText="PARTNERSHIP"
        onCtaClick={(e) => scrollToSection(e, "contact")}
      />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <ColorBends
            colors={["#f7a76f"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
            color="#f7a76f"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-20 flex flex-col items-center">
          <p
            className={`text-zinc-400 tracking-[0.4em] text-xs md:text-sm uppercase transition-all duration-1000 delay-300 ${appState === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Specialty Coffee & Comfort Food
          </p>

          <div className="min-h-[140px] md:min-h-[160px] flex items-center justify-center my-4">
            {appState === "ready" && (
              <BlurText
                text="Your Second Home."
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-white font-semibold justify-center"
              />
            )}
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${appState === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, "menu")}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium tracking-wider hover:bg-zinc-200 transition-colors"
            >
              EXPLORE MENU <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* THE STORY (ABOUT US) */}
      <section
        id="story"
        className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 w-full">
            <FadeInSection>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=800"
                  alt="Coffee Pouring"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeInSection>
          </div>

          <div className="md:w-1/2 w-full">
            <FadeInSection>
              <BorderGlow
                backgroundColor="#0d0d0d"
                glowColor="0 0 100"
                colors={["#ffffff", "#a1a1aa", "#3f3f46"]}
                animated={true}
                className="p-8 md:p-10"
              >
                <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
                  The Blend.
                </h2>
                <div className="w-12 h-0.5 bg-zinc-700 mb-8"></div>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                  Terranova is our basic house-blend that we created to give our
                  customer something classic, but modern coffee. A coffee that
                  is not too strong but still have enough body to satisfy the
                  mouth.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                  A coffee that sweet but also balanced, hence we choose this
                  particular coffee blend consisted of 70% Arabica Brazil with
                  natural process and 30% Arabica Papandayan with wash process.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="border border-zinc-800 px-4 py-2 rounded-full text-xs tracking-widest text-zinc-500">
                    ORANGE
                  </span>
                  <span className="border border-zinc-800 px-4 py-2 rounded-full text-xs tracking-widest text-zinc-500">
                    CHOCOLATE
                  </span>
                  <span className="border border-zinc-800 px-4 py-2 rounded-full text-xs tracking-widest text-zinc-500">
                    NUTTY
                  </span>
                </div>
              </BorderGlow>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">
                Curated Selections
              </h2>
            </div>

            <div className="flex justify-center gap-6 md:gap-12 mb-16 overflow-x-auto pb-4 hide-scrollbar">
              {Object.keys(menuData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`text-sm md:text-base tracking-[0.2em] uppercase pb-2 whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white border-b-2 border-white"
                      : "text-zinc-600 border-b-2 border-transparent hover:text-zinc-400"
                  }`}
                >
                  {tab === "mains" ? "Main Course" : tab}
                </button>
              ))}
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700">
            {menuData[activeTab].slice(0, visibleCount).map((item, index) => (
              <FadeInSection key={`${activeTab}-${index}`}>
                <BorderGlow
                  backgroundColor="#111111"
                  glowColor="0 0 100"
                  colors={["#ffffff", "#a1a1aa", "#3f3f46"]}
                  borderRadius={24}
                  animated={false}
                  className="h-full"
                >
                  <div
                    className="group flex flex-col h-full rounded-[24px] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedMenuItem(item)}
                  >
                    <div className="h-48 md:h-auto md:aspect-[4/3] overflow-hidden relative shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold tracking-wider z-10 shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex-1 flex flex-col relative bg-[#111111] z-10">
                      <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                        {item.desc}
                      </p>
                      <div className="mt-6 flex items-center text-xs tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                        VIEW DETAILS <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </FadeInSection>
            ))}
          </div>

          {menuData[activeTab].length > 6 && (
            <FadeInSection>
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() =>
                    setVisibleCount((prev) =>
                      prev === 6 ? menuData[activeTab].length : 6,
                    )
                  }
                  className="border border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:bg-[#111] px-8 py-3 rounded-full text-xs font-medium tracking-[0.2em] uppercase transition-all"
                >
                  {visibleCount === 6 ? "SHOW MORE" : "SHOW LESS"}
                </button>
              </div>
            </FadeInSection>
          )}
        </div>
      </section>

      {/* DIGITAL FLIPBOOK MENU SECTION */}
      {/* <section
        id="digital-menu"
        className="py-24 bg-[#0a0a0a] border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12"> */}
      {/* <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">
                The Menu Book
              </h2>
              <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">
                A Reading Experience
              </p>
            </div>
            <TextMenuReader />
          </FadeInSection> */}
      {/* </div>
      </section> */}

      {/* CONTACT / LOCATIONS SECTION */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900"
      >
        <FadeInSection>
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">
                Connect With Us
              </h2>
              <form className="flex flex-col gap-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
                <textarea
                  placeholder="How can we help?"
                  rows="3"
                  className="bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
                <button
                  type="button"
                  className="w-fit border border-zinc-700 px-8 py-3 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition-all mt-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="md:w-1/3 w-full flex flex-col justify-center">
              <h3 className="text-lg tracking-widest text-zinc-400 mb-6">
                OUR LOCATIONS
              </h3>
              <div className="flex flex-col gap-4 text-sm tracking-widest text-zinc-300 mb-12">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-zinc-600" />
                    <a
                      href="https://maps.app.goo.gl/YbxJY9F7RL7iPRxUA"
                      target="_blank"
                    >
                      Yogyakarta
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <a
                    href="https://maps.app.goo.gl/Mp4qQ2Jk2UPBgChW6"
                    target="_blank"
                  >
                    Cirebon
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <a
                    href="https://maps.app.goo.gl/9QhnADFEfwjFb8HH9"
                    target="_blank"
                  >
                    Solo
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <a
                    href="https://maps.app.goo.gl/LLVf1EZM8z9VzTvV6"
                    target="_blank"
                  >
                    Pekanbaru
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <a
                    href="https://maps.app.goo.gl/pYbqHsCrSsXexeXZ9"
                    target="_blank"
                  >
                    Surabaya
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <a
                    href="https://maps.app.goo.gl/AjfxqS47Xaa63phi6"
                    target="_blank"
                  >
                    Palembang
                  </a>
                </div>
              </div>

              <div className="text-zinc-500">
                <p className="text-xs tracking-[0.2em] mb-2 uppercase">
                  SOCIAL MEDIA
                </p>
                <a
                  href="https://www.instagram.com/tetracoffee_/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  <span className="text-sm tracking-widest block">
                    @tetracoffee_
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-xs tracking-[0.2em]">
        <p>
          &copy; {new Date().getFullYear()} TETRA COFFEE. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* KOMPONEN POP-UP MODAL UNTUK DETAIL MENU */}
      {selectedMenuItem && (
        <div
          className={`fixed inset-0 z-[150] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 ${isClosing ? "animate-[fadeOut_0.3s_ease-in_forwards]" : "animate-[fadeIn_0.3s_ease-out]"}`}
          onClick={closeModal}
        >
          <div
            className={`bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative ${isClosing ? "animate-[slideDown_0.3s_ease-in_forwards]" : "animate-[slideUp_0.4s_ease-out]"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-white hover:text-black p-2 rounded-full text-white transition-all z-20 backdrop-blur-md border border-zinc-700"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bagian Gambar (Kiri) */}
            <div className="md:w-1/2 h-56 md:h-auto relative">
              <img
                src={selectedMenuItem.img}
                alt={selectedMenuItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Bagian Detail Text (Kanan) */}
            <div className="md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="bg-zinc-900 text-zinc-300 text-[10px] md:text-xs font-bold tracking-widest px-3 py-1 rounded-full w-fit mb-4 uppercase border border-zinc-800">
                {activeTab === "coffee"
                  ? "Signature Craft"
                  : activeTab === "mocktails"
                    ? "Artisan Mocktail"
                    : "Chef Recommendation"}
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 tracking-wide text-white">
                {selectedMenuItem.name}
              </h3>
              <p className="text-lg md:text-xl font-medium text-zinc-400 mb-6">
                {selectedMenuItem.price}
              </p>

              <div className="w-12 h-0.5 bg-zinc-700 mb-6"></div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {selectedMenuItem.desc}
              </p>

              {/* Dynamic Ingredients Section */}
              <div className="bg-[#111111] p-5 rounded-2xl border border-zinc-800/80">
                <h4 className="text-xs font-semibold tracking-widest text-zinc-500 mb-4 uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  {activeTab === "coffee"
                    ? "Taste Notes & Blend"
                    : activeTab === "mocktails"
                      ? "Key Ingredients"
                      : "Dish Components"}
                </h4>

                <ul className="text-sm text-zinc-300 space-y-3">
                  {selectedMenuItem.ingredients ? (
                    selectedMenuItem.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-zinc-600 mt-0.5">●</span>
                        <span>
                          {ing.includes(":") ? (
                            <>
                              <strong className="text-white font-medium">
                                {ing.split(":")[0]}:
                              </strong>
                              {ing.split(":")[1]}
                            </>
                          ) : (
                            ing
                          )}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-zinc-500 italic">
                      Resep spesifik sedang disiapkan oleh Chef kami.
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }  
        
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideDown {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(20px); opacity: 0; }
        }
      `,
        }}
      />
    </div>
  );
}
