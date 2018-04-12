var mongoose = require('mongoose');
var videoSchema = mongoose.Schema({
    title: String,
    description: String,
    videoId: String,
    imgUrl: String,
    duration: String,
    viewCount: String,
    dislikeCount: String,
    likeCount: String,
    publishDated: String,
    videoRelateds:[{
        title:String,
        videoId:String,
        channelTitle:String,
        imgUrl:String,
        channelId:String
    }],
    channelInfo: {
        channelId: String,
        title: String,
        imgUrl: String
    },
    comments: [{
        authorProfileImageUrl: String,
        authorDisplayName: String,
        textDisplay: String,
        replies: [{
            authorProfileImageUrl: String,
            authorDisplayName: String,
            textDisplay: String,
        }]
    }]


});


module.exports = mongoose.model('Video', videoSchema);
