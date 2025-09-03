export default function Footer() {
  return (
    <footer className="w-full text-center text-xs text-gray-500 mt-1 mb-7 py-8 space-y-1">
      
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center mb-8 gap-4 text-1xl">
        <a href="#" className="hover:underline">Meta</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">API</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Locations</a>
        <a href="#" className="hover:underline">Instagram Lite</a>
        <a href="#" className="hover:underline">Meta AI</a>
        <a href="#" className="hover:underline">Meta AI Articles</a>
        <a href="#" className="hover:underline">Threads</a>
        <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
        <a href="#" className="hover:underline">Meta Verified</a>
      </div>

      {/* Language Dropdown + Copyright */}
      <div className="flex justify-center items-center gap-4 w-full px-4">
        <select className="text-xs mb-7 bg-transparent outline-none cursor-pointer">
          <option>English</option>
          <option>Urdu</option>
          <option>Hindi</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        <p className="mb-7">© 2025 Instagram from Meta</p>
      </div>
      
    </footer>
  );
}
