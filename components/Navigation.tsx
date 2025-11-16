"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about-0var", label: "About 0var", emoji: "🧭" },
  { id: "what-we-do", label: "What We Do", emoji: "⚙️" },
  { id: "our-approach", label: "Our Approach", emoji: "📊" },
  { id: "why-it-matters", label: "Why It Matters", emoji: "🧩" },
  { id: "partners--governance", label: "Partners & Governance", emoji: "🤝" },
  { id: "vision", label: "Vision", emoji: "🌐" },
  { id: "team", label: "Team", emoji: "👥" },
  { id: "contact", label: "Contact", emoji: "📬" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div ref={menuRef} className="fixed top-4 right-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-200 rounded-md p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-0 min-w-[280px] max-w-[90vw] bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
          {/* Navigation List */}
          <nav className="max-h-[calc(100vh-8rem)] overflow-y-auto">
            <ul className="py-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className="w-full text-left px-5 py-2 text-base transition-colors flex items-center gap-3 whitespace-nowrap text-gray-700 hover:bg-gray-50"
                  >
                    <span className="text-xl">{section.emoji}</span>
                    <span>{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

