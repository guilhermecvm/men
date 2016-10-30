import User from './user'

export function list(req, res, next) {
  User.find({})
    .then(users => res.status(200).send({ data: { users: users } }))
    .catch(err => next(err))
}

export function get(req, res, next) {
  User.findOne({ username: req.params.username })
    .then(user => res.status(200).send({ data: { user: user } }))
    .catch(err => next(err))
}

export function create(req, res, next) {
  User.create(req.body)
    .then(user => res.status(200).send({ data: { user: user } }))
    .catch(err => next(err))
}

export function update(req, res, next) {
  User.update({ username: req.params.username }, req.body)
    .then(() => res.status(200).send())
    .catch(err => next(err))
}

export function remove(req, res, next) {
  User.remove({ username: req.params.username })
    .then(() => res.status(200).send())
    .catch(err => next(err))
}
