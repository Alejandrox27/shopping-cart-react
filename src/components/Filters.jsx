import { useId} from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters () {
    const {filters, setFilters} = useFilters();

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinSize = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price from</label>
                <input 
                type="range" 
                id="price"
                min='0'
                max='1700'
                onChange={handleChangeMinSize} />
            </div>
            <span>${filters.minPrice}</span>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}