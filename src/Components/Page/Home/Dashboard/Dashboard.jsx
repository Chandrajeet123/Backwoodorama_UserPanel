import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import Dispensorieslider from "../../Dispansires/DispansiresComponent/DispensoriesSlider";
import NewsBlog from "./ComponentDashboard/NewsBlog";
import CommunityType from "./ComponentDashboard/CommunityType";
import HomePageBanner from "./ComponentDashboard/HomePageBanner";
import DeliveryServices from "../../Delivery/HomePageDelivery/DeliveryServices";
import { useNavigate } from "react-router-dom";
import React from "react";
import HomePageWeedBanner from "./ComponentDashboard/HomePageWeedBanner";
import HomePageDealsSignup from "./ComponentDashboard/HomePageDealsSignup";
import StrainTypeCards from "../../Strain/StrainComponent/StrainTypeCards";
import FeaturedBrand from "./ComponentDashboard/FeaturedBrand";
import Axios from "axios";
import {HomePageSco} from "../../../Component/ScoPage/HomePageSco"

export default function Dashboard() {
    const [FeaturedBrandArray, SetFeaturedBrandArray] = React.useState([])
    const [Skeleton, SetSkeleton] = React.useState(true)
    const [BrandSkeleton, SetBrandSkeleton] = React.useState(true)
    const Navigate = useNavigate()
    function ShowCategoryProduct(id, name) {

        Navigate(`/CategoryProduct/${name}`, { state: { id } });
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            Axios("https://sweede.app/UserPanel/Get-Categories/")
                .then((response) => {

                    SetCategory(response.data)
                    // CategorySkalaton
                    SetSkeleton(false)

                })
                .catch((error) => {
                })

        }
        fetchData()

    }, [])
    React.useEffect(() => {
        Axios("https://sweede.app/UserPanel/Get-AllBrand/ ", {})
            .then((response) => {

                SetFeaturedBrandArray(response.data)
                SetBrandSkeleton(false)
            })
            .catch((error) => {
            })
    }, [])
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const StrainTypeCardArray = [
        { imgUrl: "/image/indica.png", head1: "Indica", },
        { imgUrl: "/image/sativa.png", head1: "Hybrid" },
        { imgUrl: "/image/social.png", head1: "Sativa" },
        { imgUrl: "/image/LeaflyMarchPromo.png", head1: "CBD" },
    ]
    return (
        <div >
            <HomePageSco></HomePageSco>
            <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct} Skeleton={Skeleton}></CategoryProduct>
            <DeliveryServices Skeleton={Skeleton}></DeliveryServices>
            <HomePageWeedBanner></HomePageWeedBanner>
            <Dispensorieslider></Dispensorieslider>
            <div className="col-12 border" style={{ height: "300px", position: "relative", top: "15px" }}>
                <Map height={"297px"} width={"100%"}></Map>
            </div>
            <FeaturedBrand CardDataArray={FeaturedBrandArray} BrandSkeleton={BrandSkeleton} />
            <HomePageDealsSignup></HomePageDealsSignup>
            {/* <WeedProduct></WeedProduct> */}
            <div className="dashBoardStrainType">
                <NewsBlog></NewsBlog>
            </div>
            <div className="w-90 dashBoardStrainType">
                <h3 className=" mt-4 section_main_title">Strain Type</h3>
                <StrainTypeCards ArrayData={StrainTypeCardArray} />

            </div>



            {/* <CommunityType></CommunityType> */}
        </div>
    )
}