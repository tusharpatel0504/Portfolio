import { words } from "../constant/index";
import Button from "../component/button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* Hero Content Layout */}
      <div className="hero-layout flex flex-col md:flex-row items-center justify-between relative z-20">
        {/* LEFT: Hero Text Content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5 py-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Tushar, a developer based in India with a passion for
              code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Work"
            />
          </div>
        </header>

        {/* RIGHT: Responsive Image */}
        <div className="flex justify-center items-center md:w-1/2 w-full px-5 md:px-0">
          <img
            src="/images/MyImg.png"
            alt="Tushar"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
