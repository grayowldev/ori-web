import {BranchModel} from "@/models/branch";


const HOST = 'https://tontally-core-production.up.railway.app';
// const HOST = "http://localhost:8080";

export const getAllBanches = async () => {
    const res = await fetch(HOST +'/branch', {
        cache: 'no-cache'
      })
    const data = await res.json()
        
    if (!data) {
        throw new Error('Failed to fetch products')
    }
    return data
}

export const addNewBranch = async(branch: BranchModel) => {
    return await fetch(HOST + '/branch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(branch)
    })
}

export const updateBranch = async() => {
    
}

export const deleteBranch = async() => {

}