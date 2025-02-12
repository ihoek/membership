const search_id = document.getElementById("search_id");
const result = document.querySelector(".result");

let local_data = JSON.parse(localStorage.getItem("data"));

let local_data_id = [];
local_data.map((element) => {
  local_data_id.push(element.id);
});
let local_data_pw = [];
local_data.map((element) => {
  local_data_pw.push(element.pw);
});

let find_index = false; //배열의 위치값

search_id.addEventListener("input", function () {
  //console.log(search_phone.value);
  if (local_data_id.indexOf(search_id.value) >= 0) {
    //console.log("전화", search_id.indexOf(search_phone.value));
    find_index = local_data_id.indexOf(search_id.value);
  } else {
    find_index = false;
    //console.log(search_phone.value);
  }
});

function find_number() {
  if (find_index !== false) {
    result.innerText = `해당하는 비밀번호는 ${local_data_pw[find_index]}입니다`;
  } else {
    result.innerText = `해당하는 비밀번호를 찾을 수 없습니다`;
  }
}
