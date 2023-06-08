import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ContentComponent } from './content/content.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from "./test/test.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './content/search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        TestComponent,
        SearchPipe
    ],
    providers: [AppService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }
