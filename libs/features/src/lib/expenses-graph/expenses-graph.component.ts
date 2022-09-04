import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { LabelsEntity } from '../+state/labels/labels.models';
import { HelperService } from '../services/helper.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'nx-expenses-graph',
  templateUrl: './expenses-graph.component.html',
  styleUrls: ['./expenses-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesGraphComponent implements OnChanges {
  @Input() labels: LabelsEntity[] | null;
  public total = 0;
  public dataInfo: any;
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private helperService: HelperService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const simpleChange: SimpleChange = changes['labels'];
    const labels: LabelsEntity[] = simpleChange?.currentValue || [];
    this.total = labels ? this.helperService.getTotal(labels) : 0;
    this.dataInfo = labels ? this.helperService.chartData(labels) : null;
  }
}
