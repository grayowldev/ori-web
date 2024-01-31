import {BranchModel} from "@/models/branch";

const HOST = process.env.NEXT_PUBLIC_HOST + '/branch'

export const getAllBranches = async () => {
    const res = await fetch(HOST, {
        cache: 'no-cache'
      })
    const data = await res.json()
        
    if (!data) {
        throw new Error('Failed to fetch products')
    }
    return data
}

export const getBranchByBranchId =  async (id: string) => {
    console.log(id)
    const res = await fetch(HOST + `/getBranchById/${id}`, {
        cache: 'no-cache'
    })
    const data = await res.json()

    if (!data) {
        throw new Error('Failed to fetch branches')
    }
    return data
}

export const addNewBranch = async(branch: BranchModel) => {
    return await fetch(HOST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(branch)
    })
}

export const updateBranch = async() => {
    
}

export const deleteBranch = async(id: string) => {
    const res = await fetch(HOST + `/${id}`, {
        method: 'DELETE'
    })

    const data = await res.json()
    if (!data) {
        throw new Error('No data found')
    }
    return data;
}