import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState({})
    useEffect( () =>{
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(url)
        .then( (resp) => {
            return resp.json()
        })
        .then((data) =>{
            setCurrencyData(data[currency])
        })
        .catch((err) => console.log(err))

    } , [currency])
    console.log(currencyData);
    return currencyData
}

export default useCurrencyInfo