import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { ContentComponent } from './content/content.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentPipe } from './content/content.pipe';
import { FetchUrlService } from './service/fetch-url.service';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        ContentPipe,
    ],
    providers: [AppService,FetchUrlService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientInMemoryWebApiModule,
        // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, { dataEncapsulation: false }
        //   )
    ]
})
export class AppModule { }
