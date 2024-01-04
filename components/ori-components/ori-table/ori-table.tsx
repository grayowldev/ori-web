import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

interface TableProps<T> {
    headers: string[];
    itemData: T[];
    keysToShow: Array<keyof T>;
    deleteItem?: any
}
export default function OriTable<T extends {}>({ headers, itemData, keysToShow, deleteItem }: TableProps<T>) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            headers.map((header: string) => {
                                {
                                    return (
                                        <TableHead>
                                            {header}
                                        </TableHead>
                                    )
                                }
                            })
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                            itemData.map((item: T) => {
                                {
                                    return (
                                        <TableRow key={(item as any)["id"]}>
                                            {keysToShow.map((key) => (
                                               <TableCell key={key as string}>{(item as any)[key]}</TableCell>
                                            ))}
                                            <Button onClick={() => deleteItem((item as any)["id"])}>Delete</Button>
                                        </TableRow>
                                    )
                                }
                            })
                    }
                </TableBody>
            </Table>

        </>
    )
}