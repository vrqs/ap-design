"use client";

import React, {
  useState,
  useEffect,
} from "react";

import Button from "@/app/components/Button";

const MobileBottomBar = () => {
  const [visible, setVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const distanceFromBottom = scrollHeight - (scrollY + clientHeight);

      setVisible(scrollY > 360);
      setShowBackground(distanceFromBottom > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`mb-bottom-bar ${visible ? "visible" : "hidden"} ${showBackground ? "" : "bg-hidden"}`}>
      <Button
        size="large"
        label="Agendar sessão gratuita"
        url="https://calendly.com/geral-apdsn/30min/"
      />
    </section>
  )
}

export default MobileBottomBar;