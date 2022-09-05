import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { LabelsEntity } from '../+state/labels/labels.models';

export interface SubTotal {
  type: string;
  total: number;
  color?: string;
  percent?: number;
}

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getSum(transaction: LabelsEntity[], type?: string): number[] | SubTotal[] {
    return <number[] | SubTotal[]>_(transaction)
      .groupBy('type')
      .map((obj, key): SubTotal | number => {
        if (!type) return _.sumBy(obj, 'amount');
        return <SubTotal>{
          type: key,
          color: obj[0].color,
          total: _.sumBy(obj, 'amount'),
        };
      })
      .value();
  }

  getLabels(transaction: LabelsEntity[]): SubTotal[] {
    const amountSum: SubTotal[] = <SubTotal[]>this.getSum(transaction, 'type');
    const total = _.sum(this.getSum(transaction));
    return _(amountSum)
      .map((obj: SubTotal): SubTotal => {
        const percent = obj.total / total;
        return <SubTotal>{
          color: obj.color,
          total: obj.total,
          type: obj.type,
          percent: percent,
        };
      })
      .value();
  }

  chartData(transaction: LabelsEntity[]): any {
    const backgroundColor = _(transaction)
      .map((t: LabelsEntity) => t.color)
      .uniq()
      .value();
    const dataValue = this.getSum(transaction);

    const confg = {
      data: {
        datasets: [
          {
            label: 'Expenses Dataset',
            data: dataValue,
            backgroundColor,
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10,
          },
        ],
      },
      options: {
        cutout: 115,
        type: 'doughnut',
      },
    };

    return confg;
  }

  getTotal(transaction: LabelsEntity[]): number {
    return _.sum(this.getSum(transaction));
  }
}
