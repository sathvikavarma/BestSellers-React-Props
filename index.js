
import React from "react";

import ReactDom from "react-dom";

import "./index.css";

 

const mobiles = [

  {

    id: 1,

    img: "https://images-eu.ssl-images-amazon.com/images/I/71anKwnc02L._AC_UL600_SR600,400_.jpg",

    title: "iPhone 11 Tempered glass screen",

    price: "$4.34",

  },

 

  {

    id: 2,

    img:"https://images-eu.ssl-images-amazon.com/images/I/615q8t7xqdL._AC_UL600_SR600,400_.jpg",

    title: "iPhone 14 bumper cover",

    price: "$8.9",

  },

 

  {

    id: 3,

    img:"https://images-eu.ssl-images-amazon.com/images/I/71ixSUCQnlL._AC_UL600_SR600,400_.jpg",

    title: "Waterproof phone pouch",

    price: "$10",

  },

  {

    id: 4,

    img:"https://images-eu.ssl-images-amazon.com/images/I/61ZsgJRSo6L._AC_UL600_SR600,400_.jpg",

    title: "iPhone 13 shock proof bumper",

    price: "$9.37",

  },

 

  {

    id: 5,

    img: "https://images-eu.ssl-images-amazon.com/images/I/71TO1g8hDWL._AC_UL600_SR600,400_.jpg",

    title: "iPhone 14 phonecase + screen and camera protector",

    price: "$15.9",

  },

 

  {

    id: 6,

    img: "https://images-eu.ssl-images-amazon.com/images/I/71f4kZJE-xL._AC_UL600_SR600,400_.jpg",

    title: "Iphone Xr- Tempered glass screen protector",

    price: "$5.7",

  },

];

 

function MobileList() {

  return (

    <>

    <div className="title">

    <h1>Amazon Best Sellers</h1>

    <h3 className="subtitle">Our most popular products based on sales. Updated frequently.</h3>

    </div>

    <section className="mobileList">

    <div className="row">

      {mobiles.map((mobile) => {

       

        return <Mobile  key={mobile.id} mobile={mobile}></Mobile>;

      })}

      </div>

    </section>

    </>

  );

}

const handleClick=(price)=>{
  console.log("the price of this product is",price)
}


const Mobile = (props) => {

 

  const {id, img, title, price } = props.mobile;

 

  return (

    <article className="mobile">

     <h3>{id}</h3>

      <img className="col" src={img} alt="pic" onClick={()=>alert("you are viewing...bestSelling product")} />

      <h3>{title}</h3>

      <h4>{price}</h4>
      <button onClick={()=>handleClick(price)}>Click to ConsoleLog</button>

     

    </article>

  );

};

 

ReactDom.render(<MobileList />, document.getElementById("root"));