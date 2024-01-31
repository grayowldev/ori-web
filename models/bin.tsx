export interface BinModel {
    id?: string,
    name: string,
    pathByIds: string,
    pathByNames: string,
    parentId: number,
    parentIsBranch: boolean
}