'use client'

import {deleteInventoryItem, getInventory} from "@/services/inventory";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Button, buttonVariants} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



export default function Inventory() {
    const [inventoryData, setinventoryData] = useState([]);
    const [currentInventoryItemDetailed, setCurrentInventoryItemDetailed] = useState({
        name: "",
        category: '',
        sku: '',
        location: '',
        karat: 0,
        goldGrossWeight: 0,
        quantity: 0
    })

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


    const setItem = (obj: any) => {
        setCurrentInventoryItemDetailed(obj)
        console.log(currentInventoryItemDetailed)
    }

    const handleDelete = async (id: string) => {
        console.log('deleting object with id ', id)
        return await deleteInventoryItem(id)
    }

    return (
        <div className={"content-container"}>

            <div className="text-3xl font-bold tracking-tight">
                <h1>Inventory</h1>
            </div>
            <div className={"title-container"}>
                <Link className={buttonVariants({ variant: "outline" })} href={"inventory/create-inventory-item"}>Create Item</Link>
            </div>

            <Drawer>
                <DrawerTrigger>
                </DrawerTrigger>
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
                                        <TableCell>
                                            <DrawerTrigger>
                                                <Button onClick={() => setItem(data)}>Show more</Button>
                                            </DrawerTrigger>
                                            <Button onClick={() => handleDelete(data.id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{currentInventoryItemDetailed.name}</DrawerTitle>
                        <DrawerDescription>Product Details</DrawerDescription>
                    </DrawerHeader>
                    <div className={"ml-4 mb-20"}>
                        <div>
                            <span>Product Name: <h5 className={"inline"}>{currentInventoryItemDetailed.name? currentInventoryItemDetailed.name : 'None'}</h5></span>
                        </div>
                        <div>
                            <span>Category: <h5 className={"inline"}>{currentInventoryItemDetailed.category? currentInventoryItemDetailed.category : 'None'}</h5></span>
                        </div>
                        <div>
                            <span>SKU: <h5 className={"inline"}>{currentInventoryItemDetailed.sku? currentInventoryItemDetailed.sku : 'None'}</h5></span>
                        </div>
                        <div>
                            <span>Location: <h5 className={"inline"}>{currentInventoryItemDetailed.location? currentInventoryItemDetailed.location : 'None'}</h5></span>
                        </div>
                        <div>
                            <span>Karat: <h5 className={"inline"}>{currentInventoryItemDetailed.karat}</h5></span>
                        </div>
                        <div>
                            <span>Gold Gross Weight: <h5 className={"inline"}>{currentInventoryItemDetailed.goldGrossWeight}</h5></span>
                        </div>
                        <div>
                            <span>Quantity: <h5 className={"inline"}>{currentInventoryItemDetailed.quantity}</h5></span>
                        </div>

                    </div>
                    {/*<DrawerFooter>*/}
                    {/*    <Button>Submit</Button>*/}
                    {/*    <DrawerClose>*/}
                    {/*        <Button variant="outline">Cancel</Button>*/}
                    {/*    </DrawerClose>*/}
                    {/*</DrawerFooter>*/}
                </DrawerContent>
            </Drawer>
        </div>
        
    )
}