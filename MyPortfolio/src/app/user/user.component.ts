import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  email: string ="";
  title: string ="";
  description: string ="";
  prize!: number;

  constructor(private http: HttpClient){}
  
  ngOnInit(): void{}
  
  createWork(){
    let bodyData={
      "email": this.email,
      "title": this.title,
      "description": this.description,
      "prize": this.prize
    };

    this.http.post("http://localhost:9002/user/createWork",bodyData).subscribe((resultData: any)=>{
      console.log(resultData);
      alert("Work is submitted Successfully")
    });
  }
  save(){
    this.createWork();
  }
}

