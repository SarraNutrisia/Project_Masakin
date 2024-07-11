import Image from 'next/image';
import { VscArrowLeft } from 'react-icons/vsc';

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="absolute left-4 top-4">
        <VscArrowLeft size={20} color="#181818" />
      </div>
      <h1 className="font-inter text-3xl font-normal text-center text-gray-800 mt-4">
        Bulgogi
      </h1>
      <div className="mt-4 w-full max-w-md flex items-center justify-center">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/assets/Bulgogi.jpg"
            width={324}
            height={136}
            alt="Gambar Resep Bulgogi"
            className="rounded-tl-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
