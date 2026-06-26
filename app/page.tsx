import HomeBanner from "@/components/homeComponents/HomeBanner";
import HomeCategory from "@/components/homeComponents/HomeCategory";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <HomeBanner />
    <HomeCategory />
    <Footer/>
    </>
  );
}
