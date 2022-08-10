import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'mayusculas' //nombre de uso del pipe
})
export class MayusculasPipe implements PipeTransform{

   transform(valor: string, enMayusculas: boolean = true) : string {
       if( enMayusculas ){
         return valor.toUpperCase();
      }else{
         return valor.toLocaleLowerCase();
      }
   }


}
