import{ useEffect, useState } from 'react'
import axios from 'axios'

interface productInterface {
    id: string,
    image: string,
    title: string,
    price?: string
}

const useFetch = (url: string) => {

    const [productData, setProductdata] = useState<productInterface[]>()

    useEffect(() => {
        (
            async () => {
                const data = await axios.get(url)
                setProductdata(data.data.data)
            }
        )()
    }, [])

    return [productData]
}

export default useFetch