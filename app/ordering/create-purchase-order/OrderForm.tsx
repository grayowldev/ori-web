'use client'
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {createOrder} from "@/services/ori/oriOrdering";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogFooter} from "@/components/ui/dialog";

export default function OrderForm() {
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
                    <Input name={"grossWeight"}/>
                </div>


                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="karat">Order Karat</Label>
                    </div>
                    <Input name={"karat"}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="stoneWeight">Stone Weight</Label>
                    </div>
                    <Input name={"stoneWeight"}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="netWeight">Net Weight</Label>
                    </div>
                    <Input name={"netWeight"}/>
                </div>

                <div className={"mb-4"}>
                    <div className={"pb-2"}>
                        <Label htmlFor="pureWeight">Pure Weight</Label>
                    </div>
                    <Input name={"pureWeight"}/>
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