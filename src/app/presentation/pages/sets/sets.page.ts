import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { ProgressBar } from '../../components/progress-bar/progress-bar';

@Component({
  selector: 'app-sets',
  imports: [ProgressBar, Banner],
  templateUrl: './sets.page.html',
  styleUrl: './sets.page.scss',
})
export class Sets {

}
