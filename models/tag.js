'use strict';

function Tag(name) {
  this.name = name;
}

Tag.prototype.id = () => name.hashCode();

Tag.prototype.url = () => '/catalog/tag/' + this.id;

Tag.prototype.html = () => '';

module.exports = Tag;
