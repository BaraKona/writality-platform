import { invoke } from "@tauri-apps/api";
import { useQuery } from "@tanstack/react-query";
export interface FileInfo {
	filename: string;
	extension: string | null;
	path: string;
	children: FileInfo[];
}

export function useFiles() {
	return useQuery<FileInfo[]>({
		queryKey: ["files"],
		queryFn: async () => {
			return await invoke<FileInfo[]>("get_all_files");
		},
	});
}
