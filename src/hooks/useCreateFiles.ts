import { useMutation, useQueryClient } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api";

export function useCreateFiles() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ["create_file"],
		mutationFn: async () => {
			return await invoke("create_file_json");
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["files"],
			});
		},
	});
}
