import Image from "next/image";
// import HeaderFrame from "@/components/header-frame";
import Login from "@/components/Login/login"; // import Loin from "../components/loin";
const LoginPageDesign = () => {
  return (
    <section className="relative w-full max-h-screen flex flex-col  bg-gray-50 overflow-hidden">
      <Login />
    </section>
  );
};

export default LoginPageDesign;

{
  /* <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[473.8px]  flex flex-row items-end justify-start pt-[10.399999999999864px] pb-[14.699999999999818px] pr-10 pl-6 gap-[33.6px] max-w-full z-[1] ">
              <div className="h-[156.8px] w-[473.8px] relative rounded-xl bg-white [backdrop-filter:blur(20px)] box-border hidden max-w-full border-[2px] border-dashed border-dark" />
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3.300000000000182px] box-border min-w-[116.09999999999992px] mq450:flex-1">
                <Image
                  className="w-[116.1px] h-[115.3px] relative z-[1] mq450:self-stretch mq450:w-auto"
                  loading="lazy"
                  alt=""
                  src="/group-6.svg"
                  width={115.3}
                  height={116.1}
                />
              </div>
            </div>
          </div> */
}
