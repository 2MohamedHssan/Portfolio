import Skills from "./Skills"

function Footer() {
  return (
    <div className="bg-[#323846] bg-custom-gradient">
      <footer className="">
        <Skills value={true} />
        <Skills value={false} />
        <div>&copy; 2024 Mohamed Hassan
        </div>
      </footer>
    </div>
  )
}

export default Footer
