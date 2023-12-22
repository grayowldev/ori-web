'use client'
import { BinModel } from "@/models/bin";
import TopNavbar from '../../components/Navbar/topNavbar'
import { getAllBins } from "@/services/bin";
import OriButton from "@/components/ori-button";
import {useEffect, useState} from "react";

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
    })
    return (
        <main>
            <TopNavbar />
            <div className="page-content">
                <div className="add-element-button-container">
                    <OriButton>New Button</OriButton>
                </div>
                <div className="bin-table">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Bin Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Bin Path
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bins.map((bin: any) => {
                                        return(
                                            <tr key={bin.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {bin.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {bin.path}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </main>
    )
    
}