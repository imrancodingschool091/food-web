import React from 'react'
import './About.css'

function About() {
  return (
    <div>
  <div>
    <h1 className="head text-center my-5 text-danger fs-3 ">About Us</h1>
    <div className="parent">
      <div className="img1">
        <img src="https://thumbs.dreamstime.com/b/elegant-table-setting-restaurant-interior-elegant-table-setting-restaurant-interior-257717004.jpg" alt className="image mx-3 my-3" />  </div>
         <div>
        <p className="fs-5 my-4 para2"> <i className="fa-solid fa-circle-check text-danger mx-2" />Welcome to our website, your all-in-one solution for seamless and efficient restaurant management. Our system is designed to streamline every aspect of restaurant operations, from order management and inventory tracking to staff scheduling and customer feedback.</p>
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" />we aim to empower restaurants of all sizes with cutting-edge technology that simplifies daily operations, enhances customer satisfaction, and drives profitability. We understand the fast-paced nature of the food service industry and have built a solution tailored to meet those dynamic needs.</p>
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" /> our vision is to revolutionize the restaurant industry by providing cutting-edge technology that simplifies complex processes. We believe restaurants should focus on delivering great food and memorable experiences, while we handle the backend operations with smart automation and real-time insights.</p>     
        <p className="fs-5 my-4 para2"><i className="fa-solid fa-circle-check text-danger mx-2" />your smart and reliable partner in modern restaurant operations. Designed with innovation and efficiency in mind, DelishTrack helps restaurant owners and managers seamlessly manage daily operations, enhance customer service, and boost profitability, all in one intuitive platform.</p>
        
      </div>
    </div>
  </div>
  <h2 className=" text-center text-danger fs-4">Why Us</h2>
  <h2 className="h2 text-center text-dark fs-3 ">Why choose <span className="text-danger "> Our Restaurant</span></h2>
  <div className="flex d-flex my-5 ">
    <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2 ">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />User-Friendly Interface</h5>
        <p className="card-text1 my-3 ">Easy to learn and use, even for non-technical staff.</p>
      </div>
    </div>
    <div className="card  text-center shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />Customizable &amp; Scalable</h5>
        <p className="card-text1 my-3 ">Adapt the system to match your restaurant's unique workflow.</p>
      </div>
    </div>
    <div className="card text shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
      <div className="card-body my-2">
        <h5 className="card-title1 "> <i className="fa-solid fa-square-check  text-danger mx-1" />Secure &amp; Reliable</h5>
        <p className="card-text1 my-3 ">We prioritize your data security and system reliability.</p>
      </div>
    </div>
  </div>
  
  </div>
  
  )
}


export default About
