import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button";
export default function BinTable(props: any) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Path</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.bins.map((data: any) => {
                        return (
                            <TableRow key={data.id}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.path}</TableCell>
                                <TableCell><Button>Remove</Button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </>
    )
}