import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment } from "./reducers/actions";
import { IStore } from "../../store/reducers";

@Component({
  selector: "ngrx-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {
  counter: number = 0;

  constructor(private _store: Store<IStore>) {
    this._store.select("counter").subscribe((count: number) => {
      this.counter = count;
    });
  }

  increment(): void {
    this._store.dispatch(increment());
  }

  decrement(): void {
    this._store.dispatch(decrement({ value: 5 }));
  }
}
