import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

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
  {
    userID: 7571,
    fullName: "Wade Warren",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 152,
  },
  {
    userID: 124,
    fullName: "Brooklyn Simmons",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 149,
  },
  {
    userID: 235,
    fullName: "Devon Lane",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 145,
  },
  {
    userID: 256,
    fullName: "Marvin McKinney",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 140,
  },
  {
    userID: 45,
    fullName: "Savannah Nguyen",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 126,
  },
  {
    userID: 1001,
    fullName: "Bessie Cooper",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 115,
  },
];

const Overview = () => {
  return (
    <div className="flex-1 p-[32px]   ">
      <h1 className="text-[24px] text-[#00263E] font-[700] pl-[10px] pb-[24px]">
        Overview
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              View All
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +12 since last month
            </p>
          </CardContent>
        </Card>
        {/* <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Link className="text-sm font-medium underline" to="#">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +12 since last month
            </p>
          </CardContent>
        </Card> */}
        {/* <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Most popular course
            </CardTitle>
            <Link className="text-sm font-medium underline" to="#">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Web dev</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +12 since last month
            </p>
          </CardContent>
        </Card> */}
        <Card className="bg-[#fff] rounded-[8px] shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total course</CardTitle>
            {/* <Link className="text-sm font-medium underline" to="#">
              View All
            </Link> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">40</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +12 more sell last month
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Top user list */}
      <div className="bg-[#fff] mt-[16px] rounded-[8px]">
        <div className="flex items-center justify-between px-[25px] py-[16px]">
          <p className="font-bold">Top Students</p>
          <Link to="/user" className="flex items-center justify-center gap-1 ">
            <p className="text-[#3E79F7] text-[14px]">See All Students</p>
            <FaArrowRightLong color="#3E79F7" size={12} />
          </Link>
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
};

export default Overview;
