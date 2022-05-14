import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price() {

    const apiKey = 'pk_9155727789334028bb69df5beb1e5ceb'
    const { symbol } = useParams()
    const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apiKey}`

    const [coin, setCoin] = useState(null)
    const [goGoGo, setGoGoGo] = useState(0)
    async function getCoin() {
        const data = await fetch(url).then(res => res.json())
        setCoin(data)
    }

    useEffect(() => {
        getCoin()
        setTimeout(() => {setGoGoGo(goGoGo + 1)}, 5000)
    }, [goGoGo])
    
    const loaded = () => 
            <div>
                <h1>{symbol}</h1>
                <h2>{coin.price}</h2>
            </div>

    const loading = () => <h1>Loading....</h1>
    return (
        coin ? loaded() : loading()
    )
}