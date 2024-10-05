import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range"
import { addDays, format } from "date-fns"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BatchPerformance() {
  const [courseType, setCourseType] = useState("all")
  const [dateRange, setDateRange] = useState({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  const batchData = [
    { id: 1, name: "Batch A", course: "Web Development", completionRate: 92, avgScore: 88, startDate: "2023-05-01" },
    { id: 2, name: "Batch B", course: "Data Science", completionRate: 88, avgScore: 85, startDate: "2023-05-15" },
    { id: 3, name: "Batch C", course: "UX Design", completionRate: 95, avgScore: 90, startDate: "2023-06-01" },
    { id: 4, name: "Batch D", course: "Web Development", completionRate: 90, avgScore: 87, startDate: "2023-06-15" },
    { id: 5, name: "Batch E", course: "Data Science", completionRate: 85, avgScore: 82, startDate: "2023-07-01" },
  ]

  const filteredBatches = batchData.filter((batch) => {
    const batchDate = new Date(batch.startDate)
    return (
      (courseType === "all" || batch.course === courseType) &&
      batchDate >= dateRange.from &&
      batchDate <= dateRange.to
    )
  })

  const averageCompletionRate = filteredBatches.reduce((sum, batch) => sum + batch.completionRate, 0) / filteredBatches.length
  const averageAssessmentScore = filteredBatches.reduce((sum, batch) => sum + batch.avgScore, 0) / filteredBatches.length

  return (
    <div className="m-10 space-y-6">
      <h1 className="text-3xl font-bold">Batch Performance Analysis</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Select onValueChange={(value) => setCourseType(value)} >
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select course type" />
          </SelectTrigger>
          <SelectContent className = 'bg-white'>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Data Science">Data Science</SelectItem>
            <SelectItem value="UX Design">UX Design</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange date={dateRange} setDate={setDateRange} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageCompletionRate.toFixed(2)}%</div>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Assessment Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageAssessmentScore.toFixed(2)}%</div>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Batches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredBatches.length}</div>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Date Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">
              {format(dateRange.from, "MMM d, yyyy")} - {format(dateRange.to, "MMM d, yyyy")}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className = 'bg-white'>
        <CardHeader>
          <CardTitle>Completion Rates Comparison</CardTitle>
          <CardDescription>Completion rates across different batches</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredBatches}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completionRate" fill="#8884d8" name="Completion Rate" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className = 'bg-white'>
        <CardHeader>
          <CardTitle>Assessment Averages Comparison</CardTitle>
          <CardDescription>Average assessment scores across different batches</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredBatches}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgScore" fill="#82ca9d" name="Average Score" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className = 'bg-white'>
        <CardHeader>
          <CardTitle>Detailed Batch Performance</CardTitle>
          <CardDescription>Individual batch performance data</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Avg. Assessment Score</TableHead>
                <TableHead>Start Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBatches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell>{batch.name}</TableCell>
                  <TableCell>{batch.course}</TableCell>
                  <TableCell>{batch.completionRate}%</TableCell>
                  <TableCell>{batch.avgScore}%</TableCell>
                  <TableCell>{batch.startDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}