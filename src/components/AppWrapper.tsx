import { ReactNode } from "react";

export default function AppWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="p-2 bg-border h-screen w-full flex-col flex">
			<section className="bg-background rounded flex flex-col grow">
				{children}
			</section>
		</div>
	);
}
