export default class Item {
  constructor({
    id,
    deleted,
    type,
    by,
    time,
    text,
    dead,
    parent,
    poll,
    kids,
    url,
    score,
    title,
    parts,
    descendants
  }) {
    this.id = id;
    this.deleted = deleted;
    this.type = type;
    this.by = by;
    this.time = time;
    this.text = text;
    this.dead = dead;
    this.parent = parent;
    this.poll = poll;
    this.kids = kids;
    this.url = url;
    this.score = score;
    this.title = title;
    this.parts = parts;
    this.descendants = descendants;
  }
}
