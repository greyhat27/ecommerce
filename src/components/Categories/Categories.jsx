import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="column">
        <div className="row">
          {/* <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11101422/2022/7/2/a0c5c7b8-2896-4350-91ec-d22b7ee96e081656746520586RustorangeWomenMaroonGreyPrintedA-LineDress1.jpg"
            alt=""
          /> */}
          <img src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="/products/3">New Arrivals</Link>
          </button>
        </div>
      </div>
      <div className="column">
        <div className="row">
          {/* <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19092282/2022/9/14/08edfafc-72db-4c90-8329-19852a1c84171663156573931-Louis-Philippe-Men-Cream-Coloured-Solid-Classic-Slim-Fit-Pur-1.jpg"
            alt=""
          /> */}
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className="link" to="/products/2">Men</Link>
          </button>
        </div>
      </div>
      <div className="column col-l">
        <div className="row">
          <div className="column">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link className="link" to="/products/4">Sale</Link>
              </button>
            </div>
          </div>
          <div className="column">
            <div className="row">
                <img src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                <Link className="link" to="/products/5">New Season</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
            <img src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button>
                <Link className="link" to="/products/6">Accessories</Link>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
