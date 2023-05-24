import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCat, maxPrice, sort, cartId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${cartId}${subCat.map(
      (item, index) => `&[filters][sub_categories][id][$eq]=${item}${index === 0 ? '' : ','}`
    )}&[filters][price][$lte]=${maxPrice}&_sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
