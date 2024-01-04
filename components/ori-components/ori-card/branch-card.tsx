import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {BranchModel} from "@/models/branch";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ChevronRight, MoreVertical} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {deleteBranch} from "@/services/branch";
export default function BranchCard(props: {branch: BranchModel}) {
    const handleDelete = async () => {
        console.log(" deleting branch with id ", props.branch.id)
        if (props.branch.id) {
            return  await deleteBranch(props.branch.id)
        }
        throw new Error('no id found')
    }
    return (
        <Card className={"h-60 w-60"}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className={"absolute ml-48 mt-4"} variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>
                        <Button onClick={handleDelete} className={"w-full"} variant={"ghost"}>
                            Delete
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <CardHeader>
                {/*<div className={"flex"}>*/}
                    <CardTitle>{props.branch.name}</CardTitle>

                {/*</div>*/}

                {/*<CardDescription>Card Description</CardDescription>*/}
            </CardHeader>
            <CardContent className={"h-24"}>
                {/*<p>Card Content</p>*/}
            </CardContent>
            <CardFooter>
                <Link href={"/branch/bins/[branchId]/"} as={`/branch/bins/${props.branch.id}/`}>View Details</Link>
            </CardFooter>
        </Card>
    )
}