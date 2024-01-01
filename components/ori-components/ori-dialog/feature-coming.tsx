import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function ComingSoonDialog(props: any) {
    return (
        <Dialog>
            <DialogTrigger className={"w-full"}>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feature Coming Soon</DialogTitle>
                    <DialogDescription>
                        This feature is currently in development, sorry for the inconvenience.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}