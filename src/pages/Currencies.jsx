import { Link } from "react-router-dom"

export default function Currencies() {

    const currencies = [
        { name: "Bitcoin", symbol: "BTCUSD" },
        { name: "Litecoin", symbol: "LTCUSD" },
        { name: "Ethereum", symbol: "ETHUSD" },
        { name: "Zcash", symbol: "ZECUSD" },
        { name: "Bitcoin Cash", symbol: "BCHUSD" },
      ]

    return (
        <div className='currencies'>
            {currencies.map(({ name, symbol }, idx) => 
                <Link key={idx} to={`/price/${symbol}`}>
                    <h2>{name}</h2>               
                </Link>
            )}
        </div>
    )
}