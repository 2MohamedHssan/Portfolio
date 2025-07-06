import Skills from "./Skills"

function Footer() {
  return (
    <div className="text-center bg-gray-900">
      <footer className="">
        <Skills value={false} />
        <div className="p-4 font-bold text-white">&copy; {new Date().getFullYear()} Mohamed Hassan
        </div>
      </footer>
    </div>
  )
}

export default Footer
