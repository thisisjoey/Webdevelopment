import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})


export class ServerComponent {
    serverStatus: string = "Running";
    serverId: number = 22;
    serverInfo(): string {
        return this.serverStatus;
    }
}