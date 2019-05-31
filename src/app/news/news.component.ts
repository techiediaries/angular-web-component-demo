import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.get().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
