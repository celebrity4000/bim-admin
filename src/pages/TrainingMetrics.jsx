import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const userData = [
  {
    userID: 1124,
    fullName: "Ronald Richards",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 158,
  },
  {
    userID: 3524,
    fullName: "Albert Flores",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 154,
  },
];
function TrainingMetrics() {
  return (
    <div className="flex-1 p-[32px]   ">
      <h1 className="text-[24px] text-[#00263E] font-[700] pl-[10px] pb-[24px]">
        Overview
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active batches
            </CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              View All
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +5 since last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Candidates
            </CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              Enrolled Candidates
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">44</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +6 more sell last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              Enrolled Candidates
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +8 more sell last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Certifications Issued
            </CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              Enrolled Candidates
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +20 more sell last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top user list */}
      <div className="bg-[#fff] mt-[16px] rounded-[8px]">
        <div className="flex items-center justify-between px-[25px] py-[16px]">
          <p className="font-bold">Top Students</p>
          {/* <Link to="/user" className="flex items-center justify-center gap-1 ">
            <p className="text-[#3E79F7] text-[14px]">See All Students</p>
            <FaArrowRightLong color="#3E79F7" size={12} />
          </Link> */}
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">User ID</TableHead>
              <TableHead className="text-center">Full Name</TableHead>

              {/* <TableHead className="text-center">Last Time Active</TableHead> */}
              <TableHead className="text-center">Total course</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData?.map((user) => (
              <TableRow key={user?.userID}>
                <TableCell className="text-center">{user?.userID}</TableCell>
                <TableCell className="text-center">{user?.fullName}</TableCell>

                {/* <TableCell className="text-center">
                  {user?.lastTimeActive}
                </TableCell> */}
                <TableCell className="text-center">{user?.sessions}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TrainingMetrics;
