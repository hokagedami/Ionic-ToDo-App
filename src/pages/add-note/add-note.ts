import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };
    /* newItem.title = this.title;
    newItem.description = this.description;
 
    this.view.dismiss(newItem); */
    return newItem; 
  }
 
  close(){
    this.view.dismiss();
  }

}
