'use client'
import { getAllBanches } from "@/services/branch";
import {useEffect, useState} from "react";
import BranchCard from "@/components/ori-components/ori-card/branch-card";
import AddBranchCard from "@/components/ori-components/ori-card/add-branch-card";

export default function Branch() {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        async function getBranchData() {
            let branchData = await getAllBanches() || []
            setBranches(branchData)
            console.log(branchData)
        }
        getBranchData();
    }, [])

    return (
        <main>
            {/*<TopNavbar />*/}
            <div className="page-content">
                <div className={"grid grid-cols-1 md:grid-cols-4 gap-9"}>
                    <AddBranchCard></AddBranchCard>
                    {
                        branches.map((branch: any) => {
                            return(
                                <>
                                    <div>
                                        <BranchCard  branch={branch} key={branch.id}></BranchCard>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
    
}

