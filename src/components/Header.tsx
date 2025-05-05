import Link from "next/link";
import Image from "next/image";
import logo from "../public/taracon-logo.svg";

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
    </header>
  );
};
