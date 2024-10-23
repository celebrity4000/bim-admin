import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { editBatch } from "@/utils/batchHandler";

const EditBatch = ({
  batchName,
  startDate,
  endDate,
  trainer,
  participants,
  dropouts,
  batchId,
  handleEdit,
}) => {
  const [form, setForm] = useState({
    id: batchId || null,
    batchName: batchName || "",
    startDate: startDate ? new Date(startDate).toISOString().split("T")[0] : "",
    endDate: endDate ? new Date(endDate).toISOString().split("T")[0] : "",
    trainer: trainer || "",
    participants: participants || "",
    dropouts: dropouts || "",
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      form.startDate = new Date(form.startDate);
      form.endDate = new Date(form.endDate);
      const response = await editBatch(form);
      if (response) {
        toast({
          title: "Batch Edited",
          message: "Batch has been edited successfully",
        });
        handleEdit(form);
      }
    } catch (error) {
      toast({
        title: "Error",
        message: "An error occurred while editing batch",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
        <DialogTitle className="font-medium">
          <div className=" bg-[#fff] rounded-[8px]">
            <h1 className="font-[600] text-[20px] mb-5">Batch Information</h1>
            <form onSubmit={handleSubmit}>
              <ScrollArea className="h-[70vh]">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="batchName">Batch Name</label>
                    <input
                      type="text"
                      name="batchName"
                      placeholder="Batch Name"
                      value={form.batchName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-[8px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="trainer">Trainer</label>
                    <input
                      type="text"
                      name="trainer"
                      placeholder="Trainer"
                      value={form.trainer}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-[8px] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="participants">Participants</label>
                    <input
                      type="number"
                      name="participants"
                      placeholder="Participants"
                      value={form.participants}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-[8px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="dropouts">Dropouts</label>
                    <input
                      type="number"
                      name="dropouts"
                      placeholder="Dropouts"
                      value={form.dropouts}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-[8px] outline-none"
                    />
                  </div>
                  <div className="grid grid-rows-1 gap-1 grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="startDate">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-[8px] outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="endDate">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        value={form.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-[8px] outline-none"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  variant="default"
                  type="submit"
                  className="py-4 rounded-[8px] mt-3 w-full">
                  Edit Batch
                </Button>
              </ScrollArea>
            </form>
          </div>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default EditBatch;
