
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollContainer } from 'react-indiana-drag-scroll';
const NewsBlog = () => {
    const [News, SetNews] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://api.cannabaze.com/UserPanel/Get-News/");
            const data = await res.json();
            SetNews(data)
          

        }
        getApi()

    }, [])
  
    return (
        <React.Fragment>
            <div className="container-fluid">
              <h3 className="section_main_title">Blogs</h3>
                    <div className="blogs_card_slider">
                        <ScrollContainer className="blogSlider">
                           
                                {News?.map((ele, index) => {
                                    return (
                                        <Link to={`/Blogs/${ele.id}`} key={index}> 
                                            <div className="new_blog_card">
                                                <div className="new_blog_card_img">
                                                    <img src={`https://api.cannabaze.com/${ele.Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                                </div>
                                                <div className="new_blog_card_text">  
                                                    <span className="fontStyle latest_font_size  ">
                                                        {ele.Title}
                                                    </span>
                                                    {/* <span className=" common_sub_head">{parse(ele?.Description)}</span>
                                                */}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                          
                        </ScrollContainer>
                    </div>
               
            </div >
        </React.Fragment>
    )
}
export default NewsBlog