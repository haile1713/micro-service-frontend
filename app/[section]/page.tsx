"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Table from "../../components/Table";
import {
  documentManagementData,
  qualityAuditData,
  riskManagmentData,
} from "../../types/DummyData";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Pagination } from "@/components/ui/pagination";

const ITEMS_PER_PAGE =8; // Number of items per page

const SectionPage = () => {
  const { section } = useParams(); // Retrieve the param

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Determine Data and Title
  let dataToDisplay: AuditDataType[] = [];
  let contentTitle = "";
  switch (section) {
    case "document-management":
      dataToDisplay = documentManagementData;
      contentTitle = "Document Management";
      break;
    case "quality-audit-management":
      dataToDisplay = qualityAuditData;
      contentTitle = "Quality Audit Management";
      break;
    case "risk-management":
      dataToDisplay = riskManagmentData;
      contentTitle = "Risk Management";
      break;
    default:
      dataToDisplay = [];
      contentTitle = "Unknown Section";
  }

  // Calculate Pagination
  const totalItems = dataToDisplay.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = dataToDisplay.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle Page Change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-6">{contentTitle}</h1>

      {/* Search bar */}
      <div className="flex items-center justify-end mb-10">
        <div className="flex items-center space-x-2 w-[80%] max-w-[600px]">
          <Input placeholder="Search" className="w-[70%] px-4 py-2" />
          <Button>Search</Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg w-[95%] mx-auto overflow-x-auto">
        <Table data={paginatedData} />
      </div>

      {/* Pagination and Create Document */}
      <div className="flex items-center justify-between mt-6">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
        <Button className="px-4 py-2 flex items-center space-x-2">
          <span>+</span>
          <span>Create Document</span>
        </Button>
      </div>
    </div>
  );
};

export default SectionPage;
