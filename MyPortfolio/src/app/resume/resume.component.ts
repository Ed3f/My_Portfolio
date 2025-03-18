import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {


  isPubblicationThesisOpen: boolean = false;
  isEducationOpen: boolean =  false;
  isCertificationOpen: boolean = false;
  isSkilsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Federico Rossetti - Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/FedericoCVE.pdf');
    link.setAttribute('download', 'FedericoCVE.pdf');
    link.click();
    link.remove();
  }
}
