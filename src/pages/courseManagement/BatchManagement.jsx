import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Plus, Edit, Trash2, UserPlus, UserMinus, FileSpreadsheet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function BatchManagement() {
  const [batches, setBatches] = useState([
    { id: 1, name: "Web Dev Batch 1", startDate: "2023-09-01", endDate: "2023-12-01", trainer: "John Doe", participants: 20, dropouts: 2 },
    { id: 2, name: "Data Science Batch 1", startDate: "2023-10-01", endDate: "2024-01-01", trainer: "Jane Smith", participants: 15, dropouts: 1 },
  ])

  const [newBatch, setNewBatch] = useState({
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    trainer: "",
  })

  const [showNewBatchDialog, setShowNewBatchDialog] = useState(false)

  const handleCreateBatch = () => {
    setBatches([...batches, { ...newBatch, id: batches.length + 1, participants: 0, dropouts: 0 }])
    setShowNewBatchDialog(false)
    setNewBatch({ name: "", startDate: new Date(), endDate: new Date(), trainer: "" })
  }

  return (
    <div className="m-10 space-y-6">
      <h1 className="text-3xl font-bold">Batch Management</h1>

      <Tabs defaultValue="schedule">
        <TabsList>
          <TabsTrigger value="schedule">Batch Scheduling</TabsTrigger>
          <TabsTrigger value="enrollment">Enrollment Tracking</TabsTrigger>
          {/* <TabsTrigger value="attendance">Attendance & Assessments</TabsTrigger> */}
        </TabsList>

        <TabsContent value="schedule" className="space-y-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Batch Schedule</h2>
            <Dialog open={showNewBatchDialog} onOpenChange={setShowNewBatchDialog}>
              <DialogTrigger asChild>
                <Button className = 'bg-pink text-white'><Plus className="mr-2 h-4 w-4" /> Create New Batch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Batch</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new batch. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newBatch.name}
                      onChange={(e) => setNewBatch({ ...newBatch, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="start-date" className="text-right">
                      Start Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`col-span-3 justify-start text-left font-normal ${!newBatch.startDate && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {newBatch.startDate ? format(newBatch.startDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white">
                        <Calendar
                          mode="single"
                          selected={newBatch.startDate}
                          onSelect={(date) => setNewBatch({ ...newBatch, startDate: date })}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="end-date" className="text-right">
                      End Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`col-span-3 justify-start text-left font-normal ${!newBatch.endDate && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {newBatch.endDate ? format(newBatch.endDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newBatch.endDate}
                          onSelect={(date) => setNewBatch({ ...newBatch, endDate: date })}
                          initialFocus
                        />
                      </PopoverContent> 
                    </Popover>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="trainer" className="text-right">
                      Trainer
                    </Label>
                    <Input
                      id="trainer"
                      value={newBatch.trainer}
                      onChange={(e) => setNewBatch({ ...newBatch, trainer: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreateBatch} className = 'w-full bg-pink text-white'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Name</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Trainer</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell>{batch.name}</TableCell>
                  <TableCell>{batch.startDate}</TableCell>
                  <TableCell>{batch.endDate}</TableCell>
                  <TableCell>{batch.trainer}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
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
                    <Button variant="ghost" size="sm"><UserPlus className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><UserMinus className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* <TabsContent value="attendance" className="space-y-4">
          <h2 className="text-2xl font-semibold">Attendance & Assessments</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className = 'bg-white'>
              <CardHeader>
                <CardTitle>Attendance Tracking</CardTitle>
                <CardDescription>Mark attendance for each batch</CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Batch" />
                  </SelectTrigger>
                  <SelectContent className = 'bg-white'>
                    {batches.map((batch) => (
                      <SelectItem key={batch.id} value={batch.id.toString()}>{batch.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="mt-4 bg-pink text-white"><FileSpreadsheet className="mr-2 h-4 w-4 " /> Mark Attendance</Button>
              </CardContent>
            </Card>
            <Card className = 'bg-white'>
              <CardHeader>
                <CardTitle>Assessments</CardTitle>
                <CardDescription>Set up and manage assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Batch" />
                  </SelectTrigger>
                  <SelectContent className = 'bg-white'>
                    {batches.map((batch) => (
                      <SelectItem key={batch.id} value={batch.id.toString()}>{batch.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="mt-4 bg-pink text-white">Create Assessment</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}