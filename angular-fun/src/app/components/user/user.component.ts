import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name: string;
	age: number;
	email: string;
	address:Address;
	hobbies:string[];

	constructor() {
	}

	ngOnInit() {

		this.name = 'John Doe';
		this.age = 25;
		this.address = {
			street: '200 Central Ave',
			city: 'Albuquerque',
			state: 'NM'
		}
		this.hobbies = ['Listen to music', 'Write code', 'Watch movies'];
	}

	onClick() {
		this.name = 'Jane Smith';
		this.age = 28;
		this.hobbies.push('Read books');
		this.address = {
			street: '405 St Michaels Dr',
			city: 'Santa Fe',
			state: 'NM'
		}
	}

	addHobby(hobby) {
		this.hobbies.unshift(hobby);
		return false;
	}

}


interface Address {
	street: string,
	city: string,
	state: string
}
