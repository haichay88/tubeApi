var mongoose =require('mongoose');
var videoSchema = mongoose.Schema({
    title: String,
    content: String,
    videoId:String,
    channelInfo:{
        channelId:String,
        title:String,
        imgUrl:String
    }

});

module.exports = mongoose.model('Video', videoSchema);