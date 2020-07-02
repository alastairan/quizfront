import  {Component} from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {

    question = {} as any;
    questions
    api = {} as any;

    constructor(private apis: ApiService, private route: ActivatedRoute) {
        this.api = apis;
    }

    ngOnInit() {
        var quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.getQuestions(quizId).subscribe(res => {
            
            this.questions = res
        })
    }

}