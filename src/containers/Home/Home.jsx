import React, { useEffect, useState } from "react";

import foodImage from '../../assets/image.webp'
import './Home.css'

const Home = () => {
  return <div>
    <img  className="homeImage" src={foodImage} alt="food"></img>
  </div>;
};

export default Home;
