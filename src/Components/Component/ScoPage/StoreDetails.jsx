import { Helmet } from "react-helmet-async"
import { useLocation, useParams } from "react-router-dom"
import React from "react"
function StoreDetails({ Despen }) {
    const [MetaTag, SetMetaTag] = React.useState({ title: "", discription: "" })
    const location = useLocation()
    const params = useParams()
    const { tab, Category, SubCategory } = params
    React.useEffect(() => {
        if (location.pathname.slice(0, 16) !== "/weed-deliveries") {
            if (tab === undefined) {
                SetMetaTag({
                    ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| Weedx.io`,
                    discription: `Shop your favorite cannabis products from ${Despen[0]?.Store_Name} Weed dispensary ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now. `
                })
            }
            else {
                switch (tab) {
                    case 'products':
                        if (SubCategory !== undefined) {
                            SetMetaTag({
                                ...MetaTag, title: `Shop Cannabis ${SubCategory} | Weed Dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Weedx.io`,
                                discription: `Browse Product of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality cannabis products near you `
                            })
                        }
                        else {
                            if (Category) {

                                SetMetaTag({
                                    ...MetaTag, title: `Shop Cannabis ${Category} | Weed Dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Weedx.io`,
                                    discription: `Shop your favorite cannabis ${Category} from ${Despen[0]?.Store_Name} Weed dispensary ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now`
                                })
                            }

                            else {
                                SetMetaTag({
                                    ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab.replace("-", "")} | Weedx.io`,
                                    discription: `Browse Product of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality cannabis products near you `
                                })
                            }
                        }


                        break;
                    case 'store-details':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab.replace("-", " ")} | Weedx.io`,
                            discription: `Checkout Store Details of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Get to know store timings, services, contact information and more. `
                        })
                        break;
                    case 'review':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab.replace("-", " ")} | Weedx.io`,
                            discription: `Customer Reviews of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Checkout how customers find the dispensary products. 100% true insights `
                        })
                        break;
                    case 'deal':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab.replace("-", " ")} | Weedx.io`,
                            discription: `Best deals from ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best deals, offers and discounts on your favorite cannabis products.`
                        })
                        break;
                    case 'media':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab.replace("-", " ")} | Weedx.io`,
                            discription: `Browse media and updates from ${Despen[0]?.Store_Name} marijuana dispensary in  ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best cannabis dispensary services with high quality products`
                        })
                        break;
                    default:
                    // code block
                }
            }
        }
        else {
            if (tab === undefined) {

                SetMetaTag({
                    ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| Weedx.io`,
                    discription: `Shop your favorite cannabis products from ${Despen[0]?.Store_Name} Weed delivery ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now. 
                    `
                })

            }
            else {
                switch (tab) {
                    case 'products':
                        if (SubCategory !== undefined) {
                            SetMetaTag({
                                ...MetaTag, title: `Shop Cannabis ${SubCategory}| Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Weedx.io`,
                                discription: `Shop your favorite cannabis ${SubCategory} from  ${Despen[0]?.Store_Name}  Weed delivery ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now.`
                            })
                        }
                        else {
                            if (Category) {

                                SetMetaTag({
                                    ...MetaTag, title: `Shop Cannabis ${Category} | Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Weedx.io`,
                                    discription: `Shop your favorite cannabis ${Category} from ${Despen[0]?.Store_Name} Weed Delivery ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now`
                                })
                            }

                            else {
                                SetMetaTag({
                                    ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Products | Weedx.io`,
                                    discription: `Browse Store Menu of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality cannabis products near you `
                                })
                            }
                        }
                        break;
                    case 'store-details':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}  | Store Details | Weedx.io`,
                            discription: `Checkout Store Details of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get to know store timings, services, contact information and more `
                        })
                        break;
                    case 'review':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Reviews | Weedx.io`,
                            discription: `Customer Reviews of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Checkout how customers find the delivery products. 100% true insights`
                        })
                        break;
                    case 'deal':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Deals | Weedx.io`,
                            discription: `Best deals from ${Despen[0]?.Store_Name} marijuana Delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best deals, offers and discounts on your favorite cannabis products.`
                        })
                        break;
                    case 'media':
                        SetMetaTag({
                            ...MetaTag, title: ` Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Media | Weedx.io`,
                            discription: ` Browse media and updates from ${Despen[0]?.Store_Name}  marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best cannabis delivery services with high qualtiy products.`
                        })
                        break;
                    default:
                    // code block
                }
            }
        }

    }, [params, Despen])

    return (
        <Helmet>
            <title>{MetaTag.title}</title>
            <meta name="title" content={`Marijuana Dispensaries & Delivery Near Me | weedx.io |`} />
            <meta name='description' content={MetaTag.discription} />

            <meta itemprop="name" content="WeedX" />
            <meta itemprop="description" content={MetaTag.discription} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={MetaTag.title} />
            <meta property="og:description" content={MetaTag.discription} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={MetaTag.title} />
            <meta name="twitter:description" content={MetaTag.discription} />
        </Helmet>
    )
}
export { StoreDetails }
