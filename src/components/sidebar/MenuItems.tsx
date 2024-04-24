import {
	IconHelpHexagon,
	IconSettings,
	IconStatusChange,
	IconChartBar,
} from "@tabler/icons-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Network } from "../icons/Network";

export const MenuItems = () => {
	const router = useRouterState();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-0.5 text-matteBlack">
			<ListItem
				onClick={() =>
					navigate({
						to: "/",
					})
				}
				active={router.location.pathname === "/"}
			>
				<Network size={18} />
				Overview
			</ListItem>

			<ListItem
				onClick={() =>
					navigate({
						to: "/analytics",
					})
				}
				active={router.location.pathname === "/analytics"}
			>
				<IconChartBar size={18} stroke={1.5} />
				Analytics
			</ListItem>

			<ListItem onClick={() => {}}>
				<IconStatusChange size={18} stroke={1.5} />
				Switch Projects
			</ListItem>
			<ListItem onClick={() => {}}>
				<IconHelpHexagon size={18} stroke={1.5} />
				Help
			</ListItem>
			<ListItem onClick={() => {}}>
				<IconSettings size={18} stroke={1.5} />
				Settings
			</ListItem>
		</div>
	);
};

function ListItem({
	children,
	active,
	onClick,
}: {
	children: React.ReactNode;
	active?: boolean;
	onClick: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`flex items-center gap-2 text-xs font-medium p-1.5 rounded-md cursor-pointer ${
				active ? "bg-matteBlack/10" : ""
			}`}
		>
			{children}
		</div>
	);
}
