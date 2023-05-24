import Card from "../Card/Card";
import "./FeaturedProduct.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProduct = ({ type }) => {
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  console.log("data",data)
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Introducing our newest arrival: the Sunset Boulevard midi dress. This
          stunning dress features a unique floral print that will make you stand
          out from the crowd. The dress is made from a lightweight and
          breathable fabric, making it perfect for warm weather. The Sunset
          Boulevard dress also features a flattering V-neckline, short sleeves,
          and a fitted waistline that will accentuate your curves
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong": (loading ? "LOADING": data?.map((item) => (
          <Card item={item} key={item.id} />
        )))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
