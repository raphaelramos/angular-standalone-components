import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { VersesService } from './verses.service';
import { Verse } from './verses';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule],
  providers: [VersesService],
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})
export class VersesComponent implements OnInit {

  verses!: Verse[];
  constructor (private versesService:VersesService) {}

  ngOnInit(): void {
    this.versesService.getVerse().subscribe(res => {
      this.verses = res.verses;
    });
  }
}
