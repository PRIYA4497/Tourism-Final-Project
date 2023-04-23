import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/pack.service';

@Component({
  selector: 'app-deletepack',
  templateUrl: './deletepack.component.html',
  styleUrls: ['./deletepack.component.css']
})
export class DeletepackComponent implements OnInit {
  constructor(private s1:PackService) {}
  ngOnInit(): void {
  }
deletepack(deleteform:{value:any;})
{
 return this.s1.deleteservice(deleteform.value).subscribe(); 
 

}

}
