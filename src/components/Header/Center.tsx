import { TextInput } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useRef } from "react";

export const Center = () => {
	const inputRef = useRef(null);

	return (
		<section className="max-w-lg mx-auto grow">
			<TextInput
				variant="filled"
				size="24px"
				radius="sm"
				classNames={{
					input: "!text-xs !bg-hover !text-center",
				}}
				onKeyDown={getHotkeyHandler([["mod+K", () => console.log("mod+K")]])}
				placeholder="Search your files..."
				ref={inputRef}
			/>
		</section>
	);
};
