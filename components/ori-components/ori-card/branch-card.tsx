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
export default function BranchCard(props: {branch: BranchModel}) {
    return (
        <Card className={"h-60 w-60"}>
            <CardHeader>
                <CardTitle>{props.branch.name}</CardTitle>
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