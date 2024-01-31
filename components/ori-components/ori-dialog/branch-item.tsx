import BinItem from "@/components/ori-components/ori-dialog/bin-item";
import React, {useState} from "react";
import {MinusSquare, PlusSquare} from "lucide-react";

export default function BranchItem({branch, onItemClicked}: any) {
    const [expanded, setExpanded] = useState(false);
    const handleItemClick = (item: any, e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
        e.stopPropagation();
        console.log(item)
        onItemClicked(item)
    }
    const branchClicked = () => {
        console.log(branch)
        onItemClicked(branch)
    }

    const handleExpand = () => {
        setExpanded(!expanded)
    }

    console.log(Object.keys(branch.children).length > 0)
    return (
        <div className={"flex"}>
            <div className={"flex-shrink-0 pt-4 pr-2"}>
                {
                    (Object.keys(branch.children).length > 0) && (expanded ? <MinusSquare onClick={handleExpand}></MinusSquare> : <PlusSquare onClick={handleExpand}></PlusSquare>)
                }
            </div>

            <div className={"flex-grow"} onClick={branchClicked}>
                <div className={"branch-item"}>
                    {branch.name}
                </div>
                {
                    expanded && (
                        <div className={[expanded && 'vertical-line'].filter(Boolean).join(' ')}>
                            {branch.children &&
                                Object.values(branch.children).map((childItem:any) => (
                                    <BinItem key={childItem.id} item={childItem} onItemClick={handleItemClick}></BinItem>))
                            }
                        </div>
                    )
                }
            </div>
        </div>

    )
}