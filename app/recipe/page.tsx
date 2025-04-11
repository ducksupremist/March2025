import { title } from "@/components/primitives";

export default function Recipe() {
  return (
    <div>
      <h1 className={title()}>Recipe</h1>
      <p>How to make Shoyu Ramen:</p>
      <p>
        Shoyu ramen has 4 main components: broth, chicken, the toppings, and
        noodles.
      </p>
      <p>For the broth, you need:</p>
      <p>4 cups of unsalted Chicken stock</p>
      <p>3-4 Spring onions (scallions)</p>
      <p>3-4 Garlic cloves</p>
      <p>1 inch piece of Ginger</p>
      <p>1 Fresh red chili</p>
      <p>3 tablespoons Light soy sauce</p>
      <p>2 tablespoons Mirin</p>
      <p>3-4 fresh shittake mushroom</p>
      <p>
        1.Prepare the aromatics: heat the borth over medium heat. Saute the
        white parts of the spring onions, garlic, ginger, and red chili for 2-3
        minutes
      </p>
      <p>2.Pour the chicken broth in</p>
      <p>3.add the mushrooms in. Simmer for 10-15 minutes</p>
    </div>
  );
}
