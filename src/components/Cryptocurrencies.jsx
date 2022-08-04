import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi"
import { useEffect, useState } from "react"
const CryptoCurrencies = ({simplified}) => {
    const count = simplified ? 10: 100
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        setCryptos(cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [cryptosList, searchTerm])
    console.log(cryptos)
    if(isFetching) return 'Loading...'
    return (
        <>
         {!simplified ? (
            <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
         ): null}
         <Row gutter={[32, 32]} className='crypto-card-container'>
            {cryptos?.map((crypto) => {
                return <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.uuid}>
                    <Link to={`/crypto/${crypto.uuid}`}>
                        <Card 
                            title={`${crypto.rank}. ${crypto.name}`}
                            extra={<img src={crypto.iconUrl} className='crypto-image' alt=""/>}
                            hoverable>
                                <p>Price: {millify(crypto.price)}</p>
                                <p>Market Cap: {millify(crypto.marketCap)}</p>
                                <p>Daily Change: {millify(crypto.change)}%</p>

                        </Card>
                    </Link>
                </Col>
            })}
         </Row>   
        </>
    )
}
export default CryptoCurrencies