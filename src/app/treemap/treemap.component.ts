import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly';
import am4themes_frozen from '@amcharts/amcharts4/themes/frozen';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_moonrisekingdom from '@amcharts/amcharts4/themes/moonrisekingdom';
import am4themes_spiritedaway from '@amcharts/amcharts4/themes/spiritedaway';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createTreeMap();
  }

  createTreeMap() {
    // am4core.useTheme(am4themes_dataviz);
     am4core.useTheme(am4themes_material);
    // am4core.useTheme(am4themes_kelly);
    // am4core.useTheme(am4themes_frozen);
    // am4core.useTheme(am4themes_dark);
    // am4core.useTheme(am4themes_moonrisekingdom);
    // am4core.useTheme(am4themes_spiritedaway);
     am4core.useTheme(am4themes_animated);

     const chart = am4core.create('chartdiv', am4charts.TreeMap);
     chart.hiddenState.properties.opacity = 0;

     chart.data = [{
      name: 'First',
      children: [
        {
          name: 'A1',
          value: 100
        },
        {
          name: 'A2',
          value: 60
        },
        {
          name: 'A3',
          value: 30
        }
      ]
    },
      {
        name: 'Second',
        children: [
          {
            name: 'B1',
            value: 135
          },
          {
            name: 'B2',
            value: 98
          },
          {
            name: 'B3',
            value: 56
          }
        ]
      },
      {
        name: 'Third',
        children: [
          {
            name: 'C1',
            value: 335
          },
          {
            name: 'C2',
            value: 148
          },
          {
            name: 'C3',
            value: 126
          },
          {
            name: 'C4',
            value: 26
          }
        ]
      },
      {
        name: 'Fourth',
        children: [
          {
            name: 'D1',
            value: 415
          },
          {
            name: 'D2',
            value: 148
          },
          {
            name: 'D3',
            value: 89
          },
          {
            name: 'D4',
            value: 64
          },
          {
            name: 'D5',
            value: 16
          }
        ]
      },
      {
        name: 'Fifth',
        children: [
        {
          name: 'E1',
          value: 687
        },
        {
          name: 'E2',
          value: 148
        }
        ]
      },
      {
       name: 'Sixth',
       children: [
         {
           name: 'F1',
           value: 250,
         },
         {
           name: 'F2',
           value: 88
         }
       ]
      },
      {
         name: 'Seventh',
         children: [
           {
             name: 'G1',
             value: 10,
           },
           {
             name: 'G2',
             value: 60
           },
           {
             name: 'G3',
             value: 163
           },
         ]
       }];

     chart.colors.step = 2;

     chart.dataFields.value = 'value';
     chart.dataFields.name = 'name';
     chart.dataFields.children = 'children';

     chart.zoomable = false;
     const bgColor = new am4core.InterfaceColorSet().getFor('background');

     // level 0 series template
     // const level0SeriesTemplate = chart.seriesTemplates.create('0');
     // const level0ColumnTemplate = level0SeriesTemplate.columns.template;
     //
     // level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
     // level0ColumnTemplate.fillOpacity = 0;
     // level0ColumnTemplate.strokeWidth = 4;
     // level0ColumnTemplate.strokeOpacity = 0;

     const level1SeriesTemplate = chart.seriesTemplates.create('1');
     const level1ColumnTemplate = level1SeriesTemplate.columns.template;

     level1SeriesTemplate.tooltip.animationDuration = 0;
     level1SeriesTemplate.strokeOpacity = 1;

     level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
     level1ColumnTemplate.fillOpacity = 1;
     level1ColumnTemplate.strokeWidth = 4;
     level1ColumnTemplate.stroke = bgColor;

     const bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
     bullet1.locationY = 0.5;
     bullet1.locationX = 0.5;
     bullet1.label.text = '{name}';
     bullet1.label.fill = am4core.color('#ffffff');

     chart.maxLevels = 2;
  }
}
