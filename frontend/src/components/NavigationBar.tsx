import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavigationIcons from "./NavigationIcons";

const NavigationBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="md:hidden h-full flex items-center justify-between">
        <Link href="/">
          <div className={`text-2xl tracking-wide`}>Advanced Media Library</div>
        </Link>
        <Menu />
      </div>

      <div className="md:flex hidden items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">Advanced Media Library</div>
          </Link>
        </div>
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavigationIcons />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
