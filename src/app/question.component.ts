import  {Component, ɵEMPTY_ARRAY} from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {

    question = {} as any;
    quizId
    api = {} as any;

    constructor(private apis: ApiService, private route: ActivatedRoute) {
        this.api = apis;
    }

    ngOnInit(){
        this.quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.questionSelected.subscribe(question => this.question = question);
        console.log(this.question);
    }

    post( question ) {
        question.quizId = this.quizId
        this.api.postQuestion(question)
    }
}