

const HOST = process.env.NEXT_PUBLIC_HOST + '/ori/ordering'

export const getAllOrders = async () => {
    const res = await  fetch(HOST , {
        cache: 'no-cache'
    })
    const data = await  res.json();

    if (!data) {
        throw new Error('Failed to fetch products')
    }
    return data
}

export const getOrderById = async (id: string) => {
    const res = await  fetch(HOST, {
        cache: 'no-cache'
    })
    const data = await  res.json();

    if (!data) {
        throw new Error('Failed to fetch products')
    }
    return data
}

export const createOrder = async (order: any) => {
    const response = await fetch(HOST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });

    return await response.json();
}

export const updateOrder = async (order: any) => {

    const response = await fetch(HOST, {  // Assuming '1' is the ID of the resource you want to update
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });

    const result = await response.json();
    console.log(result);
}

export const deleteOrder = async (id: number) => {
    const response = await fetch(HOST + `/id/${id}`, {
        method: 'DELETE'
    });

    if (response.status === 200) {
        console.log('Resource deleted successfully');
    } else {
        console.log('Error deleting the resource');
    }
    return response.json();
}



