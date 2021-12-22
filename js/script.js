const url =
  "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}";
const table = document.querySelector(".main-table");
const buttons = document.querySelector(".pagination");
const clicked = document.querySelector(".result");
const input = document.querySelector(".search-input");
let arr = [];
let arrOfResult = [];
let paginationNumber = 0;
const searchButtonFunc = () => {
  arrOfResult = [];
  arr.forEach((el, i) => {
    
    if (el.id == input.value) {
      arrOfResult.push(el);
    }
    else if (
      (String(el.firstName) + String(el.lastName) + String(el.email)).indexOf(
        input.value
      ) != -1
    ) {
      arrOfResult.push(el);
    }
  });
  table.childNodes[3].innerHTML = "";
  for (i = 0; i < arrOfResult.length; i++) {
    table.childNodes[3].insertAdjacentHTML(
      "beforeend",
      `<tr onclick="clickedFunc(arrOfResult[${i}])">
          <td class="№">${i + 1}</td>
          <td>${arrOfResult[i].id}</td>
          <td>${arrOfResult[i].firstName}</td>
          <td>${arrOfResult[i].lastName}</td>
          <td>${arrOfResult[i].email}</td>
          <td>${arrOfResult[i].phone}</td>
        </tr>`
    );
  }
};
let thPrev = 0;
let thPrevText;
const thTextFunc = (id) => {
  let th = document.querySelector(`#${id}`);
  if (thPrev == th) {
    arr.reverse();
    if (th.textContent[th.textContent.length - 1] == "▼")
      th.textContent = th.textContent.slice(0, -1) + "▲";
    else th.textContent = th.textContent.slice(0, -1) + "▼";
    tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
  } else {
    if (thPrev != 0) {
      thPrev.textContent = thPrevText;
    }
    thPrev = th;
    thPrevText = th.textContent;
    if (th.textContent[th.textContent.length - 1] == "▲")
      th.textContent = th.textContent.slice(0, -1) + "▼";
    else th.textContent = th.textContent.slice(0, -1) + "▲";
    sortFunc(th);
    tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
  }
};
const sortFunc = (th) => {
  switch (th.id) {
    case "thId":
      arr.sort((a, b) => a.id - b.id);
      break;
    case "thFN":
      arr.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
      break;
    case "thLN":
      arr.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName < b.lastName) {
          return -1;
        }
        return 0;
      });
      break;
    case "thEmail":
      arr.sort((a, b) => {
        if (a.email > b.email) {
          return 1;
        }
        if (a.email < b.email) {
          return -1;
        }
        return 0;
      });
      break;
    case "thPhone":
      arr.sort((a, b) => {
        if (a.phone > b.phone) {
          return 1;
        }
        if (a.phone < b.phone) {
          return -1;
        }
        return 0;
      });
      break;
  }
};
const clickedFunc = (arrEl) => {
  let clickedUser = document.createElement("tr");
  clickedUser.insertAdjacentHTML(
    "beforeend",
    `<td>${arrEl.id}</td>
      <td>${arrEl.firstName}</td>
      <td>${arrEl.lastName}</td>
      <td>${arrEl.email}</td>
      <td>${arrEl.phone}</td>
      <td>${Object.values(arrEl.adress)}</td>
      <td>${arrEl.description}</td>`
  );
  clickedUser.setAttribute("onclick", "this.remove()");
  clicked.append(clickedUser);
};

const download = async () => {
  let response = await fetch(url);
  let json = await response.json();
  arr = json;
  tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
};
const tableFunc = (n, m) => {
  table.childNodes[3].innerHTML = "";
  for (i = n - 1; i < m; i++) {
    table.childNodes[3].insertAdjacentHTML(
      "beforeend",
      `<tr onclick="clickedFunc(arr[${i}])">
          <td class="№">${i + 1}</td>
          <td>${arr[i].id}</td>
          <td>${arr[i].firstName}</td>
          <td>${arr[i].lastName}</td>
          <td>${arr[i].email}</td>
          <td>${arr[i].phone}</td>
        </tr>`
    );
  }
};
const paginationFunc = (buttonId) => {
  switch (true) {
    case buttonId == "buttonBack":
      if (paginationNumber != 0) {
        paginationNumber -= 1;
        tableFunc(1 + 25 * paginationNumber, 25 + 25 * paginationNumber);
      }
      break;
    case buttonId == "buttonForward":
      if (paginationNumber != 39) {
        paginationNumber += 1;
        tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
      }
      break;
    case buttonId == "buttonStart":
      paginationNumber = 0;
      tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
      break;
    case buttonId == "buttonEnd":
      paginationNumber = 39;
      tableFunc(1 + 25 * paginationNumber, 25 + paginationNumber * 25);
      break;
  }
};
download();
