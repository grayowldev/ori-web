'use client'
import {useState} from "react";
import Slider from "@/components/Sliders/slider";
import {createInventoryItems} from "@/services/inventory";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Progress} from "@/components/ui/progress";
import OrderList from "@/components/ori-components/order-list";

export default function CreateInventoryItem() {
    //Types
    type Row = {
        id: number,
        name: string,
        goldGrossWeight: number,
        category: string,
        subCategory: string,
        karat: number
    }


    const [showRightSlider, setShowRightSlider] = useState(false);
    const [purchaseOrder, setPurchaseOrder] = useState(null);
    const [itemQty, setItemQty] = useState(2)
    const [tableRows, setTableRows] = useState<Row[]>([
        {
            id: 0,
            name: '',
            goldGrossWeight: 0.0,
            category: '',
            subCategory: '',
            karat: 0.0
        }
    ])
    const [weightSum, setWeightSum] = useState(1)
    const triggerRightSlider = () => {
        setShowRightSlider(!showRightSlider)
        console.log(showRightSlider)
    }

    let handleOrderSelection = (data: any) => {
        setPurchaseOrder(data)
        console.log('order: ',purchaseOrder)
    }


    let generateTableRows = () => {

        console.log('generating...')
        setItemQty(itemQty + 1)
        console.log(typeof itemQty, itemQty)
        setTableRows([])
        let rows = []
        for (let i = 0; i < itemQty; i++ ) {
            const newItem = {
                id: i,
                name: '',
                goldGrossWeight: 0.0,
                category: '',
                subCategory: '',
                karat: 0.0
            }
            rows.push(newItem)
        }
        setTableRows(rows)
        console.log(tableRows)
    }


    // Update Fields in rowData
    let updateName = (id: number, event:any) => {
        console.log(id)
        let data = tableRows
        console.log(data)
        console.log(event)
        const updatedRows =  tableRows.map(obj => {
             if (obj.id === id && event.target) {
                console.log('found')

                return {...obj, name: event.target.value}
            }
            return obj;
        })
        setTableRows(updatedRows)
        console.log(data,tableRows)
    }

    let updateWeight = (id: number, event:any) => {
        let data = tableRows
        const updatedRows =  tableRows.map(obj => {
            if (obj.id === id && event.target) {
                console.log('found')
                return {...obj, goldGrossWeight: Number(event.target.value)}
            }
            return obj;
        })
        console.log(getCurrSum)
        setWeightSum(getCurrSum)
        console.log('@@@',weightSum)
        setTableRows(updatedRows)
        console.log(tableRows)
        console.log('@@@1',weightSum)
    }

    let updateCategory = (id: number, event:any) => {
        let data = tableRows
        const updatedRows =  tableRows.map(obj => {
            if (obj.id === id && event.target) {
                console.log('found')
                return {...obj, category: event.target.value}
            }
            return obj;
        })
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateStyle = (id: number, event:any) => {
        let data = tableRows
        const updatedRows =  tableRows.map(obj => {
            if (obj.id === id && event.target) {
                console.log('found')
                return {...obj, subCategory: event.target.value}
            }
            return obj;
        })
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateMetalPurity = (id: number, event:any) => {
        let data = tableRows
        const updatedRows =  tableRows.map(obj => {
            if (obj.id === id && event.target) {
                console.log('found')
                return {...obj, karat: event.target.value}
            }
            return obj;
        })
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    const getCurrSum = tableRows.reduce((accumulator, currObj) => {
        console.log("acc", accumulator)
        console.log(currObj.goldGrossWeight)
        console.log(accumulator + currObj.goldGrossWeight)
        // setWeightSum(accumulator + currObj.goldGrossWeight)
        return accumulator + currObj.goldGrossWeight
    }, 0)

    let handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await createInventoryItems(tableRows)
            if (response.ok) {
                throw new Error('Network response is not OK')
            }
        } catch ( error) {
            console.log(error)
        }
    }


    return (
        <div className={"content-container"}>
            <div className={"title-container"}>
                <h1 className={"title"}>Add New Items</h1>
            </div>


            {showRightSlider && <Slider orderSelection={handleOrderSelection} isSidebarVisible={showRightSlider}/>}
            <div className={"item-container order-fetch-container"}>
                <Input className={"w-32 inline"} placeholder={purchaseOrder != null  ? purchaseOrder['id'] : "Order Number"}/>


                <Drawer>
                    <DrawerTrigger>
                        <Button className={"ml-2"} variant={"outline"}>
                            Fetch Orders
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Available Purchased Orders</DrawerTitle>
                            <DrawerDescription>Select an order from the list below</DrawerDescription>
                        </DrawerHeader>
                        <DrawerClose>
                            <div className={"ml-8 mr-8"}>
                                <OrderList orderSelection={handleOrderSelection}></OrderList>
                            </div>
                        </DrawerClose>
                        <DrawerFooter>
                            {/*<Button>Submit</Button>*/}
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>

            {/*todo: Create table rows depending on number of items being created*/}

            <div className={"w-max border-solid border-2 rounded-lg p-8"}>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Style</TableHead>
                        <TableHead>Metal Purity</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {(
                            tableRows.map((item:any, index:number) => {
                                console.log(tableRows)
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <input placeholder={'Enter description'} onChange={(e) => updateName(item.id, e)}/>
                                        </TableCell>
                                        <TableCell>
                                            <input type={"number"} placeholder={'0.0'} onChange={(e) => updateWeight(item.id, e)}/>
                                        </TableCell>
                                        <TableCell>
                                            <input type={"text"} placeholder={'Enter Category'} onChange={(e) => updateCategory(item.id, e)}/>
                                        </TableCell>
                                        <TableCell>
                                            <input type={"text"} placeholder={'Enter Style'} onChange={(e) => updateStyle(item.id, e)}/>
                                        </TableCell>
                                        <TableCell>
                                            <input type={"number"} placeholder={'0.0'} onChange={(e) => updateMetalPurity(item.id, e)}/>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )}
                    </TableBody>
                </Table>

                <div className={"w-full inline flex place-content-center w-100%"}>
                    <Button variant={"outline"} className={"center"} onClick={generateTableRows}>+ Add item</Button>
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>




            <div className={"w-max border-solid border-2 rounded-lg p-8"}>
                <div>
                    <h3>Total Order Weight</h3>
                    <h4>{purchaseOrder != null ? purchaseOrder['grossWeight'] : 'Fetch and order'}</h4>
                    <div>
                        Current Sum: {weightSum}
                        { purchaseOrder != null ? <Progress value={weightSum / purchaseOrder['grossWeight'] * 100} /> : null}
                    </div>

                </div>
            </div>


        </div>

    )
}