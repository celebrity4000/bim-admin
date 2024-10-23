import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using Shadcn Button
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"; // Shadcn Calendar component
import { format } from "date-fns"; // For date formatting
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CalendarRange, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createBatch } from "@/utils/batchHandler";

const AddBatch = ({
  showNewBatchDialog,
  setShowNewBatchDialog,
  handleCreateBatch,
}) => {
  const [newBatch, setNewBatch] = useState({
    name: "",
    startDate: null,
    endDate: null,
    trainer: "",
  });

  const [showStartCalendar, setShowStartCalendar] = useState(false); // For toggling the start date calendar
  const [showEndCalendar, setShowEndCalendar] = useState(false); // For toggling the end date calendar

  const { toast } = useToast();
  const handleSubmit = async () => {
    if (
      newBatch.name &&
      newBatch.startDate &&
      newBatch.endDate &&
      newBatch.trainer
    ) {
      if (newBatch.startDate > newBatch.endDate) {
        toast({
          variant: "destructive",
          title: "End date should be after start date",
          description: "Please select a valid end date.",
        });
        return;
      }
      try {
        newBatch.startDate = new Date(newBatch.startDate);
        newBatch.endDate = new Date(newBatch.endDate);
        const res = await createBatch(newBatch);
        if (res) {
          toast({
            title: "Batch created",
            description: "The batch has been created successfully.",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to create batch",
          description: "An error occurred while creating the batch.",
        });
      }
      handleCreateBatch(newBatch);
      setNewBatch({
        name: "",
        startDate: null,
        endDate: null,
        trainer: "",
      });
      setShowNewBatchDialog(false);
    } else {
      toast({
        variant: "destructive",
        title: "Please fill in all fields",
        description: "All fields are required to create a new batch.",
      });
    }
  };

  return (
    <Dialog open={showNewBatchDialog} onOpenChange={setShowNewBatchDialog}>
      <DialogTrigger asChild>
        <Button className="bg-pink text-white">
          <Plus className="mr-2 h-4 w-4" /> Create New Batch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Batch</DialogTitle>
          <DialogDescription>
            Enter the details for the new batch. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* Content for creating a new batch */}
        <div className="grid gap-4 py-4">
          {/* Name Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newBatch.name}
              onChange={(e) =>
                setNewBatch({ ...newBatch, name: e.target.value })
              }
              className="col-span-3"
            />
          </div>

          {/* Start Date Picker */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start-date" className="text-right">
              Start Date
            </Label>
            <div className="col-span-3 relative">
              {/* Display the selected date */}
              <div
                className="flex flex-row border border-gray-300 p-2 rounded cursor-pointer items-center justify-between"
                onClick={() => setShowStartCalendar((prev) => !prev)}>
                {newBatch.startDate
                  ? format(newBatch.startDate, "PPP")
                  : "Select a date"}
                <CalendarRange className="h-4 w-4" />
              </div>

              {/* Show calendar only when needed */}
              {showStartCalendar && (
                <div className="absolute z-10 mt-2 rounded-lg">
                  <Calendar
                    mode="single"
                    selected={newBatch.startDate}
                    className="bg-white border border-gray-300 shadow-md rounded-lg"
                    onSelect={(date) => {
                      setNewBatch({ ...newBatch, startDate: date });
                      setShowStartCalendar(false); // Hide calendar after selection
                    }}
                    initialFocus
                  />
                </div>
              )}
            </div>
          </div>

          {/* End Date Picker */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="end-date" className="text-right">
              End Date
            </Label>
            <div className="col-span-3 relative">
              {/* Display the selected date */}
              <div
                className="flex flex-row border border-gray-300 p-2 rounded cursor-pointer items-center justify-between"
                onClick={() => setShowEndCalendar((prev) => !prev)}>
                {newBatch.endDate
                  ? format(newBatch.endDate, "PPP")
                  : "Select a date"}
                <CalendarRange className="h-4 w-4" />
              </div>

              {/* Show calendar only when needed */}
              {showEndCalendar && (
                <div className="absolute z-10 mt-2 rounded-lg">
                  <Calendar
                    mode="single"
                    selected={newBatch.endDate}
                    className="bg-white border border-gray-300 shadow-md rounded-lg"
                    onSelect={(date) => {
                      setNewBatch({ ...newBatch, endDate: date });
                      setShowEndCalendar(false); // Hide calendar after selection
                    }}
                    initialFocus
                  />
                </div>
              )}
            </div>
          </div>

          {/* Trainer Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="trainer" className="text-right">
              Trainer
            </Label>
            <Input
              id="trainer"
              value={newBatch.trainer}
              onChange={(e) =>
                setNewBatch({ ...newBatch, trainer: e.target.value })
              }
              className="col-span-3"
            />
          </div>
        </div>

        {/* Dialog footer for saving */}
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-pink text-white">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBatch;
