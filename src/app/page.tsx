'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import IntroLoader from '@/components/IntroLoader';

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <Hero />
      <Experience />
      <Footer />
    </>
  );
}
