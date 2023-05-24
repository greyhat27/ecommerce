import "./footer.scss";
import Payment from "../../images/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            ShopWise is an online retailer dedicated to providing you with a
            wide range of high-quality fashion products. Our team of experts
            carefully curates each product to ensure that it meets our high
            standards for quality and performance.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            At ShopWise, we're committed to providing you with exceptional
            customer service. If you have any questions or concerns, please
            don't hesitate to contact us. You can reach us by email at
            shopwise@customersupport.com, or by phone at +91-8899776814. Our
            customer service team is available 8AM to 10PM ISt to assist you
            with any questions or concerns you may have.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ShopWise</span>
          <span className="copyright">
            Copyright © 2023 ShopWise. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
