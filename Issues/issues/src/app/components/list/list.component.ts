import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { IssueService } from '../../issue.service'
import { Issue } from '../../issue.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  issues: Issue[] = [];
  displayedColumns = ['title','description', 'responsible', 'severity', 'status', 'actions']

  ngOnInit() {
    this.fetchIssues()
  }

  fetchIssues(){
    this.issueService.getIssues().subscribe((issues: Issue[]) => {
      console.log(issues)
      this.issues = issues
    })
  }

  editIssue(id){
    this.router.navigate([`/edit/${id}`])
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
