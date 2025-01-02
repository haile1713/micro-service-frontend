"use client";
import React from "react";
import { useParams } from "next/navigation";
import Table from "../../components/Table";
import {
	documentManagementData,
	qualityAuditData,
} from "../../types/DummyData";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Pagination } from "@/components/ui/pagination";
const SectionPage = () => {
	const { section } = useParams(); // Retrieve the param
	//  dataToDisplay
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
		default:
			dataToDisplay = [];
			contentTitle = "Unknown Section";
	}

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
				<Table data={dataToDisplay} />
			</div>
			{/* Pagination and Create Document */}
			<div className="flex items-center justify-between mt-6">
				Pagination Info
				{/* Pagination Component  for shad*/}
				<Pagination>{/*  pagination is here*/}</Pagination>
				{/* Create Document Button */}
				<Button className="px-4 py-2 flex items-center space-x-2">
					<span>+</span>
					<span>Create Document</span>
				</Button>
			</div>
		</div>
	);
};

export default SectionPage;
