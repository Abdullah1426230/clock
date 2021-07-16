  function updateDate() {
      var date = new Date();
      var setTime = document.getElementById("setTime");
      setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      var setDate = document.getElementById("setDate");
      setDate.innerHTML = date.getFullYear() + " / " + parseInt(date.getMonth() + 1) + " / " + date.getDate();
  }

  setInterval(updateDate, 100);
  onload = updateDate();

  function color() {
      var setColor = document.getElementById("setColor").value;
      localStorage.setItem("Color", setColor);
      document.body.style.background = localStorage.getItem("Color");
  }

  function bgcolor() {
      setColor = localStorage.getItem("Color");
      document.body.style.background = localStorage.getItem("Color");
  }
  setInterval(bgcolor, 50);