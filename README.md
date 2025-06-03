# ᴅ Reusable Components Factory

This project is part of the **Web Masters Frontend Internship - Task #5**. It includes a collection of **reusable React UI components** designed to be used in various scenarios with flexible and customizable props.

---

## 🚀 Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm start
```

---

## 📊 Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   └── Toast.jsx
├── App.jsx
└── index.js
```

---

## 🔹 Components

### 1. 🔘 Button

A customizable button component.

**Props:**

* `type`: string (e.g., "button", "submit")
* `value`: string (button text)
* `theme`: string ("primary", "danger", "success")
* `icon`: string (Font Awesome class)
* `size`: string (e.g., "full")
* `onClick`: function

**Usage:**

```jsx
<Button
  type="button"
  value="Click Me"
  theme="primary"
  icon="fa fa-user"
  size="full"
  onClick={() => alert("Clicked!")}
/>
```

---

### 2. 📝 Input

Reusable input field with label, placeholder, and validation.

**Props:**

* `label`: string
* `type`: string
* `placeholder`: string
* `value`: string
* `required`: boolean
* `onChangeHandler`: function

**Usage:**

```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  value={email}
  required={true}
  onChangeHandler={handleChange}
/>
```

---

### 3. 📃 Card

Dynamic card component to show **product**, **user**, or **article**.

**Props:**

* `type`: string ("products", "users", "articles")
* Depending on type: `product`, `user`, or `article` object

**Usage:**

```jsx
<Card type="products" product={productData} />
<Card type="users" user={userData} />
<Card type="articles" article={articleData} />
```

---

### 4. 🛏️ Modal

A toggleable modal window.

**Props:**

* `toggel`: boolean
* `setToggel`: function
* `title`: string
* `img`: string (optional)
* `children`: content inside modal

**Usage:**

```jsx
<Modal toggel={isOpen} setToggel={setIsOpen} title="Modal Title">
  <p>Modal content here</p>
</Modal>
```

---

### 5. 🔔 Toast

Popup message component (e.g. for alerts).

**Props:**

* `message`: string
* `setToast`: function to close toast

**Usage:**

```jsx
{toast && <Toast message="Button Clicked!" setToast={setToast} />}
```

---

## 🎉 Features

* Fully reusable and customizable components
* Organized folder structure
* Easy to extend and maintain

---

## 🚀 Bonus Idea

You can integrate Storybook or build a simple Docs page to preview and test each component interactively.

---

## 📅 License

This project is for educational and internship purposes.

---

## 👨‍💻 Author

**Developed by:** Yusef Arif
**Task Provided by:** Web Masters Frontend Internship
