import Image from "next/image";
import Link from "next/link";
import Product from "./components/Product";
const Home = () => {
  return (
    <>
      <main className="bg-darkmode flex justify-around pt-16 pb-16 items-center px-24">
        <div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primaryPurple to-primaryBlue text-transparent bg-clip-text w-min">
            Catistec
          </h2>
          <p className="text-5xl font-bold text-gray-200 w-2/3">
            Pioneering Technology for a Smarter Future.
          </p>
          <p className="text-zinc-500 text-2xl my-2 mb-10">
            Explore everything we have to offer.
          </p>

          <Link href="#" className = 'p-4 bg-primaryPurple rounded-2xl mr-3 text-white font-semibold'>The Future</Link>
          <Link href="#" className = 'p-4 bg-zinc-600 rounded-2xl text-white font-semibold'>About Us</Link>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="./catisteclogo.svg"
            alt="catisteclogo"
            width={280}
            height={280}
          />
        </div>
      </main>

      <h1 className = 'flex justify-center items-center p-20 bg-darkmode text-4xl font-bold text-gray-200'>Our Products. </h1>

      <section className = 'grid-cols-2'>
        <Product />
        <Product />

      </section>
    </>
  );
};

export default Home;
