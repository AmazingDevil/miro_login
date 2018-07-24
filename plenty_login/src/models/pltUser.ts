import {Injectable} from '@angular/core'
@Injectable()
export class pltUser {
    constructor(){}
    Username: string;
    Email: string;
    Name: string;
    CurrentLoginDate: Date;
    Token: string;
}
