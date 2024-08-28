import logo from "../assets/img/logo.png";

function NavbarSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6">
      <span>
        <img src={logo} alt="website logo" className="w-40 sm:w-48" />
      </span>
      <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
        <button className="border border-white rounded-md px-4 py-2 text-sm sm:text-base">
          Documents
        </button>
        <button className="bg-[#0038FF] rounded-md px-4 py-2 text-sm sm:text-base text-white">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default NavbarSection;
