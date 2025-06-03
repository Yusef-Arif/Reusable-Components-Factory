import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Toast from "./components/Toast";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    email: "",
  });
  const onChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const [toggel, setToggel] = useState(false);
  const [toast, setToast] = useState(false);
  // Sample data for buttons, inputs, and cards
  const buttons = [
    {
      type: "button",
      onClick: () => alert("Button clicked!"),
      value: "click me",
      icon: "fa fa-user",
      theme: "primary",
    },
    {
      type: "button",
      onClick: () => alert("Password button clicked!"),
      value: "password",
      icon: "fa fa-lock",
      theme: "danger",
      size: "full",
    },
    {
      type: "button",
      onClick: () => alert("Email button clicked!"),
      value: "email",
      icon: "fa fa-envelope",
      theme: "success",
    },
  ];
  // Sample data for inputs
  const inputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      value: inputValue.name,
      required: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: inputValue.password,
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: inputValue.email,
      required: true,
    },
  ];
  // Sample data for cards
  const cards = [
    {
      type: "products",
      product: {
        title: "Card 1",
        img: "https://m.media-amazon.com/images/I/61qQCRAQ3sL._AC_SL1500_.jpg",
        rate: 4.5,
        description: "This is a description for card 1.",
        price: "$10.00",
      },
    },
    {
      type: "products",
      product: {
        title: "Card 2",
        img: "https://m.media-amazon.com/images/I/61qQCRAQ3sL._AC_SL1500_.jpg",
        rate: 3.5,
        description: "This is a description for card 2.",
        price: "$20.00",
      },
    },
    {
      type: "users",
      user: {
        name: "John Doe",
        img: "https://shorturl.at/bFLNp",
        email: "john@gmail.com",
      },
    },
    {
      type: "users",
      user: {
        name: "Jane Smith",
        img: "https://shorturl.at/bFLNp",
        email: "Jane@gmail.com",
      },
    },
    {
      type: "articles",
      article: {
        title: "Article 1",
        img: "https://i.pinimg.com/736x/33/21/f9/3321f901891f7d2c06854f84d6e43043.jpg",
        description: "This is a description for article 1.",
        history: "2023-10-01",
      },
    },
    {
      type: "articles",
      article: {
        title: "Article 2",
        img: "https://i.pinimg.com/736x/33/21/f9/3321f901891f7d2c06854f84d6e43043.jpg",
        description: "This is a description for article 2.",
        history: "2023-10-02",
      },
    },
    {
      type: "articles",
      article: {
        title: "Article 3",
        img: "https://i.pinimg.com/736x/33/21/f9/3321f901891f7d2c06854f84d6e43043.jpg",
        description: "This is a description for article 3.",
        history: "2023-10-03",
      },
    },
  ];

  return (
    <section className="m-4">
      <div>
        <h1 className="text-4xl text-black font-semibold">Button component:</h1>
        <div className="flex flex-col items-start justify-center gap-4 m-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-black font-semibold">Input component:</h1>
        <div className="flex flex-col items-start justify-center gap-4 m-4">
          {inputs.map((input, index) => (
            <Input key={index} {...input} onChangeHandler={onChangeHandler} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-black font-semibold">Card component:</h1>
        <div className="flex flex-wrap  items-start gap-4 m-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-black font-semibold">Model component:</h1>
        <div className="flex justify-center items-start m-4">
          <i
            onClick={() => setToggel(!toggel)}
            className="fa-solid fa-eye text-5xl cursor-pointer text-green-400"
          ></i>
          <Modal
            toggel={toggel}
            setToggel={setToggel}
            title="Modal title"
            img="https://shorturl.at/bFLNp"
          >
            <p className="text-gray-500 text-center m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              magni, soluta aut quod corporis recusandae rem sint neque eum et
              fugit fugiat sed, laudantium modi obcaecati consequatur sapiente
              error itaque!
            </p>
          </Modal>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-black font-semibold">Toast component:</h1>
        <div className="flex flex-wrap  items-start gap-4 m-4">
          <Button
            type="button"
            value="click me"
            icon="fa fa-bell"
            theme="danger"
            onClick={() => setToast(true)}
          />
          {toast && (
          <Toast message="button clicked!" setToast={setToast} />)}
        </div>
      </div>
    </section>
  );
}

export default App;
