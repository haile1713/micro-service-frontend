
import { useState, useEffect } from "react";
import { documentManagementData } from "../types/DummyData";

export const useFetchTableData = (sectionKey: string | undefined) => {
	const [data, setData] = useState(documentManagementData);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			// Simulated API call; replace this with a real API call
			const filteredData = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(
						documentManagementData.filter((item) =>
							item.title.toLowerCase().includes(sectionKey || "")
						)
					);
				}, 500);
			});

			setData(filteredData as typeof documentManagementData);
			setLoading(false);
		};

		fetchData();
	}, [sectionKey]);

	return { data, loading };
};
