import AsghaardSofa from "./Components/AsghaardSofa";
import Blogs from "./Components/Blogs";
import HeroSection from "./Components/HeroSection"
import InstagramSection from "./Components/InstagramSection";
import Footer from "@/app/Components/SharedComponents/Footer";
import TopPics from "./Components/TopPics";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <TopPics/>
    <AsghaardSofa/>
    <Blogs/>
    <InstagramSection/>
    <Footer/>
    </>
   );
}