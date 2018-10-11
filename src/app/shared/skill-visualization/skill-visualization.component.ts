/*
 * Created on Thu Oct 11 2018
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-visualization',
  templateUrl: './skill-visualization.component.html',
  styleUrls: ['./skill-visualization.component.css']
})
/**
 *  SkillVisualizationComponent visualize Technical Skills using D3 piechart
 *  Find all properties for pie chart
 *  http://nvd3-community.github.io/nvd3/examples/documentation.html#pieChart
 */
export class SkillVisualizationComponent implements OnInit {

  @Input() data: any;
  @Input() options: any;

  constructor() { }

  ngOnInit() {
    if (!this.options) {
      this.options = {
        chart: {
            type: 'pieChart',
            title: 'Technical Skills',
            height: 500,
            x: function(d){ return d.label; }, 
            y: function(d){ return d.value; },  
            showLabels: true, 
            showLegend: false, 
            duration: 500,
            labelSunbeamLayout: true,
            donut: true,
            donutLabelsOutside: true,
            cornerRadius: 5,
            padAngle: 0.08, 
            legend: {
                margin: {
                    top: 20,
                    right: 50,
                    bottom: 20,
                    left: 50
                }
            }
        }
      }
    }
  }
}
