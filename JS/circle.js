// Assignment: Validate the Theoretical Probability Through Simulation

// Objective:

// Validate through simulation that the probability of a randomly formed triangle (with vertices on the circumference of a circle of radius 1) containing the center of the circle is 1/4.

// Requirements:
// Generate three random points (A, B, C) on the circumference of a circle centered at origin (0, 0) with radius 1.
// Form a triangle ABC and determine whether the center of the circle (0, 0) is inside this triangle.
// Repeat steps 1-2 for N iterations.
// Calculate the empirical probability by taking the ratio of the number of triangles containing the center to the total number of iterations.
// Compare the empirical probability with the theoretical probability of 1/4.

function isPointInsideTriangle(A, B, C, P) {
	function sign(p1, p2, p3) {
		// I think this function is called 'sign' after 'signed area'
		// If I'm understanding correctly, this is figuring out the orientation of the triangle (clockwise, counterclockwise, or straight line)?
		return (
			(p1[0] - p3[0]) * (p2[1] - p3[1]) -
			(p2[0] - p3[0]) * (p1[1] - p3[1])
		);
	}

	let b1 = sign(P, A, B) < 0;
	let b2 = sign(P, B, C) < 0;
	let b3 = sign(P, C, A) < 0;
	// console.log("bs", b1, b2, b3)

	// Basically, if b1, b2, and b3 are all positive or all negative, P is contained in the triangle. If any one of them doesn't match then P is not contained.
	// The orientations all have to match. It checks the relationships of P vs lines A/B, B/C, and C/A. A negative number means they're on one side of the line vs the other. If the relationship, or the orientation, matches for all of them then it's contained.
	return b1 === b2 && b2 === b3;
}

function calculateEmpiricalProbability(N) {
	// this keeps track of how many times the center is contained in the triangle
	let countInside = 0;

	// start i at 0, loop until i reaches N (number of iterations)
	for (let i = 0; i < N; i++) {
		// console.log("iteration", i)

		// This is creating a random point by first generating a random number between 0 and 1, then multiplying it by 2pi. It's 2 because 2pi is a full circle in radians. The point itself will be between 0 and 2pi, 6.28~~
		// You can think of it like a flat line that is 6.28 inches long. Each of the random numbers created below will be placed on the line based on their value. Then, we can take the line and make it a circle. Boom -- circle with points.
		let angleA = Math.random() * 2 * Math.PI;
		let angleB = Math.random() * 2 * Math.PI;
		let angleC = Math.random() * 2 * Math.PI;
		// console.log("points")
		// console.log(angleA, angleB, angleC)

		// We use sin and cos to generate the actual grid locations that the points will occupy, from the radians generated above. These numbers will be between 0 and 1 because the radius of the circle is 1, as stated in the objective. If we were working with a circle of a different radius, we would have to multiply each number in the array by that radius.
		// let radius = 5
		// let A = [radius * Math.cos(angleA), radius * Math.sin(angleA)]
		let A = [Math.cos(angleA), Math.sin(angleA)];
		let B = [Math.cos(angleB), Math.sin(angleB)];
		let C = [Math.cos(angleC), Math.sin(angleC)];
		// console.log("angles")
		// console.log(A, B, C)

		// Check if the center (0, 0) is inside the triangle. If it is, increment the 'countsInside' variable by 1.
		if (isPointInsideTriangle(A, B, C, [0, 0])) {
			countInside++;
			// console.log("isInside: ", countInside)
		}
	}

	// Calculate empirical probability -- divide the number of times the point was contained by the number of iterations
	let empiricalProbability = countInside / N;

	// Theoretical probability is 1/4 for a random triangle in a circle
	let theoreticalProbability = 1 / 4;

	// Compare the two
	console.log("Empirical Probability:", empiricalProbability);
	console.log("Theoretical Probability:", theoreticalProbability);
}

// Call the function with the number of iterations (N)
calculateEmpiricalProbability(100000);
