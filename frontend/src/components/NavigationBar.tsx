import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <div
      className={`
		  h-20
		  px-4
		  md:px-8
		  lg:px-16
		  xl:px-32
		  2xl:px-64
		  relative
		`}
    >
      <div
        className={`
			md:hidden
			h-full
			flex
			items-center
			justify-between
		  `}
      >
        <Link href="/">
          <div className={`text-2xl tracking-wide`}>Advanced Media Library</div>
        </Link>
        <Menu />
      </div>

      <div
        className={`
			hidden
			md:flex
			items-center
			h-full
			justify-center
			gap-8
		  `}
      >
        <div className="w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className={`text-2xl tracking-wide`}>
              Advanced Media Library
            </div>
          </Link>
        </div>
        <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default NavigationBar;
