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
      <h1
        className="font-inter font-normal text-center"
        style={{
          width: '323px',
          height: '28px',
          left: '1px',
          gap: '0px',
          opacity: '0px',
          fontSize: '23px',
          lineHeight: '27.84px',
          textAlign: 'center'
        }}
      >
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
            style={{
              width: '324px',
              height: '136px',
              top: '47px',
              gap: '0px',
              borderRadius: '10px 0px 0px 0px',
              opacity: '0px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
