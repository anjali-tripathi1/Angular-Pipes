import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/student";

@Pipe({
   name : 'filter',
   pure : false
})

export class FilterPipe implements PipeTransform{
     transform(list:Student[], filterBy:string){
        console.log("filter Pipe called")
          if(filterBy.toLowerCase() === 'all' || filterBy === '' || filterBy.length === 0){
               return list
          } else {
              return  list.filter((std) => {
                  return std.gender.toLowerCase() === filterBy.toLowerCase()
              })
          }
     }
}
