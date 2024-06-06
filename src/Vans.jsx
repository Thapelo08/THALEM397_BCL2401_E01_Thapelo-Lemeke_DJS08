import React from "react"
import { Button,Link, useSearchParams } from "react-router-dom"

export default function Vans() {
      const [searchParams, setSearchParams] = useSearchParams()
      const [vans, setVans] = React.useState([])
      const [loading, setLoading] = React.useState(false)

      const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }

        loadVans()
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
// handled the user interface when  things are currently loading
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Button
                onclick={() => handleFilterChange("type", "simple")}
                className={
                    `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                }
                >Simple</Button>
                <Button
                onclick={() => handleFilterChange("type", "luxury")}
                className={`
                van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
            }
                >Luxury</Button>
                <Button 
                onclick={() => handleFilterChange("type", "rugged")}
                className={`
                van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
            }
                >Rugged</Button>

             {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}
                
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}