import { Formik, Form, Field, FieldArray } from "formik";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const FormikForm5 = () => (
	<div className="border-2">
		<h1>FormikForm5 -- Form with an array of objects</h1>
		<Formik
			initialValues={{
				friends: [
					{ name: "Jared", age: 24 },
					{ name: "Bob", age: 15 },
				],
			}}
			onSubmit={(values) =>
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
				}, 500)
			}
			render={({ values }) => (
				<Form>
					<FieldArray
						name="friends"
						render={(arrayHelpers) => (
							<>
								<div>
									{values.friends.map((friend, index) => (
										<div key={index}>
											{/** both these conventions do the same */}
											<Field
												name={`friends[${index}].name`}
											/>
											<Field
												name={`friends.${index}.age`}
											/>

											<button
												type="button"
												onClick={() =>
													arrayHelpers.remove(index)
												}>
												-
											</button>
										</div>
									))}
									<button
										type="button"
										onClick={() =>
											arrayHelpers.push({
												name: "",
												age: "",
											})
										}>
										+
									</button>
								</div>
								<div>
									<button type="submit">Submit</button>
								</div>
							</>
						)}
					/>
				</Form>
			)}
		/>
	</div>
);

export default FormikForm5;
