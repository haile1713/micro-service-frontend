"use client";
import React from "react";
import { useParams } from "next/navigation";
import Table from "../../components/Table";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Pagination } from "@/components/ui/pagination"; // ShadCN Pagination

const SectionPage = () => {
	const { section } = useParams(); // Retrieve the param

	// Ensure section is treated as a string
	const sectionKey = Array.isArray(section) ? section[0] : section;

	const sectionContent: { [key: string]: string } = {
		"document-management": "Document Management",
		"quality-audit-management": "Quality Audit Management",
		"risk-management": "Risk Management",
		"capa-management": "CAPA Management",
		"kpi-management": "KPI Management",
	};

	// Provide a fallback for undefined keys
	const content = sectionKey ? sectionContent[sectionKey] : "Unknown Section";

	// const totalItems = 94; // Total number of items
	// const itemsPerPage = 12; // Number of items per page
	// const [currentPage, setCurrentPage] = React.useState(1); // State for the current page

	// const handlePageChange = (page: number) => {
	// 	setCurrentPage(page);
	// 	console.log(`Navigated to page: ${page}`);
	// };

	return (
		<div className="p-6 min-h-screen">
			<h1 className="text-3xl font-bold text-black mb-6">{content}</h1>
			{/* Search and Filter Bar */}
			<div className="flex items-center justify-between mb-10">
				{/* Search Bar */}
				<div className="flex items-center space-x-2 ml-auto">
					<Input placeholder="Search" className="w-full max-w-md" />
					<Button>Search</Button>
				</div>
			</div>
			{/* Table */}
			<div>
				<Table />
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
