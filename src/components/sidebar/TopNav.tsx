import {
	IconFolderPlus,
	IconScriptPlus,
	IconPencilPlus,
} from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { useCreateFiles } from "../../hooks/useCreateFiles";
import { useCreateFolder } from "../../hooks/useCreateFolder";
import { SideNav } from "./MenuItems";

export const TopNav = ({ children }: { children: React.ReactNode }) => {
	const { mutate: createFile } = useCreateFiles();
	const { mutate: createFolder } = useCreateFolder();

	return (
		<div className="px-1 w-full">
			<SideNav />
			<div className="flex justify-center items-center gap-1">
				<IconButtonWrapper
					withBorder
					onClick={createFolder}
					position="bottom"
					name="Create folder"
				>
					<IconFolderPlus size={18} stroke={1.5} />
				</IconButtonWrapper>
				<IconButtonWrapper
					withBorder
					onClick={createFile}
					position="bottom"
					name="Create script"
				>
					<IconScriptPlus size={18} stroke={1.5} />
				</IconButtonWrapper>
				<IconButtonWrapper
					withBorder
					onClick={() => {}}
					position="bottom"
					name="Create canvas"
				>
					<IconPencilPlus size={18} stroke={1.5} />
				</IconButtonWrapper>
			</div>
			{children}
		</div>
	);
};
