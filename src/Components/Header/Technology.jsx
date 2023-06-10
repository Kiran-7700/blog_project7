import React from 'react'
import { Total } from "../Assets/data";
import { Link } from 'react-router-dom';

function Technology() {
  return (
    <div className='p1'>
      <div className='Main'>
        <section className='section1'>
          <h4> Technology</h4>
          <div className='head'></div>
          <div className="allPosts">
            {Total.filter((e) => { return e.class === "technology1" }).map((item, index) => (
              <div className="latest1">
                <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
                <div>
                  <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
                  <h6>{item.desc.slice(0, 180)}</h6>
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
          <img src="https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg" alt="" className='natureImg' />
          <div className="allTopPosts">
            {Total.filter((e) => { return e.class === "technology2" }).map((item, index) => (
              <div className="latest2">
                <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
                <div>
                  <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
                  <h6>{item.desc.slice(0, 180)}</h6>
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

export default Technology;