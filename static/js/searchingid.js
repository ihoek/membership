// function find_number() {
//   console.log("e");
//   fetch("/find_id")
//     .then((response) => {
//       console.log("json", response);
//       response.json();
//     })
//     .then((data) => {
//       console.log("data", data);
//     });
// }

const search_phone = document.getElementById("search_phone");
const result = document.querySelector(".result");

let local_data = JSON.parse(localStorage.getItem("data"));
let local_data_number = [];
local_data.map((element) => {
  local_data_number.push(element.phone);
});
let local_data_id = [];
local_data.map((element) => {
  local_data_id.push(element.id);
});

let find_index = false; //배열의 위치값

search_phone.addEventListener("input", function () {
  //console.log(search_phone.value);
  if (local_data_number.indexOf(search_phone.value) >= 0) {
    //console.log("전화", local_data_number.indexOf(search_phone.value));
    find_index = local_data_number.indexOf(search_phone.value);
  } else {
    find_index = false;
    //console.log(search_phone.value);
  }
});

function find_number() {
  if (find_index !== false) {
    result.innerText = `해당하는 아이디는 ${local_data_id[find_index]}입니다`;
  } else {
    result.innerText = `해당하는 아이디를 찾을 수 없습니다`;
  }
}
