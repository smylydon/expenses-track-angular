import { Component, Input } from '@angular/core';

import { LabelsEntity } from '../+state/labels/labels.models';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() labels: LabelsEntity[] | null;
  constructor() {}

  trackBy(index: number, item: LabelsEntity) {
    return item._id;
  }
}
