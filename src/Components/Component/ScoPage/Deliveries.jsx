import { Helmet } from 'react-helmet-async';
import Createcontext from "../../../Hooks/Context"
import React from "react"
function Delivery() {
    const { state } = React.useContext(Createcontext)
    return (
        <Helmet>
            <title> {`Weed Delivery in ${state?.Location} | weedx.io | `}</title>
            <meta name="title" content={`Weed Delivery in ${state?.Location} | weedx.io |`}/>
            <meta name='description' content={`find Nearby Weed Delivery in  ${state.Location}  for Recreational & Medical Uses. Browse Top Cannabis Products and Place Orders from Trusted weed delivery near you.`} />
            {/* Facebook tags */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta property="og:description" content={"In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you."} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"website Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta name="twitter:description" content={"In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you."} />
        </Helmet>
    )
}
export  {Delivery} 
