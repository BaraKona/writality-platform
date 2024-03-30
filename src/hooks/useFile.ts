import { invoke } from "@tauri-apps/api";
import { useQuery } from "@tanstack/react-query";

export function useFile(path: string) {
	console.log(path);
	return useQuery({
		queryKey: ["file", path],
		queryFn: async () => {
			return await invoke("get_file_content", { path });
		},
	});
}
