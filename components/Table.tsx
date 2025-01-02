// components/Table.tsx
import React from "react";
import { auditData } from "../types/auditDummyData";
import { Button } from "@/components/ui/button";
const Table: React.FC = () => {
	return (
		<div className="bg-white shadow-md rounded-lg">
			<table className=" table-auto w-full text-left text-gray-700">
				<thead className="bg-gray-300">
					<tr>
						<th className="px-4 py-2">Title</th>
						<th className="px-4 py-2">Description</th>
						<th className="px-4 py-2">Auditor</th>
						<th className="px-4 py-2">Status</th>
						<th className="px-4 py-2">Start Date</th>
						<th className="px-4 py-2">End Date</th>
						<th className="px-4 py-2">Action</th>
					</tr>
				</thead>
				<tbody>
					{auditData.map((item, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="px-4 py-2">{item.title}</td>
							<td className="px-4 py-2">{item.description}</td>
							<td className="px-4 py-2">{item.auditor}</td>
							<td className="px-4 py-2">{item.status}</td>
							<td className="px-4 py-2">{item.startDate}</td>
							<td className="px-4 py-2">{item.endDate}</td>
							<td className="px-4 py-2">
									{/* <button className="px-3 py-1 bg-black text-white rounded-md">
										Open
									</button> */}
									<Button>Open</Button>
							</td>
						</tr>

					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
