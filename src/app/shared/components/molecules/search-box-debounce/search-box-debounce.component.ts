import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box-debounce',
  templateUrl: './search-box-debounce.component.html',
  styleUrls: ['./search-box-debounce.component.scss']
})
export class SearchBoxDebounceComponent implements OnInit, OnDestroy  {
  private debouncer: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  ngOnInit(): void {
    this.debounceSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.OnTextDebounceInput.emit(value))
  }


  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }


  @Input() placeholder = '';
  @Input() inputValue = '';
  @Output() OnTextDebounceInput = new EventEmitter<string>();

  searchTerm (term: string):void {
    this.debouncer.next(term);
  }
}
