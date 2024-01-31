import { BinModel } from "@/models/bin";

const HOST = process.env.NEXT_PUBLIC_HOST + '/bin';

export const getAllBins = async () => {
    const res = await fetch(HOST, {
        cache: 'no-cache'
      })
    const data = await res.json()
        
    if (!data) {
        throw new Error('Failed to fetch products')
    }
    
    return data
}

export const getBinById = async (id: string) => {
    const res = await fetch(HOST +`/getBinById/${id}`, {
        cache: 'no-cache'
    })
    const data = await res.json()

    if (!data) {
        throw new Error('Failed to fetch products')
    }

    return data
}

export const getBinByBranchId = async (id: string) => {
    const res = await fetch(HOST +`/getBinByBranchId/${id}`, {
        cache: 'no-cache'
    })
    const data = await res.json()

    if (!data) {
        throw new Error('Failed to fetch products')
    }

    return data
}

export const addNewBin = async(bin: BinModel) => {
    return await fetch(HOST, {
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