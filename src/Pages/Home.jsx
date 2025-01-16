import React, { useEffect, useState } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000); // Adjust the interval to allow complete animation cycle

    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.5}s`;
    });

    return () => clearInterval(intervalId);
  }, []);

  const renderText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className={`letter ${isVisible ? 'show' : 'hide'}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <section className='py-2 bg-black flex flex-col items-center justify-center h-screen'>
        <img src="https://cdn4.vectorstock.com/i/1000x1000/32/78/white-web-design-and-front-end-development-icon-vector-36723278.jpg" className='w-[40px] rounded-lg' alt="logo" />
        <h2 className='text-white text-[40px] font-bold'>
          {renderText("Samrat Pandey")}
        </h2>
        <p className='text-gray-400 mt-4'>Welcome to my personal site</p>
        <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded'>Contact Me</button>
      </section>
    </>
  );
}

export default Home;
