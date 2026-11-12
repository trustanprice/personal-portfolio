import React, { useState, useRef, useEffect } from "react";
import { FaPalette } from "react-icons/fa";
import "./ThemeSwitcher.css";

const THEMES = [
  { key: "teal", label: "Teal (Default)", swatch: ["#2c7a7b", "#1e4d4f"] },
  { key: "synchrony", label: "Synchrony", swatch: ["#f3c844", "#1c1f23"] },
  { key: "illini", label: "Illini", swatch: ["#ff5f05", "#13294b"] },
  { key: "osu", label: "Buckeyes", swatch: ["#ba0c2f", "#666666"] },
  { key: "cu", label: "CU Boulder", swatch: ["#cfb87c", "#000000"] },
];

// onOpen: called when the panel opens (the navbar closes its mobile menu).
// navHidden: the navbar slid away on scroll, so the panel inside it closes too.
function ThemeSwitcher({ theme, setTheme, onOpen, navHidden }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const toggleRef = useRef(null);

  // While open: close on a click/tap outside (pointerdown reacts to touch right
  // away, unlike the mousedown browsers synthesize after a tap) and on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (navHidden) setOpen(false);
  }, [navHidden]);

  const toggle = () => {
    if (!open && onOpen) onOpen();
    setOpen(!open);
  };

  return (
    <div className="theme-switcher" ref={wrapperRef}>
      <button
        ref={toggleRef}
        className="theme-switcher-toggle"
        onClick={toggle}
        aria-label="Choose color theme"
        aria-expanded={open}
        aria-controls="theme-switcher-panel"
      >
        <FaPalette size={16} />
      </button>

      {open && (
        <div id="theme-switcher-panel" className="theme-switcher-panel">
          {THEMES.map((t) => (
            <button
              key={t.key}
              className={`theme-swatch-btn ${theme === t.key ? "active" : ""}`}
              onClick={() => {
                setTheme(t.key);
                setOpen(false);
              }}
              aria-label={t.label}
              aria-pressed={theme === t.key}
              title={t.label}
            >
              <span
                className="theme-swatch"
                style={{
                  background: `linear-gradient(135deg, ${t.swatch[0]} 50%, ${t.swatch[1]} 50%)`,
                }}
              />
              <span className="theme-swatch-label">{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
