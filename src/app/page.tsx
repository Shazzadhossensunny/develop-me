import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyChooseMeSection from '@/components/sections/WhyChooseMeSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhyChooseMeSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
