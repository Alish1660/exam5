const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("booking-form");
  const bookingMessage = document.getElementById("booking-message");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const tickets = formData.get("tickets");
    setTimeout(function () {
      bookingMessage.innerHTML = `
          <p>Thank you, ${name}! Your booking for ${tickets} ticket(s) has been confirmed. 
          An email has been sent to ${email}.</p>
        `;
      bookingForm.reset();
    }, 1000);
  });
});

const fetchUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const users = response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const createTable = (users) => {
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");
  const headers = ["T/R", "Title", "Price"];
  const headerRow = table.insertRow();
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  users.forEach((item) => {
    const row = table.insertRow();
    row.insertCell().textContent = item.id;
    row.insertCell().textContent = item.title;
    row.insertCell().textContent = item.price;
  });
  tableContainer.appendChild(table);
  table.classList.add("table");
};
const finish = async () => {
  users = await fetchUsers();
  if (users) {
    createTable(users);
  }
};
finish();

const changePage = (page) => {
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  if (page === "first") {
    first.setAttribute("style", "display:block");
    second.setAttribute("style", "display:none");
  } else if (page === "second") {
    first.setAttribute("style", "display:none");
    second.setAttribute("style", "display:block");
  }
};
