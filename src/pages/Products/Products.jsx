import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
import { useState } from "react";
import useFetch from "./../../hooks/useFetch";

const Products = () => {
  const cartId = parseInt(useParams().id);
  // console.log("cartId",cartId)
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([])
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${cartId}`
  );
  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter(item => item !== value))
  }
  // console.log("log", selectedSubCat)
  // console.log("cat data", data);
  return (
    <div className="products">
      <div className="left">
        <div className="filter">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filter">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={2000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              value="asc"
              id="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              value="desc"
              id="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cartImg"
          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <List cartId={cartId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat} />
      </div>
    </div>
  );
};

export default Products;
