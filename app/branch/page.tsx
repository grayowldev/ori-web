import OriButton from "@/components/ori-button";
import TopNavbar from '../../components/Navbar/topNavbar'
import { BranchModel } from "@/models/branch";
import { getAllBanches } from "@/services/branch";

export default async function Branch() {
    // let branches: BranchModel[] = await getAllBanches() || [] as BranchModel[];
    // console.log(branches); // Log to see what you got
    // if (!Array.isArray(branches)) {
    //     branches = [];
    // }

    return (
        <main>
            <TopNavbar />
            <div className="page-content">
                <div className="add-element-button-container">
                    <OriButton >New Button</OriButton>
                    {/* {
                        branches.map((branch: any) => {
                            return(
                                <>
                                {branch.name}
                                </>
                            )
                        })
                    } */}
                </div>
                <table className="branch-table">
                </table>
            </div>
        </main>
    )
    
}

