import React from 'react'
import navIcon1 from "/icons/nav-icon1.svg";
import navIcon2 from "/icons/nav-icon2.svg";
import navIcon3 from "/icons/nav-icon3.svg";


const Footer = () => {
  return (
    <div className="w-full text-white bg-cover bg-center" style={{backgroundImage : `url("images/footer-bg.png")`}}>
    <div className="flex flex-row pt-20 p-8 justify-between">
        <h1 className="font-extrabold text-5xl font-nunito">Pavan Kumar K</h1>
      <div>
        <div className="flex flex-row gap-5 p-2">
          <a href="#">
            <img src={navIcon1} alt="Icon" />
          </a>
          <a href="#">
            <img src={navIcon2} alt="Icon" />
          </a>
          <a href="#">
            <img src={navIcon3} alt="Icon" />
          </a>
        </div>
        <p className="font-nunito text-wrap font-thin p-2">CopyRight 2022. All Rights Reserved</p>  
      </div>

    </div>
</div>
  )
}

export default Footer