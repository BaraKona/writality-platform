import AppWrapper from "./components/AppWrapper";
import { useSignals } from "@preact/signals-react/runtime";
import { counter } from "./signals";

function App() {
	useSignals();
	return (
		<AppWrapper>
			<div className="grow bg-black rounded-lg">
				<button
					className="p-2 bg-blue-500 text-white rounded-lg"
					onClick={() => counter.value++}
				>
					{counter.value}
				</button>
			</div>
		</AppWrapper>
	);
}

export default App;
