import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiX } from "react-icons/hi";
import { programs } from "../../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Programs = () => {
  const cardsRef = useRef([]);
  const modalRef = useRef(null);

  const [activeCard, setActiveCard] = useState(null);

  /* ---------------- Open modal ---------------- */
  const openCard = (program) => {
    setActiveCard(program);
  };

  /* ---------------- Close modal ---------------- */
  const closeCard = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.96,
      duration: 0.25,
      ease: "power3.in",
      onComplete: () => setActiveCard(null),
    });
  };

 
  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";
  }, [activeCard]);

  
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeCard();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeCard]);

useGSAP(() => {
  gsap.from(cardsRef.current, {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",

    scrollTrigger: {
      trigger: cardsRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}, []);



  
  useGSAP(() => {
    if (activeCard && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [activeCard]);

  return (
    <section className="relative w-full">
    
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/img/badge2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 py-16">
          {/* Header */}
          <div className="text-center text-white mb-12 space-y-3">
            <h2 className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Our Programs
            </h2>
            <p className="text-3xl md:text-4xl font-bold">
              Find the one for you
            </p>
          </div>

          {/* Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {programs.map((program, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => openCard(program)}
                className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm md:text-base">
                  {program.title}
                </div>
              </div>
            ))}
          </div>

          {/* ---------------- MODAL ---------------- */}
          {activeCard && (
            <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
              <div
                ref={modalRef}
                className="bg-neutral-900 text-white max-w-4xl w-full h-[420px] rounded-xl overflow-hidden grid grid-cols-2 "
              >
                {/* Image LEFT */}
                <div className="relative h-[420px] md:h-full">
                  <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <button
                    onClick={closeCard}
                    className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full hover:text-black  text-white flex items-center justify-center  hover:cursor-pointer hover:scale-105 active:scale-95 transition"
                  >
                    <HiX className="w-8 h-8 " />
                  </button>

                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content RIGHT */}
                <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {activeCard.title}
                  </h3>

                  <p className="text-neutral-300 leading-relaxed">
                    {activeCard.synopsis}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* ---------------- END MODAL ---------------- */}
        </div>
      </div>
    </section>
  );
};

export default Programs;
