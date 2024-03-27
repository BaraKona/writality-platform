import AppWrapper from "./components/AppWrapper";
import { useSignals } from "@preact/signals-react/runtime";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
function App() {
	useSignals();

	console.log("App rendered");
	return (
		<AppWrapper>
			<div className="grow flex relative gap-2">
				<div className="grow bg-background rounded-lg p-2">
					<Header />
				</div>
				<Sidebar />
			</div>
		</AppWrapper>
	);
}

export default App;
