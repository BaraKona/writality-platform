import { invoke } from "@tauri-apps/api";
import { useQuery } from "@tanstack/react-query";
export function useFiles() {
	return useQuery({
		queryKey: ["files"],
		queryFn: async () => {
			return await invoke("get_all_files");
		},
	});
}
