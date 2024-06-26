import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const OurProduct = () => {
  const [text] = useTypewriter({
    words: ["Intuitive HTTP Client", "Intuitive HTTP Client"],
    loop: {},
  });
  return (
    <div className="h-[200px] bg-white flex justify-center items-center dark:bg-[#181a1b]">
      <p className="lg:text-4xl md:text-3xl sm:text-2xl text-center p-6   dark:text-white">
        Experience seamless API testing and collaboration like never before with
        our <span className="text-httpx ">{text}</span>
        <Cursor cursorStyle="🚀" />
      </p>
    </div>
  );
};

export default OurProduct;
