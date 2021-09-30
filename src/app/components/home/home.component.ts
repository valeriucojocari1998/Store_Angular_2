import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  top = "30%"; //8 to 48
  right = "35%" //0 to 65
  state: boolean = false;

  ngOnInit(): void {
    setTimeout(() =>{this.state=true}, 5000)
  }
  position(){
    let y = Math.floor(Math.random() * 40);
    let x = Math.floor(Math.random() * 65);
    this.top = y.toString() + '%';
    this.right = x.toString() + '%';
  }
  reload(){
    window.location.reload()
  }

}
