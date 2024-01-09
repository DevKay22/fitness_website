

const Header = () => {
  return (
    <div className="container relative">
        <nav className="flex justify-around items-center space-x-4 mt-4">
            <div>
                <h1 className="text-[1.9rem] font-bold">FitCoach</h1>
            </div>
            <div className="flex justify-between">
                <h2 className="px-2 mx-1">Platform</h2>
                <h2 className="px-2 mx-1">About Us</h2>
                <h2  className="px-2 mx-1">Testimonial</h2>
                <h2 className="px-2 mx-1">Contact</h2>
            </div>
            <div>
                <a href="#" className="px-4 py-2 rounded-[1.2em] text-white font-bold  bg-blue-500 hover:bg-blue-400">Join now</a>
            </div>
        </nav>
        
    </div>
  )
}

export default Header