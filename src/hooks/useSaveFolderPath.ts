import { useMutation, useQueryClient } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api";

export function useSaveFolderPath() {
	const queryClient = useQueryClient();

	return useMutation({
		onMutate: async (args: { path: string; name: string }) => {
			await invoke("create_setup", {
				path: args.path,
				name: args.name,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["setup"],
			});
		},
		onError: (error) => {
			console.error(error);
		},
	});
}
