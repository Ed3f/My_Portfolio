import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_service/projects.service';
import { Project } from '../_modules/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//OnInit è un hook del ciclo di vita in Angular che viene 
//chiamato dopo che Angular ha inizializzato tutte le proprietà legate ai dati di una direttiva.
export class HomeComponent implements OnInit {

  featuredProject = {} as Project
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Federico Rossetti - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectsByID(5);
  }
}
