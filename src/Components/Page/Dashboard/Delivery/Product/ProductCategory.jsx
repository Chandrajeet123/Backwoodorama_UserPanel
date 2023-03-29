import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import AllProduct from "./Component/AllProduct"
import Axios from "axios"

const ProductCategory = () => {
   const [arr1 , Setarr1]  =  React.useState ([])

    React.useEffect(()=>{
        Axios("http://52.3.255.128:8000/UserPanel/Get-Product/", {


    }).then(response => {
        console.log(response.data)
        Setarr1(response.data)
        // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


    }).catch(
        function (error) {

            // SetProduct(Product => ({ ...Product, discount: "None" }))
        })



    },[])

    // const arr1 = [{ img_url: "./image/weed_img2.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/wee_img1.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/logo2.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/cat_prod_5.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/cat_prod_6.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/cat_pro_7.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    // { img_url: "./image/cat_pro_8.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },

    // ]
    const weeBtn = [{ quant: "1gms", rs: "121$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }]

    return (
        <>
            <div className="container-fluid" style={{ padding: "35px" }}>
                <div className="row center">
                    <div className="col-12   productCat_cont p-2">
                        <div className="col-3  prod_cat_left_sec center d-block p-2">
                            <div className="col-12 ">
                                <h5>Product Category</h5>

                            </div>
                            <div className="col-12 d-flex prodCat_gap" >
                                <span><BsLayoutSplit /></span><p>All category</p>

                            </div>

                        </div>
                        <div className="col-9   prod_cat_right_sec ">
                              <AllProduct arr={arr1} btn={weeBtn} />


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default ProductCategory