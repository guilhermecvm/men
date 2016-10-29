function list(req, res, next) {
  res.status(200).send({ data: { users: [] } })
}

function get(req, res, next) {
  res.status(200).send({ data: { user: { id: req.params.id } } })
}

function create(req, res, next) {
  res.status(200).send(req.body)
}

function update(req, res, next) {
  res.status(200).send(req.body)
}

function remove(req, res, next) {
  res.status(200)
}

module.exports = {
  list: list,
  get: get,
  create: create,
  update: update,
  remove: remove
}
