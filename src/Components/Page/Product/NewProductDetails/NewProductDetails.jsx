import React from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import RelatedReview from "../../Review/ReviewComponent/RelatedReview"
import OverAllReview from "../../Review/ReviewComponent/OverAllReview"
import NewProductinfoText from "./NewProductDetailsComponent/NewProductinfoText"
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
import NewProductSearchResult from "./NewProductDetailsComponent/NewProductSearchResult"
import Axios from "axios";
import { useParams ,useNavigate } from 'react-router-dom';
import NewFlavourBanner from "../../../Component/NewFlavour/NewFlavourBanner"
import Review from "../../Review/Review"
import { AiOutlineLeft } from "react-icons/ai";
import { ProductDetailsSeo } from "../../../Component/ScoPage/ProductSeo"

const NewProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const heading = "You may also like"
  const [Product, SetProduct] = React.useState([])
  const [StoreProduct, SetStoreProduct] = React.useState([])
  const [Despen, SetDespens] = React.useState([])
  const [api , SetApi ] = React.useState(false)
  // const Navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    Axios(`https://api.cannabaze.com/UserPanel/Get-ProductById/${id}`, {
    }).then(response => {
      SetProduct(response.data[0])
      
      Axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${response.data[0]?.Store_id}`, {
      }).then(response => {
        SetDespens(response.data[0])
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      })
      Axios.post(`https://api.cannabaze.com/UserPanel/YouMayAlsoLike/`,
      {
        category:response.data[0].category_id,
        store_id:response.data[0].Store_id
        }
      ).then(response => {
        SetStoreProduct(response.data)
      }).catch(
        function (error) {
        })
    }).catch(
      function (error) {

        alert("Something Goes Wrong")

      })


  }, [id])

  // Productname , ProductCategory , StoreName
  return (
    <div className="container-fluid">
      <ProductDetailsSeo  Productname={Product.Product_Name} ProductCategory={Product.category_name} StoreName={Product.StoreName} City={Product.Store_City} State={Product.Store_State}  ></ProductDetailsSeo>
     
      <span onClick={() => navigate(-1)} className="BackPageBtn"> <AiOutlineLeft size={22}/> <span className="backPgBtnImg"><img src={`https://api.cannabaze.com${Despen.Store_Image}`} alt="" /></span> {Despen.Store_Name}</span>
      <NewProductDetailsCards Product={Product} />
    
      <NewProductinfoText  Product={{heading:"Product Description",text:Product?.Product_Description}} />
     
      <ProductSearchResult RelatedProductResult={StoreProduct} currentProductID={Product.id} CategoryName={heading}/> 
      <Review Product={Product} api ={api} SetApi ={SetApi}></Review>


    </div>
  )
}
export default NewProductDetails