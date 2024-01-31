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
import ComingSoonDialog from "@/components/ori-components/ori-dialog/feature-coming";
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
                        console.log(data)
                        return (
                            <TableRow key={data.id}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.pathByNames}</TableCell>
                                <TableCell>
                                    <ComingSoonDialog><Button>Remove</Button></ComingSoonDialog></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </>
    )
}