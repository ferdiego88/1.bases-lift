import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper = false) {

    console.log({value, toUpper});
    return (toUpper)
    ? value.toLocaleUpperCase()
    : value.toLowerCase();
  }

}
