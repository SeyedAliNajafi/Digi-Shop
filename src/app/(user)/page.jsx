"use client";
import Loader from "@/common/Loader";
import { ContactMe, ContactUs } from "@/components/ContactMe";
import Footer from "@/components/Footer";
import SlideShow from "@/components/SlideShow";
import SpecialOff from "@/components/SpecialOff";
import { useGetProducts } from "@/hooks/useProducts";
import React from "react";


function Home() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  if (isLoading) return <Loader />;
  return (
    <div className="">
      <SlideShow />
      <SpecialOff products={products} />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;
