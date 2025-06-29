import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline, IoSearchSharp } from "react-icons/io5";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex justify-between">
        <Link href="#" className="flex flex-col items-center">
          <AiOutlineHome size={28} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <IoSearchSharp size={28} />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <IoNotificationsOutline size={28} />
          <span className="text-xs mt-1">Notifications</span>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <FaRegUser size={28} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
