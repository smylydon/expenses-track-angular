import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LabelsEntity } from '../+state/labels/labels.models';
import { getAllLabels } from '../+state/labels/labels.selectors';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public items$: Observable<LabelsEntity[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(getAllLabels);
  }

  trackBy(index: number, item: LabelsEntity) {
    return item._id;
  }
}
