import React from "react";
import Hero from "@/components/Hero";
import AdventureGrid from "@/components/AdventureGrid";
import FeaturedAdventures from "@/components/FeaturedAdventures";
import WhyChooseUs from "@/components/WhyChooseUs";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-1">
        <AdventureGrid />
        <FeaturedAdventures />
        <WhyChooseUs />
        <Booking />
        <Gallery />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
