'use strict';
function Common(){
    var self = this;
    self.doStuff = function(){
        console.log('Common.js doing stuff');
    };
    return self;
}
module.exports = new Common();