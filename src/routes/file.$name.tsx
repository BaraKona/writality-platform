import { createFileRoute } from "@tanstack/react-router";
import { useFile } from "../hooks/useFile";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/react";
import "@blocknote/react/style.css";
import { TextInput } from "@mantine/core";
import { useSaveFile } from "../hooks/useSaveFile";
import { useMemo } from "react";
import { BlockNoteEditor } from "@blocknote/core";

export const Route = createFileRoute("/file/$name")({
	component: PostComponent,
});

function PostComponent() {
	const { name } = Route.useParams();
	// @ts-expect-error - path will be defined
	const { path } = Route.useSearch();

	console.log({
		name,
		path,
	});
	const { data, isLoading } = useFile(path);

	const { mutate: saveFile } = useSaveFile();

	console.log({ data });

	const editor = useMemo(() => {
		if (isLoading || data === undefined) {
			return undefined;
		}
		const editorContent = JSON.parse(data);

		return BlockNoteEditor.create({
			initialContent: editorContent?.content
				? JSON.parse(editorContent?.content)
				: undefined,
		});
	}, [data]);

	return (
		<div
			className="max-w-screen-md mx-auto grow overflow-y-auto h-[calc(100vh-5rem)]"
			key={path}
		>
			<div className="flex flex-col gap-2 pt-10 h-full grow">
				<TextInput
					height={"auto"}
					multiple
					defaultValue={name}
					key={path}
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
							saveFile({ path, content: JSON.stringify(editor.document) })
						}
					/>
				)}
			</div>
		</div>
	);
}
