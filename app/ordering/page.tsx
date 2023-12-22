'use client'
import Link from "next/link"
import Router from "next/router"
import {getAllOrders} from "@/services/ori/oriOrdering";
import {useEffect, useState} from "react";
import {getAllBins} from "@/services/bin";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {buttonVariants} from "@/components/ui/button";

export default function Ordering() {


    // let orders = await getAllOrders() || [];
    // if (!Array.isArray(orders)) {
    //     orders = [];
    // }

    const [orders, setOrders] = useState([]);

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

    return(
        <>
            <Link className={buttonVariants({ variant: "default" })} href="/ordering/create-purchase-order">
                New purchase order
            </Link>

            <div className="overflow-x-auto">
                <Table className="table table-zebra">

                    <TableHeader>
                        <TableRow>
                            <TableHead>Order Number</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Gross Weight</TableHead>
                            <TableHead>Stone Weight</TableHead>
                            <TableHead>Net Weight</TableHead>
                            <TableHead>Pure Weight</TableHead>
                            <TableHead>Karat</TableHead>
                            <TableHead>Rate</TableHead>
                            <TableHead>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {
                        orders.map((e:any) => {
                            return (
                                <>
                                    <TableRow className="hover">
                                        <TableCell>{e.id}</TableCell>
                                        <TableCell>{e.description}</TableCell>
                                        <TableCell>{e.grossWeight}</TableCell>
                                        <TableCell>{e.stoneWeight}</TableCell>
                                        <TableCell>{e.netWeight}</TableCell>
                                        <TableCell>{e.pureWeight}</TableCell>
                                        <TableCell>{e.karat}</TableCell>
                                        <TableCell>{e.rate}</TableCell>
                                        <TableCell>{e.amount}</TableCell>
                                    </TableRow>
                                </>
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </div>


            
        </>
    )
}