import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Some text</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: ['']
})
export class AppComponent {
  name = 'maksym turenko'
  imgUrl = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  images = [
    'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
    'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
    'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 16

  getName() {
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value
  }

  logImage(event: string) {
    console.log(event)
  }
}
