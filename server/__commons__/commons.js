/**
 * Created by Administrator on 2018/6/28.
 */
const getTime = function (timeTopics) {
    var splite = timeTopics.split("T");
    var timer = splite[1].split(".")[0];
    var realTime = splite[0] + ' ' + timer;
    // console.log(realTime);
    return realTime;
};
module.exports = {getTime};
