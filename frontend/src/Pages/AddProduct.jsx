import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css"

const AddProduct = () => {
    const navigate=useNavigate();
    const [imageurl,setImageurl]=useState(null);
    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          // Read the selected image file as a data URL
          const reader = new FileReader();
          reader.onload = () => {
            // Set the data URL as the state for the selected image
            setImageurl(reader.result);
            console.log(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          // Clear the state if no file is selected
          setImageurl(null);
        }
      };

    const formsubmit=async (event)=>{
        event.preventDefault();
        console.log("form submited");
        const name=document.getElementById('name').value;
        const product_id=document.getElementById('product_id').value;
        const product_manufacture=document.getElementById('product_manufacture').value;
        const product_discription=document.getElementById('product_discription').value;
        const product_quantity=document.getElementById('product_quantity').value;
        const product_category=document.getElementById('product_category').value;
        
        if(name=="" || product_id=="" || product_manufacture=="" || product_discription=="" || imageurl==null){
            alert("please fill the required boxes");
            return;
        }
        
        const res=await fetch('http://localhost:3000/add',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({imageurl,name,product_id,product_manufacture,product_discription,product_quantity,product_category})
        });


        const data=await res.json();
        console.log(data);
        if(!data){
            console.log("data not saved ");
            window.alert("Product not saved due to error");
        }else{
            alert("Product saved check database");
            console.log(data.product);
            navigate(`/barcode/:${data.product._id}`);
        }
    }
  return (
    <>
        <div className="container">
            <div className="header"><h3>Add Product</h3></div>
            {
                imageurl ? <img src={imageurl} alt={imageurl ? imageurl : "image dislplay"} /> 
                : <img src='./profile.jpg' alt='non'/>
            }
            <input id='img_input' type="file" onChange={handleImageChange} accept='image/*' />
            <div className='hint'>image size must be less than 1MB</div>
            <form id='form'>
                <input type="text" id="name" name="name" placeholder="name"/>
                <input type="text" id="product_id" name="product_id" placeholder="product_id"/>
                <input type="text" id="product_manufacture" name="product_manufacture" placeholder="product_manufacture"/>
                <input type="text" id="product_discription" name="product_discription" placeholder="product_discription"/>
                <input type="text" id="product_quantity" name="product_quantity" placeholder="product_quantity"/>
                <input type="text" id="product_category" name="product_category" placeholder="product_category"/>
                <div className="btns">
                    <button onClick={()=>navigate('/')} style={{backgroundColor:'red', color:'white'}}>Cancle</button>
                    <button onClick={formsubmit} style={{backgroundColor:'green', color:'white'}}>Add Product</button>
                </div>
                
            </form>
        </div>
      
    </>
  )
}

export default AddProduct
