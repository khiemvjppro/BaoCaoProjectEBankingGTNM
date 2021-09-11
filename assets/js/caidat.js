const buy = document.getElementById("js-buy-ticket"); //nút buy
const modal = document.querySelector(".js-modal"); //họi hàm modal
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close"); //nút close
function showBuyTickets() {
  modal.classList.add("open"); //hàm thêm .modal.open bên css
}

function hideBuyTickets() {
  modal.classList.remove("open"); //đay là hàm xóa open bên css
}

// for (const buyBtn of settings) {
//   //vòng lặp for dùng để chạy lần lượt 3 cái nút
//   buyBtn.addEventListener("click", showBuyTickets); //thêm sự kiện click vào nút buy
// }

buy.addEventListener("click", showBuyTickets);

modalClose.addEventListener("click", hideBuyTickets); // them hành vi vào nút close ẩn modal

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

const buy1 = document.getElementById("js-buy-ticket1"); //nút buy
const modal1 = document.querySelector(".js-modal-setting"); //họi hàm modal
const modalContainer1 = document.querySelector(".js-modal-container1");
const modalClose1 = document.querySelector(".js-modal-close1"); //nút close
function showBuyTickets1() {
  modal1.classList.add("open"); //hàm thêm .modal.open bên css
}

function hideBuyTickets1() {
  modal1.classList.remove("open"); //đay là hàm xóa open bên css
}

// for (const buyBtn of settings) {
//   //vòng lặp for dùng để chạy lần lượt 3 cái nút
//   buyBtn.addEventListener("click", showBuyTickets); //thêm sự kiện click vào nút buy
// }

buy1.addEventListener("click", showBuyTickets1);

modalClose1.addEventListener("click", hideBuyTickets1); // them hành vi vào nút close ẩn modal

modal1.addEventListener("click", hideBuyTickets1);

modalContainer1.addEventListener("click", function (event) {
  event.stopPropagation();
});

// notify
const buy2 = document.getElementById("js-buy-ticket2"); //nút buy
const modal2 = document.querySelector(".js-modal-notify"); //họi hàm modal
const modalContainer2 = document.querySelector(".js-modal-container2");
const modalClose2 = document.querySelector(".js-modal-close2"); //nút close
function showBuyTickets2() {
  modal2.classList.add("open"); //hàm thêm .modal.open bên css
}

function hideBuyTickets2() {
  modal2.classList.remove("open"); //đay là hàm xóa open bên css
}

// for (const buyBtn of settings) {
//   //vòng lặp for dùng để chạy lần lượt 3 cái nút
//   buyBtn.addEventListener("click", showBuyTickets); //thêm sự kiện click vào nút buy
// }

buy2.addEventListener("click", showBuyTickets2);

modalClose2.addEventListener("click", hideBuyTickets2); // them hành vi vào nút close ẩn modal

modal2.addEventListener("click", hideBuyTickets2);

modalContainer2.addEventListener("click", function (event) {
  event.stopPropagation();
});

const buy3 = document.getElementById("js-buy-ticket3"); //nút buy
const modal3 = document.querySelector(".js-modal-notify1"); //họi hàm modal
const modalContainer3 = document.querySelector(".js-modal-container3");
const modalClose3 = document.querySelector(".js-modal-close3"); //nút close
const load = document.querySelector(".loader");
function showBuyTickets3() {
  modal3.classList.add("open"); //hàm thêm .modal.open bên css
}

function hideBuyTickets3() {
  modal3.classList.remove("open"); //đay là hàm xóa open bên css
}

// for (const buyBtn of settings) {
//   //vòng lặp for dùng để chạy lần lượt 3 cái nút
//   buyBtn.addEventListener("click", showBuyTickets); //thêm sự kiện click vào nút buy
// }
buy3.addEventListener("click", load);
buy3.addEventListener("click", showBuyTickets3);

modalClose3.addEventListener("click", hideBuyTickets3); // them hành vi vào nút close ẩn modal

modal3.addEventListener("click", hideBuyTickets3);

modalContainer3.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});
