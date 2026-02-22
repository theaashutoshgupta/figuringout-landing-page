import NavigationHeader from "../components/NavigationHeader";
import HeroSection from "../components/HeroSection";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import AboutIntro from "@/components/AboutIntro";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <main className="bg-rich-black w-full min-h-screen">
        <HeroSection />
        <FeaturedEpisodes />
        <AboutIntro />
        <BookSection />
        <Footer />
      </main>
    </>
  );
}
