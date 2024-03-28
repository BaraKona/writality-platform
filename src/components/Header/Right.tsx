import { IconLayoutSidebarRight, IconShare2 } from "@tabler/icons-react";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
export const RightSide = () => {
	return (
		<section className="flex gap-1 px-1">
			<IconButtonWrapper onClick={() => {}}>
				<IconShare2 size={18} stroke={1} />
			</IconButtonWrapper>
			<IconButtonWrapper onClick={() => {}}>
				<IconLayoutSidebarRight size={18} stroke={1} />
			</IconButtonWrapper>
		</section>
	);
};
