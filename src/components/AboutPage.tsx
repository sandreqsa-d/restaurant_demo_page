import Image from "next/image";

const sections = [
  {
    tag: "The Beginning",
    title: "Born from Fire & Feast",
    text: "GELA started in a small Tbilisi courtyard in 2018, where friends gathered around an open flame. What began as weekend supras — traditional Georgian feasts — soon became a calling. We believed the city deserved a place where heritage recipes lived alongside modern craft.",
    image: "/images/mtsvadi.webp",
    reverse: false,
  },
  {
    tag: "Our Philosophy",
    title: "Ingredients Tell the Story",
    text: "Every dish begins with sourcing. We work directly with farmers in Kakheti, Svaneti, and Adjara. Our cheeses age in clay pots, our herbs are hand-foraged, and our wines come from family cellars with centuries of tradition. Nothing on our menu is accidental.",
    image: "/images/khinkali.webp",
    reverse: true,
  },
  {
    tag: "The Kitchen",
    title: "Where Old Meets Bold",
    text: "Head Chef Nino Macharashvili brings 15 years of international experience back to her roots. She treats every plate as a conversation between generations — grandmother's recipes refined with techniques from Lyon and Tokyo. The result is unmistakably Georgian, yet utterly surprising.",
    image: "/images/images.webp",
    reverse: false,
  },
  {
    tag: "The Space",
    title: "Designed for Gathering",
    text: (
      <>
        Our dining room is an ode to Georgian warmth. Reclaimed oak, hand-thrown
        ceramics, and soft candlelight create an atmosphere that invites you to
        stay. We designed <span className="underline">RESTAURANT</span> not as a
        restaurant, but as an extension of home — where strangers become friends
        over shared bread.
      </>
    ),
    image: "/images/sufra.webp",
    reverse: true,
  },

];

export default function AboutPage() {
  return (
    <>

      <div className="min-h-screen bg-[#F5ECD7] pt-25">
        <div className="text-center px-8 py-16">
          <span className="inline-block text-[0.65rem] uppercase tracking-[0.35em] text-[#C4621D] font-semibold mb-4">
            About RESTAURANT
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3B1F0E] mb-4">Our Story</h1>
          <p className="mx-auto max-w-xl text-[#5C3318] text-base md:text-lg opacity-70 leading-[1.8]">
            More than a restaurant — a place where food, family, and tradition sit together at the same table.
          </p>
        </div>

        {sections.map((section, i) => (
          <section
            key={i}
            className={`mx-auto max-w-300 px-8 py-12 flex flex-col gap-10 lg:flex-row ${section.reverse ? "lg:flex-row-reverse" : ""
              }`}
          >
            <div className="flex-1 min-w-0 rounded-3xl overflow-hidden relative after:absolute after:inset-0 after:rounded-3xl after:border after:border-[rgba(196,98,29,0.15)] pointer-events-none">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={360}
                className="w-full h-90 object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block text-[0.65rem] uppercase tracking-[0.35em] text-[#C4621D] font-semibold mb-4">
                {section.tag}
              </span>
              <h3 className="text-3xl font-serif font-semibold text-[#3B1F0E] mb-5 leading-tight">
                {section.title}
              </h3>
              <p className="text-[#5C3318] text-sm leading-[1.9] font-light">
                {section.text}
              </p>
            </div>
          </section>
        ))}

        <div className="h-20" />
      </div>

    </>
  );
}
