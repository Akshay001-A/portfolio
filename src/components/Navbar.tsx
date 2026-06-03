import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-3xl font-bold transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Akshay R
            </span>
          </h1>
        </a>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`
                  relative
                  font-medium
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  ${active === item
                    ? "text-cyan-400"
                    : "text-white"
                  }
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  ${active === item
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
