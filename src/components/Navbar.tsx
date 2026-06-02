function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Akshay
        </h1>

        <ul className="flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;