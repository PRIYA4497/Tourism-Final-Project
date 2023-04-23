import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/pack.service';

@Component({
  selector: 'app-viewpack',
  templateUrl: './viewpack.component.html',
  styleUrls: ['./viewpack.component.css']
})
export class ViewpackComponent implements OnInit {

  data:any;
  constructor(private s1:PackService) { }

  ngOnInit(): void {
     let response = this.s1.viewservice();
     response.subscribe((data1)=>this.data=data1);
  }
}
