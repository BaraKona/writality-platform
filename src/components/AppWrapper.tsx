import { ReactNode } from "react";
import { WindowControls } from "./WindowControls";

export default function AppWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="p-2 pt-0.5 bg-matteBlack h-screen w-full flex-col flex relative">
			<WindowControls />
			<section className="bg-background rounded flex flex-col flex-grow shadow-md">
				{children}
			</section>
		</div>
	);
}
