/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { LatestContentSection } from './components/LatestContentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050505] text-[#FAFAFA] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SocialMediaSection />
          <LatestContentSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
