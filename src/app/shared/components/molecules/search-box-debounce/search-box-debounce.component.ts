import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box-debounce',
  templateUrl: './search-box-debounce.component.html',
  styleUrls: ['./search-box-debounce.component.scss']
})
export class SearchBoxDebounceComponent implements OnInit  {


  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.OnTextDebounceInput.emit(value))
  }

  private debouncer: Subject<string> = new Subject<string>();


  @Input() placeholder = '';
  @Output() OnTextDebounceInput = new EventEmitter<string>();

  searchTerm (term: string):void {
    this.debouncer.next(term);
  }
}
