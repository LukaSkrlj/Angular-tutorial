import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class HeroAdapter{
    heroMapper(o: any):any {
        if (typeof o === 'object' && !Array.isArray(o) && typeof o != 'function') {
          const n:any= {};
          //
          Object.keys(o)
            .forEach((k) => {
              n[this.toCamel(k)] = this.heroMapper(o[k]);
            });
      
          return n;
        } else if (Array.isArray(o)) {
          return o.map((i) => {
            return this.heroMapper(i);
          });
        }
      
        return o;
      };
    
      toCamel = (s : string) => {
        return s.replace(/([-_][a-z])/ig, ($1 : string) => {
          return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
        });
      };
}