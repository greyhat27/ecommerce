import "./Search.scss"
import useFetch from "../../hooks/useFetch";

export const Search = () => {
  const {data, loading, error} = useFetch(`/products?populate=*`)
  return (
    <div className="searchSec">
      <div className="searchInput">
        <input type="text" placeholder="Search an Item" className="searchText"/>
        {console.log("all data", data)}
      </div>
    </div>
  )
}
