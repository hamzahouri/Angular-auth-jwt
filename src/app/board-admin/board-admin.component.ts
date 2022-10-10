import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  //the variable below is aded recently
  selectedFiles? : FileList;
  currentFile?: File;
  progress =0;
  message= '';
  fileInfo?: Observable<any>;
  showFiles : boolean = false;
  btnTitle ='';
  name = '';
  showBar : boolean=false;
  fileReturned : File[] = [];
  classCondi : boolean=false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }



  // new code is added recently
  showDiv() {
    this.showFiles = !this.showFiles;
      // something mising here
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    // something missing here
  }


  searchFile(info : String): File [] {
    console.log(`you enter this name : ${info}`)
    //this.uploadService.searchFile(info).subscribe(data => this.fileReturned=data);
    console.log('file returned...', this.fileReturned);
    console.log('the return type is ...', typeof(this.fileReturned))
    return this.fileReturned;
    
  }
  
}
