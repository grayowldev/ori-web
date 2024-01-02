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
import SubmitDrawer from "@/components/ori-components/ori-drawer/submit-drawer";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {addNewBranch} from "@/services/branch";
import {BranchModel} from "@/models/branch";
import {useRef} from "react";
export default function AddBranchCard() {
    const nameInputRef: any = useRef();
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const newBranch: BranchModel = {
            name: nameInputRef.current.value,
            type: 'branch'
        }
        try {
            const response = await addNewBranch(newBranch)
            if (!response.ok) {
                throw new Error('Network response is not OK')
            }
        } catch (error) {
            console.log(error)
        }
    }
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
                    <SubmitDrawer
                        onSubmit={handleSubmit}
                        buttonText={"Create a Branch"}
                        className={"w-full"}
                    >
                        <Label>Name</Label>
                        <Input type={"text"} placeholder={"Second Location"} ref={nameInputRef}></Input>
                    </SubmitDrawer>
                    {/*<ComingSoonDialog>*/}
                    {/*    <Button className={"w-full"}>Create a Branch</Button>*/}
                    {/*</ComingSoonDialog>*/}
                </CardFooter>
            </Card>
        </>
    )
}