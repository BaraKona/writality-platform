import { TextInput } from "@mantine/core";

export const Center = () => {
	return (
		<section className="max-w-lg mx-auto grow">
			<TextInput
				variant="filled"
				size="24px"
				radius="sm"
				classNames={{
					input: "!text-xs !bg-hover !text-center",
				}}
				placeholder="Search your files..."
			/>
		</section>
	);
};
