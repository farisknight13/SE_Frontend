import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQueryMax: MediaQueryList;

  private _mobileQueryListener: ()=> void;
  //หลักการ di
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    this.mobileQueryMax.addListener(this._mobileQueryListener)

  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._mobileQueryListener)
  }
  
  // title = 'frontend';
  // name:String = 'phimporn';
  // position = ['Admin','IT','HR']
  // imageUrl ='https://www.greedgigs.com/wp-content/uploads/2020/08/dynamite.jpg'
    
  // setName(){
  //   this.name = 'P';
  // }

  onSayHi(text: String){
    // alert(text)
  }
}
