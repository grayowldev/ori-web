
const HOST = process.env.NEXT_PUBLIC_HOST + '/bulkItem';

export const getInventory: any = async () => {
    const res = await fetch(HOST + '/getAllBulkItems', {
        cache: 'no-cache'
    })
    const inventoryData = await res.json()

    if (inventoryData) {
        return inventoryData;
    }
    throw new Error('Failed to fetch inventory')
}

export const getInventoryItemById: any = async () => {}

export const createInventoryItem: any = async () => {}

export const createInventoryItems: any = async (data: object) => {
    const response = await fetch(HOST + '/addBulkItems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;

}

export const updateInventoryItem: any = async () => {}

export const deleteInventoryItem: any = async (id: string) => {
    const res = await fetch(HOST + `/deleteBulkItem/${id}`, {
        method: 'DELETE'
    })

    if (!res) {
        throw new Error('DELETE FAILED')
    }
    return await res.json()
}

