import { invoke } from "@tauri-apps/api";
import { useQuery } from "@tanstack/react-query";

interface FileInfo {
	filename: string;
	extension: string | null;
	path: string;
}

export function useFiles() {
	return useQuery<FileInfo[]>({
		queryKey: ["files"],
		queryFn: async () => {
			return await invoke<FileInfo[]>("get_all_files");
		},
	});
}
