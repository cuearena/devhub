import walletico from "../assets/img/wllet.png";

function CardSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mt-12 sm:mt-20">
      <div className="flex flex-col justify-between border border-white rounded-2xl w-full p-6 h-auto sm:h-[560px]">
        <div>
          <h3 className="text-2xl sm:text-5xl font-bold">Total Staked</h3>
          <h4 className="text-lg sm:text-2xl font-bold">
            18878573.851548 $DHUB
          </h4>
          <div className="mt-4 sm:mt-6 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm sm:text-base">
              <span>My Balance: 0</span>
              <span>Reward</span>
            </div>
            <div className="flex justify-between items-center text-sm sm:text-base">
              <span>My Balance: 0</span>
              <span>Dynamic</span>
            </div>
            <span className="text-sm sm:text-base">Locked Deadline: --</span>
            <span className="text-sm sm:text-base">Early Unstake Fee: 5%</span>
          </div>
          <hr className="w-full border-2 sm:border-4 rounded-md border-[#0038FF] my-4 sm:my-6" />
          <label
            htmlFor="range"
            className="border border-white rounded-md flex justify-between items-center px-2 sm:px-4"
          >
            <input
              type="number"
              name="range"
              id="range"
              placeholder="0.00"
              className="bg-transparent w-full text-base py-1  focus:outline-none remove-input-arrows"
            />
            <button className="bg-white rounded text-slate-950 px-2  text-sm sm:text-base">
              Max
            </button>
          </label>
          <div className="mt-4 sm:mt-6 flex justify-between items-center">
            <button className="flex justify-center items-center gap-2 font-cosmic text-sm sm:text-base bg-[#0038FF] shadow-lg shadow-slate-700 text-white font-bold py-2 sm:py-3 rounded-lg w-full">
              Wallet connect
              <img src={walletico} alt="metamask" className="w-6 sm:w-8" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col justify-between border border-white rounded-2xl w-full p-6 h-auto sm:h-[560px]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">ETH Rewards</h3>
            <label
              htmlFor="eth-claim"
              className="border border-white rounded-md flex justify-between items-center px-2 sm:px-4"
            >
              <input
                type="number"
                name="eth-claim"
                id="eth-claim"
                placeholder="100 ETH"
                className="bg-transparent w-full text-base py-1 focus:outline-none remove-input-arrows"
              />
              <button className="bg-[#0038FF] rounded text-white px-4 text-sm sm:text-base">
                Claim
              </button>
            </label>
          </div>
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">DHUB Rewards</h3>
            <label
              htmlFor="dhub-claim"
              className="border border-white rounded-md flex justify-between items-center px-2 sm:px-4"
            >
              <input
                type="number"
                name="dhub-claim"
                id="dhub-claim"
                placeholder="100 DHUB"
                className="bg-transparent w-full text-base py-1 focus:outline-none remove-input-arrows"
              />
              <button className="bg-[#0038FF] rounded text-white px-4 text-sm sm:text-base">
                Claim
              </button>
            </label>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="w-full bg-[#0038FF] rounded-md text-center py-2 shadow-lg shadow-slate-700">
              <p className="text-sm sm:text-base font-semibold">
                Total ETH Claimed
              </p>
              <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
            </div>
            <div className="w-full bg-[#0038FF] rounded-md text-center py-2 shadow-lg shadow-slate-700">
              <p className="text-sm sm:text-base font-semibold">
                Total ETH Claimed
              </p>
              <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
            </div>
            <div className="w-full bg-[#0038FF] rounded-md text-center py-2 shadow-lg shadow-slate-700">
              <p className="text-sm sm:text-base font-semibold">
                Total ETH Claimed
              </p>
              <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;