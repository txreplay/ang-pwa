import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatService} from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService) { }

  private initForm = () => {
    this.form = this.formBuilder.group({
      message: ['aaa', Validators.required],
    });
  };

  public sendMessage = () => {
    this.chatService.sendMessage(this.form.value.message)
      .then(apiRes => console.log(apiRes))
      .catch(apiResErr => console.log(apiResErr));
  };

  ngOnInit() {
    this.initForm();
  }
}
