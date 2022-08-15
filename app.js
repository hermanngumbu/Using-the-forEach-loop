const contacts = [{
        id: 1,
        nom: 'Ngumbu',
        prenom: 'Herman',
        email: 'hermanngumbu@gmail.com',
        age: 12,
    },
    {
        id: 2,
        nom: 'Kabashi',
        prenom: 'Romain',
        email: 'romainkabashi@gmail.com',
        age: 22,
    },
    {
        id: 3,
        nom: 'Leon',
        prenom: 'Masakula',
        email: 'leon.mas@yahoo.fr',
        age: 43,
    },
    {
        id: 4,
        nom: 'Lingabo',
        prenom: 'Junior',
        email: 'juniorlingabo@gmail.com',
        age: 10,
    },
];

const myTableBody = document.querySelector('tbody');

contacts.forEach(contact => {
    const displayContact = "<tr><td>" + contact.id + "</td><td>" + contact.nom + "</td><td>" + contact.prenom + "</td><td>" + contact.email + "</td><td>" + contact.age + "</td></tr>"


    myTableBody.innerHTML += displayContact;
})