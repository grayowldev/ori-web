'use client'
import OtTable from "@/components/OtTable/otTable";
import OtThead from "@/components/OtTable/otThead";
import { getInventory } from "@/services/inventory";
import Link from "next/link";
import {getAllOrders} from "@/services/ori/oriOrdering";
import {useEffect, useState} from "react";
import {buttonVariants} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";


export default function Inventory() {
    const [inventoryData, setinventoryData] = useState([]);

    let dataSet = [
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
        }]

        //  Getting inventory data from server
        // let inventoryData: any[] = [];
        // console.log(inventoryData);
        // if (!Array.isArray(inventoryData)) {
        //     inventoryData = [];
        // }

    useEffect(() => {
        async function getInventoryData() {
            let data = await getInventory() || [];
            if (!Array.isArray(data)) {
                data = [];
            }
            setinventoryData(data)
            console.log(data)
        }
        getInventoryData();
    }, [])


        
        

    return (
        <div className={"content-container"}>
            <div className="text-3xl font-bold tracking-tight">
                <h1>Inventory</h1>
            </div>
            <div className={"title-container"}>
                <Link className={buttonVariants({ variant: "outline" })} href={"inventory/create-inventory-item"}>Create Item</Link>
            </div>

            {/* <div className="h-20 bg-red-700">Title & add item row</div> */}
            {/* <div className="h-16 bg-blue-700">Search and Filter row</div> */}
            {/*<div className="rounded-md border">*/}
            {/*    */}
            {/*</div>*/}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Item name
                        </TableHead>
                        <TableHead>
                            SKU
                        </TableHead>
                        <TableHead>
                            Metal type
                        </TableHead>
                        <TableHead>
                            Gross Weight
                        </TableHead>
                        <TableHead>
                            Location
                        </TableHead>
                        <TableHead>
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        inventoryData.map((data: any) => {
                            return(
                                <TableRow key={data.id}>
                                    <TableCell>
                                        {data.name}
                                    </TableCell>
                                    <TableCell>
                                        {data.sku}
                                    </TableCell>
                                    <TableCell>
                                        {data.metalType}
                                    </TableCell>
                                    <TableCell>
                                        {data.goldGrossWeight}
                                    </TableCell>
                                    <TableCell>
                                        {data.location}
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                    {/*{*/}
                    {/*    inventoryData.map((data: any) => {*/}
                    {/*        return(*/}
                    {/*            <tr key={data.id} className="text-gray-700 border-b border-gray-300">*/}
                    {/*                <td scope="row" className="px-6 py-4">*/}
                    {/*                    {data.name}*/}
                    {/*                </td>*/}
                    {/*                <td scope="row" className="px-6 py-4">*/}
                    {/*                    {data.sku}*/}
                    {/*                </td>*/}
                    {/*                <td scope="row" className="px-6 py-4">*/}
                    {/*                    {data.metalType}*/}
                    {/*                </td>*/}
                    {/*                <td scope="row" className="px-6 py-4">*/}
                    {/*                    {data.grossWeight}*/}
                    {/*                </td>*/}
                    {/*                <td scope="row" className="px-6 py-4">*/}
                    {/*                    {data.location}*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </TableBody>
            </Table>
        </div>
        
    )
}