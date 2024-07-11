import { FaStar, FaTools } from 'react-icons/fa';
import Image from 'next/image';

interface ReviewProps {
  rating: number;
  cookingTime: number;
  difficultyLevel: string;
}

const Review: React.FC<ReviewProps> = ({ rating, cookingTime, difficultyLevel }) => {
  const starsArray = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="flex items-center mt-4">
      <div className="flex space-x-0 gap-0">
        {/* Menampilkan bintang-bintang */}
        {starsArray.map((star, index) => (
          <FaStar
            key={index}
            color="#FFAD30"
            className="w-4 h-4"
            style={{
              width: '13.94px',
              height: '14px',
              top: '1px',
              left: '0.47px',
              gap: '0px',
              opacity: '0px',
            }}
          />
        ))}
      </div>
      <span className="ml-1">{rating}/5</span>

      <div className="flex items-center ml-4">
        
        <Image src="assets/timer-1.svg" width={22.67} height={22.67} alt="Cooking Time" className="w-4 h-4" />
        <span className="ml-1">{cookingTime} menit</span>
      </div>

      <div className="flex items-center ml-4">
        <FaTools color="#4ADE80" />
        <span className="ml-1">{difficultyLevel}</span>
      </div>
    </div>
  );
};

export default Review;
