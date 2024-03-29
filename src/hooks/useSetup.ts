import { useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api";

export function useSetup() {
	return useQuery({
		queryKey: ["setup"],
		queryFn: async () => {
			return await invoke("check_setup");
		},
	});
}
