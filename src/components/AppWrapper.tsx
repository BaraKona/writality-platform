import { ReactNode } from "react";

export default function AppWrapper({ children }: { children: ReactNode }) {
	return <div className="p-2 bg-red-200 h-screen w-full flex">{children}</div>;
}
