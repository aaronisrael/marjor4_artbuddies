
//import uuid from 'uuid';

export default class Artbuddy {

  userId = ``
  created = ``
  modified = ``
  _id = ``
  isActive = ``


  constructor({
    _id,
    created,
    modified,
    userId,
    isActive
  }) {

    this._id = _id;
    this.created = created;
    this.modified = modified;
    this.userId = userId;
    this.isActive = isActive;

  }

}
