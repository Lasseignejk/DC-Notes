import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";

const FormikRecipeTest = () => {
	return (
		<div className="border-2">
			<h1>New Recipe</h1>
			<Formik
				initialValues={{
					recipe_name: "",
					cook_time: "",
					prep_time: "",
					total_time: "",
					source: "",
					ingredients: [
						{
							ingredient_amount: "",
							ingredient_measurement: "",
							ingredient_name: "",
							ingredient_directions: "",
						},
					],
				}}
				validationSchema={Yup.object({
					recipe_name: Yup.string().required("Required"),
					recipe_source: Yup.string().required("Required"),
				})}
				onSubmit={(values) =>
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500)
				}>
				{({ isSubmitting }) => (
					<Form>
						<div className="form_input">
							<MyInput
								label="Recipe Name"
								name="recipe_name"
								type="text"
								placeholder="Chicken Parm"
							/>
						</div>
						<div className="form_input">
							<MyInput
								label="Prep Time"
								name="prep_time"
								type="text"
								placeholder="10"
							/>
						</div>
						<div className="form_input">
							<MyInput
								label="Cook Time"
								name="cook_time"
								type="text"
								placeholder="20"
							/>
						</div>
						<div className="form_input">
							<MyInput
								label="Total Time"
								name="total_time"
								type="text"
								placeholder="30"
							/>
						</div>
						<div className="form_input">
							<MyInput
								label="Recipe Source"
								name="source"
								type="text"
								placeholder="deliciousrecipes.com"
							/>
						</div>

						<div>
							<label htmlFor="ingredients">Ingredients</label>
							<FieldArray name="ingredients">
								{(fieldArrayProps) => {
									const { push, remove, form } =
										fieldArrayProps;
									const { values } = form;
									const { ingredients } = values;
									return (
										<div>
											{ingredients.map(
												(ingredient, index: number) => (
													<div>
														<Field
															name={`ingredients.${index}.ingredient_amount`}
															type="text"
															placeholder="2"
														/>
														<Field
															name={`ingredients.${index}.ingredient_amount`}
															type="text"
															placeholder="lbs"
														/>
														<Field
															name={`ingredients.${index}.ingredient_name`}
															type="text"
															placeholder="chicken"
														/>
														<Field
															name={`ingredients.${index}.ingredient_directions`}
															type="text"
															placeholder="diced"
														/>
														<button
															type="button"
															onClick={() =>
																remove(index)
															}>
															Remove
														</button>
													</div>
												)
											)}
											<button
												type="button"
												onClick={() =>
													push({
														ingredient_name: "",
													})
												}>
												Add
											</button>
										</div>
									);
								}}
							</FieldArray>
						</div>
						{/* <FieldArray
							name="ingredients"
							render={(arrayHelpers) => (
								<div>
									{values.ingredients.map(
										(ingredient, index) => (
											<div key={index}>
												<Field
													name={`ingredients.${index}`}
												/>
												<button
													type="button"
													onClick={() =>
														arrayHelpers.remove(
															index
														)
													}>
													Remove
												</button>
												<button
													type="button"
													onClick={() =>
														arrayHelpers.insert(
															index,
															""
														)
													}>
													Add
												</button>
											</div>
										)
									)}
								</div>
							)}
						/> */}

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikRecipeTest;
