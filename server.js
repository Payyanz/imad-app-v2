var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-1':{
         title: 'Payyanz | first article',
         heading: 'My first article page',
         date: '19/02/2017',
         content: `<p> My name Abi and I am testing My first article page here.
                    "I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT." 
                    </p>
                    <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                    </p>
                    <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                    </p>`
    },
    'article-2':{
     title: 'Payyanz | second article',
     heading: 'My second article page',
     date: '20/02/2017',
     content: `<p> My name Abi and I am testing My first article page here.
                "I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT." 
                </p>
                <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                </p>
                <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                </p>`
    },
    'article-3':{
         title: 'Payyanz | third article',
         heading: 'My third article page',
         date: '21/02/2017',
         content: `<p> My name Abi and I am testing My first article page here.
                    "I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT." 
                    </p>
                    <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                    </p>
                    <p> My name Abi and I am testing My first article page here."I hereby submit the bill for structural painting of pipeline (Applying two coats of Epoxy coltar over one coat of Zinc Phosphate primer) carried out at BPCL Irimpanam Installation for an amount of Rs. 38,462.50/-(Rupees Thirty eight thousand four hundred sixty two and Paisa fifty only).The total weight of structural painted is 9.05 MT (measurement sheet attached) @ Rs.4250 per MT."
                    </p>`
    },
};               


function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate = `
    <html>
    <head>
        <title> 
        ${title}
        </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>HOME</a>
            </div>
            <div>
             ${heading}
            </div>
            <div>
            ${date}
            </div>
            <div>
                ${content}
            </div>
    </body>
</html>`;
}


        app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, 'ui', 'index.html'));
        });
        app.get('/:article name', function (req, res) {
            var articlename = req.params.articlename;
        res.send(path.join(createtemplate(artcles[articlename])));
        });
       
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
