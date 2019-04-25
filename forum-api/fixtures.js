const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const run = async () => {
    await mongoose.connect(config.dbURL, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const user = await User.create(
        {
            username: 'John Doe',
            password: '123',
            token: 'token'
        },
        {
            username: 'Adele Adkins',
            password: '123',
            token: 'token1'
        }
    );

    const post = await Post.create(
        {
            title: 'My birthday',
            description: 'I was born on the 22nd of March. Birthday is a very remarkable day for me.It is spring and the weather is fine. ',
            image: 'birthday.jpg',
            datetime: "2019-04-05T14:48:00.000Z",
            user: user[0]._id
        },
        {
            title: 'My trip',
            description: 'I still remember the first trip to the beach that I took with my close friends. Two years ago, my friends and I went to Tamarindo Beach to rest and enjoy our vacation together. ',
            image: 'trip.jpg',
            datetime:  "2019-04-05T14:48:00.000Z",
            user: user[1]._id
        }
    );

    await Comment.create(
        {
            comment: 'Happy birthday!',
            user: user[1]._id,
            post: post[0]._id
        },
        {
            comment: 'Happy birthday, my best friend!',
            user: user[0]._id,
            post: post[0]._id
        },
        {
            comment: 'So cool!',
            user: user[0]._id,
            post: post[1]._id
        },
        {
            comment: 'So cool, yehhhhh!',
            user: user[1]._id,
            post: post[1]._id
        }
    );

    await connection.close();

};

run().catch(error => {
    console.error('Something went wrong', error);
});