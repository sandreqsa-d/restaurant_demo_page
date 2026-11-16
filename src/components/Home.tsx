import Link from "next/link";
import Image from "next/image";

const miniMenuDishes = [
  {
    name: "Black Truffle Khinkali",
    desc: "Beef filling infused with black truffle, served in a rich bone broth.",
    price: "38₾",
    image: "/images/khinkali.webp",
  },
  {
    name: "pig mtsvadi",
    desc: "Premium lamb, pomegranate glaze, roasted root vegetables.",
    price: "52₾",
    image: "/images/mtsvadi.webp",
  },
  {
    name: "Pan-Seared Sea Bass",
    desc: "Saffron risotto, citrus beurre blanc, micro herbs.",
    price: "44₾",
    image: "/images/khinkali.webp",
  },
  {
    name: "Adjarian Khachapuri",
    desc: "Boat-shaped, hand-pulled cheese, farm egg, browned butter.",
    price: "28₾",
    image: "/images/khinkali.webp",
  },
  {
    name: "Mtsvadi Skewers",
    desc: "Charcoal-grilled pork, red onion, pomegranate molasses.",
    price: "32₾",
    image: "/images/khinkali.webp",
  },
];

export default function Home() {
  return (
    <>

      <section className="relative min-h-175 h-screen flex items-center overflow-hidden bg-[#2A1206]">
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/khinkali.webp"
            alt="Signature Georgian dish"
            fill
            priority
            className="object-cover w-full h-full opacity-50 brightness-[0.7] saturate-[1.1]"
          />
        </div>

        <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(42,18,6,0.3)_0%,rgba(42,18,6,0.85)_65%)]" />

        <div className="relative z-30 w-full max-w-350 mx-auto px-10 md:px-16 flex justify-end items-center">
          <div className="max-w-140 text-right">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.35em] text-[#E8874A] font-medium mb-6 border border-[rgba(232,135,74,0.3)] px-5 py-2">
              Modern Georgian Kitchen
            </span>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-serif font-bold text-[#F5ECD7] mb-6">
              Taste the <em className="italic text-[#C4621D]">Tradition</em>
            </h1>
            <p className="text-[#E8D5B5] text-base leading-[1.8] opacity-80 mb-10 font-light">
              Where centuries-old Georgian recipes meet contemporary craft. Every plate tells a story of fire, earth, and celebration.
            </p>
            <Link href="/menu">
              <button className="relative inline-flex items-center justify-center px-12 py-4 bg-[#C4621D] text-[#F5ECD7] uppercase tracking-[0.2em] text-[0.75rem] font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hover:bg-[#8B3E0F] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(196,98,29,0.4)] before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(245,236,215,0.15),transparent)] before:transition-all before:duration-500 hover:before:left-full">
                Explore the Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 px-8 bg-[#F5ECD7] text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block text-[0.65rem] uppercase tracking-[0.35em] text-[#C4621D] font-semibold mb-6">
            Our Story
          </span>
          <div className="mx-auto mb-6 h-0.5 w-12.5 bg-[#E8874A]" />
          <h2 className="text-4xl font-bold text-[#3B1F0E] mb-6">A Table Set with Love</h2>
          <p className="text-[#5C3318] text-base leading-[1.9] font-light mb-10">
            THIS was born from a simple belief — that the best meals are the ones shared. Rooted in the warmth of Georgian hospitality, we bring you dishes crafted from heritage recipes, locally sourced ingredients, and a genuine love for the craft.
          </p>
          <Link href="/about">
            <button className="relative inline-flex items-center justify-center px-10 py-3 border-2 border-[#3B1F0E] text-[#3B1F0E] uppercase tracking-[0.2em] text-[0.7rem] font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hover:text-[#F5ECD7] before:absolute before:inset-0 before:bg-[#3B1F0E] before:-translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0">
              <span className="relative z-10">Read Our Story</span>
            </button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#2A1206]">
        <div className="mx-auto max-w-275">
          <div className="text-center mb-16">
            <span className="inline-block text-[0.65rem] uppercase tracking-[0.35em] text-[#E8874A] font-semibold mb-4">
              From the Kitchen
            </span>
            <div className="mx-auto mb-4 h-0.5 w-12.5 bg-[#E8874A]" />
            <h2 className="text-3xl font-bold text-[#F5ECD7]">Signature Dishes</h2>
          </div>

          {miniMenuDishes.map((dish, i) => (
            <div
              className="flex flex-wrap items-center gap-8 py-7 border-b border-[rgba(232,213,181,0.08)] transition-all duration-300 hover:bg-[rgba(196,98,29,0.05)] hover:pl-4 rounded-sm"
              key={i}
            >
              <Image
                src={dish.image}
                alt={dish.name}
                width={70}
                height={70}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#C4621D] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-serif text-xl text-[#F5ECD7] font-semibold mb-1">{dish.name}</p>
                <p className="text-[#E8D5B5] text-sm opacity-70 font-light">{dish.desc}</p>
              </div>
              <span className="font-serif text-lg text-[#C4621D] font-bold shrink-0">{dish.price}</span>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}