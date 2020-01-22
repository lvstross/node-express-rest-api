import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // Post endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
      // get a specific contact
      .get(getContactById)
      // updating a contact
      .put(updateContact)
      // deleting a contact
      .delete(deleteContact);
}

export default routes;
