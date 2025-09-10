"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import { Users, Star, PiggyBank } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={50}
        logoClassName="w-32"
        buttonText="Join Us"
        onButtonClick={() => alert('Join us clicked!')}
        className="fixed w-full bg-transparent"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to TrendyCoin!"
          subtitle="The fun memecoin that makes investing exciting!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => alert('Getting Started!')}
          onSecondaryButtonClick={() => alert('Learning More!')}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About TrendyCoin"
          descriptions={["Join the fun memecoin revolution!", "Experience the joy of investing with us."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy TrendyCoin"
          steps={[
            { title: "Step 1", description: "Create a cryptocurrency wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Find an exchange that supports TrendyCoin", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Purchase TrendyCoin and start investing!", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="TrendyCoin Tokenomics"
          description="Know more about our tokenomics and how we sustain our ecosystem."
          kpiItems={[
            { value: "1 Billion", description: "Total Supply", icon: PiggyBank },
            { value: "40%", description: "Reserved for Developers", icon: Users },
            { value: "20%", description: "Community Rewards", icon: Star }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoText="TrendyCoin"
          logoAlt="TrendyCoin Logo"
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => alert('Home Clicked!') }, { label: "About", onClick: () => alert('About Clicked!') }] },
            { title: "Community", items: [{ label: "Discord", onClick: () => alert('Discord Clicked!') }, { label: "Twitter", onClick: () => alert('Twitter Clicked!') }] },
            { title: "Support", items: [{ label: "FAQ", onClick: () => alert('FAQ Clicked!') }, { label: "Contact", onClick: () => alert('Contact Clicked!') }] },
          ]}
          copyrightText="© 2023 TrendyCoin. All Rights Reserved."
          onPrivacyClick={() => alert('Privacy Policy Clicked!')}
        />
      </div>
    </SiteThemeProvider>
  );
}
