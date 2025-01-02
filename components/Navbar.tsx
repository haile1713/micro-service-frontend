"use client";
// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // shadcn Button
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // shadcn Avatar

const Navbar: React.FC = () => {
	const pathname = usePathname(); // Get the current route

	const navLinks = [
		{ name: "Document Management", href: "/document-management" },
		{ name: "Quality Audit Management", href: "/quality-audit-management" },
		{ name: "Risk Management", href: "/risk-management" },
		{ name: "CAPA Management", href: "/capa-management" },
		{ name: "KPI Management", href: "/kpi-management" },
	];

	return (
		<nav className="flex items-center justify-between px-8 py-2 bg-white shadow-md">
			{/* Logo */}
			<div className="flex items-center space-x-4">
				<img src="/file.svg" alt="Logo" className="w-8 h-8" />
			</div>
			{/* Navigation Links */}
			<div className="flex space-x-6">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={`text-lg font-bold px-4 py-2 rounded-md ${
							pathname === link.href
								? "bg-gray-100 text-black"
								: "hover:text-gray-700"
						}`}
					>
						{link.name}
					</Link>
				))}
			</div>

			{/* Profile Section */}
			<div className="flex items-center space-x-4">
				<Button variant="ghost" className="p-2">
					{/* random icon */}
					🌐
				</Button>
				<Avatar className="w-20 h-20">
					<AvatarImage
						src="/globe.svg"
						alt="Profile"
						className="border border-gray-300 rounded-full"
					/>
				</Avatar>
			</div>
		</nav>
	);
};

export default Navbar;
