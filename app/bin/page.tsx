'use client'
import { BinModel } from "@/models/bin";
import TopNavbar from '../../components/Navbar/topNavbar'
import { getAllBins } from "@/services/bin";
import OriButton from "@/components/ori-button";
import {useEffect, useState} from "react";
import BinTable from "@/components/ori-components/ori-table/bin-table";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function Bin() {
    const [bins, setBins] = useState([]);

    useEffect( () => {
        async function getBins() {
            let bins = await getAllBins() || [];
            console.log(bins); // Log to see what you got
            if (!Array.isArray(bins)) {
                bins = [];
            }
            setBins(bins)
        }
        getBins();
    })
    return (
        <main>
            <TopNavbar />
            <div className="page-content">
                <div>
                    <div className={"ml-8 mt-8"}>
                        <Label>Create a bin</Label>
                        <div className={"mt-4 w-72 flex"}>
                            <Input className={"w-72 mr-2 mb-2"} type="text"/>
                            <Button variant="secondary">Set location</Button>
                        </div>

                        <Button>Create bin</Button>
                    </div>

                </div>

                <BinTable bins={bins}></BinTable>
                
            </div>
        </main>
    )
    
}