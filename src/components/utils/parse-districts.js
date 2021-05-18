//========================================================================================
/*                                                                                      *
 *                             TSV to JSON districts parser                             *
 *                                                                                      */
//========================================================================================
//──── node parse-districts {path to .tsv} {output path} ────────────────────────────────────
//──── resulting prices.json will be used as options for the district widget ─────────────

var fs = require('fs');
var path = require('path');
var args = process.argv.slice(2);
var kc = require('lodash.kebabcase');

var filePath = path.join(__dirname, args[0]);

var f = fs.readFileSync(filePath, { encoding: 'utf-8' }, function(err) {
  console.log(err);
});

var rows = f.split('\n');

var keys = rows.shift().split('\t');

var json = {};

rows.forEach(function(d) {
  var row = d.split('\t');
  for (var i = 1; i < keys.length; i++) {
    var val =
      row[i] &&
      row[i]
        .replace('.', ',')
        .replace('\r', '')
        .trim();
    const key = row[0];
    if (!json[key]) {
      json[key] = {
        label: key,
        value: kc(key),
        parishes: []
      };
    }
    json[key].parishes.push(val);
  }
});

var outPath = path.join(__dirname, args[1] || 'prices.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', function(err) {
  console.log(err);
});
