import Link from "next/link";
import HeaderNav from "./nav.header";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 py-4">
      <Link href={"/"}>
        <h1 className="text-primary-800 text-3xl">RUMI</h1>
      </Link>
      <HeaderNav />
    </header>
  );
}
