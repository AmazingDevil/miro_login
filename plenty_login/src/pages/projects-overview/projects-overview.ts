import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-projects-overview',
  templateUrl: 'projects-overview.html',
})
export class ProjectsOverviewPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsOverviewPage');
  }

  onclick(project, event) {
  }

}
