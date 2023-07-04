import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './shared/app.state';
import { Select, Store } from '@ngxs/store';
import { SetUsername } from './shared/app.action';
import { Navigate } from './shared/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'ngxsApp';
  // state$: Observable<AppState> | undefined;
  // constructor(private store:Store){
  //   this.state$=this.store.select(state => state.app);
  // }

  @Select((state: { app: any; })=>state.app  ) app$: any;
  constructor(private store:Store){}
    clickHandler(username: string){
        this.store.dispatch([

            new SetUsername(username),
            new Navigate('salad/order')
        ])
    }

}
