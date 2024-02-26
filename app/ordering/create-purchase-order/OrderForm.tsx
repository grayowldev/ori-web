'use client'
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {createOrder} from "@/services/ori/oriOrdering";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogFooter} from "@/components/ui/dialog";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function OrderForm() {
    const [netWeightVar, setNetWeightVar] = useState(0)
    const [stoneWeightVar, setStoneWeightVar] = useState(0)
    const [grossWeightVar, setGrossWeightVar] = useState(0)
    const [pureWeightVar, setPureWeight] = useState(0)
    const [karatVar, setKaratVar] = useState(0)
    async function handleSubmit(event:any) {
        event.preventDefault();

        const data = {
            description : String(event.target.description.value),
            grossWeight: Number(event.target.grossWeight.value),
            stoneWeight: Number(event.target.stoneWeight.value),
            netWeight: Number(event.target.netWeight.value),
            pureWeight: Number(event.target.pureWeight.value),
            karat: Number(event.target.karat.value),
            rate: Number(event.target.rate.value),
            amount: Number(event.target.amount.value),
        }

        const response =  await createOrder(data)

        if (response.ok) {
            console.log(response)
        } else {
            console.log("Failed")
        }
    }

    const handleGrossWeightChanged = (e: any) => {
        setGrossWeightVar(e.target.value)
        setNetWeightVar(e.target.value - stoneWeightVar)
        setPureWeight(karatVar == 24 ? .99 * (e.target.value - stoneWeightVar): (karatVar/24)* (e.target.value - stoneWeightVar))
    }

    const handleStoneWeightChanged = (e: any) => {
        setStoneWeightVar(e.target.value)
        setNetWeightVar(grossWeightVar - e.target.value)
        setPureWeight(karatVar == 24 ? .99* (grossWeightVar - e.target.value) : (karatVar/24)* (grossWeightVar - e.target.value))
    }

    const handleKaratChanged = (e: any) => {
        setKaratVar(e)
        setPureWeight(e == 24 ? .99 * netWeightVar : (Number(e)/24) * netWeightVar)
        console.log('@@', e)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="description">Order Description</Label>
                    </div>
                    <Input name={"description"}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="grossWeight">Gross Weight</Label>
                    </div>
                    <Input name={"grossWeight"} onChange={handleGrossWeightChanged}/>
                </div>


                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="karat">Order Karat</Label>
                    </div>
                    {/*<Input name={"karat"} onChange={handleKaratChanged}/>*/}
                    <Select onValueChange={handleKaratChanged}>
                        <SelectTrigger>
                            <SelectValue placeholder={"Select order karat"}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="24"> 24kt</SelectItem>
                            <SelectItem value="22"> 22kt</SelectItem>
                            <SelectItem value="20"> 20kt</SelectItem>
                            <SelectItem value="18"> 18kt</SelectItem>
                            <SelectItem value="16"> 16kt</SelectItem>
                            <SelectItem value="14"> 14kt</SelectItem>
                            <SelectItem value="12"> 12kt</SelectItem>
                            <SelectItem value="10"> 10kt</SelectItem>
                            <SelectItem value="8"> 8kt</SelectItem>
                            <SelectItem value="6"> 6kt</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="stoneWeight">Stone Weight</Label>
                    </div>
                    <Input name={"stoneWeight"} onChange={handleStoneWeightChanged}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="netWeight">Net Weight</Label>
                    </div>
                    <Input name={"netWeight"} value={netWeightVar} disabled={true}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="pureWeight">Pure Weight</Label>
                    </div>
                    <Input name={"pureWeight"} value={pureWeightVar} disabled={true}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="rate">Rate</Label>
                    </div>
                    <Input name={"rate"}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="amount">Amount</Label>
                    </div>
                    <Input name={"amount"}/>
                </div>
                <Dialog>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">
                                Submit
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </Dialog>
            </form>

        </>
    )
}