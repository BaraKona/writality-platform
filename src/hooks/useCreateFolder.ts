import { invoke } from "@tauri-apps/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateFolder = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async () => {
			return await invoke("create_folder");
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["files"],
			});
		},
	});
};
