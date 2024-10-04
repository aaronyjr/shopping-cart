import { useLocation, useParams } from "react-router-dom"

export function ProductDetails() {
    const { state } = useLocation()
    const { productId } = useParams()

    const product = state?.product

    return (
        <p>{product.title}</p>
    )
}