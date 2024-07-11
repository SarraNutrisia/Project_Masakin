import Image from 'next/image';
import { VscArrowLeft } from 'react-icons/vsc';

interface HeaderProps {
  title: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="absolute left-4 top-4">
        <VscArrowLeft size={20} color="#181818" />
      </div>
      <h1 className="font-inter text-3xl font-normal text-center text-gray-800 mt-4">
        {title}
      </h1>
      <div className="mt-4 w-full max-w-md flex items-center justify-center">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            width={324}
            height={136}
            alt={`Gambar Resep ${title}`}
            className="rounded-tl-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
