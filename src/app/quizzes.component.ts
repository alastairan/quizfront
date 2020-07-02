import  {Component} from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})

export class QuizzesComponent {

    quiz = {} as any;
    quizzes
    api = {} as any;

    constructor(private apis: ApiService) {
        this.api = apis;
    }

    ngOnInit() {
        this.apis.getQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
}