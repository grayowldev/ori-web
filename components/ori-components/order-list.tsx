'use client'
import {useEffect, useState} from "react";
import {getAllOrders} from "@/services/ori/oriOrdering";
import {Button} from "@/components/ui/button";

interface OrderListProps {
    orderSelection: any;
}
export default function OrderList({orderSelection}: OrderListProps) {
    // States
    const [orders, setOrders] = useState([]);

    // Effects
    useEffect(() => {
        async function getPurchaseOrders() {
            let orders = await getAllOrders() || [];
            if (!Array.isArray(orders)) {
                orders = [];
            }
            setOrders(orders)
            console.log(orders)
        }
        getPurchaseOrders();
    }, [])

    // Functions
    let sendData = (data: any) => {
        orderSelection(data)
        console.log(data)
    }

    // Rendered UI

    return <div>
        {
            orders.map((order: any) => {
                return (
                    <div key={order.id} className={"mb-4"}>
                        <Button variant={"outline"} className={"w-full"} onClick={() => sendData(order)}>
                            {order.description}
                        </Button>
                    </div>

                )
            })
        }
    </div>


}