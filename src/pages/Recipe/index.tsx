import { Header } from '@/components';

const Recipe = () => {
  const recipeTitle = 'Bulgogi';
  const recipeImageUrl = '/assets/Bulgogi.jpg';

  return (
    <div>
      <Header title={recipeTitle} imageUrl={recipeImageUrl} />
      
    </div>
  );
};

export default Recipe;