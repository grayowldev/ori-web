'use client'
import Link from "next/link"
import Router from "next/router"
import {getAllOrders} from "@/services/ori/oriOrdering";
import {useEffect, useState} from "react";
import {getAllBins} from "@/services/bin";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {buttonVariants} from "@/components/ui/button";
import OriTable from "@/components/ori-components/ori-table/ori-table";
import {id} from "postcss-selector-parser";

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

    //TODO: Create service to handle this
     const handleDelete = async (id: any) => {
        console.log("Delete clicked ", id)
         const HOST = 'https://tontally-core-production.up.railway.app';
        const response = await fetch(HOST + `/ori/ordering/id/${id}`, {
            method: "DELETE"
        })
         const data = await  response.json();

         if (!data) {
             throw new Error('Failed to fetch products')
         }
         return data
    }

    return(
        <>
            <Link className={buttonVariants({ variant: "default" })} href="/ordering/create-purchase-order">
                New purchase order
            </Link>

            <div className="overflow-x-auto">
                <OriTable<PurchaseItem> headers={headers} itemData={orders} keysToShow={keysToShow} deleteItem={handleDelete}></OriTable>
            </div>
        </>
    )
}