
const HOST = 'https://tontally-core-production.up.railway.app';
// const HOST = 'http://localhost:8080';
export const getPathTree: any = async () => {
    const res = await fetch(HOST + '/location', {
        cache: 'no-cache'
    })
    const tree = await res.json();

    if (tree) {
        return tree
    }
    throw new Error('Failed to fetch tree')
}