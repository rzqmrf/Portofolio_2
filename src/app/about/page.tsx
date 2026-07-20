import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BehindTheScenes from '@/components/BehindTheScenes';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <About />
        <Skills />
        <BehindTheScenes />
      </div>
      <Footer />
    </>
  );
}
