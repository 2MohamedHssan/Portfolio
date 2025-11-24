import Skills from "./Skills";

function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden border-t border-gray-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Skills value={false} />
        <div className="py-8 text-center border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
          <p className="text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-cyan-400">Mohamed Hassan</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

