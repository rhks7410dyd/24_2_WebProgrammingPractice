const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 8888;
const cors = require('cors');

let docData = [];

app.use(cors());

if(fs.existsSync('docList.json')){
    const jsonData = fs.readFileSync('docList.json', 'utf-8');
    docData = JSON.parse(jsonData);
    console.log("Data is loaded from json file.");
}

app.use(bodyParser.json());

app.get('/docList',(req,res) => {
    res.json(docData);
});

app.post('/saveDoc', (req,res) => {
    const {id, title, content} = req.body;

    const docIndex = docData.findIndex(doc => doc.id == id);
    if(docData.length >= id){
        console.log(`fix title or content that is existed.${id} : ${title} \ncontent:${content}`);
        docData[docIndex] = {...docData[docIndex], title, content};
    }
    else{
        console.log(`Make new doc.${id} : ${title} \ncontent:${content}`);
        const newDoc = {id:docData.length + 1, title,content};
        docData.push(newDoc);
    }
    
    fs.writeFileSync('docList.json', JSON.stringify(docData,null,2),'utf-8');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});