const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const path = require('path');
const notice = require('./routes/notice');


app.use('./notice', notice);
app.use(express.static( path.join(__dirname, 'public')))

app.get('/',function(request, response){
    response.sendFile( path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, function(){
    console.log(`server started on PORT ${PORT}`)
});

