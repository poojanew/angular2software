import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'myadvertise',
  templateUrl:'./advertiseform.html'
})


export class advertiseComponent  { name = 'Angular'; 
  categories = [{id:'furniture',value:'Furniture'}
   ,{id:'hardware',value:'hardware'} 
  ,{id:'Mobile',value:'Mobile'}];
}
