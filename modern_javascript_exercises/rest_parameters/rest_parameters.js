// Instructions can be found in rest_parameters.md

export function add(...nums) {
	// Add a loop here
	return nums.reduce((total, num) => {
		return total + num;
	});
}

add(1, 2, 3, 4, 5);
