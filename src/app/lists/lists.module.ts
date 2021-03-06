import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListsComponent } from './lists.component';
import { TrashComponent } from './trash/trash.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { AddListDialogComponent } from './add-list-dialog/add-list-dialog.component';
import { RenameListDialogComponent } from './rename-list-dialog/rename-list-dialog.component';
import { ShareListDialogComponent } from './share-list-dialog/share-list-dialog.component';
import { ListOwnersDialogComponent } from './list-owners-dialog/list-owners-dialog.component';
import { AddListItemDialogComponent } from './add-list-item-dialog/add-list-item-dialog.component';
import {
  EditListItemDialogComponent
} from './edit-list-item-dialog/edit-list-item-dialog.component';
import {
  DeleteListItemDialogComponent
} from './delete-list-item-dialog/delete-list-item-dialog.component';
import { ListService } from './list.service';
import { ListDetailsService } from './list-details/list-details.service';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    ListsComponent,
    TrashComponent,
    ListDetailsComponent,
    AddListDialogComponent,
    RenameListDialogComponent,
    ShareListDialogComponent,
    ListOwnersDialogComponent,
    AddListItemDialogComponent,
    EditListItemDialogComponent,
    DeleteListItemDialogComponent
  ],
  entryComponents: [
    AddListDialogComponent,
    RenameListDialogComponent,
    ShareListDialogComponent,
    ListOwnersDialogComponent,
    AddListItemDialogComponent,
    EditListItemDialogComponent,
    DeleteListItemDialogComponent
  ],
  exports: [ ],
  providers: [
    ListService,
    ListDetailsService
  ]
})
export class ListsModule { }
