import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

const handleResponse = (res) => (err, contact) => {
  if (err) {
    res.send(err);
  }
  res.json(contact);
}

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save(handleResponse(res));
}

export const getContacts = (req, res) => {
  Contact.find({}, handleResponse(res));
}

export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, handleResponse(res));
}

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    {
      _id: req.params.contactId,
    },
    req.body,
    {
      new: true,
      useFindAndModify: false,
    },
    handleResponse(res)
  );
}
