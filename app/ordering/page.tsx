'use client'
import Link from "next/link"
import Router from "next/router"
import {deleteOrder, getAllOrders} from "@/services/ori/oriOrdering";
import {useEffect, useState} from "react";
import {getAllBins} from "@/services/bin";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button, buttonVariants} from "@/components/ui/button";
import OriTable from "@/components/ori-components/ori-table/ori-table";
import {id} from "postcss-selector-parser";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import OrderForm from "@/app/ordering/create-purchase-order/OrderForm";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Ordering() {

    //  Types
    type PurchaseItem = {
        id? : number,
        description: string,
        grossWeight: number,
        stoneWeight: number,
        netWeight: number,
        pureWeight: number,
        karat: number,
        rate: number,
        amount: number

    }
    const keysToShow: Array<keyof PurchaseItem> = ['id', "description", "grossWeight", "stoneWeight", "netWeight", "pureWeight", "karat", "rate", "amount"];

    const [orders, setOrders] = useState<PurchaseItem[]>([]);

    useEffect( () => {
        async function getOrders() {
            let orders = await getAllOrders() || [];
            if (!Array.isArray(orders)) {
                    orders = [];
                }
            setOrders(orders)
        }
        getOrders();
        console.log(orders)
    })
    const headers: string[] = [
        "Order Number",
        "Name",
        "Gross Weight",
        "Stone Weight",
        "Net Weight",
        "Pure Weight",
        "Karat",
        "Rate",
        "Amount",
        "Action"
    ]

     const handleDelete = async (id: any) => {
         return await deleteOrder(id)
    }


        return(
            <>
                <div className={"m-8"}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={"outline"}>Create Order</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Purchase Order</DialogTitle>

                            </DialogHeader>
                            <div>
                                <OrderForm />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <div className="overflow-x-auto">
                        <OriTable<PurchaseItem> headers={headers} itemData={orders} keysToShow={keysToShow} deleteItem={handleDelete}></OriTable>
                    </div>
                </div>
            </>
        )
    // }

}