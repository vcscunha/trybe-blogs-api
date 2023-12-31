const userService = require('../services/user.service');

const login = async (req, res) => {
  const loginData = req.body;

  const { statusCode, message } = await userService.login(loginData);

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(200).json({ token: message });
};

const createUser = async (req, res) => {
  const userData = req.body;

  const { statusCode, message } = await userService.createUser(userData);

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const { statusCode, message } = await userService.getUsers();

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { statusCode, message } = await userService.getUserById(+id);

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;

  const { statusCode, message } = await userService.deleteUser(+id);

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(204).end();
};

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
