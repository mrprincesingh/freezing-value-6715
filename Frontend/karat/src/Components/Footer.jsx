import React from "react";
import social from "../Assests/socialMedia.png";
import payment from "../Assests/payment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div>
      <div className="mainup">
        <div className="main">
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Know Your Jewellery
                </p>
              </li>
              <li>DIAMOND GUIDE</li>
              <li>JEWELLERY GUIDE</li>
              <li>GEMSTONES GUIDE</li>
              <li>GOLD RATE</li>
              <li>DIGITAL GOLD</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Crystal & Gold Advantage
                </p>
              </li>
              <li>15-DAY RETURNS</li>
              <li>FREE SHIPPING</li>
              <li>FINANCING OPTIONS</li>
              <li>OLD GOLD EXCHANGE</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Customer Service
                </p>
              </li>
              <li>RETURN POLICY</li>
              <li>ORDER STATUS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>About Us</p>
              </li>
              <li>OUR STORY</li>
              <li>PRESS</li>
              <li>BLOG</li>
              <li>CAREERS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <b style={{ fontWeight: "600", fontSize: "16px" }}>
                  Contact Us
                </b>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> &nbsp;{" "}
                <FontAwesomeIcon icon={faMessage} /> &nbsp;{" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li>24X7 Enquiry Support (ALL Days)</li>
              <li>
                general : <a style={{ color: "#c275e6" }}>Contactus@CG.com</a>
              </li>
              <li>
                coperate : <a style={{ color: "#c275e6" }}>B2B@CG.com</a>
              </li>
              <li>
                HR : <a style={{ color: "#c275e6" }}>Carrers@CG.com</a>
              </li>
              <li>
                graviences : <a style={{ color: "#c275e6" }}>Click here</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerbottom">
          <div>
            <img style={{ width: "50%" }} src={social}></img>
          </div>
          <div style={{marginLeft:"-400px"}}>
        
          </div>
          <div>
            <p id="text" 
              style={{
                color: "grey",
                padding: "10px 0px",
                marginLeft: "-370px",
              }}
            >
              Download Crystal & Gold app
            </p>
            <img
              style={{
                border: "3px solid #c275e6",
                borderRadius: "25px",
                width: "50%",
                
              }}
              src="https://t4.ftcdn.net/jpg/03/91/88/25/360_F_391882584_42M28Owo18MHXw4yNxSQ5tSjVWnnyb7s.jpg"
              alt="download app"
            />
          </div>

          <div id="last">
            <p
              style={{
                color: "grey",
                padding: "10px 0px",
                marginLeft: "-280px",
              }}
            >
              We Support All Payment Gateways
            </p>
            <img style={{ width: "70%" }} src={payment}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
