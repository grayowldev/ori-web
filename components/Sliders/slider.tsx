'use client'
import {inspect} from "util";
import {getAllOrders} from "@/services/ori/oriOrdering";
import {useEffect, useState} from "react";

interface SliderProps {
    isSidebarVisible: boolean;
    orderSelection: any;
}
export default function Slider({ isSidebarVisible, orderSelection }: SliderProps) {
    // let orders = await getAllOrders() || [];
    // if (!Array.isArray(orders)) {
    //     orders = [];
    // }
    const [orders, setOrders] = useState([]);
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


    const sidebarStyles: object = {
        position: 'fixed',
        top: '0%',
        right: 0,
        width: '400px',
        height: '100%',
        backgroundColor: 'orange',
        transform: isSidebarVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out'
    };

    let sendData = (data: any) => {
        orderSelection(data)
        console.log(data)
    }


    return (
        <div style={sidebarStyles}>
        {/*// <div>*/}
            <h3>Select Purchase Order</h3>
            {/*<div>*/}
            {/*   Order Item 1*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*   Order Item 2*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*   Order Item 3*/}
            {/*</div>*/}
            {
                orders.map((order: any) => {
                    return (
                        <>
                            <div>
                                <button onClick={() => sendData(order)}>
                                    {order.description}
                                </button>
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}