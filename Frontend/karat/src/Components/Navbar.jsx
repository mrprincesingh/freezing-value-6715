import React from "react";
import "./NavbarStyle.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSearch,
  FaYoutubeSquare,
} from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Icon
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import karatlogo1 from "../Assests/karatlogo1.png";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PersonIcon from "@mui/icons-material/Person";
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarCheck,
  faClose,
  faCoins,
  faHomeAlt,
  faLocationDot,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [ signout, setSignOut] = useState(true)

 const handleClick = () =>{
  localStorage.removeItem('token');
  window.localStorage.setItem("user","User")
  setSignOut(!signout)
 }

 const  user = localStorage.getItem("user") || "user";
  

  return (
    <div className="whole">
      <div className="top" style={{textAlign:"center"}}>
        <p>
          introducing Crystal & Gold pro! - purchase your plan{" "}
          <span style={{ color: "orange" }}>here</span>
        </p>
      </div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <a href="/">
              <img src={karatlogo1} alt="logo_image" width={150}></img>
            </a>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          id="navbar"
          style={{ marginTop: "10px" }}
        >
          <ul>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/" className="active">
                  <FontAwesomeIcon icon={faHomeAlt} />
                  {/* < AiFillHome/> */}
                  &nbsp; FREE TRY AT HOME
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faStore} />
                  {/* <FaStore/> */}
                  &nbsp; FIND STORE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  {/* <SlCalender/> */}
                  &nbsp; PLAN OF PURCHASE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCoins} />
                  {/* <FaCoins/> */}
                  &nbsp; BUY DIGITAL GOLD
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "12px" }} className="input">
              <form>
                <input
                  style={{
                    borderRadius: "5px 0px 0px 5px",
                    width: "190px",
                    fontSize: "14px",
                    padding: "6px 10px",
                  }}
                  type="text"
                  placeholder="Search..."
                />
                <button
                  style={{
                    backgroundColor: "#aa5af1",
                    borderRadius: "0px 5px 5px 0px",
                    padding: "10px 10px",
                    marginTop: "5px",
                  }}
                  type="submit"
                >
                  <FaSearch />
                </button>
              </form>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media" style={{ paddingTop: "10px" }}>
          <ul className="social-media-desktop">
            <li>
              <Link style={{ fontSize: "30px" }} to="/">
                <ImLocation />
              </Link>
            </li>
            <li>
              {/* <BsPersonCircle onMouseEnter={toggleDropDown} />
              <div style={{ widt: "100px", height: "auto" }}>
                {isOpen && (
                  <div>
                    <select style={{ display: "block", fontSize: "18px" , background:"white", width:"100px"}}>
                     
                      <option value=""> <img src="https://img.icons8.com/ios-filled/256/user.png" alt="" /></option>
                      <option style={{ background:"white"}}>Admin Side</option>
                      <option>Sing up</option>
                      <option>Login</option>
                      <option>logout</option>
                    </select>
                  </div>
                )}
              </div> */}
              <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />} w="100%">
  <Icon boxSize="30px" as={CgProfile}/>
  </MenuButton>
  <MenuList align={"center"}>
    <Link to="/admin/login">
    <MenuItem fontSize={"20px"}>Admin</MenuItem>
    </Link>
    <Link>
    <MenuItem fontSize={"20px"}> {user} </MenuItem>
    </Link>
    
    {/* <Link to="/login"></Link> */}
    
    
    { signout ?  <Link to="/login">
    <MenuItem fontSize={"20px"}>Login</MenuItem>
    </Link> : <MenuItem fontSize={"20px"} onClick={handleClick}>LogOut</MenuItem>}
  </MenuList>
</Menu>
            </li>
            <li>
              <Link to="/wishlist">
                <AiFillHeart />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div>
        <ul id="navbar1">
          <li>
            <Link to="/product">NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/product">RINGS</Link>
          </li>
          <li>
            <Link to="/product">EARRINGS</Link>
          </li>
          <li>
            <Link to="/product">BRACELETS & BANGLES</Link>
          </li>
          <li>
            <Link to="/product">SOLITARIES</Link>
          </li>
          <li>
            <Link to="/product">MANGALSUTRA</Link>
          </li>
          <li>
            <Link to="/">READY TO SHIP</Link>
          </li>
          <li>
            <Link to="/product">KIDS</Link>
          </li>
          <li>
            <Link to="/product">OTHERS JEWELLERY</Link>
          </li>
          <li>
            <Link to="/product">GIFTING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
