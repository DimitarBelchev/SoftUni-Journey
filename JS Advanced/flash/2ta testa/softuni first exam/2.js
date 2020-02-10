const ChristmasMovies = require('./02. Christmas Movies_Resources');
const expect = require('chai').expect;
const assert = require('chai').assert;
const beforeEach = require('mocha').beforeEach;

describe('2ra', function () {
    let obj;
    beforeEach(function () {
        obj = new ChristmasMovies;
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
        expect(obj.buyMovie('movie', ['person1', 'person2'])).to.equal('You just got movie to your collection in which person1, person2 are taking part!');
    });
    it('added', function () {
        obj.buyMovie('movie', ['person1', 'person2']);
        expect(obj.movieCollection[0].name).to.equal('movie');
    });
    it('only diff actors', function () {
        obj.buyMovie('movie', ['p1', 'p1', 'p2']);
        expect(obj.movieCollection[0].actors).to.deep.equal(['p1', 'p2']);
    });
    it('err', function () {
        obj.buyMovie('movie', ['person1', 'person2']);
        expect(() => obj.buyMovie('movie', ['person1', 'person2'])).to.throw(Error, 'You already own movie in your collection!');
    });
    it('no such movie', function () {
        expect(() => obj.discardMovie('Movie')).to.throw(Error, 'movie is not at your collection!');
    });
    it('removed movie', function () {
        obj.buyMovie('movie', ['p1', 'p2']);
        obj.watchMovie('movie');
        expect(obj.discardMovie('movie')).to.equal('You just threw away movie!');
    });
    it("remove collection movies", function () {
        obj.buyMovie('movie', ['p1', 'p2']);
        obj.watchMovie('movie');
        obj.discardMovie('movie');
        expect(obj.movieCollection).to.deep.equal([]);
    });
    it('remove watched movies', function () {
        obj.buyMovie('movie', ['p1', 'p2']);
        obj.watchMovie('movie');
        obj.discardMovie('movie');
        expect(obj.watched).to.deep.equal({});
    });
    it('no such movie', function () {
        expect(() => obj.watchMovie('movie')).to.throw(Error, 'No such movie in your collection!');
    });
    it('watched', function () {
        obj.buyMovie('movie', ['p1', 'p2']);
        obj.watchMovie('movie');
        expect(obj.watched['movie']).to.equal(1);
    });
    it('movie watched', function () {
        obj.buyMovie('movie', ['p1', 'p2']);
        obj.watchMovie('movie');
        obj.watchMovie('movie');
        expect(obj.watched['movie']).to.equal(2);
    });
    it('no such movies', function () {
        expect(() => obj.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
    });
    it('Fav movie', function () {
        obj.buyMovie('movie1', ['steve']);
        obj.buyMovie('movie2', ['mike']);
        obj.watchMovie('movie1');
        obj.watchMovie('movie2');
        obj.watchMovie('movie1');
        expect(obj.favouriteMovie()).to.equal('Your favourite movie is movie1 and you have watched it 2 times!');
    });
    it('no such movies', function () {
        expect(() => obj.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
    });
    it('actor most movies', function () {
        obj.buyMovie('movie1', ['steve']);
        obj.buyMovie('movie2', ['mike']);
        obj.buyMovie('movie3', ['steve']);
        expect(obj.mostStarredActor()).to.equal('The most starred actor is steve and starred in 2 movies!');
    });
});