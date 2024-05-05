import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { BookModel } from '../../models/book-model.İnterface';
import { BookData } from '../../models/book-data.const';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true, // Burada standalone özelliğini kullanarak bileşenin izole edilmiş olduğunu belirtmiş oluyorsunuz.
  imports: [MatIconModule, MatButtonModule, MatDividerModule],
})
export class HomePageComponent {
  bookList: BookModel[] = BookData;
}
