import Skills from "./Skills"

function Footer() {
  return (
    <div className="bg-[#323846] text-center bg-custom-gradient">
      <footer className="">
        <Skills value={true} />
        <Skills value={false} />
        <div className="p-4 font-bold text-white">&copy; 2024 Mohamed Hassan
        </div>
      </footer>
    </div>
  )
}

export default Footer
