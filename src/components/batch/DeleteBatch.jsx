import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { deleteBatch } from "@/utils/batchHandler";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";

export function DeleteBatch({ batchId, handleDelete }) {
  const { toast } = useToast();
  async function handleClick() {
    try {
      const response = await deleteBatch(batchId);
      if (response) {
        handleDelete(batchId);
        toast({
          title: "Batch deleted successfully",
          description: "The batch has been deleted successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Failed to delete batch",
        description: "An error occurred while deleting the batch.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white !rounded-[10px]">
        <DialogHeader>
          <DialogTitle>Delete Batch</DialogTitle>
          <DialogDescription>
            Are you sure to delete this Batch?
          </DialogDescription>
        </DialogHeader>

        <DialogClose asChild>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-black text-white rounded-[10px] hover:bg-black hover:text-white hover:rounded-[10px]"
              onClick={handleClick}>
              Yes
            </Button>
            <Button
              type="submit"
              className="bg-black text-white rounded-[10px] hover:bg-black hover:text-white hover:rounded-[10px]">
              No
            </Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
