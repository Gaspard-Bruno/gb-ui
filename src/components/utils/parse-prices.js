//========================================================================================
/*                                                                                      *
 *                                         Usage                                        *
 *                                                                                      */
//========================================================================================
//──── Save the spreadsheet as .tsv and remove the first row manually ────────────────────
//──── On your terminal, move to this directory and type 👇 ──────────────────────────────
//──── node parse-prices {path to .tsv} {output path} ────────────────────────────────────

var fs = require('fs');
var path = require('path');
var args = process.argv.slice(2);

var filePath = path.join(__dirname, args[0]);
var KEYS_TO_FRONT_END_MAP = {
  'Chef em Casa': 'chef',
  'Apoio a Seniores': 'senior',
  'Experiência Gastronómica': 'gastro-experience',
  Jardinagem: 'gardening',
  'Apoio Familiar a Crianças': 'child-care',
  'Pet Care (Visitas, passeios)': 'pet-care',
  'Pet Sitting (Estadia)': 'pet-sitting',
  'Aulas de Música': 'music-lessons',
  'Pequenas Reparações': 'repairs',
  'Reparações Especiliazadas': 'special-repairs',
  Limpezas: 'cleaning',
  'Aulas de Línguas': 'language-lessons',
  Costura: 'tailoring',
  'Passar a Ferro': 'ironing'
};

var f = fs.readFileSync(filePath, { encoding: 'utf-8' }, function(err) {
  console.log(err);
});

var rows = f.split('\n');

var keys = rows.shift().split('\t');

var json = {};
rows.forEach(function(d) {
  var tmp = {};
  var row = d.split('\t');
  var rowKey = KEYS_TO_FRONT_END_MAP[row[0]];
  for (var i = 1; i < keys.length; i++) {
    tmp[keys[i].toLowerCase().replace('\r', '')] =
      row[i] && row[i].replace('\r', '').trim();
  }
  json[rowKey] = tmp;
});

var outPath = path.join(__dirname, args[1] || 'prices.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', function(err) {
  console.log(err);
});
