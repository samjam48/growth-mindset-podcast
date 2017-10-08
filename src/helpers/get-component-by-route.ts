
export interface IRouteData {
  path: string;
  component: any;
}

// function filterByPath(path: string){
//   return (route: IRouteData) => {
//
//     return true;
//   }
// }
export function isInRoute(routes: IRouteData[], path: string): boolean {
  for (const route of routes){
    if (route.path === path) { return true; }
  }
  return false;
}

export function getComponentByRoute(routes: IRouteData[], path: string): IRouteData {
  for (const route of routes){
    if (route.path === path) { return route.component; }
  }
  return { path, component: null };
}
