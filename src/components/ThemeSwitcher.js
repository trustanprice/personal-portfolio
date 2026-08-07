import React, { useState, useRef, useEffect } from "react";
import { FaPalette } from "react-icons/fa";
import "./ThemeSwitcher.css";

const THEMES = [
  { key: "teal", label: "Teal (Default)", swatch: ["#2c7a7b", "#1e4d4f"] },
  { key: "cat", label: "Caterpillar", swatch: ["#ffc400", "#000000"] },
  { key: "illini", label: "Illini", swatch: ["#ff5f05", "#13294b"] },
  { key: "osu", label: "Buckeyes", swatch: ["#ba0c2f", "#666666"] },
  { key: "cu", label: "CU Boulder", swatch: ["#cfb87c", "#000000"] },
];

function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher" ref={wrapperRef}>
      <button
        className="theme-switcher-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose color theme"
      >
        <FaPalette size={16} />
      </button>

      {open && (
        <div className="theme-switcher-panel">
          {THEMES.map((t) => (
            <button
              key={t.key}
              className={`theme-swatch-btn ${theme === t.key ? "active" : ""}`}
              onClick={() => {
                setTheme(t.key);
                setOpen(false);
              }}
              aria-label={t.label}
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
