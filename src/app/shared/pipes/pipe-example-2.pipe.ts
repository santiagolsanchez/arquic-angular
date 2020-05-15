import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample2'
})
export class PipeExample2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
