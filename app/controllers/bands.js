import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { empty } from '@ember/object/computed';

export default class BandsController extends Controller {
  @service store;
  @service router;

  @empty('band.name') isAddButtonDisabled;
  //   get isAddButtonDisabled() {
  //     return !this.band.name.length;
  //   }

  @tracked isAddingBand = false;
  @tracked band = { name: '' };

  @action
  addingBand() {
    this.isAddingBand = true;
  }

  @action
  async addBand(e) {
    e.preventDefault();
    console.log(this.band);
    let record = await this.store.createRecord('band', this.band);
    await record.save(); //On vient d'enregistrer au backend notre nouvelle entrée
    this.band = {
      name: '',
    };

    this.router.transitionTo('bands.band.songs', record.id); //On est redirigé vers le groupe créé
    // console.log(record.model);
  }

  @action
  cancelBand() {
    this.band = {
      name: '',
    };
    this.isAddingBand = false;
  }
}
