import {MdOutlineNotAccessible} from "react-icons/md"
import {BsFillCarFrontFill} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {MdSecurity} from "react-icons/md"
import {SiBrandfolder} from "react-icons/si"
import {MdOutlineImageSearch} from "react-icons/md"
import {Link} from "react-router-dom"
import React from "react"
const Amenities = () => {
    const AmmenitiesArray = [{ item: "Accessible" ,icon:<MdOutlineNotAccessible/>,color:"#000000"}, 
    { item: "age" ,icon:<MdOutlineImageSearch/>,color:"#000000"}, { item: "Curbside Pickup",icon:<BsFillCarFrontFill/>,color:"#000000" },
    { item: "Medical",icon:<AiOutlinePlus/> ,color:"#000000"}, { item: "Security" ,icon:<MdSecurity/>,color:"#000000"}, { item: "Brand verify",icon:<SiBrandfolder/>,color:"#000000" }]
    return (
        <React.Fragment>
                <div className="row  center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 amenities_container">
                        <div className="row center">
                            <div className="col-12  fontStyle">
                                <h2 className="amenties_nameHeading">Amenities</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ameitiesList_container_height">
                                <ol className="amenities_list">
                                    
                                    {AmmenitiesArray.map((ele, index) => {
                                        return (
                                            <Link to="#/" key={index} className="amenities_link">
                                            <li className="amenties_list_items">
                                              <div>
                                              <p style={{color:ele.color}}>{ele.icon}</p>
                                                <p className="amenities_list_item_paragrap listfontStyle">
                                                {ele.item}
                                                </p>
                                              </div>
                                                
                                                </li>
                                            </Link>

                                        )
                                    })}
                                </ol>
                            </div>

                        </div>


                    </div>

                </div>

        </React.Fragment>
    )
}
export default Amenities