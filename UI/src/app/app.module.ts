/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LNGComponent } from './LNG/LNG.component';

import { ProductionStateComponent } from './ProductionState/ProductionState.component';
import { GasFieldStateComponent } from './GasFieldState/GasFieldState.component';
import { LNGToPipelineStateComponent } from './LNGToPipelineState/LNGToPipelineState.component';

import { InitTestDataComponent } from './InitTestData/InitTestData.component';
import { ClearDataComponent } from './ClearData/ClearData.component';
import { ChangeStateComponent } from './ChangeState/ChangeState.component';
import { CreateComponent } from './Create/Create.component';
import { ToPipielineComponent } from './ToPipieline/ToPipieline.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LNGComponent,
    ProductionStateComponent,
    GasFieldStateComponent,
    LNGToPipelineStateComponent,
    InitTestDataComponent,
    ClearDataComponent,
    ChangeStateComponent,
    CreateComponent,
    ToPipielineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
