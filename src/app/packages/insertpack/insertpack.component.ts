import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/pack.service';

@Component({
  selector: 'app-insertpack',
  templateUrl: './insertpack.component.html',
  styleUrls: ['./insertpack.component.css']
})
export class InsertpackComponent implements OnInit {
  constructor(private s1:PackService) {}
  bannerResult: any = [];
  ngOnInit(): void {
  }
insertpack(insertform:{value:any;})
{
 return this.s1.insertservice(insertform.value).subscribe(); 
 

}
}


