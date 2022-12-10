import React from "react";
import {useState} from 'react'
import { AiFillStar } from "react-icons/ai";
import {Button} from 'reactstrap'

 function Products({content,addcart1,removecart2})
 {
    // console.log(isactive)
    const {name,avatar,pricing,button,badge,star,button2}=content

    // const [cartCount,setcartCount]=useState(0);
    const [isactive,setisactive]=useState(false)
    // console.log(cartCount)
  
  const addcart=()=>{
    // setcartCount(cartCount + 1)
    setisactive(!isactive)
    console.log(isactive)
  addcart1()
   
    
  }
 
  console.log(isactive)
  const removecart=()=>{
   
    //  setcartCount(cartCount - 1)
     setisactive(!isactive)
     console.log(isactive)
     removecart2()
    
      
    }

//   console.log(cartCount)
return(
   
    <div class="col mb-5">
    <div class="card h-100">
    {badge===true? <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                          :""}

       
        <img className="card-img-top" src={avatar} alt="..." />
      
        <div class="card-body p-4">
            <div class="text-center">
            
                <h5 class="fw-bolder">{name}</h5>
                {star===true?<div class="d-flex justify-content-center small text-warning mb-2">
                                       <AiFillStar />
                                       <AiFillStar />
                                       <AiFillStar />
                                       <AiFillStar />
                                      <AiFillStar />
                                      
                                     </div>:""}
            
                {pricing}
            </div>
        </div>
        
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><Button onClick={()=>addcart()} disabled={isactive===true?true:false}>{button}</Button>
            {button==="Add to cart"? <Button  onClick={removecart} disabled={isactive===true? false:true} >{button2}</Button>:""}
            </div>
        </div>
    </div>
</div>
)
 }
 export default Products;