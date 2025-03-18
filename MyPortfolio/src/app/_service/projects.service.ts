import { Injectable } from '@angular/core';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[]=[
    {id: 0, name: 'Federico Portfolio', summary: 'A my Portfolio where i show my project and my thesis', description: '',projectlink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT],pictures:["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"]},
    {id: 1, name: 'Python SQL Detection', summary: 'A python tool for detection SQL injection', description: '',projectlink: 'https://github.com/',tags: [Tag.PYTHON],pictures:["../../assets/backdoor2.jpg","../../assets/image2.png","../../assets/image3.png"]},
    {id: 2, name: 'Developers', summary: 'A pyhton RestFull app devolped whit flask', description: '',projectlink: 'https://github.com/',tags: [Tag.PYTHON],pictures:["../../assets/image1.png","../../assets/backdoor2.jpg","../../assets/image3.png"]},
    {id: 3, name: 'Pokemon Remake', summary: 'A pokemon fire red remake write in Java', description: '',projectlink: 'https://github.com/',tags: [Tag.JAVA],pictures:["../../assets/pokemon remake1.jpg","../../assets/pokemon remake2.jpg","../../assets/image3.png"]}, 
    {id: 4, name: 'SMSBackdoor', summary: 'A Kotlin app for android where the scope is the capture action of the victim', description: '',projectlink: 'https://github.com/',tags: [Tag.KOTLIN],pictures:["../../assets/backdoor1.jpg","../../assets/image2.png","../../assets/image3.png"]},
    {id: 5, name: 'SMSCommander', summary: 'A trojan app for android where the scope is to execution command to recive of the sms message', description: '',projectlink: 'https://github.com/',tags: [Tag.KOTLIN],pictures:["../../assets/SmsCommander1.jpg","../../assets/SmsCommander.png","../../assets/SmsCommander3.png"]},
    {id: 6, name: 'Trannoi', summary: 'Is a simple remake of popular game Among Us written in C without graphic interface', description: '',projectlink: 'https://github.com/',tags: [Tag.C],pictures:["../../assets/Trannoi.jpg","../../assets/image2.png","../../assets/image3.png"]}
  ];
  
  constructor() { }

  GetProjects(){
    return this.projects
  }
  GetProjectsByID( id: number) : Project{
    let project = this.projects.find(project => project.id === id);
    
    if (project == undefined){
      throw new TypeError('There is not project that matches the id :' + id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true; 
      
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
// la differenza principale da questo servizio generato e quelli già visti è che non è legato a nessun codice 
// CSS e HTML e che è stato disegnato come codice iniettabile  