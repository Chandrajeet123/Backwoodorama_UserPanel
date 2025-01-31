import { Helmet } from 'react-helmet-async';
import React from "react"
import { useLocation, useParams } from "react-router-dom"
function ProductDetailsSeo({Productname , ProductCategory , StoreName ,  City , State}) {
    return (
        <Helmet>
            <title> {`${Productname} | Weedx.io | `}</title>
            <meta name="title" content={`${Productname}| Weedx.io |`}/>
            <meta name='description' content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
            {/* Facebook tags */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={`${Productname}| Weedx.io |`} />
            <meta property="og:description" content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"website Dispensaries & `Delivery` Near Me"} />
            <meta name="twitter:title" content={`${Productname}| Weedx.io |`} />
            <meta name="twitter:description" content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
        </Helmet>
    )
}


function ProductSeo() {
    return (
       
        <Helmet>
       <title>{"Shop High-Quality Marijuana products Near You | weedx.io |"}</title>
            <meta name="title" content={`Shop High-Quality Marijuana products Near You | weedx.io |`}/>
            <meta name='description' content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Shop High-Quality Marijuana products Near You | weedx.io |"} />
            <meta property="og:description" content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Shop High-Quality Marijuana products Near You | weedx.io |"} />
            <meta name="twitter:description" content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
    </Helmet>
    )
}

function ProductCategorySeo({categoryname}) {
    return (
       
        <Helmet>
       <title>{`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`}</title>
            <meta name="title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`}/>
            <meta name='description' content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`} />
            <meta property="og:description" content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`} />
            <meta name="twitter:description" content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
    </Helmet>
    )
}





export  {ProductDetailsSeo  , ProductSeo , ProductCategorySeo} 
