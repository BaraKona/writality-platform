import writality from "../../assets/writality.svg";
import { Navbar } from "./Navbar";
import { version } from "../../../package.json";
import { Divider, TextInput } from "@mantine/core";
import {
	IconBrandGoogleDrive,
	IconBrandOnedrive,
	IconCloudUpload,
} from "@tabler/icons-react";

import { open } from "@tauri-apps/api/dialog";
import { useState } from "react";
import { useSaveFolderPath } from "../../hooks/useSaveFolderPath";

export const Setup = () => {
	const [folderPath, setFolderPath] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);

	async function selectFolder() {
		const selected = await open({
			directory: true,
			multiple: false,
		});
		if (selected) {
			setFolderPath(selected as string);
		}
	}

	const { mutate: saveFolderPath, isPending } = useSaveFolderPath();

	return (
		<main className="w-full bg-background h-screen relative">
			<div
				data-tauri-drag-region
				className="absolute h-8 w-full bg-transparent top-0 left-0 z-0"
			></div>
			<section className="flex grow h-full">
				<div className="w-64 border-r py-2 border-border text-text flex flex-col bg-hover h-full grow">
					<Navbar />
					<div className="mt-4 p-2">
						<p className="text-xs"> Your projects will appear here </p>
						<Divider my={10} />
						<div className="flex gap-1 my-2 mx-auto items-center justify-center">
							<IconBrandGoogleDrive size={20} stroke={1.5} className="" />
							<IconBrandOnedrive size={20} stroke={1.5} className="" />
						</div>
						<p className="text-xs">
							Your projects will be stored in a selected location on your
							computer. We recommend using a cloud storage service like iCloud,
							Google Drive, or OneDrive.
						</p>
						<br />
						<IconCloudUpload size={20} stroke={1.5} className="mx-auto mb-2" />
						<p className="text-xs">
							Alternatively you can use <b>Writality store</b> to store your
							projects. Although this is not a free service, it is a secure and
							reliable way to store your projects.
						</p>
					</div>
				</div>
				<div className="w-full grow text-text flex items-center flex-col ">
					<img
						src={writality}
						alt="Writality logo"
						className="w-16 h-16 mx-auto mt-16"
					/>
					<div className="text-center">
						<h1 className="text-2xl font-semibold tracking-wide">Writality</h1>
						<p className="text-xs">{version}</p>
					</div>
					<div className="mt-10 text-left flex flex-col">
						<div className="flex gap-2 flex-col">
							<div>
								<p className="text-sm font-semibold">
									Select where your files are stored
								</p>
								<p className="text-xs text-slate-600">
									We will store your files in this location on your computer.{" "}
									<br />
									<b>Recommendation: </b>Dropbox, Google Drive, or OneDrive
									folder.
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs text-text">
									<b>Path: </b>
									{folderPath || ""}
								</p>
								<p className="text-xs text-text">
									<b>Project Name: </b>
									{name || ""}
								</p>
							</div>
							<Divider variant="dashed" />
							<div className="flex flex-1 gap-2 grow items-center">
								<div className="grow">
									<TextInput
										variant="filled"
										size="24px"
										radius="sm"
										classNames={{
											input: "!text-xs !bg-hover !grow",
										}}
										placeholder="Name your project..."
										value={name || ""}
										onChange={(e) => setName(e.currentTarget.value)}
									/>
								</div>

								<button
									className="text-xs px-2 py-1 disabled:bg-hover rounded border-border border text-white bg-primary disabled:hover:bg-hover hover:bg-primaryHover"
									onClick={selectFolder}
									disabled={!name}
								>
									Select Folder
								</button>
							</div>
						</div>
						<Divider my={10} />
						<div className="flex gap-4">
							<div>
								<p className="text-sm font-semibold">
									Restore existing writality project
								</p>
								<p className="text-xs text-slate-600">
									You can restore an existing project by selecting the folder.
								</p>
							</div>

							<button className="text-xs ml-auto px-2 py-1 rounded border-border border self-center hover:bg-hover ">
								Restore
							</button>
						</div>
						{name && folderPath && (
							<button
								className="px-2 py-1 self-end bg-primary text-xs  text-white rounded hover:bg-primaryHover mt-16 ml-auto"
								onClick={() => saveFolderPath({ name, path: folderPath })}
							>
								{isPending ? "Saving..." : "Save"}
							</button>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};
