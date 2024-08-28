function BrandSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 my-12 sm:my-20">
      <div className="border border-white rounded-md text-center w-full p-4">
        <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold">
          $162,110.314
        </h3>
        <span className="text-sm">Total Value Locked</span>
      </div>
      <div className="border border-white rounded-md text-center w-full p-4">
        <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold">
          $25,000
        </h3>
        <span className="text-sm">Total $DHUB Reward</span>
      </div>
      <div className="border border-white rounded-md text-center w-full p-4">
        <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold">
          $0
        </h3>
        <span className="text-sm">Total Token Reward</span>
      </div>
    </div>
  );
}

export default BrandSection;
