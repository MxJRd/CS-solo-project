const db = require('../models/dataStructureModels.js');

const dataStructureController = {};

dataStructureController.getBST = async (req, res, next) => {
  const urlQueryStr = `SELECT url_table.url_link FROM data_structures, url_table WHERE 
  data_structures.id = url_table.data_structure_id AND data_structures.name = 'BST'`;

  const consoleLoggedText = `SELECT console_text FROM "public"."data_structures" WHERE data_structures.id = 1`;

  const sourceText = `SELECT source_text FROM "public"."data_structures" WHERE data_structures.id = 1`;

  const urlResult = await db.query(urlQueryStr);
  const loggedTextResult = await db.query(consoleLoggedText);
  const sourceTextResult = await db.query(sourceText);
  //why the fuck is rows always an array
  res.locals.getBST = {
    url: urlResult.rows[0]['url_link'],
    consoleLoggedText: Buffer.from(loggedTextResult.rows[0]['console_text'], 'base64').toString('utf-8'),
    sourceText: Buffer.from(sourceTextResult.rows[0]['source_text'], 'base64').toString('utf-8'),
  }
  //SELECT url_table.url_link FROM data_structures, url_table WHERE data_structures.id = url_table.data_structure_id AND data_structures.name = 'BST';
  next();
}

dataStructureController.getStack = async (req, res, next) => {
  const urlQueryStr = `SELECT url_table.url_link FROM data_structures, url_table WHERE 
  data_structures.id = url_table.data_structure_id AND data_structures.name = 'Stack'`;

  const consoleLoggedText = `SELECT console_text FROM "public"."data_structures" WHERE data_structures.id = 2`;

  const sourceText = `SELECT source_text FROM "public"."data_structures" WHERE data_structures.id = 2`;

  const urlResult = await db.query(urlQueryStr);
  const loggedTextResult = await db.query(consoleLoggedText);
  const sourceTextResult = await db.query(sourceText);
  //rows is always an array
  res.locals.getStack = {
    url: urlResult.rows[0]['url_link'],
    consoleLoggedText: Buffer.from(loggedTextResult.rows[0]['console_text'], 'base64').toString('utf-8'),
    sourceText: Buffer.from(sourceTextResult.rows[0]['source_text'], 'base64').toString('utf-8'),
  }
  next();
}

dataStructureController.getQueue = async (req, res, next) => {
  const urlQueryStr = `SELECT url_table.url_link FROM data_structures, url_table WHERE 
  data_structures.id = url_table.data_structure_id AND data_structures.name = 'Queue'`;

  const consoleLoggedText = `SELECT console_text FROM "public"."data_structures" WHERE data_structures.id = 3`;
  const sourceText = `SELECT source_text FROM "public"."data_structures" WHERE data_structures.id = 3`;

  const urlResult = await db.query(urlQueryStr);
  const loggedTextResult = await db.query(consoleLoggedText);
  const sourceTextResult = await db.query(sourceText);
  //rows is always an array
  res.locals.getQueue = {
    url: urlResult.rows[0]['url_link'],
    consoleLoggedText: Buffer.from(loggedTextResult.rows[0]['console_text'], 'base64').toString('utf-8'),
    sourceText: Buffer.from(sourceTextResult.rows[0]['source_text'], 'base64').toString('utf-8'),
  }
  next();
}

module.exports = dataStructureController;