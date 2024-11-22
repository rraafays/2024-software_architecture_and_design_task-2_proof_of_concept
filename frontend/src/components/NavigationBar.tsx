import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Link href="/">Advanced Media Library</Link>
    </div>
  );
};

export default NavigationBar;
