import { ReactNode } from "@tanstack/react-router";
import { FC } from "react";

export const IconButtonWrapper: FC<{
	onClick: () => void;
	children: ReactNode;
	className?: string;
}> = ({ onClick, children, className }) => {
	return (
		<button
			onClick={onClick}
			className={`p-0.5 rounded hover:bg-hover ${className}`}
		>
			{children}
		</button>
	);
};
