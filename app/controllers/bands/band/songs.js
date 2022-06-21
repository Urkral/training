import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes

export default class BandsBandSongsController extends Controller {
  @service store;
  @service router;

  @tracked song = { title: '', rating: '' };

  @tracked isAddingSong = false;

  @action
  addingSong() {
    this.isAddingSong = true;
  }

  @action
  async addSong(e) {
    e.preventDefault();
    console.log(this.song);
    let record = await this.store.createRecord('song', {
      title: this.song.title,
      rating: this.song.rating,
      band: this.model,
    });
    await record.save(); //On vient d'enregistrer au backend notre nouvelle entrée
    this.song = {
      title: '',
      rating: '',
    };
  }

  @action
  cancelSong() {
    this.song = {
      title: '',
      rating: '',
    };
    this.isAddingSong = false;
  }
  @action
  setMaxRating(song) {
    song.set('rating', 10);
    song.save();
  }
}
