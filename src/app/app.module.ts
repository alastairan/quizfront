import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './question.component'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import {QuestionsComponent} from './questions.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent} from './register.component';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';
import {LoginComponent} from './login.component';
import {PlayComponent } from './play.component';
import {PlayQuizComponent } from './playQuiz.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {FinishedComponent} from './finished.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizid', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent }
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
