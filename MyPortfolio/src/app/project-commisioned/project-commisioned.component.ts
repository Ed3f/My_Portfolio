import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-commisioned',
  templateUrl: './project-commisioned.component.html',
  styleUrls: ['./project-commisioned.component.css']
})
export class ProjectCommisionedComponent implements OnInit {
  title:String="";
  description:String= "";
  prize!: number;
  data: any; // Sostituisci 'any' con il tipo di dati che ti aspetti

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:9002/user/readAllWork').subscribe(
      (responseData) => {
        this.data = responseData;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  onDelete(title: string) {
    const url = "http://localhost:9002/user/deletework";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Aggiungi qui altri headers se necessario
      }),
      body: {
        title: title
      }
    };
  
    this.http.delete(url, options).subscribe(
      response => {
        console.log('Utente eliminato con successo', response);
        // Rimuovi l'utente dalla lista 'utenti' o aggiorna la UI come necessario
      },
      error => {
        console.error("Errore durante l'eliminazione dell'utente", error);
      }
    );
  }
  selectedProject: any = null;

  onSelectProject(project: any) {
    this.selectedProject = { ...project };
  }
  onUpdateProject(email: string): void {
    // Assicurati che 'selectedProject' sia definito e che i campi non siano nulli
    if (this.selectedProject && this.selectedProject.title && this.selectedProject.description && this.selectedProject.prize) {
      const body = {
        email: email,
        title: this.selectedProject.title,
        description: this.selectedProject.description,
        prize: this.selectedProject.prize
      };
  
      console.log(body);
  
      this.http.put('http://localhost:9002/user/updateWork', body)
        .subscribe(
          response => {
            console.log('Progetto aggiornato con successo', response);
          },
          error => {
            console.error("Errore durante l'aggiornamento del progetto", error);
          }
        );
    } else {
      console.error('Errore: selectedProject non è definito o alcuni campi sono nulli');
    }
  }
}
