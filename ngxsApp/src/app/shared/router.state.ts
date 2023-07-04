import { Router } from '@angular/router';
import { Action, StateContext } from '@ngxs/store';

export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string) {}
}

export class RouterState {
  constructor(private router: Router) {}

  @Action(Navigate)
  async changeRoute(context: StateContext<String>, action: Navigate) {
    const path = action.payload;
    await this.router.navigate([path]);
    context.setState(path);
  }
}
