const { getMultiple , create} = require('../services/programmingLanguageService');

exports.getProgrammingLanguages = async (req, res, next) => {
    try {
      res.json(await getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
}

exports.create = async (req, res, next) => {
  try {
    res.json(await create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}