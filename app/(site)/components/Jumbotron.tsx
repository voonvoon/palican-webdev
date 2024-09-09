'use client'

import Typewriter from 'typewriter-effect';

const Jumbotron = ({text}:any) => (
    <Typewriter 
        options={{
            strings: text,
            autoStart: true,
            loop: true,
        }}
    />
);

export default Jumbotron;