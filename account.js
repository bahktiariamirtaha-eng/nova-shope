// ==========================================
// Nova Digital - Auth Page
// ==========================================

// ==========================================
// Header Menu Toggle
// ==========================================

function initHeaderMenu() {
  const headerActions = document.querySelector(".header-actions");
  const menuToggle = document.querySelector(".header-menu-toggle");

  if (!headerActions || !menuToggle) return;

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    headerActions.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!headerActions.contains(event.target)) {
      headerActions.classList.remove("active");
    }
  });
}

initHeaderMenu();

// ==========================================
// Cart Count Badge (shared novaCart key)
// ==========================================

function updateCartCountBadge() {
  const cart = JSON.parse(localStorage.getItem("novaCart")) || [];
  const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = total;
  });
}

updateCartCountBadge();

// ==========================================
// Toast
// ==========================================

function showAuthMessage(text, isError) {
  let toast = document.querySelector(".auth-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "auth-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.style.borderColor = isError ? "#ff4d6d" : "var(--primary)";
  toast.classList.add("show");

  clearTimeout(window.authToastTimer);
  window.authToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// ==========================================
// Tab Switching
// ==========================================

const tabs = document.querySelectorAll(".auth-tab");
const forms = document.querySelectorAll(".auth-form");
const switchLinks = document.querySelectorAll("[data-switch-to]");
const onlyLogin = document.querySelector('[data-only="login"]');
const onlySignup = document.querySelector('[data-only="signup"]');

function activateTab(name) {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === name);
  });

  forms.forEach((form) => {
    form.classList.toggle("active", form.dataset.form === name);
  });

  if (onlyLogin) onlyLogin.style.display = name === "login" ? "" : "none";
  if (onlySignup) onlySignup.style.display = name === "signup" ? "" : "none";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

switchLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    activateTab(link.dataset.switchTo);
  });
});

// ==========================================
// Password Visibility Toggle
// ==========================================

document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    const icon = this.querySelector("i");

    if (!input) return;

    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";

    icon.classList.toggle("fa-eye", !isHidden);
    icon.classList.toggle("fa-eye-slash", isHidden);
  });
});

// ==========================================
// Fake User Store (novaUsers / novaUser)
// ==========================================

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("novaUsers")) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("novaUsers", JSON.stringify(users));
}

function setSession(user) {
  localStorage.setItem(
    "novaUser",
    JSON.stringify({ name: user.name, phone: user.phone }),
  );
}

function isValidPhone(value) {
  return /^09\d{9}$/.test(value.trim());
}

// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const phone = document.getElementById("loginPhone").value.trim();
    const password = document.getElementById("loginPassword").value;

    loginError.textContent = "";

    if (!phone || !password) {
      loginError.textContent = "لطفاً همه‌ی فیلدها را پر کنید.";
      return;
    }

    const users = getUsers();
    const user = users.find(
      (u) => (u.phone === phone || u.email === phone) &&
        u.password === password,
    );

    if (!user) {
      loginError.textContent =
        "شماره موبایل یا رمز عبور اشتباه است.";
      return;
    }

    setSession(user);
    showAuthMessage(`خوش آمدی ${user.name}!`);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
  });
}

// ==========================================
// SIGNUP
// ==========================================

const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById(
      "signupPasswordConfirm",
    ).value;
    const accepted = document.getElementById("acceptTerms").checked;

    signupError.textContent = "";

    if (!name || !phone || !password || !confirm) {
      signupError.textContent = "لطفاً همه‌ی فیلدها را پر کنید.";
      return;
    }

    if (!isValidPhone(phone)) {
      signupError.textContent =
        "شماره موبایل را به‌درستی وارد کنید (مثلاً 09123456789).";
      return;
    }

    if (password.length < 6) {
      signupError.textContent = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
      return;
    }

    if (password !== confirm) {
      signupError.textContent = "رمز عبور و تکرار آن یکسان نیستند.";
      return;
    }

    if (!accepted) {
      signupError.textContent = "برای ادامه باید قوانین را بپذیرید.";
      return;
    }

    const users = getUsers();

    if (users.some((u) => u.phone === phone)) {
      signupError.textContent =
        "این شماره موبایل قبلاً ثبت‌نام کرده است.";
      return;
    }

    const newUser = { name, phone, password };
    users.push(newUser);
    saveUsers(users);
    setSession(newUser);

    showAuthMessage("حساب کاربری با موفقیت ساخته شد!");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
  });
}
