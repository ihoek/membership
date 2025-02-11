//변수 선언 - DOM
const search_id = document.querySelector(".search_id");
const search_pw = document.querySelector(".search_pw");
const search_membership = document.querySelector(".search_membership");
const loginButton = document.querySelector(".login");
const input_id = document.getElementById("id");
const input_pw = document.getElementById("pw");

//local
// let local_data_map = JSON.parse(localStorage.getItem("data"));
// let local_id = [];
// let local_pw = [];

// local_data_map.map((element) => {
//   local_id.push(element.id);
//   local_pw.push(element.pw);
// });

//sub menu 이동 - 아이디
search_id.addEventListener("click", () => {
  console.log("아이디 찾기 클릭");
  window.location.href = "/searchingid";
});

//sub menu 이동 - 비밀번호
search_pw.addEventListener("click", () => {
  console.log("비밀번호 찾기 클릭");
  window.location.href = "/searchingpw";
});

//sub menu 이동 - 회원가입
search_membership.addEventListener("click", () => {
  console.log("회원가입 클릭");
  window.location.href = "/membership";
});

fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    const updata_data = JSON.parse(JSON.stringify(data)); //data 형태변환
    let local_data = JSON.parse(localStorage.getItem("data")) || [];
    //console.log("local_data", local_data);

    //해당 하는 값이 이미 로컬에 있는 경우 안됨
    let exists = local_data.some((item) => item.id === updata_data.id);

    if (!exists) {
      local_data.push(updata_data);
      localStorage.setItem("data", JSON.stringify(local_data)); // 로컬 스토리지 저장
    }
  })

  .catch((e) => {
    console.error("error", e);
  });
