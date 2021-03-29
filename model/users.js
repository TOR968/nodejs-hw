const User = require('./schemas/user');

const findByEmail = async email => {
  return await User.findOne({ email });
};

const findById = async id => {
  return await User.findOne({ _id: id });
};

const findByVerifyToken = async verifyToken => {
  return await User.findOne({ verifyToken });
};

const create = async ({ email, password, verify, verifyToken }) => {
  const user = new User({ email, password, verify, verifyToken });
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

const updateVerifyToken = async (id, verify, verifyToken) => {
  return await User.findOneAndUpdate({ _id: id }, { verify, verifyToken }); // [1]
};

const updateSubUser = async (id, subscription) => {
  return await User.updateOne({ _id: id }, { subscription });
};

const updateAvatar = async (id, avatarURL) => {
  return await User.updateOne({ _id: id }, { avatarURL });
};

module.exports = {
  findByEmail,
  findById,
  create,
  updateToken,
  updateSubUser,
  updateAvatar,
  findByVerifyToken,
  updateVerifyToken,
};
