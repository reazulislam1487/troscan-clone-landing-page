import React from "react";

const articles = [
  {
    date: "February 5, 2022",
    title: "The Art of Minimalist Interiors",
    subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    image:
      "https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg",
  },
  {
    date: "February 22, 2022",
    title: "Timeless Furniture Pieces Every Home Needs",
    subtitle: "Building a Home That Never Goes Out of Style",
    image:
      "https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg",
  },
  {
    date: "January 21, 2023",
    title: "Psychology in Interior Design",
    subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    image:
      "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
  },
];

const News = () => {
  return (
    <section id="news" className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between  items-start mb-12">
          <div>
            <span className="text-sm text-[#9a4f3f]">• News</span>
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#9a4f3f] mt-2 leading-snug">
                Stay Inspired with <br />
                Interior Trends
              </h2>
            </div>
          </div>
          <a
            href="#"
            className="bg-[#8D493A] hover:bg-[#a25c5c] text-[#F8EDE3] px-7 py-4 rounded-md font-medium text-md transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All News
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {articles.map((item, index) => (
            <div key={index}>
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <p className="text-sm text-[#9a4f3f] mb-1">• {item.date}</p>
              <h3 className="text-xl font-medium text-[#9a4f3f] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#9a4f3f]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
