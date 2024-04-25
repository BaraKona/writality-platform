import { IconLayoutSidebarFilled } from "@tabler/icons-react";
import { isSidebarOpen } from "../../signals";
import { useSignals } from "@preact/signals-react/runtime";
import { IconButtonWrapper } from "../button/IconButtonWrapper";

export const Left = () => {
	useSignals();
	return (
		<section className="flex gap-1">
			<IconButtonWrapper
				name="Toggle Sidebar"
				onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
				className="hover:bg-matteBlack/5 text-textLight"
			>
				<IconLayoutSidebarFilled size={18} stroke={1.5} />
			</IconButtonWrapper>
		</section>
	);
};
