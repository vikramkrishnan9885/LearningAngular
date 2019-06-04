import { Component } from '@angular/core';

///
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

/**
 * Import the root state in order to select parts of it.
 */
import * as fromRoot from "./common/index";
/*
 * Import the layout actions to make dispatching from the component possible.
 */
import * as layout from "./common/layout/layout.actions";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'redux-layout-tutorial-app';
  //constructor(private store: Store<fromRoot.AppState>) {}
  public openedModalName$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    // Use the selector to directly get the opened modal name from the state
    this.openedModalName$ = store.select(fromRoot.getLayoutOpenedModalName);
  }

  //Dispatch an action to open a modal
  handleOpenModal(modalName: string) {
    this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal() {
    this.store.dispatch(new layout.CloseModalAction("close"));
  }
}

/**
 * There are two types of components - presentational components and 
 * container components.
 * When building the UI state, it's best to keep the logic inside directives 
 * in order to keep the logic DRY. You don't have to write the same logic 
 * for a sidebar in every container component in your application.
 * Another possibility is to keep the logic in the container and only 
 * in exceptional cases there's a need to put the logic inside a component 
 * that represents a UI element.In this guide, the container component will 
 * be the AppComponent. In order to make the state of the application 
 * accessible in it and be able to dispatch actions, you have to import 
 * layout.actions and the root state:
 */