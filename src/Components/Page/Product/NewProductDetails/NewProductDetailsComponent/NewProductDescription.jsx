
const NewProductDescription = ({ Product }) => {

    return (
        <div className="row center mt-4 mx-1">
            <div className="col-lg-10 NewProductDescription_container py-4">
                <h2 className="NewProductDescription_headingss">Product Description</h2>
                 <div  dangerouslySetInnerHTML={{ __html: Product }} />


            </div>

        </div>
    )
}
export default NewProductDescription