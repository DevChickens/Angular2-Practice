import { sidebarReducer } from './layout/sidebar/sidebar.reducers';
import { homeSearchReducer } from './home/search/home-search.reducer';

export const APP_REDUCERS = {
  sidebar: sidebarReducer,
  mdHomeSearch: homeSearchReducer
};
