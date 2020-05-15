import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSuccessComponent } from './components/buttons/button-success/button-success.component';
import { ButtonWarningComponent } from './components/buttons/button-warning/button-warning.component';
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ExampleDirective } from './directives/example.directive';
import { Example2Directive } from './directives/example-2.directive';
import { PipeExample1Pipe } from './pipes/pipe-example-1.pipe';
import { PipeExample2Pipe } from './pipes/pipe-example-2.pipe';



@NgModule({
  declarations: [ButtonSuccessComponent, ButtonWarningComponent, ButtonPrimaryComponent, FooterComponent,
     HeaderComponent, ExampleDirective, Example2Directive, PipeExample1Pipe, PipeExample2Pipe],
  imports: [
    CommonModule
  ],
  exports: [
    // AppNavbarComponent
  ]
})
export class SharedModule { }
