(() => {
  'use strict';

  const parse = require('csv-parse');
  const fs = require('fs');
  const _ = require('underscore');

  const fileName = 'example.csv';
  const dataStr = fs.readFileSync(fileName);

  const dataHeader = [
    '2015-05', '2015-06', '2015-07',
    '2015-08', '2015-09', '2015-10',
    '2015-11', '2015-12', '2016-01',
    '2016-02', '2016-03', '2016-04',
    '2016-05', '2016-06'];
  const result = {};

  let resultStr;
  parse(dataStr, { delimiter: ',', quote: '"' }, (err, data) => {
    const header = data.shift();

    resultStr = `pais`;
    _.each(dataHeader, (i) => resultStr += `\t${i}`);
    resultStr += '\r\n';

    data.forEach(row => {
      if (!result[row[0]]) result[row[0]] = {};
      result[row[0]][row[1]] = row[2];
    });
    print();
    //console.log(data);
  });


  function print() {
    _.each(result, (obj, key) => {
      let str = `${key}`;
      _.each(dataHeader, (i) => {
        const value = obj[i] | 0;
        str += `\t${value}`;
      });
      resultStr += `${str}\r\n`;
    })
    console.log(resultStr);
    fs.writeFile(`_${fileName}`, resultStr);
  }

})(this);
