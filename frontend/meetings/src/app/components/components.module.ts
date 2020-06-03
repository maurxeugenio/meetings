import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { TimeagoComponent } from './timeago/timeago.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, FeedCardComponent, TimeagoComponent, TimeAgoPipe],
  exports: [SlidesComponent, StartComponent, FeedCardComponent, TimeagoComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule { }