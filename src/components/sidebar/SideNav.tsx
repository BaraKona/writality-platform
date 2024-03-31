import {
	IconTemplate,
	IconHome,
	IconHelpHexagon,
	IconSettings,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export const SideNav = () => {
	const router = useRouterState();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-1 pr-1.5">
			<IconButtonWrapper
				onClick={() =>
					navigate({
						to: "/",
					})
				}
				position="right"
				name="Home"
				withBorder
				active={router.location.pathname === "/"}
			>
				<IconHome size={20} stroke={2} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Somewhere"
				withBorder
			>
				<IconTemplate size={20} stroke={2} />
			</IconButtonWrapper>

			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				className="mt-auto"
				name="Help"
				withBorder
			>
				<IconHelpHexagon size={20} stroke={2} />
			</IconButtonWrapper>
			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				name="Settings"
				withBorder
			>
				<IconSettings size={20} stroke={2} />
			</IconButtonWrapper>
		</div>
	);
};
