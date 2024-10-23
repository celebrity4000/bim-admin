// import { useState } from "react";
// import { format } from "date-fns";
// import { UserPlus, UserMinus } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import ViewBatch from "@/components/batch/ViewBatch";
// import { DeleteBatch } from "@/components/batch/DeleteBatch";
// import EditBatch from "@/components/batch/EditBatch";
// import AddBatch from "@/components/batch/AddBatch";

// export default function BatchManagement() {
//   const [batches, setBatches] = useState([
//     {
//       id: 1,
//       name: "Web Dev Batch 1",
//       startDate: "2023-09-01",
//       endDate: "2023-12-01",
//       trainer: "John Doe",
//       participants: 20,
//       dropouts: 2,
//     },
//     {
//       id: 2,
//       name: "Data Science Batch 1",
//       startDate: "2023-10-01",
//       endDate: "2024-01-01",
//       trainer: "Jane Smith",
//       participants: 15,
//       dropouts: 1,
//     },
//     {
//       id: 3,
//       name: "UX/UI Design Batch 1",
//       startDate: "2023-11-01",
//       endDate: "2024-02-01",
//       trainer: "Alice Johnson",
//       participants: 10,
//       dropouts: 0,
//     },
//   ]);

//   const [newBatch, setNewBatch] = useState({
//     name: "",
//     startDate: new Date(),
//     endDate: new Date(),
//     trainer: "",
//   });

//   const [showNewBatchDialog, setShowNewBatchDialog] = useState(false);

//   const handleCreateBatch = () => {
//     setBatches([
//       ...batches,
//       { ...newBatch, id: batches.length + 1, participants: 0, dropouts: 0 },
//     ]);
//     setShowNewBatchDialog(false);
//     setNewBatch({
//       name: "",
//       startDate: new Date(),
//       endDate: new Date(),
//       trainer: "",
//     });
//   };

//   return (
//     <div className="m-10 space-y-6">
//       <h1 className="text-3xl font-bold">Batch Management</h1>

//       <Tabs defaultValue="schedule">
//         <TabsList>
//           <TabsTrigger value="schedule">Batch Scheduling</TabsTrigger>
//           <TabsTrigger value="enrollment">Enrollment Tracking</TabsTrigger>
//         </TabsList>

//         <TabsContent value="schedule" className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-semibold">Batch Schedule</h2>
//             <AddBatch
//               showNewBatchDialog={showNewBatchDialog}
//               setShowNewBatchDialog={setShowNewBatchDialog}
//               handleCreateBatch={handleCreateBatch}
//             />
//           </div>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Batch Name</TableHead>
//                 <TableHead>Start Date</TableHead>
//                 <TableHead>End Date</TableHead>
//                 <TableHead>Trainer</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {batches.map((batch) => (
//                 <TableRow key={batch.id}>
//                   <TableCell>{batch.name}</TableCell>
//                   <TableCell>
//                     {format(new Date(batch.startDate), "PPP")}
//                   </TableCell>
//                   <TableCell>
//                     {format(new Date(batch.endDate), "PPP")}
//                   </TableCell>
//                   <TableCell>{batch.trainer}</TableCell>
//                   <TableCell>
//                     <ViewBatch
//                       name={batch.name}
//                       startDate={format(new Date(batch.startDate), "PPP")}
//                       endDate={format(new Date(batch.endDate), "PPP")}
//                       trainer={batch.trainer}
//                       participants={batch.participants}
//                       dropouts={batch.dropouts}
//                     />
//                     <EditBatch
//                       name={batch.name}
//                       startDate={batch.startDate}
//                       endDate={batch.endDate}
//                       trainer={batch.trainer}
//                       participants={batch.participants}
//                       dropouts={batch.dropouts}
//                       handleEdit={(form) => {
//                         console.log("Editing batch with id", batch.id);
//                         setBatches(
//                           batches.map((b) =>
//                             b.id === batch.id ? { ...b, ...form } : b
//                           )
//                         );
//                       }}
//                     />
//                     <DeleteBatch
//                       batchId={batch.id}
//                       handleDelete={(id) => {
//                         console.log("Deleting batch with id", id);
//                         setBatches(batches.filter((batch) => batch.id !== id));
//                       }}
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TabsContent>

//         <TabsContent value="enrollment" className="space-y-4">
//           <h2 className="text-2xl font-semibold">Enrollment Tracking</h2>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Batch Name</TableHead>
//                 <TableHead>Total Participants</TableHead>
//                 <TableHead>Dropouts</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {batches.map((batch) => (
//                 <TableRow key={batch.id}>
//                   <TableCell>{batch.name}</TableCell>
//                   <TableCell>{batch.participants}</TableCell>
//                   <TableCell>{batch.dropouts}</TableCell>
//                   <TableCell>
//                     <Button variant="ghost" size="sm">
//                       <UserPlus className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="sm">
//                       <UserMinus className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TabsContent>
//         {/* <TabsContent value="attendance" className="space-y-4">
//           <h2 className="text-2xl font-semibold">Attendance & Assessments</h2>
//           <div className="grid gap-4 md:grid-cols-2">
//             <Card className = 'bg-white'>
//               <CardHeader>
//                 <CardTitle>Attendance Tracking</CardTitle>
//                 <CardDescription>Mark attendance for each batch</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select Batch" />
//                   </SelectTrigger>
//                   <SelectContent className = 'bg-white'>
//                     {batches.map((batch) => (
//                       <SelectItem key={batch.id} value={batch.id.toString()}>{batch.name}</SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <Button className="mt-4 bg-pink text-white"><FileSpreadsheet className="mr-2 h-4 w-4 " /> Mark Attendance</Button>
//               </CardContent>
//             </Card>
//             <Card className = 'bg-white'>
//               <CardHeader>
//                 <CardTitle>Assessments</CardTitle>
//                 <CardDescription>Set up and manage assessments</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select Batch" />
//                   </SelectTrigger>
//                   <SelectContent className = 'bg-white'>
//                     {batches.map((batch) => (
//                       <SelectItem key={batch.id} value={batch.id.toString()}>{batch.name}</SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <Button className="mt-4 bg-pink text-white">Create Assessment</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent> */}
//       </Tabs>
//     </div>
//   );
// }

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
                <TableHead>Batch Name</TableHead>
                <TableHead>Total Participants</TableHead>
                <TableHead>Dropouts</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell>{batch.name}</TableCell>
                  <TableCell>{batch.participants}</TableCell>
                  <TableCell>{batch.dropouts}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
