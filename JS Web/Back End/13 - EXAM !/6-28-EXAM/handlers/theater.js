const Theater = require('../models/Theater');
const User = require('../models/User');


async function loadHomePage(req, res) {
    const isLoggedIn = req.isLoggedIn;
    const theaters = await Theater.find().lean();
    let publicTheaters = theaters.filter((theater) => theater.isPublic === true);
    if (isLoggedIn) {
        publicTheaters.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return res.render('home-pages/user-home.hbs', {
            isLoggedIn,
            ...req.user,
            theaters: publicTheaters
        })
    }
    else {

        publicTheaters.sort((a, b) => {
            return (a.usersLiked.length < b.usersLiked.length) ? 1 : -1
        });
        const topThree = publicTheaters.slice(0, 3);
        res.render('home-pages/guest-home.hbs', {
            isLoggedIn,
            theaters: topThree
        })
    }
}



function loadCreateTheaterPage(req, res) {
    res.render('theater-pages/create-theater.hbs', {
        isLoggedIn: req.isLoggedIn,
        ...req.user
    })
}



async function createTheaterHandler(req, res) {
    const { title, description, imageUrl, theaterStatus } = req.body;
    if (!title) {
        return invalidData('Title can not be empty!');
    }
    else if (!description) {
        return invalidData('Description can not be empty!');
    }
    else if (!imageUrl) {
        return invalidData('Image Url can not be empty!');
    }
    else if (description.length > 50) {
        return invalidData('Description can not be more than 50 characters!');
    }
    const isPublic = theaterStatus === 'on' ? true : false;
    const alreadyCreated = await Theater.findOne({ title });
    if (alreadyCreated) {
        return invalidData(`${title} is already created!`);
    }
    const createdAt = new Date().toString().slice(4, 21);
    const creator = req.user._id;
    const theater = new Theater({
        title,
        description,
        imageUrl,
        isPublic,
        createdAt,
        creator
    });
    const status = await theater.save();
    if (status) {
        console.log('New theater created successfully');
    }
    return res.redirect('/');

    function invalidData(errMessage) {
        return res.render('theater-pages/create-theater.hbs', {
            isLoggedIn: req.isLoggedIn,
            ...req.user,
            errMessage,
            title,
            description,
            imageUrl
        })
    }
}



async function loadTheaterDetails(req, res) {
    const userId = req.user._id;
    const { id } = req.params;
    const theater = await Theater.findById(id).lean();
    const creator = theater.creator.toString();
    const likedUsers = theater.usersLiked.toString();
    let isCreator = false;
    if (creator === userId) {
        isCreator = true;
    }
    let isLiked = false;
    if (likedUsers.includes(userId)) {
        isLiked = true;
    }

    res.render('theater-pages/theater-details.hbs', {
        isLoggedIn: req.isLoggedIn,
        ...req.user,
        theater,
        isCreator,
        isLiked
    })
}



async function likeUser(req, res) {
    const userId = req.user._id;
    const { id } = req.params;
    const theater = await Theater.findById(id).lean();
    const likedUsers = theater.usersLiked.toString();
    if (likedUsers.includes(userId)) {
        return res.redirect(`/theater/${id}`);
    }
    await Theater.update({ _id: id }, { $push: { usersLiked: userId } });
    await User.update({ _id: userId }, { $push: { likedTheaters: id } });

    res.redirect(`/theater/${id}`);
}



async function deleteTheater(req, res) {
    const { id } = req.params;
    await Theater.deleteOne({ _id: id });
    console.log("Successful deletion");
    res.redirect('/');
}



async function loadEditPage(req, res) {
    const { id } = req.params;
    const theater = await Theater.findById(id).lean();
    res.render('theater-pages/edit-theater.hbs', {
        isLoggedIn: req.isLoggedIn,
        ...req.user,
        theater,
    })
}



async function editTheater(req, res) {
    const { title, description, imageUrl, theaterStatus } = req.body;
    const { id } = req.params;
    const theater = { title, description, imageUrl, _id: id };
    if (!title) {
        return invalidData('Title can not be empty!');
    }
    else if (!description) {
        return invalidData('Description can not be empty!');
    }
    else if (!imageUrl) {
        return invalidData('Image Url can not be empty!');
    }
    else if (description.length > 50) {
        return invalidData('Description can not be more than 50 characters!');
    }
    const isPublic = theaterStatus === 'on' ? true : false;
    await Theater.findOneAndUpdate({ _id: id }, {
        title,
        description,
        imageUrl,
        isPublic
    })
    res.redirect(`/theater/${id}`)
    function invalidData(errMessage) {
        return res.render('theater-pages/edit-theater.hbs', {
            isLoggedIn: req.isLoggedIn,
            ...req.user,
            errMessage,
            theater
        })
    }

}



// async function serachHandler(req, res) {
//     const isLoggedIn = req.isLoggedIn;
//     const search = req.query.search
//     const theaters = await Theater.find().lean();
//     const filtered = theaters.filter(theater => theater.title.toLowerCase().includes(search.toLowerCase()));
//     return res.render('home-pages/user-home.hbs', {
//         isLoggedIn,
//         ...req.user,
//         theaters: filtered
//     })
// }



module.exports = {
    loadHomePage,
    loadCreateTheaterPage,
    createTheaterHandler,
    loadTheaterDetails,
    likeUser,
    deleteTheater,
    loadEditPage,
    editTheater,
    // serachHandler
}