import Image from "next/image";

const About = () => {
  return (
    <div className="pt-20 pb-20 flex flex-col items-center sm:space-y-4 p-6 bg-gray-100">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-4 text-center">About Me</h1>
          <h2 className="text-1xl mb-4 text-center">E-commerce Website Developer Malaysia</h2>
          <p className="text-gray-600 text-sm sm:text-base font-light mb-4 leading-relaxed">
            I am a full-stack web developer passionate about create ecommerce
            website and professional websites optimized for SEO. Specializing in
            Next.js, Node.js, and MongoDB, I help businesses build fast,
            scalable, and user-friendly online stores and websites tailored to
            their needs. With expertise in both front-end and back-end
            development, I deliver seamless solutions that drive growth and
            enhance user experience. I’m dedicated to helping clients achieve
            their digital goals with practical and innovative solutions.
          </p>
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="peter profile picture"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
