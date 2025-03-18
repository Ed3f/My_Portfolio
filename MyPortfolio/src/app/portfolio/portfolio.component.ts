import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';
import { ProjectsService } from '../_service/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
//OnInit viene chiamato dopo che l'oggetto è stato inizializzato 
export class PortfolioComponent implements OnInit {

  // lo inizializiamo come oggetto vuoto di tipo Project Array
  projects = {} as Project[];

  isCollapsed: boolean = true;
  filtering: boolean = false; 

  typescript: boolean = false;
  python: boolean= false;
  c: boolean= false;
  java: boolean= false;
  javascript: boolean = false;

  angular: boolean = false; 
  kotlin: boolean = false;
 constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Federico Rossetti - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags: Tag[] = [];
    
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.c){
      filterTags.push(Tag.C);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.kotlin){
      filterTags.push(Tag.KOTLIN);
    }

    if(this.python || this.angular || this.c || this.java || this.javascript || this.kotlin || this.typescript){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags)
  }
  ResetFilters(){
    this.angular = false;
    this.c = false;
    this.kotlin = false;
    this.java = false;
    this.javascript = false;
    this.python = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
