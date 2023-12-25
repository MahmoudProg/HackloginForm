import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  Objects : any =[]
  Total_Box = 0

  Card_Width = 75
  Card_Height = 75
  ngOnInit(): void {
    this.ChangeBoxCount()
  }
ChangeBoxCount(){
  var Width :number = Math.round(window.innerWidth / this.Card_Width)
  var Height :number = Math.round(window.innerHeight / this.Card_Height)

  this.Total_Box = Width * Height
  this.Objects=[]
  for (let index = 0; index < this.Total_Box; index++) {
    this.Objects.push({})
  }
}
  onEnter(item){
    item.Enter = true
    item.Out = false

  }
  onLeave(item){
    item.Enter = false
    item.Out = true

  }
}
