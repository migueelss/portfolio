'use client';
import { useEffect, useState } from "react";
import Welcome from "@/app/components/welcome";
import Header from "@/app/components/header";
import AboutMe from "@/app/components/aboutme";

export default function Home() {
  
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      if (!entry.isIntersecting) {
        setShowWelcome(false);
        document.body.style.overflow = 'auto';
        window.scrollTo(0, 0);
      }
    }, {
      root: null,
      threshold: 0.1,
    });
  
    const targetElement = document.getElementById('welcomescreen');
    if (targetElement) {
      observer.observe(targetElement);
    }
  
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div>
      {showWelcome && <Welcome />}
      <Header />
      <AboutMe />
    </div>
  );
}
