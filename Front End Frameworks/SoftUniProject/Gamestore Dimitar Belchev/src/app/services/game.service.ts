import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from '../../app/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private db: AngularFireDatabase) { }

  create(game) {
    return this.db.list('/games').push(game);
  }

  update(id, game) {
    return this.db.object('/games/' + id).update(game);
  }

  getAll(): Observable<Game[]> {
    return this.db.list<Game>('/games')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        )
      );
  }

  get(gameId): Observable<Game> {
    return this.db.object<Game>('/games/' + gameId)
      .valueChanges()
      .pipe(take(1));
  }

  delete(gameID) {
    return this.db.object('/games/' + gameID).remove();
  }
}
