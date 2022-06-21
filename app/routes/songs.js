import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsRoute extends Route {
  @service store;

  model() {
    // Pour return quelque chose dans ce genre de fichier, il faut toujours faire un this.model()
    return this.store.findAll('song', { include: 'band' });
  }
}
