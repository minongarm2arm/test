// 회원가입 페이지

// import React from "react";

// function Signup() {

//  return (
//     <div className="Signup"
//         style={{
//           // maxWidth: "350px",
//           // margin: "auto",
//           // display: "flex",
//           // justifyContent: "center",
//           // alignItems: "center",
//           // minHeight: "100vh"
//         }}>

//       {/* 닉네임 섹션 */}
//       <div
//         className="NICKNAME"
//         style={{ margin: "10px", padding: "10px"}}
//       >
//         {/* 닉네임 생성 조건 알려주기 */}
//         <p id="help-nick" class="help">
//           닉네임 형식: 특수문자를 제외한 한글, 영문, 숫자{" "}
//         </p>

//         {/* 닉네임 입력받기 */}
//         <input
//           id="input-nickname"
//           class="input"
//           type="text"
//           placeholder="닉네임"
//         />{" "}

//         <div id="btn-check-dup" class="control is-hidden">
//           <button onclick="check_dup_nickname()" style={{ }}>중복 확인</button>{" "}
//           {/* 닉네임 중복 확인하기 */}
//         </div>

//         <p id="help-nickname-login" class="help is-danger"></p>
//       </div>

//       {/* 아이디 섹션 */}
//       <div
//         className="ID"
//         style={{ margin: "10px", padding: "10px" }}
//       >
//         <p id="help-id" class="hel is-hidden"  style={{ }}>
//           아이디 형식: 영문자 또는 숫자로 구성된 5~8자{" "}
//           {/* 아이디 생성 조건 알려주기 */}
//         </p>

//         <div>
//           <input
//             id="input-username"
//             class="input"
//             type="text"
//             placeholder="아이디"
//           />{" "}
//           {/* 아이디 입력받기 */}
//         </div>

//         <div id="btn-check-dup" class="control is-hidden">
//           <button onclick="check_dup_id()" style={{  }}>중복 확인</button>{" "}
//           {/* 아이디 중복 확인하기 */}
//         </div>

//         <p id="help-id-login" class="help is-danger"></p>
//       </div>

//       {/* 비밀번호 섹션 */}
//       <div
//         className="PW"
//         style={{ margin: "10px", padding: "10px" }}
//       >
//         <p id="help-password" class="help is-hidden"  style={{ }}>
//           비밀번호 형식: 최소 8자, 최소 하나의 문자 및 하나의 숫자{" "}
//           {/* 비밀번호 생성 조건 알려주기 */}
//         </p>

//         <div>
//           <input
//             id="input-password"
//             class="input"
//             type="password"
//             placeholder="비밀번호"
//           />{" "}
//           {/* 비밀번호 입력받기 */}
//         </div>

//         <p id="help-password-login" class="help is-danger"></p>
//       </div>

//       <div id="sign-up-box" class="is-hidden" style={{ margin: "10px", padding: "10px" }}>
//         {/* 비밀번호 재입력 받기 */}
//         <div>
//           <p id="help-password2" class="help is-hidden">
//             비밀번호를 다시 한 번 입력해주세요.
//           </p>

//           <div>
//             <input
//               id="input-password2"
//               class="input"
//               type="password"
//               placeholder="비밀번호 재입력"
//             />
//           </div>
//         </div>

//         {/* 회원가입 후 로그인 및 회원가입 취소 버튼
//         <nav>
//           <button>로그인</button>
//           <button>취소</button>
//         </nav> */}
//         <button>확인</button>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React from "react";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div
          className="Signup"
          style={
            {
              // maxWidth: "350px",
              // margin: "auto",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // minHeight: "100vh"
            }
          }
        >
          {/* 닉네임 섹션 */}
          <div className="NICKNAME" style={{ margin: "10px", padding: "10px" }}>
            {/* 닉네임 생성 조건 알려주기 */}
            <p id="help-nick" class="help">
              닉네임 형식: 특수문자를 제외한 한글, 영문, 숫자{" "}
            </p>

            {/* 닉네임 입력받기 */}
            {/* <input
              id="input-nickname"
              class="input"
              type="text" //
              placeholder="닉네임" //
            />{" "} */}
            <input 
              type='text' //
              placeholder='닉네임' //
              value={formData.username} 
              name='Nickname' 
              onChange={e => handleChange(e)} >
            </input>

            <div id="btn-check-dup" class="control is-hidden">
              <button style={{}}>
                중복 확인
              </button>{" "}
              {/* 닉네임 중복 확인하기 */}
            </div>
            <p id="help-nickname-login" class="help is-danger"></p>
          </div>

          {/* 아이디 섹션 */}
          <div className="ID" style={{ margin: "10px", padding: "10px" }}>
            <p id="help-id" class="hel is-hidden" style={{}}>
              아이디 형식: 영문자 또는 숫자로 구성된 5~8자{" "}
              {/* 아이디 생성 조건 알려주기 */}
            </p>

            {/* 아이디 입력받기 */}
            {/* <div>
              <input
                id="input-username"
                class="input"
                type="text"
                placeholder="아이디"
              />{" "}
            </div> */}
            <input 
              type='text' 
              placeholder='아이디' 
              value={formData.id} 
              name='Id' 
              onChange={e => handleChange(e)} >
            </input>

            <div id="btn-check-dup" class="control is-hidden">
              <button style={{}}>
                중복 확인
              </button>{" "}
              {/* 아이디 중복 확인하기 */}
            </div>

            <p id="help-id-login" class="help is-danger"></p>
          </div>

          {/* 비밀번호 섹션 */}
          <div className="PW" style={{ margin: "10px", padding: "10px" }}>
            <p id="help-password" class="help is-hidden" style={{}}>
              비밀번호 형식: 최소 8자, 최소 하나의 문자 및 하나의 숫자{" "}
              {/* 비밀번호 생성 조건 알려주기 */}
            </p>

            {/* 비밀번호 입력받기 */}
            {/* <div>
              <input
                id="input-password"
                class="input"
                type="password"
                placeholder="비밀번호"
              />{" "}
            </div> */}

            <input 
              type='text' 
              placeholder='비밀번호' 
              value={formData.password} 
              name='password' 
              onChange={e => handleChange(e)} >
            </input>

            <p id="help-password-login" class="help is-danger"></p>
          </div>

          <div
            id="sign-up-box"
            class="is-hidden"
            style={{ margin: "10px", padding: "10px" }}
          >
            {/* 비밀번호 재입력 받기 */}
            <div>
              <p id="help-password2" class="help is-hidden">
                비밀번호를 다시 한 번 입력해주세요.
              </p>

              <div>
                <input
                  id="input-password2"
                  class="input"
                  type="password"
                  placeholder="비밀번호 재입력"
                />
              </div>
            </div>

            {/* 회원가입 후 로그인 및 회원가입 취소 버튼
        <nav>
          <button>로그인</button>
          <button>취소</button>
        </nav> */}
            {/* <button>확인</button> */}
            <button className='login-btn' type='submit'>회원가입</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
