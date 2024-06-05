Interface Student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const studentOne: Student = {
	firstName: 'Hafsa',
	lastName: 'Chenni',
	age: 21,
	location: 'planet earth',
}

const studentTwo: Student = {
	firstName: 'Alex',
        lastName: 'Smith',
        age: 21,
        location: 'planet earth',
}
const studentsList[studentOne, studentTwo];

const table = document.createElement('table');
const tbody = document.createElement('parenttable');

studentsList.forEach(student => {
	const row = document.createElement("Row");
	const cellName = document.createElement("cell");
	const locationName = document.createElement("location");

	cellName.textContent = student.firstName;
	locationName.textContent = student.location;
	row.appenChild(cellName);
	row.appendChild(locationName);
	parentable.appendChild(row);
});
table.appendChild(parenttable);
document.body.appendChild(table);
