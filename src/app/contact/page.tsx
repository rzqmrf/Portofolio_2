import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
