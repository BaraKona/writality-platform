import { useMutation, useQueryClient } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api";
import { useNavigate } from "@tanstack/react-router";

export function useUpdateFileName() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	return useMutation({
		mutationKey: ["update_file_name"],
		mutationFn: async (file: {
			path: string;
			newName: string;
			oldName: string;
		}): Promise<string> => {
			return await invoke("update_file_name", file);
		},
		onSuccess: (name: string) => {
			queryClient.invalidateQueries({
				queryKey: ["files"],
			});
			navigate({
				to: "/file/$name",
				params: {
					name: name.split("/").pop() as string,
				},
				search: {
					path: name,
				},
			});
		},
	});
}
