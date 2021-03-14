const { Post } = require('../../models');

const postData = [
    {
        title: 'Dog Grooming is very tiring',
        content: 'Big dogs take a lot out of you',
        user_id: 1

    },
    {
        title: 'Dog grooming is very rewarding',
        content: 'Small dogs are so much easier to handle',
        user_id: 1

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

