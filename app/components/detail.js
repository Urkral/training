import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DetailComponent extends Component {
  @tracked isEdit = true;
  @action
  isEditDetail() {
    this.isEdit = !this.isEdit;
  }
  @action
  saveDetail() {
    this.args.model.set('description', this.args.description);
    this.args.model.save();
    this.isEdit = !this.isEdit;
  }
}
