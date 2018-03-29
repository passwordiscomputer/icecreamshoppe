import {Pipe, PipeTransform} from '@angular/core';
import { Bucket } from './models/bucket.model';

@Pipe({
  name: "inOrder",
  pure: false
})


export class inOrderPipe implements PipeTransform {


  transform(input: Bucket[]){
    var output: Bucket[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].currentScoops > 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
