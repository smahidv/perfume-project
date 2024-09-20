import SingleProduct from "./SingleProduct";
import floralEssence from "@/public/products/11600.jpg";
import midnightAmber from "@/public/products/11613.jpg";
import oceanBreeze from "@/public/products/11635.jpg";
import mysticWoods from "@/public/products/11697.jpg";
import citrusSpark from "@/public/products/13873.jpg";
import exoticSpice from "@/public/products/11591.jpg";

const productList = [
  {
    title: 'Floral Essence',
    description: 'Experience the delicate allure of blooming flowers with Enchanted Petal.',
    price: '$11.99',
    imageSrc: floralEssence,
  },
  {
    title: 'Midnight Amber',
    description: 'A deep and mysterious scent, perfect for evening wear.',
    price: '$14.99',
    imageSrc: midnightAmber,
  },
  {
    title: 'Ocean Breeze',
    description: 'Refresh your senses with the crisp and clean fragrance of the sea.',
    price: '$12.99',
    imageSrc: oceanBreeze,
  },
  {
    title: 'Mystic Woods',
    description: 'Embrace the earthy aroma of sandalwood and cedar for a grounding experience.',
    price: '$13.49',
    imageSrc: mysticWoods,
  },
  {
    title: 'Citrus Spark',
    description: 'Bright and invigorating, this scent brings the zest of citrus fruits to life.',
    price: '$10.99',
    imageSrc: citrusSpark,
  },
  {
    title: 'Exotic Spice',
    description: 'An adventurous mix of warm spices and rich undertones for the bold.',
    price: '$16.99',
    imageSrc: exoticSpice,
  },
];

const Products = () => {
  return (
    <div className='bg-white md:px-10 px-4 pt-28'>
      <div className='pb-12 flex scrollbar-webkit snap-x overflow-auto gap-8'>
        {productList.map((product) => (
          <SingleProduct
            key={product.title}
            title={product.title}
            description={product.description}
            price={product.price}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
