import check from "../assets/img/check.png";

function HeroSection() {
  return (
    <div className="my-12 sm:my-24">
      <div className="flex flex-col sm:flex-row justify-between items-center py-8 sm:py-20">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-[90px] leading-tight font-cosmic text-gradiant">
            $DHUB STAKING
          </h1>
          <h2 className="text-3xl sm:text-[63px] leading-tight font-cosmic">
            REVENUE SHARE CLAIM
          </h2>
          <p className="text-base sm:text-xl text-[#94A3B8] mt-4">
            Introducing Devhubs staking, where users can earn APY rewards and
            revenue <br />
            share in ETH
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-0">
          <div className="flex justify-start items-center gap-3 border border-slate-400/60 shadow-lg shadow-[#0A7CFF] rounded-md px-4 py-2">
            <img src={check} alt="" className="w-6" />
            <span className="text-sm sm:text-lg font-cosmic">
              EASY TO GET STARTED
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 border border-slate-400/60 shadow-lg shadow-[#0A7CFF] rounded-md px-4 py-2">
            <img src={check} alt="" className="w-6" />
            <span className="text-sm sm:text-lg font-cosmic">
              REVENUE SHARE
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 border border-slate-400/60 shadow-lg shadow-[#0A7CFF] rounded-md px-4 py-2">
            <img src={check} alt="" className="w-6" />
            <span className="text-sm sm:text-lg font-cosmic">
              SECURE AND TRANSPARENT
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 border border-slate-400/60 shadow-lg shadow-[#0A7CFF] rounded-md px-4 py-2">
            <img src={check} alt="" className="w-6" />
            <span className="text-sm sm:text-lg font-cosmic">
              SHARE AND EARN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
