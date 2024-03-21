import {categories} from "./data";
import  {products} from "./data";
// import "./index.css";
console.log(products)
console.log(categories)

function App() {
  const arr = products.map((item)=> item.image)
  console.log(arr)
  return (
    <div className="App">
      <header className="App-header">
     
          <h1 className="title">Product List</h1>   
      </header>
    
      <div className="container">
        {
          products.map((item,index)=>
          <div key={index} >
           
            <div className="img-container">
              <img src={item.image} alt="" />
            </div>
            {/* <p className="imgTitle">{item.title}</p> */}
            {/* <p className="productPrice">{item.price}$</p> */}
            {/* <p className="productDesc">{item.description}</p> */}
          </div>
          )
        }
       
      </div>
    </div>
  );
}

export default App;
