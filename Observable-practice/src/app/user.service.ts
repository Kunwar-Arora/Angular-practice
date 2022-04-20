import { Subject } from "rxjs";

export class UserService{
    activateEmitter = new Subject<boolean>();
}