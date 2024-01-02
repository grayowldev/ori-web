import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";

export default function SubmitDrawer(props: any) {
    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <Button className={"w-full"}>{props.buttonText}</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Create a Bin</DrawerTitle>
                        <DrawerDescription>Fill out the details of your bin</DrawerDescription>
                    </DrawerHeader>
                    {props.children}
                    <DrawerFooter>
                        <DrawerClose>
                            <Button onClick={props.onSubmit}>Submit</Button>
                        </DrawerClose>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}