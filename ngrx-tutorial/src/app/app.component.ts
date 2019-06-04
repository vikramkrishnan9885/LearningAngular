import { Component } from '@angular/core';

///
import { Store } from '@ngrx/store';
 
import * as fromRoot from './store/reducers';
import * as authActions from './store/actions/auth.actions';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-tutorial';

  constructor(private store: Store<fromRoot.State>) {}
 
  ngOnInit() {
    this.store.dispatch(new authActions.LoadAuths());
  }
}

/**
 * Notes:
 * Imports:
 * 1) Store from @ngrx/store
 * 2) import * as fromRoot… – this is where the main State interface lives in the index.ts file
 * 3) import * as authActions… – this is where our LoadAuths actions live
 * Inject the store
 * 1) In the constructor, inject the store as shown in the code
 * When it’s time to dispatch (sometimes in ngOnInit, sometimes from a button click, etc.), run this command:
 * 1) this.store.dispatch(new authActions.LoadAuths());
 */