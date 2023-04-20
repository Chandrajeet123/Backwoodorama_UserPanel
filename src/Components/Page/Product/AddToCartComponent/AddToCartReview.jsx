import { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import Button from '@mui/material/Button';
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import _ from "lodash"
import React from "react";
import Createcontext from "../../../../Hooks/Context"
const AddToCartReview = ({ SetTotal, Total }) => {
    const {  dispatch } = React.useContext(Createcontext)
    const count = useRef(null);
    const count1 = useRef(null);

    const [LocalData, SetLocalData] = React.useState()
    React.useEffect(() => {
        const items = localStorage.getItem('items')
        SetLocalData(JSON.parse(items))

      
        if (Total?.length === 0) {
            JSON.parse(items)?.map((value) => {
                if (value.Price_index.length === 0) {
                    value.Prices.map((Pricevalue) => {
                      
                        SetTotal(Total => [...Total, { Price: Pricevalue[0]?.SalePrice * value.Product_Quantity, Id: value.Product_id, Amount: Pricevalue[0]?.SalePrice }])
                    })
                }
                else {
                    value.Prices.map((Pricevalue) => {
                
                        Pricevalue?.Price?.map((da) => {
                            if (da.id === value.Price_index[0].Item_id)
                                SetTotal(Total => [...Total, { Price: da?.SalePrice * value.Product_Quantity, Id: value.Product_id, Amount: da?.SalePrice }])
                        })


                    })

                }


            })
        }

    }, [localStorage.getItem('items')])




    function DeleteItem(Id) {
        var obj = JSON.parse(localStorage.getItem("items"));
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].Product_id === Id) {
                obj.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("items", JSON.stringify(obj));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))
        SetTotal(oldValues => {
            return oldValues.filter(Total => Total.Id !== Id)
          })
          dispatch({type:'CartCount' , CartCount: JSON.parse(item).length })

    }
    function Quantity(Id, Product_Quantity) {
        var obj = JSON.parse(localStorage.getItem("items"));
        var s = obj?.map((arr) => {
            if (arr.Product_id === Id) {

                return { ...arr, Product_Quantity: arr.Product_Quantity + 1 }
            }
            return arr

        })
        localStorage.setItem("items", JSON.stringify(s));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))

        SetTotal(
            Total?.map((data) => {
                if (Id === data.Id) {
                    return { ...data, Price: data.Amount * (Product_Quantity + 1) }
    
                }
    
                return data
    
            })
        )

    }
    function decreaseQuantity(Id , Product_Quantity) {
        var obj = JSON.parse(localStorage.getItem("items"));
        var s = obj?.map((arr) => {
            if (arr.Product_id === Id) {

                return { ...arr, Product_Quantity: arr.Product_Quantity - 1 }
            }
            return arr

        })
        localStorage.setItem("items", JSON.stringify(s));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))
        SetTotal(
            Total?.map((data) => {
                if (Id === data.Id) {
                    return { ...data, Price: data.Amount * (Product_Quantity - 1) }
    
                }
    
                return data
    
            })
        )

    }

    return (
        <>
            <div className="col-12  AddProductCartContainerinner">
                {LocalData?.map((ele, index) => {
                    return (
                        <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                            <div className="col-12  Add_prod_item_image">

                                <div className="col-1 Add_prod_item_image_cont">
                                    <LazyLoadImage src={`http://52.3.255.128:8000//${ele.Image[0]?.image}`} alt="imag not found" />
                                </div>
                                <div className="col-8 Add_prod_content_cont p-2">
                                    <div className="col-12 fontStyle  add_prod_para_font">
                                        <h5>{ele.Product_Name}  </h5>

                                    </div>

                                    <div className="col-12 fontStyle  add_prod_para_margin add_prod_cart_p">
                                        <p>{ele.StoreName}</p>

                                    </div>
                                    <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                        {ele?.Prices.map((ele1, index) => {
                           
                                
                                            if (ele.Price_index?.length === 0) {
                                                return (

                                                    <span className="add_prod_span_amount fontStyle" key={index}>${ele1.Price[0].SalePrice}</span>
                                                )
                                            }
                                            else {
                                                const d = ele1?.Price?.find((PriceSelect) => {
                                                    return (PriceSelect.id === ele.Price_index[0].Item_id) && PriceSelect.Price
                                                })
                                                
                                                return (
                                                <span className="add_prod_span_amount fontStyle" key={index}>
                                                    
                                                    ${d.SalePrice}
                                                
                                                </span>
                                                )
                                            }
                                        })
                                        }


                                    </div>
                                    <div className='col-12'>
                                        <div className='AddToCartReviewBtn d-flex' >
                                            <div className='addToCart_btn'>
                                            <Button  style={{ width: "15px"}} > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id, ele.Product_Quantity) }} />}</Button>


                                            </div>
                                            <div className='AddToCartCount' style={{width:"20px"}}>
                                            <p>{ele.Product_Quantity}</p>

                                            </div>
                                            <div className='addToCart_btn'>
                                            <Button className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.Product_id, ele.Product_Quantity) }} ><AiOutlinePlus /></Button>

                                            </div>

                                        </div>

                                    </div>
                                 
                                </div>
                                <div className="col-3 ">
                                    <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                        <RiDeleteBin6Line onClick={(() => { DeleteItem(ele.Product_id) })} />
                                    </div>

                                    <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                        {ele?.Prices.map((ele1, index) => {
                                            // console.log(document.getElementById(ele1.id))
                                            // var JsonObject = JSON.parse(JSON.stringify(ele1))
                                            // var jsondata = JSON.parse(JsonObject.Price)
                                            if (ele.Price_index?.length === 0) {
                                                // SetTotal((Total) => { [...Total, jsondata[0].Price * ele.Product_Quantity] })

                                                return (

                                                    <div key={index} >
                                                        <p> Amount</p>  <span className="add_prod_span_amount fontStyle Amount" id={ele1.id} value={ele1.Price[0].SalePrice * ele.Product_Quantity} ref={count} >{ele1.Price[0].SalePrice * ele.Product_Quantity}</span>
                                                    </div>
                                                )
                                            }
                                            else {
                                                const d = ele1.Price?.find((PriceSelect) => {
                                                    return (PriceSelect.id === ele.Price_index[0].Item_id) && PriceSelect.Price
                                                })
                                                return (

                                                    < div key={index} >

                                                        <p> Amount</p> <span className="add_prod_span_amount Amount fontStyle" id={ele1.id}  value={d.SalePrice * ele.Product_Quantity} ref={count1}>{d.SalePrice * ele.Product_Quantity}</span>
                                                    </div>
                                                )

                                            }
                                        })}





                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default AddToCartReview