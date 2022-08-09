// 로그인 페이지

// import React from "react";

// function Login() {

//   return (
//     <div>
//       {/* 아이디 입력받기 */}
//       <p>
//         <input id="input-id" className="input" type="text" placeholder="아이디" />{" "}
//       </p>

//       {/* 비밀번호 입력받기 */}
//       <p>
// 	  	<input id="input-password" className="input" type="password" placeholder="비밀번호" />{" "}
//       </p>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3002/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="아이디"
          value={formData.id}
          name="id"
          onChange={(e) => handleChange(e)}
        ></input>
        <p />
        <input
          type="text"
          placeholder="비밀번호"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <p />
        <button className="login-btn" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
