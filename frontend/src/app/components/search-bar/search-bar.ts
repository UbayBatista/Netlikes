import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBarComponent {
  @Input() placeholderText: string = ''; 
  
  search: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearchChange(value: string) {
    this.searchEvent.emit(value);
  }
}