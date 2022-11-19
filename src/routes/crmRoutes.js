import {addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        //contactleri görmek
        .get(getContacts)

        //yeni bir contact oluşturmak
        .post(addNewContact);
        

    app.route('/contact/:contactID')
        //bir contactin özelliklerine bakmak için
        .get(getContactWithID)

        //bir contacti update etmek için
        .put(updateContact)

        //silmek için
        .delete(deleteContact);
}

export default routes;
