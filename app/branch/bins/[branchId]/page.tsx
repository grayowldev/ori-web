'use client'
import {useEffect, useRef, useState} from "react";
import {addNewBin, getBinByBranchId} from "@/services/bin";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import BinTable from "@/components/ori-components/ori-table/bin-table";
import SubmitDrawer from "@/components/ori-components/ori-drawer/submit-drawer";

export default function BranchBins(
    {
        params,
    }: {
        params: {branchId: string};
    }
) {
    const [bins, setBins] = useState([])
    const nameInputRef: any = useRef();
    useEffect(() => {
        async function getBinData() {
            //  Get bins by branch id
            let data = await getBinByBranchId(params.branchId) || []
            setBins(data)
        }
        getBinData()
    },[])

    const handleBinSubmit = async (event: any) => {
        const newBin = {
            parentId: Number(params.branchId),
            name: '',
            path: '/'+params.branchId,
            parentIsBranch: true
        }
        if (nameInputRef.current.value != '') {
            newBin.name = nameInputRef.current.value
        }

        try {
            const response = await addNewBin(newBin)
            if (!response.ok) {
                throw new Error('Network response is not OK')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <SubmitDrawer
                onSubmit={handleBinSubmit}
                buttonText={"Add a bin"}
            >
                <div>
                    <Label htmlFor="picture">Name</Label>
                    <Input type="text" placeholder="Front display" ref={nameInputRef}/>
                </div>
            </SubmitDrawer>

            <BinTable bins={bins}></BinTable>
        </div>
    )
}