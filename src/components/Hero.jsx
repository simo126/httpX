import Logo from "../assets/logo.png";
import Circle from "../components/shapes/Circle";

const Hero = () => {
  return (
    <div className="w-full bg-fachi  border-httpx border-b-4  h-64 flex justify-center items-center px-2 relative overflow-hidden">
      <img src={Logo} alt="httpXLOGO" height={100} width={100} />
      <h1 className="text-4xl sm:text-8xl px-4 text-httpx font-palanquin  font-bold">
        HttpX
      </h1>
      <div className="absolute sm:top-[-100px] sm:left-[-100px] top-[-120px] left-[-120px] ">
        <Circle radius={100} color="#458ded" />
      </div>
      <div className="absolute bottom-[-400px] right-[-400px] sm:right-[-200px] sm:bottom-[-200px]">
        <Circle radius={200} color="#458ded" />
      </div>
    </div>
  );
};

export default Hero;
