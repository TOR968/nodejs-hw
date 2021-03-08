const Contacts = require('../model/contacts');
const { HttpCode } = require('../helpers/constants');

const listContacts = async (_req, res, next) => {
  try {
    const userId = req.user.id;
    const contacts = await Contacts.listContacts(userId, req.query);
    return res.json({
      status: 'success',
      code: HttpCode.OK,
      message: 'Contacts found',
      data: {
        ...contacts,
      },
    });
  } catch (e) {
    next(e);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contact = await Contacts.getContactById(req.params.contactId, userId);
    return res.json({
      status: 'success',
      code: HttpCode.OK,
      data: {
        contact,
      },
    });
  } catch (e) {
    if (e.name === 'CastError') {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found',
      });
    }
    next(e);
  }
};

const addContact = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contact = await Contacts.addContact({ ...req.body, owner: userId });
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'success',
      code: HttpCode.BAD_REQUEST,
      message: 'Contact created',
      data: {
        contact,
      },
    });
  } catch (e) {
    if (e.name === 'ValidationError' || e.name === 'MongoError') {
      return next({
        status: HttpCode.BAD_REQUEST,
        message: e.message.replace(/"/g, ''),
      });
    }
    next(e);
  }
};

const updateContact = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(HttpCode.BAD_REQUEST).json({
        status: 'error',
        code: HttpCode.BAD_REQUEST,
        message: 'Bad request',
      });
    }
    const userId = req.user.id;
    const contact = await Contacts.updateContact(
      req.params.contactId,
      req.body,
      userId,
    );
    if (contact) {
      return res.json({
        status: 'success',
        code: HttpCode.OK,
        message: 'Contact updated',
        data: {
          contact,
        },
      });
    }
  } catch (e) {
    if (e.name === 'CastError') {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found',
      });
    }
    next(e);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contact = await Contacts.removeContact(req.params.contactId, userId);
    return res.json({
      status: 'success',
      code: HttpCode.OK,
      data: {
        contact,
      },
    });
  } catch (e) {
    if (e.name === 'CastError') {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found',
      });
    }
    next(e);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
