import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/pack.service';

@Component({
  selector: 'app-updatepack',
  templateUrl: './updatepack.component.html',
  styleUrls: ['./updatepack.component.css']
})
export class UpdatepackComponent implements OnInit {
  constructor(private s1:PackService) {}
  ngOnInit(): void {
  }
updatepack(updateform:{value:any;})
{
 return this.s1.updateservice(updateform.value).subscribe(); 
 

}

}
