import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
const LearnCards = () => {
    const LearnCard_Array = [
        { imgUrl: "/image/learn_img1.png", title: "First time smoking weeds start here" },
        { imgUrl: "/image/learn_img2.png", title: "First time smoking weeds start here" },
        { imgUrl: "/image/learn_img3.png", title: "First time smoking weeds start here" },
        { imgUrl: "/image/learn_img3.png",title: "First time smoking weeds start here" }]
    return (
        <div className="col-12 learn_card_main_col">
            <div className="row">
                {LearnCard_Array.map((items, index) => {
                    return (
                        <div className="col-sm-6 learn_card" key={index}>
                            <Link to="/LearnCardRelatedPage">
                            <section className='learn_image_section'>
                                <div className='learCard_image_div'>
                                <LazyLoadImage className="learn_image" src={items.imgUrl} alt='img_not_available' />

                                </div>
                                <div className='learnCard_title_container'>
                                    <p className='learnCard_title ellipsis'>{items.title}</p>
                                </div>
                            </section>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default LearnCards