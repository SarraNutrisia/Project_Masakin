import { Header, Review, Description, Buttonvideo } from '@/components';

const Recipe = () => {
  const recipeTitle = 'Bulgogi';
  const recipeImageUrl = '/assets/Bulgogi.jpg';
  const rating = 5;
  const cookingTime = 50;
  const difficultyLevel = 3;
  const maxDifficultyLevel = 3;
  const recipeDescription = "Bulgogi adalah daging sapi panggang klasik khas Korea yang lezat, cocok dinikmati saat makan siang ataupun makan malam.\n\ Dengan langkah-langkah yang sederhana, Bulgogi sangat mudah untuk dibuat.\n\ Hidangkan Bulgogi bersama nasi dan kimchi untuk sensasi makan yang benar-benar autentik.";


  return (
    <div>
      <Header title={recipeTitle} imageUrl={recipeImageUrl} />
      <Review
        rating={rating}
        cookingTime={cookingTime}
        difficultyLevel={difficultyLevel}
        maxDifficultyLevel={maxDifficultyLevel}
      />
      <Description description={recipeDescription} />
      <Buttonvideo videoUrl="https://www.youtube.com/watch?v=cmxaIPr_1kI" />
    </div>
  );
};

export default Recipe;
