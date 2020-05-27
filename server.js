const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/myapp'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'dist/shop-ui/index.html'));
});