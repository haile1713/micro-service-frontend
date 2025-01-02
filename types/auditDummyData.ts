// hooks/dummyData.ts
export const auditData = Array.from({ length: 10 }, (_, index) => ({
	title: `Audit Title ${index + 1}`,
	description: `Audit description for item ${index + 1}`,
	auditor: `Auditor ${index + 1}`,
	status: "Completed",
	startDate: "06/01/2021",
	endDate: "08/04/2022",
}));
