import {
	IconTemplate,
	IconHome,
	IconHelpHexagon,
	IconSettings,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";

export const SideNav = () => {
	return (
		<div className="flex flex-col gap-1 border-r border-border pr-1.5">
			<IconButtonWrapper onClick={() => {}} position="right" name="Home">
				<IconHome size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper onClick={() => {}} position="right" name="Somewhere">
				<IconTemplate size={20} stroke={1.5} />
			</IconButtonWrapper>

			<IconButtonWrapper
				onClick={() => {}}
				position="right"
				className="mt-auto"
				name="Help"
			>
				<IconHelpHexagon size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper onClick={() => {}} position="right" name="Settings">
				<IconSettings size={20} stroke={1.5} />
			</IconButtonWrapper>
		</div>
	);
};
