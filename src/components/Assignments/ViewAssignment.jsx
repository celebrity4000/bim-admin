import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

const AssignmentData = ({
  title,
  description,
  deadline,
  submissions,
  reviewed,
  image,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
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
          {image && (
            <img
              src={image}
              alt="Course illustration"
              className="w-full h-48 object-cover rounded-[10px] mb-4"
            />
          )}
          <p className="text-foreground whitespace-pre-line">
            <strong>Deadline:</strong> {deadline}
            <br />
            <strong>Submissions:</strong> {submissions}
            <br />
            <strong>Reviewed:</strong> {reviewed}
          </p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentData;
