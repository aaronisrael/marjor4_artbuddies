
export default class Artbuddy {

  userId = ``
  created = ``
  modified = ``
  _id = ``
  isActive = ``
  rating = ``


  constructor({
    _id,
    created,
    modified,
    userId,
    rating,
    isActive
  }) {

    this._id = _id;
    this.created = created;
    this.modified = modified;
    this.userId = userId;
    this.rating = rating;
    this.isActive = isActive;

  }

}
