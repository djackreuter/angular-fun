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
			street: '200 Main St',
			city: 'Albuquerque',
			state: 'New Mexico'
		}
		this.hobbies = ['Listen to music', 'Write code', 'Watch movies'];
	}

}


interface Address {
	street: string,
	city:string,
	state:string
}
