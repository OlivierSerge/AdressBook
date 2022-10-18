let contactList = [
  {
    name: "Peter MUGABO",
    tel: "0797265586",
    job: "Anesthetist",
    address: "Kigali",
  },
  {
    name: "John Walker",
    tel: "+11797265586",
    job: "Software Eng",
    address: "Kigali",
  },
  {
    name: "Aline Precious",
    tel: "0737730586",
    job: "Supplier",
    address: "Kibirizi",
  },
];

function renderContact(contact) {
  let contactDiv = document.createElement("div");
  contactDiv.classList.add("single-contact-container");
  contactDiv.innerHTML = `
    <h3 class='contact-name'>${contact.name}</h3>
    <h5 class='contact-phone'>${contact.tel}</h5>
    <p class='view-more'>Show more</p>
    <div class='contact-more-info'>
      <p>Job: ${contact.job}</p>
      <p>address: ${contact.address}</p>
    </div>
    <hr/>
  `;
  return contactDiv;
}

function displayContacts(contacts) {
  const contactsContainer = document.getElementById("contacts-container");
  contactsContainer.innerHTML = "";
  for (let contact of contacts) {
    let contactElement = renderContact(contact);
    contactsContainer.appendChild(contactElement);
  }
  const viewMoreParagraphs = document.getElementsByClassName("view-more");
  Array.from(viewMoreParagraphs).forEach((paragraph) => {
    paragraph.addEventListener("click", (event) => {
      const moreInfoContainer = event.target.nextElementSibling;
      moreInfoContainer.classList.toggle("more-info-visible");
    });
  });
}

displayContacts(contactList);

const addNewContact = document.getElementById("add-contact-button");
const modal = document.getElementById("modal");
addNewContact.addEventListener("click", () => {
  modal.classList.add("modal__visible");
});

const modalButton = document.getElementById("modal__close-button");
modalButton.addEventListener("click", () => {
  modal.classList.remove("modal__visible");
});

const modalForm = document.getElementById("modal__form");

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(modalForm);
  const newContactData = {};
  formData.forEach((value, field) => (newContactData[field] = value));
  contactList.unshift(newContactData);
  modalForm.reset();
  modal.classList.remove("modal__visible");
  displayContacts(contactList);
});
