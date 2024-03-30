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
}> = ({ onClick, children, className, name, position, withBorder }) => {
	return (
		<Tooltip
			label={name}
			withArrow
			className="text-xs"
			position={position}
			classNames={{
				tooltip: "!p-0.5 !px-2 !text-xs",
			}}
		>
			<button
				onClick={onClick}
				className={`p-0.5 rounded hover:bg-hover ${className} ${withBorder ? "border border-border" : ""}`}
			>
				{children}
			</button>
		</Tooltip>
	);
};
