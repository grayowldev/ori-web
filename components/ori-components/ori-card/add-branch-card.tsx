import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ComingSoonDialog from "@/components/ori-components/ori-dialog/feature-coming";
export default function AddBranchCard() {
    return (
        <>
            <Card className={"w-60 h-60 custom-gradient"}>
                <CardHeader>
                    <CardTitle>Create a Branch</CardTitle>
                    <CardDescription className={"text-black"}>
                        Branches represent a location in Ori.
                    </CardDescription>
                </CardHeader>
                <CardContent className={"h-14"}></CardContent>
                <CardFooter>
                    {/*<Button className={"w-full"}>Create a Branch</Button>*/}
                    <ComingSoonDialog>
                        <Button className={"w-full"}>Create a Branch</Button>
                    </ComingSoonDialog>
                </CardFooter>
            </Card>
        </>
    )
}