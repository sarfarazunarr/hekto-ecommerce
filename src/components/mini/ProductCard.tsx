import CategoryProduct from "./CategoryProduct"
import PRDesign1 from "./PRDesign1"
import PRDesign2 from "./PRDesign2"
import PRDesign3 from "./PRDesign3"
import ProductBarDesign from "./ProductBarDesign"

export interface ProductType{
    name: string,
    image: string,
    image_url?: string,
    price: number,
    discountPrice?:number
}

const ProductCard = ({ designType, showDots = false, data }: { designType: "SIMPLE 1/4" | "MEDIUM 1/3" | "SIMPLEST" | "CATEGORY PRODUCT" | "BAR", showDots?:boolean, data:ProductType}) => {
    return (
        <>
           {designType == "SIMPLE 1/4" && <PRDesign1 data={data} />}
           {designType == "MEDIUM 1/3" && <PRDesign2 data={data} />}
           {designType == "SIMPLEST" && <PRDesign3 data={data} showDots={showDots} />}
           {designType == "CATEGORY PRODUCT" && <CategoryProduct data={data} />}
           {designType == "BAR" && <ProductBarDesign data={data} />}
        </>
    )
}

export default ProductCard
