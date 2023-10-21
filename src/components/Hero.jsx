import React from "react";
import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CSM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            velit aliquam doloremque provident unde quisquam dignissimos
            laboriosam ratione, in molestias harum voluptatem, porro,
            consectetur consequuntur? Assumenda aliquam dolores quibusdam eum?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
