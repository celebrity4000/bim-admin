import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
// import { ChartWrapper } from "@/data-chart/wrapper"
// import Chart from "@/data-chart/line/4"

export default function PlacementAnalytics() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Placement Analytics</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <Card className = "bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Placement Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+2% from last quarter</p>
          </CardContent>
        </Card>
        <Card className = "bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Time to Placement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 days</div>
            <p className="text-xs text-muted-foreground">-5 days from last quarter</p>
          </CardContent>
        </Card>
        <Card className = "bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highest Paying Role</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Data Scientist</div>
            <p className="text-xs text-muted-foreground">$95,000 average salary</p>
          </CardContent>
        </Card>
        <Card className = "bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most In-Demand Skill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Machine Learning</div>
            <p className="text-xs text-muted-foreground">30% of placements</p>
          </CardContent>
        </Card>
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle>Placement Rates Over Time</CardTitle>
          <CardDescription>Monthly placement rates for the past year</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ChartWrapper content={Chart} className="aspect-[4/3]" title="Placement Rates Over Time" />
        </CardContent>
      </Card> */}

      <Card className = "bg-white">
        <CardHeader>
          <CardTitle>Detailed Placement Data</CardTitle>
          <CardDescription>Breakdown by course and job role</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Placement Rate</TableHead>
                <TableHead>Avg. Salary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Data Science</TableCell>
                <TableCell>Data Scientist</TableCell>
                <TableCell>92%</TableCell>
                <TableCell>$95,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Web Development</TableCell>
                <TableCell>Full Stack Developer</TableCell>
                <TableCell>88%</TableCell>
                <TableCell>$85,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>UX Design</TableCell>
                <TableCell>UX/UI Designer</TableCell>
                <TableCell>80%</TableCell>
                <TableCell>$75,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Digital Marketing</TableCell>
                <TableCell>Marketing Specialist</TableCell>
                <TableCell>78%</TableCell>
                <TableCell>$65,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cybersecurity</TableCell>
                <TableCell>Security Analyst</TableCell>
                <TableCell>85%</TableCell>
                <TableCell>$90,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}