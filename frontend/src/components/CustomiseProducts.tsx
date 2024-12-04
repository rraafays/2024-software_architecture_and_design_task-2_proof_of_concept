const CustomiseProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose edition</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-pink text-pink rounded-md py-1 px-4 text-sm cursor-pointer">
          Default
        </li>
        <li className="ring-1 ring-pink text-pink rounded-md py-1 px-4 text-sm cursor-pointer">
          Deluxe
        </li>
        <li className="ring-1 ring-pink text-pink rounded-md py-1 px-4 text-sm cursor-pointer">
          Ultimate
        </li>
      </ul>
    </div>
  );
};

export default CustomiseProducts;
