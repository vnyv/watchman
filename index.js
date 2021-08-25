var watch = require('node-watch');
const { parse } = require('fast-csv');
const path = require('path')

watch('csv', { recursive: true }, function (evt, name) {
    const filePath = path.resolve(__dirname, name)
    if (/\.csv$/.test(name)) {
        parseCsvFile(filePath)
    }
});

const parseCsvFile = (path) => {
    const stream = csv
        .parse({ headers: true })
        .on('error', (error) => console.error(error))
        .on('data', (row) => console.log(row))
        .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

    stream.write(CSV_STRING);
    stream.end();
}