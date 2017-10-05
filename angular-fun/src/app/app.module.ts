import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";
import {HttpModule} from "@angular/http";
import { AboutComponent } from './components/about/about.component';

@NgModule({
	declarations: [
		AppComponent,
		UserComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	// add newly created data service to providers and import
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
