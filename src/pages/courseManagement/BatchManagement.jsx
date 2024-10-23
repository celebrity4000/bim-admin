import { useEffect, useState } from "react";
import { format } from "date-fns";
import { UserPlus, UserMinus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ViewBatch from "@/components/batch/ViewBatch";
import { DeleteBatch } from "@/components/batch/DeleteBatch";
import EditBatch from "@/components/batch/EditBatch";
import AddBatch from "@/components/batch/AddBatch";
import { getBatches } from "@/utils/batchHandler";
import { useToast } from "@/hooks/use-toast";

export default function BatchManagement() {
  const [batches, setBatches] = useState([]);

  const toast = useToast();
  const [newBatch, setNewBatch] = useState({
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    trainer: "",
  });

  const [showNewBatchDialog, setShowNewBatchDialog] = useState(false);
  const [showEditBatchDialog, setShowEditBatchDialog] = useState(false);

  const handleCreateBatch = (batch) => {
    setBatches([
      ...batches,
      { ...batch, id: batches.length + 1, participants: 0, dropouts: 0 },
    ]);
    setShowNewBatchDialog(false);
    setNewBatch({
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      trainer: "",
    });
  };

  const handleAddParticipant = (batchId) => {
    setBatches(
      batches.map((batch) =>
        batch.id === batchId
          ? { ...batch, participants: batch.participants + 1 }
          : batch
      )
    );
  };

  const handleRemoveParticipant = (batchId) => {
    setBatches(
      batches.map((batch) =>
        batch.id === batchId && batch.participants > 0
          ? {
              ...batch,
              participants: batch.participants - 1,
              dropouts: batch.dropouts + 1,
            }
          : batch
      )
    );
  };

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await getBatches();
        setBatches(response);
      } catch (error) {
        console.error("Get batches error: ", error);
        toast({
          variant: "destructive",
          title: "Failed to fetch batches",
          description: "Please try again later.",
        });
      }
    };
    fetchBatches();
  }, []);

  return (
    <div className="m-10 space-y-6">
      <h1 className="text-3xl font-bold">Batch Management</h1>

      <Tabs defaultValue="schedule">
        <TabsList>
          <TabsTrigger value="schedule">Batch Scheduling</TabsTrigger>
          <TabsTrigger value="enrollment">Enrollment Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Batch Schedule</h2>
            <AddBatch
              showNewBatchDialog={showNewBatchDialog}
              setShowNewBatchDialog={setShowNewBatchDialog}
              handleCreateBatch={handleCreateBatch}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Batch Name</TableHead>
                <TableHead className="text-center">Start Date</TableHead>
                <TableHead className="text-center">End Date</TableHead>
                <TableHead className="text-center">Trainer</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="text-center">
                    {batch.batchName}
                  </TableCell>
                  <TableCell className="text-center">
                    {format(new Date(batch.startDate), "PPP")}
                  </TableCell>
                  <TableCell className="text-center">
                    {format(new Date(batch.endDate), "PPP")}
                  </TableCell>
                  <TableCell className="text-center">{batch.trainer}</TableCell>

                  <TableCell className="text-center">
                    <ViewBatch
                      name={batch.name}
                      startDate={format(new Date(batch.startDate), "PPP")}
                      endDate={format(new Date(batch.endDate), "PPP")}
                      trainer={batch.trainer}
                      participants={batch.participants}
                      dropouts={batch.dropouts}
                    />
                    <EditBatch
                      batchName={batch.batchName}
                      startDate={batch.startDate}
                      endDate={batch.endDate}
                      trainer={batch.trainer}
                      participants={batch.participants}
                      dropouts={batch.dropouts}
                      batchId={batch.id}
                      handleEdit={(form) => {
                        setBatches(
                          batches.map((b) =>
                            b.id === batch.id ? { ...b, ...form } : b
                          )
                        );
                      }}
                      setShowEditBatchDialog={setShowEditBatchDialog}
                    />
                    <DeleteBatch
                      batchId={batch.id}
                      handleDelete={(id) => {
                        setBatches(batches.filter((batch) => batch.id !== id));
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="enrollment" className="space-y-4">
          <h2 className="text-2xl font-semibold">Enrollment Tracking</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Batch Name</TableHead>
                <TableHead className="text-center">
                  Total Participants
                </TableHead>
                <TableHead className="text-center">Dropouts</TableHead>
                {/* <TableHead className="text-center">Actions</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="text-center">
                    {batch.batchName}
                  </TableCell>
                  <TableCell className="text-center">
                    {batch.participants || 0}
                  </TableCell>
                  <TableCell className="text-center">
                    {batch.dropouts || 0}
                  </TableCell>
                  {/* <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddParticipant(batch.id)}>
                      <UserPlus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveParticipant(batch.id)}>
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
