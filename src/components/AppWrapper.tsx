import { ReactNode } from "react";
import { LeftSide } from "./Header/LeftSide";

export default function AppWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="p-2 pt-0.5 bg-matteBlack h-screen w-full flex-col flex relative">
			<LeftSide />
			<section className="bg-background rounded flex flex-col flex-grow shadow-md">
				{children}
			</section>
		</div>
	);
}
