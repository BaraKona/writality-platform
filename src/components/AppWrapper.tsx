import { ReactNode } from "react";

export default function AppWrapper({ children }: { children: ReactNode }) {
	return <div className="p-2 bg-zinc-800 h-screen w-full flex">{children}</div>;
}
