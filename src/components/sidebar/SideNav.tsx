import {
	IconTemplate,
	IconHome,
	IconHelpHexagon,
	IconSettings,
	IconStatusChange,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export const SideNav = () => {
	const router = useRouterState();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-1 p-2 rounded bg-matteBlack items-center justify-center">
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
				<IconHome size={20} stroke={2} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Somewhere"
				className="text-background"
			>
				<IconTemplate size={20} stroke={2} />
			</IconButtonWrapper>

			<IconButtonWrapper
				onClick={() => {}}
				className="mt-auto text-background"
				position="right"
				name="Switch Projects"
			>
				<IconStatusChange size={20} stroke={2} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Help"
				className="text-background"
			>
				<IconHelpHexagon size={20} stroke={2} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Settings"
				className="text-background"
			>
				<IconSettings size={20} stroke={2} />
			</IconButtonWrapper>
		</div>
	);
};
