import React from "react";

export default function BinItem({item, onItemClick}:any) {
    const handleClick = (e: React.MouseEvent) => {
        onItemClick(item, e)
    }
    return(
        <div onClick={handleClick}>
            <div className={"bin-item"}>
                Bin Item {item.id}
            </div>

            {item.children &&
                <div>
                    {Object.values(item.children).map((subItem: any) => (
                        <BinItem key={subItem.id} item={subItem} onItemClick={onItemClick}></BinItem>
                    ))}
                </div>
            }
        </div>
    )
}