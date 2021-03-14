const { Comment } = require('../../models');

const commentData = [
    {
        content: "For sure! I'm super tired all the time!",
        post_id: 1,
        user_id: 1

    },
    {
        content: 'It really is! I agree!',
        post_id: 2,
        user_id: 1

    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;