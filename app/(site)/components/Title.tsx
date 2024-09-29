import ParticlesBackground from "../components/ParticlesBackground";
import Jumbotron from "../components/Jumbotron";

const Title = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold pt-16 pb-8 pl-8">
        <ParticlesBackground />
        Welcome to{" "}
        {/* <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
          Pelican Webdev
        </span> */}
        <span className=" logo-animation animate-fadeIn">Pelican Webdev</span>
      </h1>

      <h2 className="text-xl text-gray-500 pl-8 font-bold animate-fadeIn mb-8">
        {" "}
        E-commerce | website design | website developer malaysia
      </h2>

      <div className="text-base text-gray-600 pl-8 animate-fadeIn">
        <Jumbotron
          text={[
            "Freelance web designer...",
            "Specialize in developing ecommerce website design",
            "Website Design And Development Service",
          ]}
        />
      </div>

      <p className="text-sm text-gray-400 pl-8 animate-fadeIn">
        I specialize in developing custom ecommerce website design and offer
        freelance website design, ecommerce marketing, and full-stack
        development services. As a web site developers, I deliver tailored,
        professional websites to enhance online presence and drive results.
      </p>
      <h2 className="mt-12 font-bold text-gray-700 text-3xl ml-10">Web Development
      Works</h2>
    </>
  );
};

export default Title;
