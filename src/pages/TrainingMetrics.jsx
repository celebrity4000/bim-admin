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
    country: "USA",
    lastTimeActive: "June 10, 2021",
    courseTaken: 5,
    gotCertification: 2,
  },
  {
    userID: 3524,
    fullName: "Albert Flores",
    country: "Canada",
    lastTimeActive: "June 10, 2021",
    courseTaken: 4,
    gotCertification: 1,
  },
  {
    userID: 7571,
    fullName: "Wade Warren",
    country: "South Africa",
    lastTimeActive: "June 10, 2021",
    courseTaken: 3,
    gotCertification: 1,
  },
  {
    userID: 124,
    fullName: "Brooklyn Simmons",
    country: "Brazil",
    lastTimeActive: "June 10, 2021",
    courseTaken: 2,
    gotCertification: 1,
  },
  {
    userID: 235,
    fullName: "Devon Lane",
    country: "Portugal",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 256,
    fullName: "Marvin McKinney",
    country: "Mexico",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 257,
    fullName: "Marvin McKinney",
    country: "USA",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 258,
    fullName: "Marvin McKinney",
    country: "Australia",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 259,
    fullName: "Marvin McKinney",
    country: "New Zealand",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 260,
    fullName: "Marvin McKinney",
    country: "Mexico",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 261,
    fullName: "Marvin McKinney",
    country: "Zimbabwe",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
  {
    userID: 262,
    fullName: "Marvin McKinney",
    country: "South Africa",
    lastTimeActive: "June 10, 2021",
    courseTaken: 1,
    gotCertification: 1,
  },
];
function TrainingMetrics() {
  return (
    <div className="flex-1 p-[32px]   ">
      <h1 className="text-[24px] text-[#00263E] font-[700] pl-[10px] pb-[24px]">
        Training Metrics
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
              <TableHead className="text-center">Country</TableHead>
              <TableHead className="text-center">Course Taken</TableHead>
              <TableHead className="text-center">Got Certification</TableHead>
              <TableHead className="text-center">Last Time Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData?.map((user) => (
              <TableRow key={user?.userID}>
                <TableCell className="text-center">{user?.userID}</TableCell>
                <TableCell className="text-center">{user?.fullName}</TableCell>

                <TableCell className="text-center">{user?.country}</TableCell>
                <TableCell className="text-center">
                  {user?.courseTaken}
                </TableCell>
                <TableCell className="text-center">
                  {user?.gotCertification}
                </TableCell>
                <TableCell className="text-center">
                  {user?.lastTimeActive}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TrainingMetrics;
