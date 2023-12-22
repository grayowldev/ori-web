import Bin from "@/app/bin/page";
import { BinModel } from "@/models/bin";

// const HOST = 'https://tontally-core-production.up.railway.app';
const HOST = "http://localhost:8080";

export const getAllBins = async () => {
    const res = await fetch(HOST +'/bin/getAllBins', {
        cache: 'no-cache'
      })
    const data = await res.json()
        
    if (!data) {
        throw new Error('Failed to fetch products')
    }
    
    return data
}

export const addNewBin = async(bin: BinModel) => {
    await fetch(HOST+'/bin/addBin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bin)
    })
}

export const updateBin = async() => {
    
}

export const deleteBin = async() => {

}