"use client";
import { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  desc: string;
  allergens: string[];
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Meat Filled Khinkali",
    category: "Mains",
    price: "2₾ a piece",
    desc: "beef & black pepper filling, bone broth dipping sauce.",
    allergens: ["Gluten", "Dairy"],
    image: "/images/khinkali_menu.webp",
  },
  {
    id: 2,
    name: "Herb-Crusted Lamb Chops",
    category: "Mains",
    price: "52₾",
    desc: "Pomegranate-glazed lamb, herb crust, roasted vegetables.",
    allergens: ["None"],
    image: "/images/hotCrustLamb.webp",
  },
  {
    id: 3,
    name: "Pan-Seared Sea Bass",
    category: "Seafood",
    price: "44₾",
    desc: "Saffron risotto, citrus beurre blanc, edible flowers.",
    allergens: ["Fish", "Dairy"],
    image: "/images/seaBass.webp",
  },
  {
    id: 4,
    name: "Adjarian Khachapuri",
    category: "Starters",
    price: "28₾",
    desc: "Boat-shaped cheese bread, farm egg, browned butter.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    image: "/images/awaruli.webp",
  },
  {
    id: 5,
    name: "Mtsvadi Skewers",
    category: "Mains",
    price: "32₾",
    desc: "Charcoal-grilled pork with red onion & pomegranate.",
    allergens: ["None"],
    image: "/images/mwvadi.webp",
  },
  {
    id: 6,
    name: "Lobio Crostini",
    category: "Starters",
    price: "18₾",
    desc: "Spiced red beans, walnut paste, crispy Georgian bread.",
    allergens: ["Gluten", "Nuts"],
    image: "/images/lobio.webp",
  },
  {
    id: 7,
    name: "Grilled Trout",
    category: "Seafood",
    price: "40₾",
    desc: "Whole mountain trout, tarragon butter, charred lemon.",
    allergens: ["Fish", "Dairy"],
    image: "/images/grilled.webp",
  },
  {
    id: 8,
    name: "Churchkhela Dessert",
    category: "Desserts",
    price: "14₾",
    desc: "Walnut & grape must, served with honeycomb ice cream.",
    allergens: ["Nuts", "Dairy"],
    image: "/images/churchxela.webp",
  },
  {
    id: 9,
    name: "Walnut Baklava",
    category: "Desserts",
    price: "16₾",
    desc: "Layers of phyllo, spiced walnuts, orange blossom honey.",
    allergens: ["Gluten", "Nuts"],
    image: "/images/faxlava.webp",
  },
  {
    id: 10,
    name: "Mushroom Pkhali",
    category: "Starters",
    price: "20₾",
    desc: "Wild mushroom & walnut balls with pomegranate seeds.",
    allergens: ["Nuts"],
    image: "/images/soko.webp",
  },
  {
    id: 11,
    name: "Saperavi-Braised Short Rib",
    category: "Mains",
    price: "48₾",
    desc: "Slow-cooked in red wine, creamy polenta, root slaw.",
    allergens: ["Dairy"],
    image: "/images/gvinisxorci.webp",
  },
  {
    id: 12,
    name: "Crème Brûlée",
    category: "Desserts",
    price: "15₾",
    desc: "Infused with tarragon and wild honey, torched to order.",
    allergens: ["Dairy", "Eggs"],
    image: "/images/creambrule.webp",
  },
  {
    id: 13,
    name: "Chocolate Strawberries",
    price: "18₾ / 6 pieces",
    category: "Desserts",
    desc: "fresh strawberries covered in milk chocolate",
    allergens: ["Dairy"],
    image: "/images/marwyvi.webp",
  }
];

const categories = ["All", "Starters", "Mains", "Seafood", "Desserts"];

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  const toggleItem = (id: number) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5ECD7] pt-25">
        <div className="text-center px-6 py-12">
          <span className="inline-block text-[0.65rem] uppercase tracking-[0.35em] text-[#C4621D] font-semibold mb-3">
            Curated Selection
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3B1F0E] mb-2">Our Menu</h1>
          <p className="text-[#5C3318] text-sm md:text-base opacity-70">
            Click or tap any dish to discover what&rsquo;s inside.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 px-6 pb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 border text-[0.7rem] uppercase tracking-[0.15em] font-semibold rounded-sm transition-all duration-300 ${
                active === cat
                  ? "border-[#C4621D] bg-[#C4621D] text-[#F5ECD7]"
                  : "border-[#D4C4A0] bg-transparent text-[#5C3318] hover:border-[#C4621D] hover:text-[#C4621D]"
              }`}
              onClick={() => {
                setActive(cat);
                setActiveItemId(null); 
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-325 gap-6 px-6 pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            const isOpen = activeItemId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 sm:h-85 lg:h-90"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  priority={index < 3}
                  className={`object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "scale-105" : ""
                  }`}
                />
                
                {/* Price Tag */}
                <span
                  className={`absolute top-4 right-4 z-20 rounded-sm bg-[#C4621D] px-3 py-1 text-sm font-serif font-bold text-[#F5ECD7] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {item.price}
                </span>

                {/* Main Content Overlay */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-end p-6 bg-linear-to-t from-[#2A1206]/95 via-[#2A1206]/60 to-transparent transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="font-serif text-xl text-[#F5ECD7] font-bold mb-2">
                    {item.name}
                  </p>
                  <p className="text-[#E8D5B5] text-sm leading-6 opacity-90 mb-3 font-light">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.allergens.map((a) => (
                      <span
                        key={a}
                        className="rounded-sm border border-[#C4621D]/40 bg-[#C4621D]/25 px-2 py-1 text-[0.6rem] uppercase tracking-wideset font-semibold text-[#E8874A]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

