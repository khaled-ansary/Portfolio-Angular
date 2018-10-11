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

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

import { Timeline } from '../models/timeline';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceTimeline: Array<Timeline> = [];
  skills;
  

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {

    this.portfolioService.getPortfolio().subscribe(
        portfolio => {
           if(portfolio && portfolio.skills){
              this.skills = portfolio.skills;
           }
           if (portfolio && portfolio.experiences ) {
              portfolio.experiences.forEach(experience => {

                  // add experiences in timeline component
                  this.experienceTimeline.push(
                    new Timeline(experience.title,
                      experience.duration, 
                      experience.description,
                      experience.company)
                  );
              });
           }
        }
    );
  }

}
