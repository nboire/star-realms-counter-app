import { NgModule } from '@angular/core';

import {MatButtonModule, MatDialogModule, MatGridListModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatDialogModule, MatGridListModule, MatCardModule],
})
export class CustomMaterialModule { }
