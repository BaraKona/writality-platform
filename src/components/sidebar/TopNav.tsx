import { Divider } from "@mantine/core";
import {
	IconFolderPlus,
	IconScriptPlus,
	IconPencilPlus,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";

export const TopNav = () => {
	return (
		<div className="px-2 w-full">
			<div className="flex justify-center items-center gap-1">
				<IconButtonWrapper
					onClick={() => {}}
					position="bottom"
					name="Create folder"
				>
					<IconFolderPlus size={18} stroke={1} />
				</IconButtonWrapper>
				<IconButtonWrapper
					onClick={() => {}}
					position="bottom"
					name="Create script"
				>
					<IconScriptPlus size={18} stroke={1} />
				</IconButtonWrapper>
				<IconButtonWrapper
					onClick={() => {}}
					position="bottom"
					name="Create canvas"
				>
					<IconPencilPlus size={18} stroke={1} />
				</IconButtonWrapper>
			</div>
			<Divider />
		</div>
	);
};