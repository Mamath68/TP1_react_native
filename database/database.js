import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('databaseName');

const firstRow = await db.getFirstAsync('SELECT * FROM test');
console.log(firstRow.id, firstRow.value, firstRow.intValue);


const allRows = await db.getAllAsync('SELECT * FROM test');
for (const row of allRows) {
  console.log(row.id, row.value, row.intValue);
}

for await (const row of db.getEachAsync('SELECT * FROM test')) {
  console.log(row.id, row.value, row.intValue);
}
