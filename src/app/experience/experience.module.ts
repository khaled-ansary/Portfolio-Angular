/*
 * Created on Sun Oct 07 2018
 *
 * The MIT License (MIT)
 * Copyright (c) 2018 Md Khaled Hossain Ansary
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TimelineModule } from '../shared/timeline/timeline.module';

import { ExperienceComponent } from './experience.component';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { SkillVisualizationModule } from '../shared/skill-visualization/skill-visualization.module';


@NgModule({
   declarations: [ExperienceComponent],
   imports: [
       AngularFontAwesomeModule,
       CommonModule,
       RouterModule.forChild([
           { path: '', component: ExperienceComponent },
       ]),
       TimelineModule,
       SkillVisualizationModule
   ],
   providers: [PortfolioService]
})
export class ExperienceModule {}
