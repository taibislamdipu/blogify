import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import Logo from "../../public/logo.svg";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="h-auto w-40" // or "w-auto h-12"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
        </nav>

        <button className="md:hidden">
          <MdOutlineMenu size={28} />
        </button>
      </div>
    </header>
  );
}
