import Add from "@/components/Add";
import CustomiseProducts from "@/components/CustomiseProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Item Name</h1>
        <p className="text-gray-500">
          fklghsdfgkjhdfl sdfgkljsdfhglksdfjh sdglkjhsdfgk fdsglkjfhglksd
          gdsfkjlghsdfl sfklgjhsdfkg dslfkgjhsdkfjghsdflkgj gdfkljhg
          dfsklghdflkg sdfgklhdsfglk fsdgkljdfhlgk dfskglhd dfsgklhdflg
          fdsgkljh?
        </p>
        <div className="h-[2px] hg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$49</h3>
          <h3 className="font-medium text-2xl">$39</h3>
        </div>
        <div className="h-[2px] hg-gray-100" />
        <CustomiseProducts />
        <Add />
        <div className="h-[2px] hg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            fklghsdfgkjhdfl sdfgkljsdfhglksdfjh sdglkjhsdfgk fdsglkjfhglksd
            gdsfkjlghsdfl sfklgjhsdfkg dslfkgjhsdkfjghsdflkgj gdfkljhg
            dfsklghdflkg sdfgklhdsfglk fsdgkljdfhlgk dfskglhd dfsgklhdflg
            fdsgkljh?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            fklghsdfgkjhdfl sdfgkljsdfhglksdfjh sdglkjhsdfgk fdsglkjfhglksd
            gdsfkjlghsdfl sfklgjhsdfkg dslfkgjhsdkfjghsdflkgj gdfkljhg
            dfsklghdflkg sdfgklhdsfglk fsdgkljdfhlgk dfskglhd dfsgklhdflg
            fdsgkljh?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            fklghsdfgkjhdfl sdfgkljsdfhglksdfjh sdglkjhsdfgk fdsglkjfhglksd
            gdsfkjlghsdfl sfklgjhsdfkg dslfkgjhsdkfjghsdflkgj gdfkljhg
            dfsklghdflkg sdfgklhdsfglk fsdgkljdfhlgk dfskglhd dfsgklhdflg
            fdsgkljh?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
