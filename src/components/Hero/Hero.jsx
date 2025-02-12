import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <h3 className="hero__subheading">Our mission:</h3>
      <h2 className="hero__main">
        Provide photo graphers a space to share photos of the neighborhoods they
        cherish, <span className="hero__main--italics">expressed in their unique style</span>
      </h2>
    </section>
  );
}

export default Hero;
