'use strict';

function Author(firstName, lastName, dateOfBirth, dateOfDeath) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.dateOfDeath = dateOfDeath;
}

Author.prototype.id = () => this.firstName.hashCode() +
  this.lastName.hashCode() +
  this.dateOfBirth.hashCode() +
  this.dateOfDeath.hashCode();

Author.prototype.name = () => this.lastName + ', ' + this.firstName;

Author.prototype.lifespan = () =>
  this.dateOfDeath.getYear() - this.dateOfBirth.getYear();

Author.prototype.url = () => '/catalog/author/' + this.id;

Author.prototype.html = data => {
  data = data.replace('{%author.name%}', this.name);
  data = data.replace('{%author.firstName%}', this.firstName);
  data = data.replace('{%author.lastName%}', this.lastName);
  data = data.replace('{%author.dateOfBirth%}', this.dateOfBirthFormatted);
  data = data.replace('{%author.dateOfDeath%}', this.dateOfDeathFormatted);
  data = data.replace('{%author.lifespan%}', this.lifespanFormatted);
  return data;
};

Author.prototype.dateOfBirthFormatted = () =>
  this.dateOfBirth.getUTCFullYear + '-' +
  this.dateOfBirth.GetUTCMonth + '-' +
  this.dateOfBirth.getUTCDate;

Author.prototype.dateOfDeathFormatted = () =>
  this.dateOfDeath.getUTCFullYear + '-' +
  this.dateOfDeath.GetUTCMonth + '-' +
  this.dateOfDeath.getUTCDate;

Author.prototype.lifespanFormatted = () => {
  const birth = this.dateOfBirth ? this.dateOfBirthFormatted : '';
  const death = this.dateOfDeath ? this.dateOfDeathFormatted : '';
  return birth + ' - ' + death;
};

module.exports = Author;
