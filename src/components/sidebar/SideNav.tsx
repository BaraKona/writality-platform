import {
	IconTemplate,
	IconHome,
	IconHelpHexagon,
	IconSettings,
	IconStatusChange,
	IconChartBar,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export const SideNav = () => {
	const router = useRouterState();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-2 p-2 rounded bg-matteBlack items-center justify-center">
			<IconButtonWrapper
				onClick={() =>
					navigate({
						to: "/",
					})
				}
				position="right"
				name="Home"
				className="text-background"
				active={router.location.pathname === "/"}
			>
				<IconHome size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Somewhere"
				className="text-background"
			>
				<IconTemplate size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() =>
					navigate({
						to: "/analytics",
					})
				}
				position="right"
				name="Analytics"
				className="text-background"
				active={router.location.pathname === "/analytics"}
			>
				<IconChartBar size={20} stroke={1.5} />
			</IconButtonWrapper>

			<IconButtonWrapper
				onClick={() => {}}
				className="mt-auto text-background"
				position="right"
				name="Switch Projects"
			>
				<IconStatusChange size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Help"
				className="text-background"
			>
				<IconHelpHexagon size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Settings"
				className="text-background"
			>
				<IconSettings size={20} stroke={1.5} />
			</IconButtonWrapper>
		</div>
	);
};
