import { IconBook2, IconFilePlus, IconPencilPlus } from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { useCreateFiles } from "../../hooks/useCreateFiles";
import { useCreateFolder } from "../../hooks/useCreateFolder";

export const ItemSectionWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { mutate: createFile } = useCreateFiles();
	const { mutate: createFolder } = useCreateFolder();

	return (
		<div className="px-1 w-full mt-4 flex grow flex-col overflow-y-auto h-[calc(100vh-20rem)]">
			<div className="flex justify-end items-center gap-1">
				<div className="text-xs justify-self-start mr-auto font-medium">
					Files
				</div>
				<IconButtonWrapper
					onClick={createFolder}
					position="bottom"
					name="Create folder"
				>
					<IconBook2 size={16} stroke={1.5} />
				</IconButtonWrapper>
				<IconButtonWrapper
					onClick={createFile}
					position="bottom"
					name="Create script"
				>
					<IconFilePlus size={16} stroke={1.5} />
				</IconButtonWrapper>
				<IconButtonWrapper
					onClick={() => {}}
					position="bottom"
					name="Create canvas"
				>
					<IconPencilPlus size={16} stroke={1.5} />
				</IconButtonWrapper>
			</div>
			{children}
		</div>
	);
};
