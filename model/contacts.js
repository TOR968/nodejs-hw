const Contact = require('./schemas/contact');

const listContacts = async (
  userId,
  { sortBy, sortByDesc, sub, page = '1', limit = '20' },
) => {
  const options = { owner: userId };
  if (sub) {
    options.subscription = { $all: [sub] };
  }
  const data = await Contact.paginate(options, {
    page,
    limit,
    sort: {
      ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
      ...(sortByDesc ? { [`${sortByDesc}`]: -1 } : {}),
    },
    populate: {
      path: 'owner',
      select: 'email subscription -_id',
    },
  });
  const { docs: contacts, totalDocs: total } = data;
  return { total: total.toString(), page, limit, contacts };
};

const getContactById = async (userId, contactId) => {
  const data = await Contact.findOne({
    owner: userId,
    _id: contactId,
  }).populate({ path: 'owner', select: 'email subscription -_id' });
  return data;
};

const addContact = async body => {
  const data = await Contact.create(body);
  return data;
};

const updateContact = async (userId, contactId, body) => {
  const data = await Contact.findByIdAndUpdate(
    { owner: userId, _id: contactId },
    { ...body },
    { new: true },
  );
  return data;
};

const removeContact = async (userId, contactId) => {
  const data = await Contact.findByIdAndRemove({
    owner: userId,
    _id: contactId,
  });
  return data;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
