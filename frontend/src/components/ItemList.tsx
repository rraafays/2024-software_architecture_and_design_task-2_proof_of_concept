import Image from "next/image";
import Link from "next/link";

const ItemList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://assets-prd.ignimgs.com/2022/01/07/gta-san-andreas-collage-button2-1641589094079.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://assets-prd.ignimgs.com/2022/01/07/gta-san-andreas-collage-button2-1641589094079.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Grand Theft Auto: San Andreas</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Grand Theft Auto: San Andreas is an open-world action-adventure game
          where players control the character Carl &quot;CJ&quot; Johnson.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625583086/tao-te-ching-9781625583086_hr.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625583086/tao-te-ching-9781625583086_hr.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Tao Te Ching</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          The Tao Te Ching is a classic Chinese text attributed to Laozi,
          offering guidance on living in harmony with the Tao, the fundamental
          nature of the universe.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Blade Runner</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Blade Runner (1982) is a neo-noir science fiction film directed by
          Ridley Scott, set in a dystopian future where synthetic humans known
          as replicants are bio-engineered by the powerful Tyrell Corporation to
          work on off-world colonies.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">TEKKEN 8</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Tekken 8 is a fighting video game developed and published by Bandai
          Namco Entertainment, part of the Tekken series.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://e.snmc.io/lk/l/x/20831ed8b357e16fc131bbca09b6f004/7788174"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://e.snmc.io/lk/l/x/20831ed8b357e16fc131bbca09b6f004/7788174"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">
            METAL GEAR SOLID 2: SONS OF LIBERTY
          </span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Metal Gear Solid 2: Sons of Liberty is an action-adventure stealth
          game developed by Konami.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Resident Evil 4</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Resident Evil 4 is a modernized version of the iconic survival horror
          game, featuring updated graphics, enhanced gameplay mechanics, and a
          reimagined story while retaining the core essence of the original.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://m.media-amazon.com/images/I/81CA-WqU+lL.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://m.media-amazon.com/images/I/81CA-WqU+lL.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">The Kite Runner</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          The Kite Runner is a novel by Khaled Hosseini, published in 2003. It
          is a story of redemption and friendship, set against the backdrop of a
          changing Afghanistan. The narrative follows Amir, a young boy from
          Kabul, and his complex relationship with his close friend Hassan.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BNmEyZjI0M2MtNGFkOC00YTRlLWI0MGQtYTgyODY2MGRhMjc4XkEyXkFqcGc@._V1_.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://m.media-amazon.com/images/M/MV5BNmEyZjI0M2MtNGFkOC00YTRlLWI0MGQtYTgyODY2MGRhMjc4XkEyXkFqcGc@._V1_.jpg"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Your Name</span>
          <span className="font-semibold">Available</span>
        </div>
        <div className="text-gray-500 text-sm">
          Your Name is about two teenagers who mysteriously swap bodies and must
          navigate each other&apos;s lives while uncovering a deeper connection
          between them.
        </div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
    </div>
  );
};

export default ItemList;
