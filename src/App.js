import { Button, message } from "antd";
import "./App.css";
import $ from "jquery";
import React from "react";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Hello, Ant Design", 5);
    setCount(count + 1);
  };

  function initparticles() {
    confetti();
  }

  function confetti() {
    $(".particletext.confetti").each(function () {
      var confetticount = ($(this).width() / 50) * 10;
      for (var i = 0; i <= confetticount; i++) {
        $(this).append(
          '<span class="particle c' +
            $.rnd(1, 2) +
            '" style="top:' +
            $.rnd(10, 50) +
            "%; left:" +
            $.rnd(0, 100) +
            "%;width:" +
            $.rnd(6, 8) +
            "px; height:" +
            $.rnd(3, 4) +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  }

  $.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  };
  // const success = () => {
  //   messageApi.open({
  //     type: "info",
  //     content: "This is a prompt message with custom className and style",
  //     className: "custom-class-message",
  //     style: {
  //       color: "white",
  //     },
  //   });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const me = document.querySelector(".ant-message-notice-content");
    if (me) {
      me.classList.add("textcontainer");
    }
    const con = document.querySelector(".ant-message-custom-content");
    if (con) {
      con.classList.add("particletext");
      con.classList.add("confetti");
    }
    initparticles();
  }, [info]);
  React.useEffect(() => {
    const me = document.querySelector(".ant-message-notice-content");
    if (me) {
      me.classList.add("textcontainer");
    }
    const con = document.querySelector(".ant-message-custom-content");
    if (con) {
      con.classList.add("particletext");
      con.classList.add("confetti");
    }
    initparticles();
  }, []);
  React.useEffect(() => {
    if (count === 1) {
      setTimeout(() => {
        setCount(0);
      }, 10000);
    }
  }, [count]);
  return (
    <>
      {contextHolder}
      <Button type="primary" className="btnMessage" onClick={info}>
        Display normal message
      </Button>
      {count == 1 && (
        <div class="textcontainer">
          <span class="particletext confetti">Confetti</span>
        </div>
      )}
    </>
  );
};

export default App;
