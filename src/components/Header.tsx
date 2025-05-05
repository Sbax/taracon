import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export const Header = () => {
  return (
    <header className="flex flex-col items-center space-y-4 mb-4 w-full">
      <Link href="/">
        <Image
          src={logo}
          alt="Booking Test Logo"
          style={{
            width: "auto",
            height: "100%",
          }}
          height={100}
        />
      </Link>

      <nav className="bg-base-200 rounded-md navbar">
        <ul className="flex justify-center space-x-2 font-bold menu menu-horizontal">
          <li>
            <Link href="#">Link 1</Link>
          </li>
          <li>
            <Link href="#">Link 2</Link>
          </li>
          <li>
            <Link href="#">Link 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
