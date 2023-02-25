import React, { useState } from 'react';
import styles from "../Styles/Checkbox.module.css";
 
 export const SideBar = () => {


    const stylediv={
            textAlign:'left',
            padding:'40px',
            marginTop:'-50px',
            fontSize:'18px',
        }
        const top={
            marginTop:'20px',
            textAlign:'left',
            padding:'40px',
            fontSize:'18px',
        }

        const stylediv2={
            backgroundColor:'#F6F3F9',
            height:'70px',
            textAlign:'center',
            borderRadius:'20px 20px 0px 0px',
            padding:"20px"
        }
        const check ={
            marginRight:'20px',
             width:'20px'
            }
        const texth={
            fontSize:"20px",
            fontWeight:'bolder'
        }

        
     const [ranges, setRanges] = useState([
                { name: '0-2 g', checked: false },
                { name: '2-5 g', checked: false },
              ]);
            
              const handleCheckboxrange = (index) => {
                const newRanges = [...ranges];
                newRanges[index].checked = !newRanges[index].checked;
                setRanges(newRanges);
              };


    const [categories, setCategories] = useState([
        { name: 'Earrings', checked: false },
        { name: 'Rings', checked: false },
        { name: 'Necklaces', checked: false },
        { name: 'Pendants', checked: false },
        { name: 'Bracelets', checked: false },
        { name: 'Chains', checked: false },
        { name: 'Mangalsutra', checked: false },
        { name: 'Nose pin', checked: false },
        { name: 'Adjustable Rings', checked: false },
        { name: 'Charm Builders', checked: false },
        { name: 'Baby Bangles', checked: false },
      ]);
    
      const handleCheckbox = (index) => {
        const newCategories = [...categories];
        newCategories[index].checked = !newCategories[index].checked;
        setCategories(newCategories);
      };
    


    const [priceRanges, setPriceRanges] = useState([
        { range: '₹5,001 - ₹10,000', checked: false },
        { range: '₹10,001 - ₹15,000', checked: false },
        { range: '₹15,001 - ₹20,000', checked: false },
        { range: '₹20,001 - ₹30,000', checked: false },
        { range: '₹30,001 - ₹40,000', checked: false },
        { range: '₹40,001 - ₹50,000', checked: false },
        { range: '₹50,001 - ₹75,000', checked: false },
        { range: '₹75,001 - ₹1,00,000', checked: false },
        { range: '₹1,00,001 - ₹1,50,000', checked: false },
        { range: '₹1,50,001 - ₹2,00,000', checked: false },
        { range: '₹2,00,001 - ₹2,50,000', checked: false },
        { range: 'Over ₹2,50,000', checked: false },
      ]);
    
      const handleCheckboxChange = (index) => {
        const newPriceRanges = [...priceRanges];
        newPriceRanges[index].checked = !newPriceRanges[index].checked;
        setPriceRanges(newPriceRanges);
      };
   return (
     <div style={{
        marginTop:"115px",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        height: "100%",
        width:'auto',
        position: "fixed",
        zIndex: "1",
        top: "0",
        // left: "0",
        overflowX: "hidden",
        paddingTop: "20px"
     }}>
        <div style={stylediv2}>
        <h3 style={texth}>Filter By</h3>
        </div>
        <br />

        <div style={stylediv}>
      <h1 style={texth}>Price</h1>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input style={check} circular type="checkbox" checked={range.checked} onChange={() => handleCheckboxChange(index)} />
          {range.range}
        </div>
      ))}
    </div>
    
    <hr />

    <div style={top}>
      <h1 style={texth}>Product Type</h1>

      {categories.map((category, index) => (
        <div key={index}>
          <input style={check} type="checkbox" checked={category.checked} onChange={() => handleCheckbox(index)} />
          {category.name}
        </div>
      ))}
    </div>

<hr />
    <div style={top}>
        <h1 style={texth}>Weight Ranges</h1>
      {ranges.map((range, index) => (
        <div key={index}>
          <input style={check} type="checkbox" checked={range.checked} onChange={() => handleCheckboxrange(index)} />
          {range.name}
        </div>
      ))}
    </div>

     </div>
   )
 }
 