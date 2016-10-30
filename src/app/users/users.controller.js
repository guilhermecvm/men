export function list(req, res, next) {
  res.status(200).send({ data: { users: [] } })
}

export function get(req, res, next) {
  res.status(200).send({ data: { user: { id: req.params.id } } })
}

export function create(req, res, next) {
  res.status(200).send(req.body)
}

export function update(req, res, next) {
  res.status(200).send(req.body)
}

export function remove(req, res, next) {
  res.status(200)
}
