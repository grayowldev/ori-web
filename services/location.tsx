

const HOST = process.env.NEXT_PUBLIC_HOST + '/location';
export const getPathTree: any = async () => {
    const res = await fetch(HOST, {
        cache: 'no-cache'
    })
    const tree = await res.json();

    if (tree) {
        return tree
    }
    throw new Error('Failed to fetch tree')
}