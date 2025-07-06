import Skills from "./Skills"

function Footer() {
  return (
    <div className="text-center bg-custom-gradient">
      <footer className="">
        {/* <Skills value={true} /> */}
        <Skills value={false} />
        <div className="p-4 font-bold text-white">&copy; {new Date().getFullYear()} Mohamed Hassan
        </div>
      </footer>
    </div>
  )
}

export default Footer
