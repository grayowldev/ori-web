'use client'
import {useEffect, useState} from "react";
import {createInventoryItems} from "@/services/inventory";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    Table,
    TableBody,
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
import OrderList from "@/components/ori-components/order-list";
import {useRouter} from "next/navigation";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import OriProgress from "@/components/ori-components/ori-progress/ori-progress";
import LocationSelector from "@/components/ori-components/ori-dialog/location-selector";
import {getAllOrders} from "@/services/ori/oriOrdering";
import Link from "next/link";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Location} from "@/models/location";

export default function CreateInventoryItem() {
    const router = useRouter();
    //Types
    type Row = {
        id?: number,
        name: string,
        goldGrossWeight: number,
        category: string,
        subCategory: string,
        karat: number,
        location: string
    }

    const [showRightSlider, setShowRightSlider] = useState(false);
    const [purchaseOrder, setPurchaseOrder] = useState(null);
    const [itemQty, setItemQty] = useState(2)
    const [tableRows, setTableRows] = useState<Row[]>([
        {
            name: '',
            goldGrossWeight: 0.0,
            category: '',
            subCategory: '',
            karat: 0.0,
            location: ''
        }
    ])
    const [weightSum, setWeightSum] = useState(0)
    const [weightProgress, setWeightProgress] = useState(0)
    const ktValues: any = {
        kt10: 10,
        kt14: 14,
        kt18: 18,
        kt22: 22,
        kt24: 24
    }
    const [itemsLocation, setItemsLocation] = useState('')
    const [orders, setOrders] = useState([]);
    const [itemSetLocation, setItemSetLocation] = useState<Location>()


    useEffect(() => {
        getOrders()
    }, []);


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
        // setTableRows([)
        let rows = tableRows
        for (let i = tableRows.length; i < itemQty; i++ ) {
            const newItem = {
                name: '',
                goldGrossWeight: 0.0,
                category: '',
                subCategory: '',
                karat: 0.0,
                location: ''
            }
            rows.push(newItem)
        }
        setTableRows(rows)
        console.log(tableRows)
    }

    // Update Fields in rowData
    let updateName = (id: number, event:any) => {
        const updatedRows = tableRows
        updatedRows[id].name = event.target.value
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateWeight = (id: number, event:any) => {
        const updatedRows = tableRows
        updatedRows[id].goldGrossWeight = Number(event.target.value)
        getCurrSum()
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateCategory = (id: number, event:any) => {
        const updatedRows = tableRows
        updatedRows[id].category = event.target.value
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateStyle = (id: number, event:any) => {
        const updatedRows = tableRows
        updatedRows[id].subCategory = event.target.value
        setTableRows(updatedRows)
        console.log(tableRows)
    }

    let updateMetalPurity = (id: number, event:any) => {
        const updatedRows = tableRows
        updatedRows[id].karat = Number(event)
        setTableRows(updatedRows)
    }

    const getCurrSum =() => {
        const sum = tableRows.reduce((accumulator, currObj) => {
            console.log("acc", accumulator)
            console.log(currObj.goldGrossWeight)
            console.log(accumulator + currObj.goldGrossWeight)
            // setWeightSum(accumulator + currObj.goldGrossWeight)
            return accumulator + currObj.goldGrossWeight
        }, 0);
        setWeightSum(sum)
        if (purchaseOrder) {
            setWeightProgress(sum / purchaseOrder['grossWeight'] * 100)
        }
    }

    const createItems = async () => {
        console.log('function trigged')
        if (itemSetLocation?.pathByIds) {
            tableRows.map((row) => {
                row.location = itemSetLocation?.pathByIds
            })
        }
        console.log(tableRows)
        try {
            const response = await createInventoryItems(tableRows)
            if (!response.ok) {
                throw new Error('Network response is not OK')
            }
        } catch ( error) {
            console.log(error)
        }
    }

    const getOrders = async () => {
        const data = await getAllOrders()
        setOrders(data)
        return data.length;
    }

    let handleSubmit = async (event: any) => {
        event.preventDefault();
        await createItems();
        router.push('/inventory');
    }

    const onSelect = (path: Location) => {
        console.log("selected from parent function")
        console.log(path)
        setItemSetLocation(path)
        console.log(itemSetLocation)
    }

    if (orders.length == 0) {
      return (
          <div className={"p-8"}>
              <h1>OOF</h1>
              <h1>Looks like we have no purchased orders to process</h1>
              <div>
                  <Link href={"/ordering"}>
                      <Card className={"w-60 h-64"}>
                          <CardHeader>
                              <CardTitle>
                                  <div className={"p-4"}>CREATE</div>
                                  <div className={"p-4"}>AN</div>
                                  <div className={"p-4"}>ORDER</div>
                              </CardTitle>
                              {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
                          </CardHeader>
                      </Card>
                  </Link>

              </div>
          </div>
      )
    } else {
        return (
            <div className={"content-container"}>
                <div className={"title-container"}>
                    <h1 className={"title"}>Add New Items</h1>
                </div>

                {/*{showRightSlider && <Slider orderSelection={handleOrderSelection} isSidebarVisible={showRightSlider}/>}*/}
                <div className={'mb-10 flex'}>
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
                                    <DrawerClose>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <div>
                            <LocationSelector selection={onSelect}></LocationSelector>
                        </div>

                    </div>
                    <div className={'ml-auto mr-56'}>
                        {
                            purchaseOrder ?
                                <OriProgress
                                    progressPercentage={weightProgress}
                                    weight={purchaseOrder['grossWeight']}
                                    sum={weightSum}>
                                </OriProgress> : <></>
                        }
                    </div>
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
                                <TableHead>Metal Purity (kt)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {(
                                tableRows.map((item:any, index:number) => {
                                    console.log(tableRows)
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Input placeholder={"Enter item name"} onChange={( event) => updateName(index, event)}></Input>
                                            </TableCell>
                                            <TableCell>
                                                <Input placeholder={"Enter item weight"} onChange={( event) => updateWeight(index, event)}></Input>
                                            </TableCell>
                                            <TableCell>
                                                <Input placeholder={"Enter category"} onChange={( event) => updateCategory(index, event)}></Input>
                                            </TableCell>
                                            <TableCell>
                                                <Input placeholder={"Enter style"} onChange={( event) => updateStyle(index, event)}></Input>
                                            </TableCell>
                                            <TableCell>
                                                <Select onValueChange={(e) => updateMetalPurity(index, e)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder={"Select the metal purity"} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {
                                                                Object.keys(ktValues).map((key) => (
                                                                    <SelectItem key={key} value={ktValues[key]}>{ktValues[key]} kt</SelectItem>
                                                                ))
                                                            }
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
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
                    <Button disabled={!purchaseOrder} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        )
    }
}