import React, { useState } from "react";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import India from "../../images/india-flag-icon.png"
import { Link } from "react-router-dom";
import "./navbar.scss"
import Cart from "../Cart/Cart";
import { UserProfile } from "../UserProfile/UserProfile";
import { WishList } from "../../WishList/WishList";
import { Search } from "../Search/Search";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const data = useSelector(state => state.cart.products)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
            <div className="item">
                <img style={{width:'30px', height:'24px'}} src={India} alt="" />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>IND</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <Link className="link" to="/products/2" >Men</Link>
            </div>
            <div className="item">
                <Link className="link" to="/products/1" >Women</Link>
            </div>
            {/* <div className="item">
                <Link className="link" to="/products/3" >Children</Link>
            </div> */}
        </div>
        <div className="center">
            <Link className="link" to="/">ShopWise</Link>
        </div>
        <div className="right">
            <div className="item">
                <Link className="link" to="">Home</Link>
            </div>
            <div className="item">
                <Link className="link" to="">About</Link>
            </div>
            <div className="item">
                <Link className="link" to="">Contact</Link>
            </div>
            <div className="rightIcon">
                <SearchIcon onClick={() => setOpenSearchBar(!openSearchBar) }/>
                <PersonOutlineOutlinedIcon onClick={() =>{ setOpenProfile(!openProfile); console.log(openProfile);}}/>
                <FavoriteBorderOutlinedIcon onClick={() => setOpenList(!openList)}/>
                <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>{data.length}</span>
                </div>
            </div>
        </div>
      </div>
      {open && <Cart/>}
      {openList && <WishList/>}
      {openProfile && <UserProfile/>}
      {openSearchBar && <Search/>}
    </div>
  );
};

export default Navbar;
