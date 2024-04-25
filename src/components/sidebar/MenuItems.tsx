import {
	IconSettings,
	IconStatusChange,
	IconChartBar,
	IconWorld,
} from "@tabler/icons-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Network } from "../icons/Network";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { Writality } from "../icons/Writality";
import { Tooltip } from "@mantine/core";

export const MenuItems = () => {
	const router = useRouterState();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-0.5 text-matteBlack">
			<section className="flex gap-1 items-center mb-2 pb-1 text-textLight border-b border-hover">
				<div className="flex items-center gap-2 mr-auto text-matteBlack">
					<Tooltip
						label="Writality"
						withArrow
						position="bottom"
						className="text-xs"
						classNames={{
							tooltip: "!p-0.5 !px-2 !text-xs !bg-matteBlack",
						}}
					>
						<button>
							<Writality size={18} />
						</button>
					</Tooltip>
					<p className="text-xs font-medium">Project Name</p>
				</div>
				<IconButtonWrapper
					onClick={() => {}}
					name="Switch Project"
					position="bottom"
				>
					<IconStatusChange size={18} stroke={1.5} />
				</IconButtonWrapper>
				<IconButtonWrapper onClick={() => {}} name="Settings" position="bottom">
					<IconSettings size={18} stroke={1.5} />
				</IconButtonWrapper>
			</section>
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
				<IconWorld size={18} stroke={1.5} />
				World
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
				active ? "bg-matteBlack/10" : "hover:bg-matteBlack/5 "
			}`}
		>
			{children}
		</div>
	);
}
