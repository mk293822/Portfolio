import { Spinner } from "./ui/spinner";

const Loading = () => {
	return (
		<div className="flex flex-col items-center gap-4 h-screen justify-center">
			<Spinner className="size-14" />
		</div>
	);
};

export default Loading;
