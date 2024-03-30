import { invoke } from "@tauri-apps/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSaveFile() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ["save_file"],
		mutationFn: async (file: {
			path: string;
			content: string;
			name: string;
		}) => {
			return await invoke("save_file_content", file);
		},
		onSuccess: (name) => {
			console.log(name);
			queryClient.invalidateQueries({
				queryKey: ["files"],
			});
		},
	});
}
