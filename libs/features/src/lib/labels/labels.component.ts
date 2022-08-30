import { Component, Input } from '@angular/core';
import { LabelsEntity } from '../+state/labels/labels.models';
import { HelperService, SubTotal } from '../helper.service';

@Component({
  selector: 'nx-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
})
export class LabelsComponent {
  @Input('labels') set setLabels(labels: LabelsEntity[] | null) {
    labels = labels ?? [];
    this.subtotals = this.helperService.getLabels(labels) as SubTotal[];
  }
  public subtotals: SubTotal[];
  public color = '#f9c74f';
  constructor(private helperService: HelperService) {}

  trackBy(index: number, subtotal: SubTotal): string {
    return subtotal.type;
  }
}
