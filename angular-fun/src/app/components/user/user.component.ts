import {Component, OnInit} from '@angular/core';
// import data service to component
import {DataService} from "../../services/data.service";

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
	posts:Post[];

	// inject service as a dependency into the constructor
	constructor(private dataService:DataService) {
	}

	ngOnInit() {

		this.name = 'John Doe';
		this.age = 25;
		this.email = 'johndoe@test.com';
		this.address = {
			street: '200 Central Ave',
			city: 'Albuquerque',
			state: 'NM'
		}
		this.hobbies = ['Listen to music', 'Write code', 'Watch movies'];

		// get posts returns observable so you need to subscribe it
		this.dataService.getPosts().subscribe((posts) => {
			this.posts = posts;
		});
	}

	onClick() {
		this.name = 'Jane Smith';
		this.age = 28;
		this.email = 'janesmith@test.com';
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

	deleteHobby(hobby) {
		// loop through hobbies
		for(let i = 0; i < this.hobbies.length; i++) {
			// make sure hobby you want to delete is current iteration
			if(this.hobbies[i] === hobby) {
				this.hobbies.splice(i, 1);
			}
		}
	}

}


interface Address {
	street: string,
	city: string,
	state: string
}

interface Post {
	id: number,
	title: string,
	body: string,
	userId: number
}
