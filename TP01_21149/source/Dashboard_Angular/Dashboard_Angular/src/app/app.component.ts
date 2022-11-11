import { Component, PipeTransform, TestabilityRegistry} from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {SharedServiceService} from '../app/shared-service.service'

// interface Title {
//   _id: string;
//   titleType: string;
//   primaryTitle: string;
//   originalTitle: string;
//   isAdult: string;
//   startYear: string;
//   endYear: string;
//   runtimeMinutes: string;
//   genre_1: string;
//   genre_2: string;
//   genre_3: string;
//   averageRating: string;
//   numVotes: string;
// }

// let titles: Title[] = [];

// function search(text: string, pipe: PipeTransform): Title[] {
// 	return titles.filter((title) => {
// 		const term = text.toLowerCase();
// 		return (
//       title._id.toLowerCase().includes(term) ||
//       title.titleType.toLowerCase().includes(term) ||
//       title.primaryTitle.toLowerCase().includes(term) ||
//       title.originalTitle.toLowerCase().includes(term) ||
//       title.isAdult.toLowerCase().includes(term) ||
//       title.startYear.toLowerCase().includes(term) ||
//       title.endYear.toLowerCase().includes(term) ||
//       title.runtimeMinutes.toLowerCase().includes(term) ||
//       title.genre_1.toLowerCase().includes(term) ||
//       title.genre_2.toLowerCase().includes(term) ||
//       title.genre_3.toLowerCase().includes(term) ||
//       title.averageRating.toLowerCase().includes(term) ||
//       title.numVotes.toLowerCase().includes(term)
// 		);
// 	});
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})





export class AppComponent {
  // titles$: Observable<Title[]>;
	// filter = new FormControl('', { nonNullable: true });

	// constructor(pipe: DecimalPipe, private service: SharedServiceService) {
	// 	this.titles$ = this.filter.valueChanges.pipe(
	// 		startWith(''),
	// 		map((text) => search(text, pipe)),
	// 	);
	// }
  
  // ngOnInit(){
  //   this.get_services();
  // }

  // get_services(){
  //   let i = 0;
  //   this.service.get_titles().subscribe(data =>{
  //     data.forEach(title => {
  //       if (i < 100){
  //         // let jsonObj = JSON.parse(title);
  //         let final_title = title as Title;
  //         titles.push(final_title);
  //       }
  //       i++;
  //     });
  //     console.log(titles);
  //     console.log(this.titles$);
  //   })
  // }

  
}

