export default function Navbar() {
  return (
    <nav className="bg-[#5d8870] text-[#fff3eb] px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=100&id=60701&format=png&color=fff3eb"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold">MCQ App</span>
        </div>
        <div className="space-x-6 text-sm hidden md:flex">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Quizzes</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
