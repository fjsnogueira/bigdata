# bigdata
minimal big data sample nodejs and mongodb web app (just an exercise)

not working yet (wip)

npm intall

node ./bin/www.js


map-reduce
finding number of projects by author an storing in the outCollection1

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