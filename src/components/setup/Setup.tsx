import writality from "../../assets/writality.svg";
import { Navbar } from "./Navbar";
import { version } from "../../../package.json";
import { Divider } from "@mantine/core";
import { IconBrandGoogleDrive, IconCloudUpload } from "@tabler/icons-react";

export const Setup = () => {
	return (
		<main className="w-full bg-background h-screen relative">
			<div
				data-tauri-drag-region
				className="absolute h-8 w-full bg-transparent top-0 left-0 z-0"
			></div>
			<section className="flex grow h-full">
				<div className="w-64 p-2 border-r border-border text-text flex flex-col bg-hover h-full grow">
					<Navbar />
					<div className="mt-4">
						<p className="text-xs"> Your projects will appear here </p>
						<Divider my={10} />
						<IconBrandGoogleDrive
							size={20}
							stroke={1}
							className="mx-auto my-2"
						/>
						<p className="text-xs">
							Your projects will be stored in a selected location on your
							computer. We recommend using a cloud storage service like Dropbox,
							Google Drive, or OneDrive.
						</p>
						<br />
						<IconCloudUpload size={20} stroke={1} className="mx-auto" />
						<p className="text-xs">
							Alternatively you can use writality store to store your projects.
							Although this is not a free service, it is a secure and reliable
							way to store your projects.
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
					<div className="mt-10 text-left">
						<div className="flex gap-4">
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

							<button className="text-xs px-2 py-1 rounded border-border border bg-primary self-center hover:bg-hover ">
								Start
							</button>
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

							<button className="text-xs ml-auto px-2 py-1 rounded border-border border bg-primary self-center hover:bg-hover ">
								Restore
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
