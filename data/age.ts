export function getAge() {
	const dayOfBirth = new Date();
	dayOfBirth.setFullYear(2005);
	dayOfBirth.setMonth(3);
	dayOfBirth.setDate(18);
	dayOfBirth.setHours(0);
	dayOfBirth.setMinutes(0);
	dayOfBirth.setSeconds(0);

	const today = new Date();

	let age = today.getFullYear() - dayOfBirth.getFullYear();

	const m = today.getMonth() - dayOfBirth.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < dayOfBirth.getDate())) {
		age--;
	}

	return age;
}
