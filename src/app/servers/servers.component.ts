import { Component, OnInit } from '@angular/core';

import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  servers = [
    'Testserver',
    'TestServer 2',
    'TestServer 3'
  ];

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      },
      2000
    )
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!  Name is ' + this.serverName;
    this.serverCreated = true;

    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
