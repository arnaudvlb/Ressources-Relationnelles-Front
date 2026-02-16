"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  /* =========================
     THEME SYSTEME
  ========================= */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark: boolean) => {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    };

    applyTheme(mediaQuery.matches);
    mediaQuery.addEventListener("change", e => applyTheme(e.matches));

    return () =>
      mediaQuery.removeEventListener("change", e => applyTheme(e.matches));
  }, []);

  /* =========================
     FERMER MENU AU RESIZE
  ========================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =========================
     CLICK OUTSIDE
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header>
      <div className="banner">
        <img src="../logoMinistere.svg" alt="Logo ministère"/>
      </div>

      <nav ref={navRef}>
        <div className="nav-container">
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/login">Connexion</Link></li>
          </ul>

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        <div className={`mobile-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="mobile-menu">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link href="/login" onClick={() => setMenuOpen(false)}>Connexion</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
