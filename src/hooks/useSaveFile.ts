import { invoke } from "@tauri-apps/api";
import { useMutation } from "@tanstack/react-query";

export function useSaveFile() {
	return useMutation({
		mutationKey: ["save_file"],
		mutationFn: async (file: { path: string; content: string }) => {
			return await invoke("save_file_content", file);
		},
	});
}
