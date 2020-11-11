import { useContext } from "react"
import { ShopContext } from "../contexts"

export const CartService = () => {
    const { items, setItems } = useContext(ShopContext)
    const isSelected = (item) => items.some(currentItem => currentItem.id === item.id)
    const toggleItem = (item) => isSelected(item)
        ? setItems(items.filter(currentItem => currentItem.id !== item.id))
        : setItems([ ...items, item ])
    return {
        isSelected,
        toggleItem,
    }
}
