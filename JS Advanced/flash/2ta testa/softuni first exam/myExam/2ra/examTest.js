const Christmasmovies = require('./02. Christmas movies_Resources');
const expect = require('chai').expect;
const assert = require('chai').assert;
const beforeEach = require('mocha').beforeEach;

describe('2ra', function () {
    let obj;
    beforeEach(function () {
        obj = new Christmasmovies;
    });
    it('empty arr', function () {
        expect(obj.movieCollection).to.deep.equal([]);
    });
    it('empty obj', function () {
        expect(obj.watched).to.deep.equal({});
    });
    it('empty act arr', function () {
        expect(obj.actors).to.deep.equal([]);
    });
    it('get movie', function () {
        expect(obj.buymovie('movie', ['Person1', 'Person2'])).to.equal('You just got movie to your collection in which Person1, Person2 are taking part!');
    });
    it('added', function () {
        obj.buymovie('movie', ['Person1', 'Person2']);
        expect(obj.movieCollection[0].name).to.equal('movie');
    });
    it('only diff actors', function () {
        obj.buymovie('movie', ['P1', 'P1', 'P2']);
        expect(obj.movieCollection[0].actors).to.deep.equal(['P1', 'P2']);
    });
    it('err', function () {
        obj.buymovie('movie', ['Person1', 'Person2']);
        expect(() => obj.buymovie('movie', ['Person1', 'Person2'])).to.throw(Error, 'You already own movie in your collection!');
    });
    it('no such movie', function () {
        expect(() => obj.discardmovie('movie')).to.throw(Error, 'movie is not at your collection!');
    });
    it('removed movie', function () {
        obj.buymovie('movie', ['P1', 'P2']);
        obj.watchmovie('movie');
        expect(obj.discardmovie('movie')).to.equal('You just threw away movie!');
    });
    it("remove collection movies", function () {
        obj.buymovie('movie', ['P1', 'P2']);
        obj.watchmovie('movie');
        obj.discardmovie('movie');
        expect(obj.movieCollection).to.deep.equal([]);
    });
    it('remove watched movies', function () {
        obj.buymovie('movie', ['P1', 'P2']);
        obj.watchmovie('movie');
        obj.discardmovie('movie');
        expect(obj.watched).to.deep.equal({});
    });
    it('no such movie', function () {
        expect(() => obj.watchmovie('movie')).to.throw(Error, 'No such movie in your collection!');
    });
    it('watched', function () {
        obj.buymovie('movie', ['P1', 'P2']);
        obj.watchmovie('movie');
        expect(obj.watched['movie']).to.equal(1);
    });
    it('movie watched', function () {
        obj.buymovie('movie', ['P1', 'P2']);
        obj.watchmovie('movie');
        obj.watchmovie('movie');
        expect(obj.watched['movie']).to.equal(2);
    });
    it('no such movies', function () {
        expect(() => obj.favouritemovie()).to.throw(Error, 'You have not watched a movie yet this year!');
    });
    it('Fav movie', function () {
        obj.buymovie('movie1', ['steve']);
        obj.buymovie('movie2', ['mike']);
        obj.watchmovie('movie1');
        obj.watchmovie('movie2');
        obj.watchmovie('movie1');
        expect(obj.favouritemovie()).to.equal('Your favourite movie is movie1 and you have watched it 2 times!');
    });
    it('no such movies', function () {
        expect(() => obj.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
    });
    it('actor most movies', function () {
        obj.buymovie('movie1', ['steve']);
        obj.buymovie('movie2', ['mike']);
        obj.buymovie('movie3', ['steve']);
        expect(obj.mostStarredActor()).to.equal('The most starred actor is steve and starred in 2 movies!');
    });
});