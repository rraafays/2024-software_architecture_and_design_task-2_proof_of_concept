import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 py-24">
      <div className="flex justify-between gap-24 flex-col md:flex-row">
        <div className="lg:w-1/4 flex flex-col gap-8 md:w-1/2">
          <Link href="/">
            <div className="text-2xl tracking-wide">Advanced Media Library</div>
          </Link>
          <p>kdfhsgkdhf</p>
          <span className="font-semibold">blah@tuta.io</span>
          <span className="font-semibold">474835657483</span>
          <div className="flex gap-6">
            <Image
              src={"/facebook.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image
              src={"/instagram.png"}
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src={"/youtube.png"} alt="youtube" width={16} height={16} />
            <Image
              src={"/pinterest.png"}
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src={"/x.png"} alt="twitter" width={16} height={16} />
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Info</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-medium text-lg">Mailing List</h1>
          <p>Be the first to hear about new stock</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Email"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-pink text-white">Join</button>
            <span className="font-semibold">Secure Payments</span>
          </div>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="2024 Advanced Media Libraries"></div>
      </div>
    </div>
  );
};

export default Footer;
