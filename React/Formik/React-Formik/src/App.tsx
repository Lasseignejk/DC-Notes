import "./App.css";
import FormikForm from "./components/FormikForm";
import FormikForm2 from "./components/FormikForm2";
import FormikForm3 from "./components/FormikForm3";
import FormikForm4 from "./components/FormikForm4";
import FormikForm5 from "./components/FormikForm5";
import FormikRecipeTest from "./components/FormikRecipeTest";

function App() {
	return (
		<div className="flex flex-col gap-3">
			{/* <FormikForm />
			<FormikForm2 />
			<FormikForm3 />
      <FormikForm4 />
      <FormikForm5 /> */}
			<FormikRecipeTest />
		</div>
	);
}

export default App;
