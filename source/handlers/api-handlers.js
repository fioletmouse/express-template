function ApiHandlers() {
  const summary = function(req, res, next) {
    const { id } = req.query;
    res.send(id);    
  }

  return {
    summary  
  }
}
module.exports = ApiHandlers();