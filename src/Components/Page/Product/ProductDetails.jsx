import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../Style"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ProductList from "./ProductList"
import Axios from "axios"
import React from "react"
import { useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import _ from "lodash";
import Createcontext from "../../../Hooks/Context"
import parse from 'html-react-parser';
import NewFlavourBanner from "../../Component/NewFlavour/NewFlavourBanner";
const ProductDetail = () => {
    const location = useLocation()
    const { state, dispatch } = React.useContext(Createcontext)
    console.log(location)
    const { Id } = location.state
    const [Item, SetItem] = React.useState([])
    const [ProductDetails, SetProductDetails] = React.useState([])
    const [Image, SetImage] = React.useState()
    const [GetStore ,  SetStore_id ] =  React.useState([])
    const [Product_Quantity, SetProduct_Quantity] = React.useState({
        Product_quantity: 1
    })
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })



    React.useEffect(() => {
        Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductById/${Id}`, {


        }).then(response => {
            SetProductDetails(response.data)
         
            Axios(`http://52.3.255.128:8000/UserPanel/Get-DispensaryByid/${response.data[0].Store_id}`, {


            }).then(response => {
                SetStore_id(response.data)
                // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))
            

            }).catch(
                function (error) {

                    alert("Something Goes Wrong")
                    // SetProduct(Product => ({ ...Product, discount: "None" }))
                })

        }).catch(
            function (error) {

                alert("Something Goes Wrong")
                // SetProduct(Product => ({ ...Product, discount: "None" }))
            })



    }, [])


    React.useEffect(() => {
        localStorage.setItem('items', JSON.stringify(AddTOCard))
        dispatch({ type: 'CartCount', CartCount: AddTOCard.length })
    }, [AddTOCard])


    function ImageSet(Id) {
        SetImage(Id)
    }

    function Quantity() {
        SetProduct_Quantity({ ...Product_Quantity, Product_quantity: Product_Quantity.Product_quantity + 1 })
    }

    function decreaseQuantity() {
        SetProduct_Quantity({ ...Product_Quantity, Product_quantity: Product_Quantity.Product_quantity - 1 })
    }


    const classes = useStyles()



    async function PriceSelect(Product, Item) {
        SetItem([{ Product_id: Product, Item_id: Item }])
    }
    function AddtoCard(Event) {
        const Arry = {
            Product_id: Event.id,
            Product_Name: Event.Product_Name,
            Prices: Event.Prices,
            Store_id: Event.Store_id,
            Image: Event.images,
            Price_index: Item,
            StoreName: Event.StoreName,
            Product_Quantity: Product_Quantity.Product_quantity
        }
        // SetAddToCard([...AddTOCard, Arry])
        const Status = AddTOCard.find((data) => {
            if (data.Product_id === Event.id) {
                return data
            }
            return false
        })
        const Store = AddTOCard.find((data) => {
            if (data.Store_id === Event.Store_id) {
                return true
            }
            return false
        })
        if (Store !== undefined) {
            if (Status !== undefined) {
                SetAddToCard(AddTOCard.map((Add) => {

                    if (Add.Product_id === Status.Product_id) {
                        if (Item.length !== 0) {
                            if (Item[0]?.Product_id === Add.Price_index[0]?.Item_id) {

                                return { ...Add, Product_Quantity: Product_Quantity.Product_quantity }
                            }
                            else {
                                return { ...Add, Price_index: Item, Product_Quantity: Product_Quantity.Product_quantity }
                            }
                        }
                        else {

                            return { ...Add, Product_Quantity: Product_Quantity.Product_quantity }
                        }
                    }

                    return Add
                }))
            }
            else (
                SetAddToCard([...AddTOCard, Arry])
            )
        }
        else {
            SetAddToCard([Arry])
        }


    }


    return (
        <div className="container-fluid p-4  add_prod_cont">
            <div className="row center">
                <NewFlavourBanner  delBtn={GetStore}></NewFlavourBanner>
                <div className="col-10  add_product_main_cont mt-5">
                    {
                        ProductDetails?.map((ele, index) => {
                            return (
                                <>
                                    <div className="col-3  add_product_img_continer" key={index}>
                                        <div className="col-12 add_prod_first_img">
                                            {Image ?
                                                ele?.images.map((data, index) => {
                                                    if (data.id === Image) {
                                                        return <LazyLoadImage key={index} src={`http://52.3.255.128:8000/${data.image}`} alt="img_not_found" />
                                                    }
                                                })
                                                :
                                                <LazyLoadImage src={`http://52.3.255.128:8000/${ele.images[0]?.image}`} alt="img_not_found" />

                                            }


                                        </div>
                                        <div className="col-12 add_prod_multiple_img">
                                            {ele?.images.map((eleImage, index) => {
                                                return (
                                                    <div className="col-3 p-2" key={index}>
                                                        <div className="col-12 add_prod_inner_img " onClick={(() => { ImageSet(eleImage.id) })}>
                                                            <LazyLoadImage src={`http://52.3.255.128:8000/${eleImage?.image}`} alt="img_not_found" />
                                                        </div>

                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                    <div className="col-7 add_product_content_cont ">
                                        <div className="col-12 fontStyle add_prod_para">
                                            <p>{ele.Product_Name}</p>

                                        </div>
                                        <div className="col-12 add_prod_p">
                                            <p>By {ele.StoreName}</p>
                                        </div>
                                        <div className="col-12  add_prod_btn">
                                            {/* {addProdBtn.map((ele, index) => { */}
                                            {/* return ( */}
                                            <div className="col-1 add_prod_inner_div" >
                                                <button className="add_pro_btn add_prod_btn_font">{ele.category_name}</button>

                                            </div>
                                            {/* ) */}
                                            {/* })} */}


                                        </div>
                                        <div className="col-12  add_prod_rat mt-2">
                                            <p>Rating 3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                                        </div>
                                        <div className="col-6 add_prod_quant_btn_div">
                                            {ele.Prices.map((ele1, index) => {
                                                return (
                                                    ele1.Price?.map((data, index) => {
                                                        let s = false               
                                                        if (Item?.length === 0) {
                                                            if (AddTOCard?.find(Add => Add.Price_index[0]?.Product_id === ele.id && Add.Price_index[0]?.Item_id === data.id)) {
                                                                s = true

                                                            }
                                                            else {
                                                                if (data.id === 1) {

                                                                    s = true
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            Item?.map((Price) => {
                                                                if (ele.id === Price?.Product_id && data.id === Price?.Item_id) {
                                                                    s = true
                                                                }
                                                                else {

                                                                    s = false
                                                                }
                                                                return s
                                                            })
                                                        }
                                                        return (
                                                            <div className="col-3 add_prod_quant_inner_div mt-2 " key={index}>
                                                                <section id="productDetail_section" onClick={() => PriceSelect(ele.id, data.id)}
                                                                    className={"add_prod_Quant_btn " + (s ? "active" : "")}>
                                                                    {data.Weight || data.Unit}
                                                                    <p className="rs">{data.Price}</p>
                                                                </section>
                                                            </div>
                                                        )
                                                    })
                                                )
                                            })}
                                        </div>
                                        <div className="col-12 d-flex fontStyle add_prod_amount add_prod_rat">
                                            {
                                                ele.Prices?.map((data) => {
                                                    return (
                                                        data.Price?.map((Prices) => {
                                                            if (Item?.length === 0) {
                                                                if (Prices?.id === 1) {
                                                                    return (
                                                                        < div > <p>Amount</p> <p className="add_prod_span1">${Prices.Price}</p></div>
                                                                    )
                                                                }
                                                            }
                                                            else {
                                                                return (
                                                                    Item?.map((Price) => {
                                                                        if (ele.id === Price?.Product_id && Prices.id === Price?.Item_id) {
                                                                            return (
                                                                                < div > <p>Amount</p> <p className="add_prod_span1">${Prices.Price}</p></div>
                                                                            )
                                                                        }
                                                                    })
                                                                )
                                                            }

                                                        })
                                                    )
                                                })
                                            }





                                            <span className="add_prod_span">

                                                <button className="add_prod_amount_btn"><span className="add_prod_plus_sub" onClick={Quantity}>+</span></button><span className="add_prod_amoount_data">{Product_Quantity.Product_quantity}</span>
                                                {
                                                    Product_Quantity.Product_quantity > 1 &&
                                                    <button className="add_prod_amount_btn" onClick={decreaseQuantity}> <span>-</span> </button>
                                                }
                                            </span>

                                        </div>
                                        <div className="col-12">
                                            <Box
                                                className={` add_product_btn addProduct_btn ${classes.loadingBtnTextAndBack}`}

                                            >
                                                <LoadingButton onClick={() => { AddtoCard(ele) }} variant="outlined">Add To Cart</LoadingButton>
                                            </Box>

                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>


                {ProductDetails.map((ele, index) => {
                    return (
                        <div key={index} className="col-10  border mt-4 product_desc_container">
                            <div className="col-10  prod_des_head fontStyle ">
                                <p>Product Description</p>
                            </div>
                            <div className="col-10 center product_des_para ">



                                <p>{parse(ele.Product_Description)}</p>



                            </div>
                        </div>
                    )
                })

                }
                <div className="col-10  border mt-4 product_desc_container">
                    <div className="col-10  prod_des_head fontStyle ">
                        <p>50 Follower reviews</p>
                    </div>
                    <div className="col-12  add_prod_rat mt-2">
                        <p>3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                    </div>
                    <div className="col-12">
                        {ProductDetails.map((ele, index) => {
                            return (
                                <div className="col-12 prod_desc_review p-2 mt-4 mb-4" key={index}>
                                    <div className="col-12   prod_des_head fontStyle ">
                                        {/* <p>{ele.prevName}</p> */}
                                    </div>
                                    <div className="col-12  add_prod_rat">
                                        <p>3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                                    </div>

                                    <div className="col-12 mt-4  product_des_para  p-2 ">

                                        <p>
                                            {/* {ele.res} */}

                                        </p>

                                    </div>
                                    <div className="col-12  add_prod_Help_Report_btn" >
                                        <div className="col-1  Add_prod_btn_div">
                                            <button className="add_prod_btn">Help</button>
                                        </div>
                                        <div className="col-1  Add_prod_btn_div">
                                            <button className="add_prod_btn">Report</button>
                                        </div>



                                    </div>


                                </div>
                            )
                        })}

                    </div>

                </div>
                <div className="col-10 mt-4 allProd_props AllProd_fWidth">
                    <div className="col-12 prod_des_head fontStyle AddProdLikePara">
                        <p>Like this products </p>

                    </div>
                    <div className="col-12">
                        <ProductList arr={state.AllProduct} />

                    </div>

                </div>

            </div>




        </div >
    )
}
export default ProductDetail