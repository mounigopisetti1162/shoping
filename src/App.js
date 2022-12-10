import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import content from './content.json'
import Navbar from './components/navbar'
import Header from './components/Header'
import Products from './components/Card'


function App() {
  
  
const [cartCount,setcartCount]=useState(0);

// console.log(cartCount)

const addcart1=()=>{
setcartCount(cartCount + 1)
console.log("moh")
}

const removecart2=()=>{
if(cartCount>0)
{
 setcartCount(cartCount - 1)

}
  
}
  
return (
  <>
<Navbar cartCount={cartCount} /> 
<Header/>
      
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  { content.map((data) =>(
                   <Products content={data} 
                   key={data.id}
                   addcart1={addcart1}
                   count={cartCount}
                   removecart2={removecart2} 
                  />
                   
                   
))} 
                </div> 
            </div>
    </section> 
   
    </>
    );
  }
  export default App;