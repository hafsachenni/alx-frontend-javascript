interface Teacher{
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

class Teacher3 implements Teacher{
	readonly firstName: string;
        readonly lastName: string;
        fullTimeEmployee: boolean;
        yearsOfExperience?: number;
        location: string;
	

	constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, yearsOfExperience: number, location: string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullTimeEmployee = fullTimeEmployee;
		this.location = location;
	}
}

interface Directors extends Teacher {
	numberOfReports: number;
}
