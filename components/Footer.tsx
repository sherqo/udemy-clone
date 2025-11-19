export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} Udemy UI — UI-only clone</div>
          <div className="flex gap-4">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
