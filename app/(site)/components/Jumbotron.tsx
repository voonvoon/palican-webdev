"use client";

import Typewriter from "typewriter-effect";

const Jumbotron = ({ text }: any) => (
  <Typewriter
    options={{
      strings: text,
      autoStart: true,
      loop: true,
      delay: 50, // Speed of typing each character (lower value = faster)
      deleteSpeed: 10, // Speed of deleting each character (lower value = faster)
    }}
  />
);

export default Jumbotron;
