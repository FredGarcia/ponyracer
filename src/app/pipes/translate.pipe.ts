import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  dico :Map<string,string>
  constructor() {
    this.dico = new Map<string,string>()
    this.dico.set("in ","dans ")
    this.dico.set("ago","(passé)")
    this.dico.set("hour","heure")
    this.dico.set("day","jour")

  }
  transform(value: string, ...args: unknown[]): string {
    var result = value;
    this.dico.forEach((value: string, key: string) => {
      result = result.replace(key,value)
    });
    return result;
  }

}