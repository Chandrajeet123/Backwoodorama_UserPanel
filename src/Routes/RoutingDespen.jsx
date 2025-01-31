
import React from "react"
import Createcontext from "../Hooks/Context"
import {  useParams } from "react-router-dom";
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
export default function RoutingDespen(props) {
    const { state } = React.useContext(Createcontext)
    const params = useParams()
    const { Component } = props;

    const [L, Set] = React.useState('')
    const [s, Set1] = React.useState('')
    const [c, Set2] = React.useState('')
    React.useEffect(() => {
        if (params?.city === undefined) {
            if (params?.state === undefined) {
                if (params.Country !== undefined) {
                    Set(params?.Country)
                }

            }
            else {
                if (state.State !== params.state) {

                    Set1(params?.state)
                    Set(params?.Country)
                }
            }
            // if (params?.city !== undefined) {
            //     Set2(params?.city)
            // }
        }
        else {
            if (state.City !== params.city) {

                Set1(params?.state)
                Set(params?.Country)
                Set2(params?.city)
            }
            // Set(state.Country)
        }



    }, [state , params])

    return (

        <div>
            <Component />
            {
                L !== "" && <CurrentLocation Country={L} State1={s} city={c}></CurrentLocation>
            }
        </div>
    )
}