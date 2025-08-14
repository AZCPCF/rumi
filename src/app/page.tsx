import NextImage from "@/components/ui/image";
import Link from "next/link";

// Assets
import rumi from "@/assets/app/icons/rumi.png";
import { QuoteCard } from "@/components/pages/home/qoute-card";
// RumiName Component
// const qoute =
//   "Lovers don t finally meet somewhere. They re in each other all along.";
const RumiName = () => (
  <div className="relative flex flex-wrap justify-center text-5xl">
    <div className="max-lg:hidden">
      <p className="w-full">Jalaal al-Din</p>
      <p className="pl-32 w-full">Muhammad</p>
    </div>
    <div className="w-full relative left-2">
      <div className="bg-primary-800 w-[60.5%] top-6 max-lg:w-[70%] left-0 aspect-square rounded-full absolute -z-10"></div>
      <NextImage
        alt="rumi-home-page"
        src={rumi}
        className="w-8/12 relative z-1 max-lg:w-10/12"
      />
    </div>
    <h1 className="absolute top-[21%] max-lg:hidden -right-10 text-[96px] !font-extrabold text-secondary-600">
      Rumi
    </h1>
  </div>
);

// Main Page Component
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 relative mt-18 max-md:mt-12">
        {/* Left side: Rumi Name */}
        <div className="text-5xl relative flex flex-wrap justify-center">
          <RumiName />
        </div>

        {/* Desktop Quote */}
        <div className="w-full flex justify-end max-lg:hidden">
          <div className="relative w-9/12">
            <QuoteCard />
          </div>
        </div>

        {/* Mobile Rumi Name */}
        <div className="lg:hidden flex gap-4 flex-wrap items-center flex-col justify-center">
          <div className="text-3xl">
            <p>Jalaal al-Din</p>
            <p> Muhammad</p>
          </div>
          <h1 className="text-7xl text-secondary-600">Rumi</h1>
        </div>

        {/* Mobile Read More */}
        <div className="hidden max-lg:flex items-center justify-center mt-6 max-md:hidden">
          <div className="w-9/12 text-center flex flex-col items-center gap-4">
            <p className="text-lg">
              You can read more about Rumi on this page.
            </p>
            <Link
              href={"life"}
              className="px-6 py-2 bg-secondary-700 hover:bg-secondary-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Mobile Quote */}
        <div className="w-full flex justify-center lg:hidden max-md:col-span-full mt-12">
          <QuoteCard
            btnLeft="left-8"
            quoteClass="text-lg max-md:text-base"
            btnBottom="bottom-4"
            btnRight="right-8"
          />
        </div>
      </section>
    </main>
  );
}
