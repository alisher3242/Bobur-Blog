import { useContext } from "react"
import { SearchContext } from "../context/Search-context"


export const UseSearch = () => {
    const {search, setSearch} = useContext(SearchContext)
    return {search, setSearch}
}