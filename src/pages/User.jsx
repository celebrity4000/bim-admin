import React, { useEffect, useMemo, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { SearchIcon } from "lucide-react";
const data = [
  {
    user_id: "001",
    full_name: "John Doe",
    country: "USA",
    type: "Course 1",
    date_of_creation: "2024-07-25",
    status: "active",
    payAmt: '100',
    dueAmt: '0',
    courseFee: '100',
    courseDuration: '2 Month'
  },
  {
    user_id: "002",
    full_name: "Jane Smith",
    country: "Canada",
    type: "Course 2",
    date_of_creation: "2024-07-24",
    status: "active",
    payAmt: '100',
    dueAmt: '0',
    courseFee: '100',
    courseDuration: '2 Month'
  },
  {
    user_id: "003",
    full_name: "Carlos Ramirez",
    country: "Mexico",
    type: "Course 3",
    date_of_creation: "2024-07-23",
    status: "active",
    payAmt: '100',
    dueAmt: '0',
    courseFee: '100',
    courseDuration: '2 Month'
  },
  {
    user_id: "004",
    full_name: "Anna Müller",
    country: "Germany",
    type: "Course 4",
    date_of_creation: "2024-07-22",
    status: "active",
    payAmt: '100',
    dueAmt: '0',
    courseFee: '100',
    courseDuration: '2 Month'
  },
  {
    user_id: "005",
    full_name: "Yuki Tanaka",
    country: "Japan",
    type: "Course 5",
    date_of_creation: "2024-07-21",
    status: "active",
    payAmt: '100',
    dueAmt: '0',
    courseFee: '100',
    courseDuration: '2 Month'
  },
];

export default function User() {

  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedValue, setSelectedValue] = useState('full_name');

  const filteredUsers = useMemo(() => {
    if (selectedValue === 'full_name') {
      return data.filter(
        (data) =>
          data.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.user_id.includes(searchQuery)
      );
    }
    else if (selectedValue === 'type') {
      return data.filter(
        (data) =>
          data.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.user_id.includes(searchQuery)
      );
    }
    return;
  }, [searchQuery, data, selectedValue]);

  const sortedUsers = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredUsers].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredUsers;
  }, [filteredUsers, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex-1 m-10 ">
      <div className="flex justify-between items-center mb-[24px]">
        <div>
          <h1 className="text-[#00263E] text-[24px] font-[700]">Users</h1>
          <p className="text-[#72849A]">BIM user database</p>
        </div>

        <div className="flex justify-around items-center">
          <form className="p-[16px] ">
            <div className="flex items-center border rounded-[10px] bg-white h-[40px] px-2 ">
              <Select onValueChange={(value) => setSelectedValue(value)} value={selectedValue}>
                <SelectTrigger className="w-[300px] border-none">
                  <SelectValue placeholder={selectedValue} />
                </SelectTrigger>
                <SelectContent className = "bg-white rounded-[10px]">
                  <SelectGroup >
                    <SelectItem value="full_name">Search by Name</SelectItem>
                    <SelectItem value="type" >Search by Course</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <input
                className="w-full bg-transparent shadow-none border-none outline-none pl-2 "
                placeholder="Search..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="  h-4 w-4 text-gray-500" />
            </div>
          </form>
          {/* <Link to="createUser">
            <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
              <span>
                <FaPlus size={14} />
              </span>
              Create a new user
            </button>
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <main className="flex flex-col gap-4">
          <div className="border shadow-sm rounded-[20px] bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    onClick={() => requestSort("id")}
                    className="cursor-pointer text-center"
                  >
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      User ID
                    </div>
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("name")}
                    className="cursor-pointer text-center"
                  >
                    Full Name
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("country")}
                    className="cursor-pointer text-center"
                  >
                    Country
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("type")}
                    className="cursor-pointer text-center"
                  >
                    Course
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("date")}
                    className="cursor-pointer text-center"
                  >
                    Date of Registration
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("status")}
                    className="cursor-pointer text-center"
                  >
                    Status
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("action")}
                    className="cursor-pointer text-center"
                  >
                    Pay Amount
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("action")}
                    className="cursor-pointer text-center"
                  >
                    Due Amount
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("action")}
                    className="cursor-pointer text-center"
                  >
                    Course Fee
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("action")}
                    className="cursor-pointer text-center"
                  >
                    Course Duration
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedUsers?.map((user) => (
                  <TableRow key={user?.user_id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        {user?.user_id}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{user?.full_name}</TableCell>
                    <TableCell className="text-center">{user?.country}</TableCell>
                    <TableCell className="text-center">{user?.type}</TableCell>
                    <TableCell className="text-center">{user?.date_of_creation}</TableCell>
                    <TableCell className="text-center">{user?.status}</TableCell>
                    <TableCell className="text-center">{user?.payAmt}</TableCell>
                    <TableCell className="text-center">{user?.dueAmt}</TableCell>
                    <TableCell className="text-center">{user?.courseFee}</TableCell>
                    <TableCell className="text-center">{user?.courseDuration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
