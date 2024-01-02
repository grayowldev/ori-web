'use client'
import {useEffect, useState} from "react";
import {getBinById} from "@/services/bin";

export default function BinDetails({
    params,
    }: {
    params: {id: string};
}){

    const [bin, setBin] = useState({})
    useEffect(() => {
        async function getBinData() {
            //  Get bins by branch id
            let data = await getBinById(params.id) || []
            setBin(data)
            console.log(data)
        }
        getBinData()
    },[])

    return(
        <div>
            Bin {params.id}

        </div>
    )
}