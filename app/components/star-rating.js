import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StarRatingComponent extends Component {
  maxRating = 10;

  get stars() {
    console.log(this.args.rating); //Le this.args nous permet de récupérer les arguments passé au components
    const stars = [];
    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.args.rating >= i });
    }
    return stars;
  }

  @action
  setRating(rating) {
    if (this.args.onSetRating) {
      this.args.onSetRating(rating, this.args.song);
    } else {
      this.args.song.set('rating', rating);
      this.args.song.save();
    }
    // this.args.song.set('rating', rating);
    // this.args.song.save();
  }
}
