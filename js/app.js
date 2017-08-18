// Create a module musingsApp
// Create a service musings containing an array of hardcoded data
// The elements of the array should be objects with properties title, content, and author
// Give the service a method all that returns all of the data in the service
// Give the service a method create that takes an object and adds it to the end of the array
// Give the service a method remove that takes an index and deletes the musing at that index of the array
// Create a controller MusingsController and inject the musings service as a dependency
// Add a property musings to the controller that holds the return of musings.all()
// Add a property newMusing to the controller is an object with properties title, content, and author with initial values of ''(define this on the controller explicitly rather than declaring it by way of ng-model directive)
// Add a method createMusing to the controller that calls musings.create with the newMusing value of the controller
// Add a method removeMusing to the controller that takes an index and calls musings.remove with that index

angular
.module('musingsApp', [

])
.factory('musings', [
  musingsService
])
.controller('musingsController', [
  'musings',
  MusingsControllerFn
])



function MusingsControllerFn(musings) {
  this.musings = musings.all()
  this.newMusing = {title: '', content: '', author: ''}
  this.createMusing = function() {
    musings.create(this.newMusing.title, this.newMusing.content, this.newMusing.author)
  }
  this.removeMusing = function(index) {
    musings.remove(index)
  }
}


function musingsService() {
  const muse_data = [
    {title: 'Title1', content: 'Content1', author: 'Author1'},
    {title: 'Title2', content: 'Content2', author: 'Author2'},
    {title: 'Title3', content: 'Content3', author: 'Author3'},
    {title: 'Title4', content: 'Content4', author: 'Author4'},
    {title: 'Title5', content: 'Content5', author: 'Author5'}
  ]

  return {
    all: all,
    create: create,
    remove: remove
  }

  function all() {
    return muse_data
  }

  function create(title, content, author) {
    muse_data.push({title: title, content: content, author: author})
  }

  function remove(index) {
    muse_data.splice(index, 1)
  }
}
