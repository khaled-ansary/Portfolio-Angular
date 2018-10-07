import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [ContactComponent],
   imports: [
       CommonModule,
       RouterModule.forChild([
           { path: '', component: ContactComponent },
       ])
   ],
   providers: []
})
export class PostsModule {}