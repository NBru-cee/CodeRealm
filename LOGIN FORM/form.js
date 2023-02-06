document.addEventListener("DOMContentLoaded", () => {
     const loginForm = document.querySelector("#login-form");
     const linkPassword = document.querySelector("#forgot-password");
     const signupForm = document.querySelector("#signup-form");
     const forgotten = document.querySelector("#forgotten");
     const linkLogin = document.querySelector("#link-login");
     const linkSignup = document.querySelector("#link-signup");
     linkLogin.addEventListener("click", active => {
          active.preventDefault();
          loginForm.classList.remove("form-hidden");
          signupForm.classList.add("form-hidden");
          forgotten.classList.add("form-hidden");
     });

     linkSignup.addEventListener("click", active => {
          active.preventDefault();
          loginForm.classList.add("form-hidden");
          signupForm.classList.remove("form-hidden");
          forgotten.classList.add("form-hidden");
     });

     linkPassword.addEventListener("click", active => {
          active.preventDefault();
          forgotten.classList.remove("form-hidden");
          signupForm.classList.add("form-hidden");
          loginForm.classList.add("form-hidden");

     });

     loginForm.addEventListener("submit", active => {
          active.preventDefault();
          if (active.target.id === "name-email" && active.target.value > 0 && active.target.value < 10) {
               showMessage(loginForm, "error", "Invalid username/password");
          } else {
               showMessage(loginForm, "success", "You have successfully logged in."); 
          }
   
     });
     document.querySelectorAll("input-message").forEach(inputEl => {
          inputEl.addEventListener("blur", active => {
               if (active.target.id == "name" && active.target.value.length > 0 && active.target.value.length < 10) {
                    inputMessage(inputEl, "Username must be at least 10 characters")
               }
          });

          inputEl.addEventListener("input", () => {
               clearInput(inputEl);
          })
     });
});

const showPasswords = document.querySelector(".show-password");
const passwordEl = document.querySelector(".password");
showPasswords.addEventListener("click", () => {
     const type = passwordEl.getAttribute("type") === "password" ? "text" : "password";
     passwordEl.setAttribute("type", type);
     this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener("submit", active => {
     active.preventDefault();
});