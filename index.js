const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000


app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    const options = {
        root: path.join(__dirname)
    }

    const fileName = '/index.html';
    res.sendFile(fileName,options,(err) =>{
        if(err) 
            next(err);
        else
        {
            console.log(`Sent ${fileName}`);
        }
    });
});

app.listen(PORT, (err) =>{
    if(err)
        console.log(err);
    else
        console.log(`App listening at port ${PORT}`);
})