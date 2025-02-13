import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <h4 className="hero__subheading">Our mission:</h4>
      <h1 className="hero__heading">
        Provide photo graphers a space to share photos of the neighborhoods they
        cherish, <span className="hero__heading--italics">expressed in their unique style</span>
      </h1>
    </section>
  );
}

export default Hero;
