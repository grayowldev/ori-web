import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {getPathTree} from "@/services/location";
import {useEffect, useState} from "react";
import BranchItem from "@/components/ori-components/ori-dialog/branch-item";
import {number} from "prop-types";

export default function LocationSelector(props: any) {

    const[pathTree, setPathTree] = useState([])
    const [selectedPath, setSelectedPath] = useState({
        name: '',
        pathByIds: '',
        pathByNames: '',
        isBranch: false
    })
    useEffect(() => {
        const getBinBranchPaths = async () => {
            let data = await getPathTree() || [];
            if (!Array.isArray(data)) {
                data = [];
            }
            setPathTree(data)
            console.log(data)
        }
        getBinBranchPaths();
    },[])

    const handleBranchClick = (item: any) => {
        console.log(item)
        setSelectedPath(item)
        console.log(selectedPath)
    }

    const handleLocationSelection = () => {
        console.log("Location selected!")
        console.log(selectedPath)
    }

    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Set item location</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Set item location</DialogTitle>
                        <DialogDescription>
                            Choose the bin and branch location of your item.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <div className={"mb-2"}>
                            <Input value={selectedPath.isBranch ? selectedPath.pathByNames + "/": selectedPath.pathByNames + "/" + selectedPath.name}></Input>
                        </div>
                        {
                            pathTree.map((branch: any) => {
                                console.log('branch', branch)
                                return(
                                    <div key={branch.id}>
                                        <BranchItem className={"branch-item vertical-line"} branch={branch} onItemClicked={handleBranchClick}></BranchItem>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <DialogFooter>
                        <Button onClick={handleLocationSelection}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}