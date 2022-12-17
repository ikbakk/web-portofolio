import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-content via-secondary to-accent"
      // style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" hero-content mt-40 max-w-8xl flex-col  lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="mask mask-squircle max-w-lg rounded-lg shadow-2xl"
        />
        <div className="">
          <article className="prose text-center text-2xl lg:text-left lg:text-5xl">
            <h1 className="font-syncopate font-bold uppercase text-white">
              Hi! I'm <br /> Muhammad Iqbal Firdaus
            </h1>
            <p className="max-w-5xl py-6 text-justify font-roboto-mono text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </article>
          <div className="flex justify-center py-10 font-syncopate lg:justify-start">
            <button className="p-10 text-5xl uppercase text-accent outline outline-4  outline-accent duration-300 hover:bg-accent hover:text-neutral hover:outline-neutral active:bg-accent-focus">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
