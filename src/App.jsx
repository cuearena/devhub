import BrandSection from "./components/brand";
import CardSection from "./components/cards";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";

function App() {
  return (
    <main className="bg-image px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] pb-16 sm:pb-20 md:pb-24">
      <NavbarSection />
      <HeroSection />
      <BrandSection />
      <CardSection />
    </main>
  );
}

export default App;
