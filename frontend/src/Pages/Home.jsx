import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="dash_container">
        <div className="head">
          <div className="name"><h2>Made 2 Automate</h2></div>
          <div className="logo">
              logo
          </div>
        </div>


        <div className="count_container">
          <div className="num">
            <h1 style={{color:'purple'}}>112</h1>
            <p>Total Orders</p>
          </div>
          <div className="num">
            <h1 style={{color:'orange'}}>112</h1>
            <p>Total Orders</p>
          </div>
          <div className="num">
            <h1 style={{color:'cyan'}}>112</h1>
            <p>Total Orders</p>
          </div>
          <div className="num">
            <h1>112</h1>
            <p>Total Orders</p>
          </div>
        </div>


        <div className="total_orders">

          <div className="bar">
            <div className="text">
              <h2>Total Order</h2>
              <p>A summery of your orders</p>
            </div>
            <button>View All</button>
          </div>
          
          <div className="order">
            <h4>IR Sensor</h4>
            <p>discription</p>
            <p>Quantity: <span>400</span> prices</p>
          </div>

          <div className="order">
            <h4>IR Sensor</h4>
            <p>discription</p>
            <p>Quantity: <span>400</span> prices</p>
          </div>

        </div>
        <br />
        <hr />
        <br />
        <div className="total_orders">

          <div className="bar">
            <div className="text">
              <h2>Total Leads</h2>
              <p>A summery of your Leads</p>
            </div>
            <button>View All</button>
          </div>

          <div className="order">
            <h4>Rakesh Verma</h4>
            <p>discription</p>
            <p>Quantity: <span>400</span> prices</p>
          </div>

          <div className="order">
            <h4>Jayanta Cheterjee</h4>
            <p>discription</p>
            <p>Quantity: <span>400</span> prices</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home
