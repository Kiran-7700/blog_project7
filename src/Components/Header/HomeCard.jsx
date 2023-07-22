import React, { useEffect, useState } from 'react'
//import { blog, latestArticle, topPosts, latestStories } from "../Assets/data"
import { AiOutlineTags } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineShareAlt } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import { Link } from 'react-router-dom'
import axios from 'axios';

function HomeCard() {
    const [blog, setBlog] = useState([]);
    const [latestArticle, setLatestArticle] = useState([]);
    const [topPosts, setTopPosts] = useState([]);
    const [latestStories, setLatestStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const blog = await axios(`https://project7-backend.onrender.com/api/categories/blog`);
          const latestArticle = await axios(`https://project7-backend.onrender.com/api/categories/latestArticle`);
          const topPosts = await axios(`https://project7-backend.onrender.com/api/categories/topPosts`);
          const latestStories = await axios(`https://project7-backend.onrender.com/api/categories/latestStories`);
    

          setBlog(blog.data)
          setLatestArticle(latestArticle.data)
          setTopPosts(topPosts.data)
          setLatestStories(latestStories.data)
        };
    
        fetchData()
      }, []);


    return (
        <div>
            <section className='blog'>
                <h4 >The Latest</h4>
                <div className='head'></div>
                <div className="container grid3">
                    {blog.map((item, index) => (
                        <div className=" boxItem" key={item.id}>
                            <div className="img">
                                <Link to={`/details/${item.id}`} state={{ item }} key={index} >
                                    <img src={item.cover} alt="" />
                                </Link>
                            </div>
                            <div className="details">
                                <div className="tag">
                                    <AiOutlineTags className='icon' />
                                    <a href="/">#{item.category}</a>
                                </div>
                                <Link to={`/details/${item.id}`} className="link" state={{ item }} key={index} >
                                    <h4>
                                        {item.title}
                                    </h4>
                                </Link>
                                <p className='description'>{item.desc.slice(0, 180)}...</p>
                                <div className="date">
                                    <AiOutlineClockCircle className='icon' />
                                    <label htmlFor="">{item.date}</label>
                                    <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                                    <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='articles'>
                <h4 > Latest Articles</h4>
                <div className='head'></div>
                <div className='section2'>
                    <div className="grid1">
                        {latestArticle.map((item, index) => (
                            <div className="article">
                                <Link to={`/details/${item.id}`} state={{ item }}
                                    key={index}>
                                    <img src={item.cover} alt="" />
                                </Link>
                                <div className="date">
                                    <Link to={`/details/${item.id}`} state={{ item }}
                                        key={index}>
                                        <h4>{item.title}</h4>
                                    </Link>
                                    <h6>{item.desc}</h6>
                                    {item.category} /
                                    {item.date}
                                </div>
                            </div>
                        ))}
                        <button className='Load'> <AiOutlineDown />
                            Load More
                        </button>
                    </div>
                    <div className="advertisement">
                        <h2 className='ad'>Advertisement</h2>
                    </div>
                    <div className='randomImage'>
                        <img src="https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_640.jpg" alt="" />
                    </div>
                    <div className='topPosts'>
                        <h4 > Top Posts</h4>
                        <div className='head'></div>
                        <img src="https://cdn.pixabay.com/photo/2021/06/01/16/15/island-6302137_640.jpg" alt="" />
                        {topPosts.map((item, index) => (
                            <div className="topPost">
                                <Link to={`/details/${item.id}`} state={{ item }}
                                    key={index}>
                                    <img src={item.cover} alt="" />
                                </Link>
                                <div>
                                    <Link to={`/details/${item.id}`} state={{ item }}
                                        key={index}>
                                        <h2>{item.title}</h2>
                                    </Link>
                                    <h6>{item.category}/{item.date}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='section3'>
                <h4> latest Stories</h4>
                <div className='head'></div>
                <div className="Stories">
                    {latestStories.map((item) => (

                        <div className='sPost'>
                            <h2>{item.title}</h2>
                            <h6>{item.desc}</h6>
                            <h6>{item.date}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomeCard;