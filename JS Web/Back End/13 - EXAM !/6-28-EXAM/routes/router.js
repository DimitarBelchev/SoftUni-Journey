const user = require('../handlers/user');
const theater = require('../handlers/theater');
const authHandler = require('../utils/authHandler');

module.exports = (app) => {
    app.get('/',
        authHandler.userStatus,
        theater.loadHomePage
    );

    app.get('/theater/create',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.loadCreateTheaterPage
    );
    app.post('/theater/create',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.createTheaterHandler
    )
    app.get('/theater/:id',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.loadTheaterDetails
    )
    app.get('/theater/like/:id',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.likeUser
    )
    app.get('/theater/delete/:id',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.deleteTheater
    )
    app.get('/edit/:id',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.loadEditPage
    )
    app.post('/edit/:id',
        authHandler.userAutorization,
        authHandler.userStatus,
        theater.editTheater
    )
    app.get('/login',
        authHandler.guestAutorization,
        authHandler.userStatus,
        user.loadLoginPage
    );
    app.get('/register',
        authHandler.guestAutorization,
        authHandler.userStatus,
        user.loadRegisterPage
    );
    app.post('/login',
        authHandler.guestAutorization,
        authHandler.userStatus,
        user.loginHandler
    );
    app.post('/register',
        authHandler.guestAutorization,
        authHandler.userStatus,
        user.registerHandler
    );
    app.get('/logout',
        user.logoutHandler
    )
}
