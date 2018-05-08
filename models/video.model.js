var mongoose = require('mongoose');
var videoSchema = mongoose.Schema({
    title: String,
    titleConverted:String,
    description: String,
    videoId: String,
    imgUrl: String,
    duration: String,
    viewCount: String,
    dislikeCount: String,
    likeCount: String,
    publishDated: Date,
    tags:String,
    channelTitle:String,
    channelTitleConverted:String,
    channelId:String,
    height:String,
    width:String,
    channelInfo: {
        channelId: String,
        title: String,
        imgUrl: String
    },
    categoryId:String,
    createdDate:Date,
    source:String,

});


module.exports = mongoose.model('Video', videoSchema);
