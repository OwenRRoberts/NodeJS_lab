const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp("https://www.reddit.com/r/popular.json")
    .then(html => {

        let posts = Json.parse(html).data.children;
        let objects = [];

        posts.forEach((item) => {
            let obj = {
                title: item.data.title,
                url: url.data.url,
                author: item.data.author
            };
            objects.push(obj);
        })

        fs.writeFile("popular-articles.js", JSON.stringify(objects), (err) => {
            if (err) console.log(err);
        })

    })
    .catch((err) => {
        console.log(err);
    })