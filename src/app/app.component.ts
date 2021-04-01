import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  container: any | undefined;
  colors: any | undefined;

  constructor() {
    this.container = null;
    this.colors = null;
  }

  create() {
    am4core.useTheme(am4themes_animated);
    this.container = am4core.create('chartdiv', am4core.Container);
    this.container.layout = 'grid';
    this.container.fixedWidthGrid = false;
    this.container.width = am4core.percent(100);
    this.container.height = am4core.percent(100);
    // Color set
    this.colors = new am4core.ColorSet();
    return this;
  }

  createSparkLine(context: any) {
    const chart = this.container.createChild(am4charts.XYChart);
    chart.width = am4core.percent(100);
    chart.height = 500;

    chart.data = context.data;

    // chart.titles.template.fontSize = 11;
    // chart.titles.template.fontWeight = 'bold';
    // chart.titles.template.textAlign = 'left';
    // chart.titles.template.isMeasured = false;
    // chart.titles.create().text = context.title;

    // chart.padding(25, 15, 15, 15);

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.disabled = true;
    // dateAxis.renderer.labels.template.disabled = true;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.7;
    dateAxis.cursorTooltipEnabled = false;
    dateAxis.baseInterval = {
      timeUnit: 'hour',
      count: 1
    };

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled = false;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.behavior = 'none';

    const series = chart.series.push(new am4charts.LineSeries());
    series.tooltipText = '{dateX.formatDate(\'yyyy-mm-dd HH:mm:ss\')}: [bold]{value}';
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';
    series.tensionX = 0.8;
    series.strokeWidth = 2;
    series.stroke = this.colors.getIndex(0);

    // render data points as bullets
    // const bullet = series.bullets.push(new am4charts.CircleBullet());
    // bullet.circle.opacity = 0;
    // bullet.circle.fill = this.colors.getIndex(0);
    // bullet.circle.propertyFields.opacity = 'opacity';
    // bullet.circle.radius = 3;

    return chart;
  }

   generateChartData() {
    const chartData = [];
    // current date
    const firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 500);

    // and generate 500 data items
    let visits = 500;
    for (let i = 0; i < 500; i++) {
      const newDate = new Date(firstDate);
      // each time we add one minute
      newDate.setMinutes(newDate.getMinutes() + i);
      // some random number
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      // add data item to the array
      chartData.push({
        date: newDate,
        visits
      });
    }
    return chartData;
  }

   createTimeBasedChart() {
     am4core.useTheme(am4themes_animated);
     const chart = am4core.create('chartdiv', am4charts.XYChart);
     chart.paddingRight = 20;
     chart.data = this.generateChartData();

     const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
     dateAxis.baseInterval = {
       timeUnit: 'minute',
       count: 1
     };
     dateAxis.tooltipDateFormat = 'HH:mm, d MMMM';

     const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
     valueAxis.tooltip.disabled = true;
     valueAxis.title.text = 'Unique visitors';

     const series = chart.series.push(new am4charts.LineSeries());
     series.dataFields.dateX = 'date';
     series.dataFields.valueY = 'visits';
     series.tooltipText = 'Visits: [bold]{valueY}[/]';
     series.fillOpacity = 0.3;

     chart.cursor = new am4charts.XYCursor();
     chart.cursor.lineY.opacity = 0;
     const scrollbarX = new am4charts.XYChartScrollbar();
     scrollbarX.series.push(series);
     chart.scrollbarX = scrollbarX;

     dateAxis.start = 0.8;
     dateAxis.keepSelection = true;
  }

   gen(): any {
    return {
      title: 'test',
      data: [
        {
          date: '2021-04-01T23:00:00Z',
          value: 24
        },
        {
          date: '2021-04-01T19:00:00Z',
          value: 5146
        },
        {
          date: '2021-04-01T15:00:00Z',
          value: 4986
        },
        {
          date: '2021-04-01T11:00:00Z',
          value: 4596
        },
        {
          date: '2021-04-01T07:00:00Z',
          value: 5198
        },
        {
          date: '2021-04-01T04:00:00Z',
          value: 5048
        },
        {
          date: '2021-03-31T23:00:00Z',
          value: 4538
        },
        {
          date: '2021-03-31T08:00:00Z',
          value: 4141
        },
        {
          date: '2021-03-30T20:00:00Z',
          value: 100
        },
        {
          date: '2021-03-29T21:00:00Z',
          value: 10040
        },
        {
          date: '2021-03-28T20:29:00Z',
          value: 1234
        },
        {
          date: '2021-03-27T23:29:00Z',
          value: 123
        },
        {
          date: '2021-03-26T22:00:00Z',
          value: 3213
        },
        {
          date: '2021-03-26T10:00:00Z',
          value: 4710
        },
      ]
    };
   }

  gen2(): any {
    return {
      title: 'test',
      data: [
        {
          date: Date.parse('2021-04-01T23:00:00Z'),
          value: 24
        },
        {
          date: Date.parse('2021-04-01T19:00:00Z'),
          value: 5146
        },
        {
          date: Date.parse('2021-04-01T15:00:00Z'),
          value: 4986
        },
        {
          date: Date.parse('2021-04-01T11:00:00Z'),
          value: 4596
        },
        {
          date: Date.parse('2021-04-01T07:00:00Z'),
          value: 5198
        },
        {
          date: Date.parse('2021-04-01T04:00:00Z'),
          value: 5048
        },
        {
          date: Date.parse('2021-03-31T23:00:00Z'),
          value: 4538
        },
        {
          date: Date.parse('2021-03-31T08:00:00Z'),
          value: 4141
        },
        {
          date: Date.parse('2021-03-30T20:00:00Z'),
          value: 100
        },
        {
          date: Date.parse('2021-03-29T21:00:00Z'),
          value: 10040
        },
        {
          date: Date.parse('2021-03-28T20:29:00Z'),
          value: 1234
        },
        {
          date: Date.parse('2021-03-27T23:29:00Z'),
          value: 123
        },
        {
          date: Date.parse('2021-03-26T22:00:00Z'),
          value: 3213
        },
        {
          date: Date.parse('2021-03-26T10:00:00Z'),
          value: 4710
        },
      ]
    };
  }

  gen3(): any {
    return {
      title: 'test',
      data: [
        {
          date: new Date('2021-04-01T23:00:00'),
          value: 24
        },
        {
          date:  new Date('2021-04-01T19:00:00'),
          value: 5146
        },
        {
          date:  new Date('2021-04-01T15:00:00'),
          value: 4986
        },
        {
          date:  new Date('2021-04-01T11:00:00'),
          value: 4596
        },
        {
          date:  new Date('2021-04-01T07:00:00'),
          value: 5198
        },
        {
          date:  new Date('2021-04-01T04:00:00'),
          value: 5048
        },
        {
          date:  new Date('2021-03-31T23:00:00'),
          value: 4538
        },
        {
          date:  new Date('2021-03-31T08:00:00'),
          value: 4141
        },
        {
          date:  new Date('2021-03-30T20:00:00'),
          value: 100
        },
        {
          date:  new Date('2021-03-29T21:00:00'),
          value: 10040
        },
        {
          date:  new Date('2021-03-28T20:29:00'),
          value: 1234
        },
        {
          date:  new Date('2021-03-27T23:29:00'),
          value: 123
        },
        {
          date:  new Date('2021-03-26T22:00:00'),
          value: 3213
        },
        {
          date: new Date('2021-03-26T10:00:00'),
          value: 4710
        },
      ]
    };
  }

  ngOnInit(): void {
     this.create();
     const context = this.gen3();
     this.createSparkLine(context);

     // this.createTimeBasedChart();
  }
}
