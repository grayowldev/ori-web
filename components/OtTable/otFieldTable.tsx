export default function OtFieldTable() {
    let tableHeads = [
        {colName:'Item name',},
        {colName: 'SKU'},
        {colName:'Metal type'}, 
        {colName: 'Gross weight'}, 
        {colName: 'Location'}
    ]

    let fields = ['name', 'sku', 'metalType', 'grossWeight', 'location']

    let tableData = [
        {
            id: "1",
            name: 'Gold bracelet',
            sku: 'abc1234',
            metalType: 'Gold',
            grossWeight: '54.32',
            location: 'USA'
        },
        {
            id: "2",
            name: 'Gold bracelet 1',
            sku: 'abc1234',
            metalType: 'Gold',
            grossWeight: '54.32',
            location: 'USA'
        },
        {
            id: "3",
            name: 'Gold bracelet 2',
            sku: 'abc1234',
            metalType: 'Gold',
            grossWeight: '54.32',
            location: 'USA'
        },
        {
            id: "4",
            name: 'Gold bracelet 3',
            sku: 'abc1234',
            metalType: 'Gold',
            grossWeight: '54.32',
            location: 'USA'
        }
    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {tableHeads.map((e: any) => {
                            return(
                                <>
                                    <th className="px-6 py-3 bg-gray-50 text-gray-700">
                                        {e.colName}
                                    </th>
                                </>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((e: any) => {
                        return(
                            <>
                                <tr>
                                    {fields.map((field: string) => {
                                        return(
                                            <td key={e.id} className="px-6 py-4">
                                                {e[field]}
                                            </td>
                                        )
                                    })}  
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}