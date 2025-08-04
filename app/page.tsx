import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
