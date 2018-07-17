import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteDetailPage } from '../note-detail/note-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  public notes = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  ionViewDidLoad(){

    this.notes = [
      {title: 'Note1', description: 'test1' },
      {title: 'Note2', description: 'test2' },
      {title: 'Note3', description: 'test3' },
      {title: 'Note4', description: 'test4' }
    ];
  }

  
  addItem(){
    let addModal = this.modalCtrl.create(AddNotePage);
    addModal.onDidDismiss((note) => {
 
          if(note){
            this.saveItem(note);
          }
 
    });
 
    addModal.present(); 
 
  }
 
  saveItem(note){
    this.notes.push(note);
  }
 
  viewItem(note){
    this.navCtrl.push(NoteDetailPage, {
      note: note
    });
  }

}
