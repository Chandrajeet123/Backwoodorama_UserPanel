import SearchBar from '@mkyy/mui-search-bar';
import * as React from 'react';
import StrainTypeCards from "./StrainTypeCards";
import useStyles from '../../../../Style';
const StrainType = () => {
 const classes=useStyles()


    const StrainTypeCardArray = [
        { imgUrl: "./image/indica.png", head1: "Indica" },
        { imgUrl: "./image/sativa.png", head1: "Hybrid" },
        { imgUrl: "./image/social.png", head1: "Sativa" },
        { imgUrl: "./image/LeaflyMarchPromo.png", head1: "CBD" },
        // { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
        // { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
    ]
    // React.useEffect(() => {
    //     Axios.post("https://api.cannabaze.com/UserPanel/Get-StrainType/",
    //     {"type":"Indica"})
    //     .then((response)=>{
    //     })
    //     .catch((error)=>{
    //     })
    // }, [])
    return (
        <React.Fragment>
            <div className="row my-3 mx-0 px-0">
                <div className="col-sm-4  px-0">
                    <h2 className="strainType_heading">Strain Type</h2>
                </div>
                <div className="col-sm-8 px-0">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid #31B665" }}  width={"100%"} className={`${classes.strainTypSearchBar} ${classes.strainTyleRemove}`} placeholder="Serch Strain Type" />

                </div>

            </div>
            <StrainTypeCards ArrayData={StrainTypeCardArray} />
        </React.Fragment>
    )
}
export default StrainType