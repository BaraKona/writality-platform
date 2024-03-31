import { createFileRoute } from "@tanstack/react-router";
import { useFile } from "../hooks/useFile";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/react";
import "@blocknote/react/style.css";
import { TextInput } from "@mantine/core";
import { useSaveFile } from "../hooks/useSaveFile";
import { useMemo, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { useUpdateFileName } from "../hooks/useUpdateFileName";

export const Route = createFileRoute("/file/$name")({
	component: PostComponent,
});

function PostComponent() {
	const { name } = Route.useParams();
	// @ts-expect-error - path will be defined
	const { path } = Route.useSearch();

	const [na, setName] = useState(name);

	const { data, isLoading } = useFile(path);

	const { mutate: saveFile } = useSaveFile();
	const { mutate: updateFileName } = useUpdateFileName();

	const editor = useMemo(() => {
		if (isLoading || !data) {
			return undefined;
		} else {
			try {
				const content = JSON.parse(data as string);
				return BlockNoteEditor.create({
					initialContent: JSON.parse(content.content),
					domAttributes: {
						editor: {
							class: "!text-md font-semibold",
						},
					},
				});
			} catch (e) {
				console.error(e);
				return BlockNoteEditor.create();
			}
		}
	}, [data]);

	function save() {
		console.log("Saving", name);
		updateFileName({
			path,
			newName: na,
			oldName: name,
		});
	}

	return (
		<div
			className="max-w-[850px] mx-auto grow overflow-y-auto h-[calc(100vh-5rem)]"
			key={path + name}
		>
			<div className="flex flex-col gap-2 py-10 h-full grow">
				<TextInput
					height={"auto"}
					multiple
					defaultValue={name}
					key={path + name}
					onBlur={save}
					onChange={(e) => setName(e.currentTarget.value)}
					className="w-full mb-4 border-0 px-10"
					classNames={{
						input:
							"!border-0 !text-5xl !font-extrabold !text-text !bg-transparent !outline-none !placeholder-gray-400 !focus:placeholder-gray-600",
					}}
				/>
				{editor === undefined ? (
					<div>Loading...</div>
				) : (
					<BlockNoteView
						editor={editor}
						className="grow h-full text-gray-600"
						theme={"light"}
						onChange={() =>
							saveFile({
								path,
								content: JSON.stringify(editor.document),
								name: na,
							})
						}
					/>
				)}
			</div>
		</div>
	);
}
