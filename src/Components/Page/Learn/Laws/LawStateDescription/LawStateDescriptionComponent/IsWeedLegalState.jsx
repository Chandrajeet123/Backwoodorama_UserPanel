import React from "react"
const IsWeedLegalState = ({head , description2}) => {

    return (
        <React.Fragment>
            <div className="col-12">
 
                <h2 id="isweedLegalHeadings" className="isweedLegalHeading">{head}</h2>

                <div className="col-12" id={head} >
                    <section className="isWeedLegalParagraph">
                       {description2}
                    </section>
                </div>

            </div>

        </React.Fragment>
    )
}
export default IsWeedLegalState