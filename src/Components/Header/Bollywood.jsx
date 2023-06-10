import React from 'react';
import { Total } from "../Assets/data";
import { Link } from 'react-router-dom';


function Bollywood() {
  return (
    <div className='p1'>
    <div className='Main'>
      <section className='section1'>
        <h4 > Bollywood</h4>
        <div className='head'></div>
        <div className="allPosts">
          {Total.filter((e) => { return e.class === "Bollywood1" }).map((item, index) => (
            <div className="latest1">
              <Link to={`/details/${item.id}`} state={{ item }}key={index}><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }}key={index}><h4>{item.title}</h4></Link>
                <h6>{item.desc}</h6>
                <h6>{item.category} / {item.date}</h6>
              </div>
            </div>
          ))
          }
        </div>
      </section>
      <section className='bollyS2'>
        <h4 > Top Posts</h4>
        <div className='head'></div>
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt=""  className='natureImg'/>
        <div className="allTopPosts">
          {Total.filter((e) => { return e.class === "Bollywood2"}).map((item,index)=>(
            <div className="latest2">
              <Link to={`/details/${item.id}`} state={{ item }}key={index}><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }}key={index}><h4>{item.title}</h4></Link>
                <h6>{item.desc}</h6>
                <h6>{item.category} / {item.date}</h6>
              </div>
            </div>
          ))
          }
        </div>
        <div className="advertisment">
          <h4>Advertisment</h4>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Bollywood;