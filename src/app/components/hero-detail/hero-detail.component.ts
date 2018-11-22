import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { DragDropComponent } from '../drag-drop/drag-drop.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Input() dragdrop :DragDropComponent;

  constructor() { }

  ngOnInit() {
  }

}
