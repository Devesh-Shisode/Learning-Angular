import { Component, OnInit } from '@angular/core';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit {

    user : any []= []
  constructor(private _randomUser : RandomService) { }

  ngOnInit(): void {
        this._randomUser.getUser().subscribe((data)=>{
            console.log(data);
            this.user = data.results
            console.log(this.user);
            
        })
  }
   
  trackByUuid(index: number, user: any): string | null {
    return  user?.login?.uuid || null;
  }

  

}
