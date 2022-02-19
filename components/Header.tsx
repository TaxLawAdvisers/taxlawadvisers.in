import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-5 mb-8">
      <Head>
        <title>TaxLawAdvisers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-b w-full flex justify-between items-center border-tla-green-500 py-4">
        <div className="md:float-left block">
          <Link href="/">
            <Image src={Logo} alt="TaxLawAdviser" className="mr-1" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents md:">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right text-tla-green-500 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
