import "./WishList.scss";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { removefromWishList } from "../redux/cartReducer";
import { Link } from "react-router-dom";

export const WishList = () => {
  const products = useSelector((state) => state.cart.wishList);
  const dispatch = useDispatch();
  return (
    <div className="wishList">
      {products.length > 0 ? (
        <>
          <h1>Wishlist</h1>
          {products?.map((item) => (
            <div className="item" key={item?.id}>
              <Link className="link" to={`/product/${item?.id}`}>
                <img src={item?.img} alt="" />
              </Link>
              <div className="details">
                <Link className="link" to={`/product/${item?.id}`}>
                  <h1>{item?.title}</h1>
                </Link>
                <p>{item?.desc}</p>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => dispatch(removefromWishList(item?.id))}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1 className="empty">No items in WishList</h1>
      )}
    </div>
  );
};
