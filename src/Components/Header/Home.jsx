import React from 'react'
import { useState ,useEffect} from 'react';
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";
import HomeCard from './HomeCard';
import axios from 'axios';


const SampleNextArrow=(props)=>{
  const  {onClick}=props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
      <MdNavigateNext className="icon"/>
      </button>
    </div>
  )
}
const SamplePrevArrow=(props)=>{
  const  {onClick}=props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
      <GrFormPrevious className="icon"/>
      </button>
    </div>
  )
}
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
    responsive:[{
      breakpoint: 800,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }
    }]
  };
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://bloghsapi.onrender.com/api/categories/Data")
    .then((response) => setData(response.data))
    .catch((error) => console.log("Error", error))
  },[])

  return (
    <>
      <section className='category'>
        <div className="Content">
          <Slider {...settings}>
            {data.map((item) => (

              <div className='boxs' key={item.id}>
                <div className="box">
                  <h1>{item.text}</h1>
                  <img src={item.cover} alt="cover" />
                </div>
                <div className="overlay">
                  <h4>{item.category} </h4>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <HomeCard/>
    </>
  )
}

export default Home;