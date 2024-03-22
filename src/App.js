// import {categories} from "./data";
// import  {products} from "./data";
// // import "./index.css";
// console.log(products)
// console.log(categories)

// function App() {
//   const arr = products.map((item)=> item.image)
//   console.log(arr)
//   return (
//     <div className="App">
//       <header className="App-header">

//           <h1 className="title">Product List</h1>
//       </header>

//       <div className="container">
//         {
//           products.map((item,index)=>
//           <div key={index} >

//             <div className="img-container">
//               <img src={item.image} alt="" />
//             </div>
//             {/* <p className="imgTitle">{item.title}</p> */}
//             {/* <p className="productPrice">{item.price}$</p> */}
//             {/* <p className="productDesc">{item.description}</p> */}
//           </div>
//           )
//         }

//       </div>
//     </div>
//   );
// }

// export default App;

/* ********************************** */
/*             2nji cozum             */
/* ********************************** */
// import './App.css';
import { products } from "./data";
import { categories } from "./data";
import React, { useState } from "react"; //!React Hook

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterCategory = (category) => {
    if (category === "all") {
      return products;
    }
    return products.filter((product) => product.category === category);
  };

  const clickCategory = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Product List</h1>
        <div className="categories">
          {categories.map((category, index) => (
            <button key={index} onClick={() => clickCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="products">
          {filterCategory(selectedCategory).map((product, index) => (
            <div key={index} className="product">

            
             <div className="imageSec">
              <img src={product.image} alt="images" />
             </div>

             <p className="title">{product.title}</p>
             
              <h3 className="price">
                <span className="prColor">Price:</span>
                {product.price + "$"}
              </h3>
             
              
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default App;
