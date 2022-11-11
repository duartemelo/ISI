import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';



@Component({
  selector: 'app-view-titles',
  templateUrl: './view-titles.component.html',
  styleUrls: ['./view-titles.component.css']
})




export class ViewTitlesComponent implements OnInit {

  titles: any[] = [];

  

  constructor(private service: SharedServiceService) { }

  

  ngOnInit(): void {
    this.get_titles(this.titles);  
    

  }

  get_titles(titles: any){
    let i = 0;
    this.service.get_titles().subscribe(data =>{
      
      data.forEach(title =>{
        if (i<100){
          titles.push(title);
          console.log(title);
        }
        i++;
      })
    })
    setTimeout(function () {
      console.log(titles);
      }, 15000);
    
  }

}
