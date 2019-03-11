// import {Model, fk, oneToOne, many,ORM,attr} from "redux-orm";
import {fk,many,oneToOne} from 'redux-orm'
import {orm,createReducer} from '../index'
import BaseModel from '../BaseModel'
import {attr} from '../Attr'


class Movie extends BaseModel {
  toString() {
    return `Movie: ${this.title}`;
  }
  normalize() { // get the object from ReduxORM, for redux store use
    return Object.assign({}, this.ref, { // this.ref gets all fields of this object
      comments: this.comments.toModelArray()
    });
  }
}
Movie.modelName = 'Movie';

Movie.fields = {
  id: attr(),
  createdDatetime: attr(),
  modifiedDatetime: attr(),
  title: attr(),
  content: attr(),
  imagerl: attr(),
};

class Person extends BaseModel{

}

Person.modelName = 'Person';
Person.fields = {
  id: attr(),
  name: attr(),
  movie:oneToOne("Movie"),
  age:attr()
}

class MovieComment extends BaseModel {
  toString() {
    return `Comment: ${this.cotent}`;
  }
  normalize() {
    return Object.assign({}, this.ref, {
      movie: this.movie.ref
    });
  }
}

MovieComment.modelName = 'MovieComment';
MovieComment.fields = {
  id: attr(),
  createdDatetime: attr({get:function(val){
    return "2019-01-10"
  }}),
  modifiedDatetime: attr(),
  comment: attr(),
  movie: fk('Movie', 'comments')
  // movie: attr()
};

  // const orm = new ORM({
  //   // createDatabase:createDatabase
  // })
  // const emptyDBState = orm.getEmptyState()

  orm.register(Movie,MovieComment,Person)

  let session = orm.session({
    Movie:{
      items:[],
      itemsById:{},
      meta:{}
    },
    MovieComment:{
      items:[],
      itemsById:{},
      meta:{}
    },
    Person:{
      items:[],
      itemsById:{},
      meta:{}
    }
  })


describe('orm 示例', () => {
  const Movie = session.Movie
  const Comment = session.MovieComment
  const Person = session.Person
  it('fk', (done) => {
    Person.create({
      id:"1",
      name:"jackson",
      movie:"1",
      age:"30"
    })
    let movie1=Movie.create({
      id:"1",
      // author:"1",
      createDatetime:new Date().getTime(),
      title:"abc",
      content:"abc descript"
    })

    let comment= Comment.create({
      id:"1",
      createdDatetime: new Date().getTime(),
      modifiedDatetime: new Date().getTime(),
      comment: "commect form movie abc",
      movie:"1"
    })

    Comment.create({
      id:"2",
      createdDatetime: new Date().getTime(),
      modifiedDatetime: new Date().getTime(),
      comment: "commect form movie abc2",
      movie:"1"
    })

    console.log(comment)
    // console.log(movie1.author)
    console.log(movie1.comments.all().toModelArray())
    console.log(movie1.normalize())
    done()
  })

  it('oneToOne',(done)=>{
    console.log(Movie.withId("1").person.name)
    done()
  })

})
