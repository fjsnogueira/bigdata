# bigdata
minimal big data sample nodejs and mongodb web app (just an exercise)

not working yet (wip)

# install dependencies and run

git clone https://github.com/fjsnogueira/bigata
cd bigata
git clone https://github.com/fjsnogueira/JSON-Schema-Builder
npm intall
npm start


map-reduce
==========

way of finding number of projects by author and storing in the outCollection1 (from the mongodb shell)

```javascript
function m () {
    emit(this.name, 1);
}

function r(k,v) {
    return Array.sum(v);
}

db.projects.mapReduce(m,r,'outCollection1');
```

passing a condition to the map reduce function to filter

```javascript
var options = { out: { merge: "projectsByAuthor", query { by : /^[a-g]/ }};

function m () {
    emit(this.name, 1);
}

function r(k,v) {
    return Array.sum(v);
}

db.projects.mapReduce(m,r,options);
```

Client file structure
======================

```
.
├── assets
│   └── images
│       └── favicon.ico
├── index.css
├── index.js
├── libs
│   ├── jquery.min.js
│   ├── material.min.css
│   └── material.min.js
└── views
    ├── error.html
    ├── index.html
    └── new.html
```


Server file structure
======================

```
.
├── controllers
│   └── projects.server.controller.js
├── models
│   └── project.server.model.js
├── public
│   └── uploads
├── routes
│   ├── index.js
│   ├── schema.js
│   └── upload.js
├── routes..
│   └── public
│       └── uploads
└── schemas
    └── schema.json
```