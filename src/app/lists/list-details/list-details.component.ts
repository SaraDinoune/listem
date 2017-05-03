import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { AddListItemDialogComponent } from '../add-list-item-dialog/add-list-item-dialog.component';
import {
  RenameListItemDialogComponent
} from '../rename-list-item-dialog/rename-list-item-dialog.component';
import { ListDetailsService } from './list-details.service';

@Component({
  selector: 'le-list-details',
  styleUrls: [ './list-details.component.scss' ],
  templateUrl: './list-details.component.html'
})
export class ListDetailsComponent implements OnInit {
  public listId = this.route.snapshot.params['id'];
  public list = this.listDetailsService.getList(this.listId);
  public loadingListItems = true;
  public listItems = [];

  constructor(
    private listDetailsService: ListDetailsService,
    private route: ActivatedRoute,
    private mdDialog: MdDialog
  ) { }

  public ngOnInit() {
    this.listDetailsService.getListItems(this.listId).subscribe((listItems) => {
      this.listItems = listItems;
      this.loadingListItems = false;
    });
  }

  public openAddListItemDialog() {
    this.mdDialog.open(AddListItemDialogComponent, {
      data: { listId: this.listId }
    });
  }

  public openRenameListItemDialog(itemId: string, itemName: string) {
    this.mdDialog.open(RenameListItemDialogComponent, {
      data: {
        listId: this.listId,
        itemId,
        itemName
      }
    });
  }

  public deleteListItem(itemId: string) {
    this.listDetailsService.deleteListItem(this.listId, itemId);
  }

  public checkItem(itemId: string) {
    this.listDetailsService.toggleItem(this.listId, itemId, true);
  }

  public uncheckItem(itemId: string) {
    this.listDetailsService.toggleItem(this.listId, itemId, false);
  }
}
