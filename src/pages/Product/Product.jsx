import { useEffect, useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "../../redux/cartReducer";

const Product = () => {
  const productId = parseInt(useParams().id)
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );
  return (
    <div className="product">
      {loading ? "Loading":
      <>
      <div className="left">
        <div className="images">
          <img src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        </div>
        <div className="mainImg">
          <img className="img1" src={data?.attributes[selectedImg].data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">₹{data?.attributes?.price}</span>
        <p>
          {/* Introducing our beautiful women's kurta, perfect for adding a touch of
          elegance to any outfit. Made from soft and breathable fabric, this
          kurta is both comfortable and stylish. The kurta features a classic
          design with a round neckline and full-length sleeves, and it falls
          gracefully below the knee. */}
          {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev===1 ? 1: prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev+1)}>+</button>
        </div>
        <div className="add" onClick={() => dispatch(addToCart({
          id: data?.id,
          title: data?.attributes.title,
          desc: data?.attributes.desc,
          price: data?.attributes.price,
          img: data?.attributes.img.data.attributes.url,
          quantity,
        }))}>
          {console.log("data id",data?.id)}
          <AddShoppingCartIcon/> Add to Cart
        </div>
        <div className="links">
        <div className="item" onClick={() => dispatch(addToWishList({
          id: data?.id,
          title: data?.attributes?.title,
          desc: data?.attributes?.desc,
          price: data?.attributes?.price,
          img: data?.attributes?.img?.data?.attributes?.url,
          quantity,
        }))}>
          <FavoriteBorderIcon />  Add to favourite
        </div>
        <div className="item">
          <BalanceIcon/> Add to Compare
        </div>
        </div>
        <div className="info">
          <span>Vendor: fabIndia</span>
          <span>Product Type: Kurta</span>
          <span>Tags: women, kurta, ethnic</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
      </>
}
    </div>
  );
};

export default Product;
