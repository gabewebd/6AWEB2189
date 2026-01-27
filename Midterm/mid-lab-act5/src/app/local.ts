import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalUser } from './local.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  // Hardcoded data matching your screenshot
  private localUsers: LocalUser[] = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', website: 'hildegard.org' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', website: 'anastasia.net' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', website: 'ramiro.info' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', website: 'kale.biz' },
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', website: 'demarco.info' },
    { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', website: 'ola.org' }
  ];

  getUsers(): Observable<LocalUser[]> {
    return of(this.localUsers);
  }
}