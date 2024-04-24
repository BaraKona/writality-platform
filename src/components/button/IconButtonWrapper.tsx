import { Tooltip } from "@mantine/core";
import { ReactNode } from "@tanstack/react-router";
import { FC } from "react";

export const IconButtonWrapper: FC<{
	onClick: () => void;
	children: ReactNode;
	className?: string;
	name: string;
	position?: "left" | "right" | "top" | "bottom";
	withBorder?: boolean;
	active?: boolean;
}> = ({ onClick, children, className, name, position, withBorder, active }) => {
	return (
		<Tooltip
			label={name}
			withArrow
			className="text-xs"
			position={position}
			classNames={{
				tooltip: "!p-0.5 !px-2 !text-xs !bg-matteBlack",
			}}
		>
			<button
				onClick={onClick}
				className={`group relative p-0.5 rounded hover:bg-hover  ${className} ${withBorder ? "border border-border" : ""} ${active ? "bg-matteBlack text-background border-black hover:bg-matteBlack" : ""}`}
			>
				{children}
			</button>
		</Tooltip>
	);
};
