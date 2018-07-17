import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditNotePage } from '../edit-note/edit-note'

/**
 * Generated class for the NoteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html',
})
export class NoteDetailPage {
  public note = {
    title: String,
    description: String
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailPage');
    this.note.title = this.navParams.get('item').title;
    this.note.description = this.navParams.get('item').description;
  }

  editNote(note) {
    this.navCtrl.push(EditNotePage, {
      item: note
    });
  }

}
