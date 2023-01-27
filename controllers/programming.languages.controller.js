const { getMultiple, create, update, remove, get } = require('../services/programmingLanguageService');

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

exports.update = async(req, res, next) => {
  try {
    res.json(await update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

exports.remove = async(req, res, next) => {
  try {
    res.json(await remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

exports.get = async(req, res, next) => {
  try {
    const response = await get(req.params.id)
    if(response && response.id){
      res.json(response);
    } 
    else res.json('Programming language not found with given id')
    
  } catch (err) {
    console.error(`Error while fetching programming language`, err.message);
    next(err);
  }
}