import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample1'
})
export class PipeExample1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
