let SkiResort = require("./solution");
let expect = require("chai").expect;
let assert = require("chai").assert;
describe('SkiResort', function () {
    let obj;
    this.beforeEach(function () {
        obj = new SkiResort('SoftUni', 0, [])
    });
    describe("Constructor", function () {
        it('name is a string', () => {
            
            expect(obj.name).to.equal("SoftUni");
        });
        it('voters => 0', () => {

            expect(obj.voters).to.equal(0);
        });
        it('hotel => empty', () => {
            expect(obj.hotels).to.be.an('array').that.is.empty;
        });
        describe("bestHotel()", function () {});
        describe("build", function (){
            it('build 1', () => {
                obj=obj.build("a",1)
                expect(obj.name).to.equal("SoftUni");
            });
            it('voters => 0', () => {

                expect(obj.voters).to.equal(0);
            });
            it('hotel => empty', () => {
                expect(obj.hotels).to.be.an('array').that.is.empty;
            });

        });
    })
});

