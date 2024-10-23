import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import images from "../../assets/course.png";
import { Description } from "@radix-ui/react-dialog";

const ViewCourse = ({title, description, image, content }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" >
                    <Eye className="h-4 w-4" />
                    <span>&nbsp; View</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] w-full pr-4">
                    <img
                        src={image}
                        alt="Blog post illustration"
                        className="w-full h-48 object-cover rounded-[10px] mb-4"
                    />
                    <p className="text-foreground whitespace-pre-line">{content}</p>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default ViewCourse