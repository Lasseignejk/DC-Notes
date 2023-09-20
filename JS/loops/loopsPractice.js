const students = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		age: 20,
		GPA: 3.8,
		classes: ["Math", "Physics"],
		hasGraduated: true,
		major: "Computer Science",
		email: "john.doe@example.com",
		address: "123 Main Street",
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Smith",
		age: 19,
		GPA: 3.2,
		classes: ["History", "English"],
		hasGraduated: false,
		major: "History",
		email: "jane.smith@example.com",
		address: "456 Elm Avenue",
	},
	{
		id: 3,
		firstName: "Alice",
		lastName: "Johnson",
		age: 21,
		GPA: 3.9,
		classes: ["Chemistry", "Biology"],
		hasGraduated: true,
		major: "Biology",
		email: "alice.johnson@example.com",
		address: "789 Oak Drive",
	},
	{
		id: 4,
		firstName: "Bob",
		lastName: "Brown",
		age: 22,
		GPA: 2.5,
		classes: ["Computer Science", "Economics"],
		hasGraduated: false,
		major: "Economics",
		email: "bob.brown@example.com",
		address: "101 Pine Road",
	},
	{
		id: 5,
		firstName: "Susan",
		lastName: "Evans",
		age: 20,
		GPA: 3.4,
		classes: ["Web Development", "Cyber Security"],
		hasGraduated: false,
		major: "Information Technology",
		email: "susan.evans@example.com",
		address: "222 Cedar Lane",
	},
];

// for (let i = 0; i < students.length; i++) {
// 	const student = students[i];
// 	console.log(student.firstName + " " + student.lastName);
// 	for (let j = 0; j < student.classes.length; j++) {
// 		console.log("   " + student.classes[j]);
// 	}
// }


const travelData = [
	{
		id: 1,
		firstName: "Alice",
		lastName: "Smith",
		age: 28,
		destination: "Paris, France",
		travelPurpose: "Vacation",
		travelStartDate: new Date("2023-05-15"),
		travelEndDate: new Date("2023-05-25"),
		isTraveling: true,
		activities: [
			"Eiffel Tower visit",
			"Louvre Museum tour",
			"Seine River cruise",
		],
		travelDetails: {
			flightNumber: "AF123",
			accommodation: "Hotel Le Grand",
			travelInsurance: true,
		},
	},
	{
		id: 2,
		firstName: "Bob",
		lastName: "Johnson",
		age: 35,
		destination: "Tokyo, Japan",
		travelPurpose: "Business Trip",
		travelStartDate: new Date("2023-06-10"),
		travelEndDate: new Date("2023-06-20"),
		isTraveling: true,
		activities: [
			"Business meetings",
			"Sushi tasting",
			"Visit to Tokyo Skytree",
		],
		travelDetails: {
			flightNumber: "JL456",
			accommodation: "Tokyo Marriott",
			travelInsurance: false,
		},
	},
	{
		id: 3,
		firstName: "Carol",
		lastName: "Davis",
		age: 22,
		destination: "Barcelona, Spain",
		travelPurpose: "Study Abroad",
		travelStartDate: new Date("2023-09-01"),
		travelEndDate: new Date("2024-01-15"),
		isTraveling: true,
		activities: [
			"University classes",
			"Exploring Park Güell",
			"Learning Spanish",
		],
		travelDetails: {
			flightNumber: "IB789",
			accommodation: "Student dormitory",
			travelInsurance: true,
		},
	},
	{
		id: 4,
		firstName: "David",
		lastName: "Brown",
		age: 45,
		destination: "Sydney, Australia",
		travelPurpose: "Vacation",
		travelStartDate: new Date("2023-07-05"),
		travelEndDate: new Date("2023-07-20"),
		isTraveling: false,
		activities: ["Sydney Opera House tour", "Great Barrier Reef diving"],
		travelDetails: {
			flightNumber: "QF101",
			accommodation: "Sydney Beachfront Villa",
			travelInsurance: true,
		},
	},
	{
		id: 5,
		firstName: "Eva",
		lastName: "Wilson",
		age: 30,
		destination: "Rio de Janeiro, Brazil",
		travelPurpose: "Vacation",
		travelStartDate: new Date("2023-08-15"),
		travelEndDate: new Date("2023-08-30"),
		isTraveling: true,
		activities: [
			"Carnival in Rio",
			"Christ the Redeemer visit",
			"Samba dancing",
		],
		travelDetails: {
			flightNumber: "GOL202",
			accommodation: "Rio Beachfront Resort",
			travelInsurance: true,
		},
	},
];

// write a function that takes in an array of numbers and returns a new array containing all the numbers multiplied by 2.

const numbers = [1, 2, 3, 4, 5];

function multiplyByTwo(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let doubledNum = array[i] * 2;
		result.push(doubledNum);
	}
	return result;
}

// console.log(multiplyByTwo(numbers));

//use map and the numbers array above to print out each number to the console.
// numbers.map((number) => console.log(number));

// numbers.map((number) => console.log(number * 2));

// students.map((student) => console.log(student.firstName));
// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i].firstName, students[i].lastName);
// }

// let result = [];
// numbers.map((number) => {
// 	let doubledNum = number * 2;
// 	result.push(doubledNum);
// });

// console.log(result);

// travelData.map((traveler) => {
// 	console.log(traveler.destination);
// 	traveler.activities.map((activity) => console.log("  ", activity));
// });
