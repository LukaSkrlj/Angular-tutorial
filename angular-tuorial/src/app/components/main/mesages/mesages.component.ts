import { MessageService } from '../../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesages',
  templateUrl: './mesages.component.html',
  styleUrls: ['./mesages.component.scss']
})
export class MesagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
