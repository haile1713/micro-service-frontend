import React from "react";
import { Button } from "@/components/ui/button"; // shadcn button
import {
  Table as ShadcnTable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // shadcn table components

interface TableProps {
  data: {
    title: string;
    description: string;
    auditor: string;
    status: string;
    startDate: string;
    endDate: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div
        className="overflow-x-auto overflow-y-auto max-h-[650px] rounded-lg"
        style={{ maxWidth: "100%" }}
      >
        <ShadcnTable className="min-w-full">
          <TableHeader className="bg-gray-300">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Auditor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.auditor}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>{item.endDate}</TableCell>
                <TableCell>
                  <Button>Open</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ShadcnTable>
      </div>
    </div>
  );
};

export default Table;
