"use client";

function Project({ id, title, subtitle, imageSrc, index, gradient }) {
  return (
    <div
      className="h-screen sticky top-0 w-full overflow-hidden font-[archivo]"
      style={{ zIndex: index }}
    >
      {/* Image Background */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{ background: gradient }}
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
        <p className="text-lg  tracking-widest text-white/80 mb-8 font-medium">
          {id}
        </p>
        <h2 className="max-w-xl text-4xl md:text-6xl font-medium mb-4 leading-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-white/90 drop-shadow-sm">
          {subtitle}
        </p>
        <button className="bg-[#F8EDE3] text-[#8d493a] hover:bg-[#f7dac0] cursor-pointer px-6 py-3 rounded-md font-bold text-lg shadow-md hover:shadow-xl transition">
          View Project
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative">
      <Project
        id="01"
        title="Serene Urban Retreat"
        subtitle="Where modern comfort meets peaceful sophistication."
        imageSrc="/project/image01.png"
        index={0}
        gradient="linear-gradient(to top, rgba(164, 172, 134, 0.85), transparent)"
      />

      <Project
        id="02"
        title="Luxurious Coastal Living"
        subtitle="Bringing the beauty of the shore into your home."
        imageSrc="/project/image02.png"
        index={1}
        gradient="linear-gradient(to top, rgba(100, 0, 0, 0.6), transparent)"
      />

      <Project
        id="03"
        title="Modern Elegance in Every Room"
        subtitle="Redefining spaces with timeless style and innovation."
        imageSrc="/project/image03.png"
        index={2}
        gradient="linear-gradient(to top, rgba(65, 72, 51, 0.85), transparent)"
      />
    </div>
  );
}
