import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import BarcodeGenerator from '../Components/BarcodeGenerator';
import './Barcode.css'
const Barcode = () => {
    const navigate=useNavigate();
    const {_id}=useParams();
    const productId=_id.slice(1);
    const [product, setProduct] = useState({});
    console.log(productId);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/getproducts/${productId}`);
                const data = await response.json();
                setProduct(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    const {name,product_id,product_manufacture,product_discription,product_quantity,product_category,imageurl}=product;
    
    
    return (
        <div id='bar_container'>
            
            <div className="header"><h3>Product View</h3></div>
            <div className="con">
                <div className="pro_det">
                    <div className='img'><img src={imageurl} alt="" /></div>
                    
                    <div className="des">
                        <h3>{name}</h3>
                        <h4>{product_discription}</h4>
                        <p><span>Manufacturer: </span> {product_manufacture} <span>Product ID: </span> {product_id}</p>
                        <p><span>Quantity: </span> {product_quantity} <span>Category: </span> {product_category}</p>
                    </div>
                </div>
            </div>
            
            
            <div className="barcode">
                
            <BarcodeGenerator data={product} />
            <div className="btn">
                <button>Print Barcode</button>
                <button>Save to Device</button>
            </div>
            </div>


            <div className="btns">
                <button onClick={()=>navigate('/')} style={{backgroundColor:'red', color:'white'}}>Home</button>
                <button  style={{backgroundColor:'green', color:'white'}}>Add Product</button>
            </div>
        </div>
    )
}

export default Barcode
