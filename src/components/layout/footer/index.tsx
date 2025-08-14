import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed z-2 bottom-0 backdrop-blur-sm w-full left-1/2 -translate-x-1/2 flex justify-center items-center max-w-7xl max-md:bg-primary-900/90">
      <div className="my-2 py-0 flex flex-wrap gap-2 text-lg md:text-xl items-center text-white">
        <span>By</span>
        <Link
          href="https://github.com/azcpcf"
          target="_blank"
          className="text-primary-600 hover:text-primary-main transition-colors"
        >
          azcpcf (Frontend)
        </Link>
        <span>&</span>
        <Link
          href="https://github.com/ilghar2009"
          target="_blank"
          className="text-primary-600 hover:text-primary-main transition-colors"
        >
          ilghar (Backend)
        </Link>
      </div>
    </footer>
  );
}
