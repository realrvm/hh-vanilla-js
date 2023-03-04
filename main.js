function init() {
  const area = document.querySelector(".trendup__textarea");
  const form = document.querySelector(".trendup__form");
  const result = document.querySelector(".trendup__result");
  const sendToServer = document.querySelector(".trendup__send");

  const API_URL = "http://localhost:3000/posts";
  const data = [];

  // отправка данных и запрос на получение данных из сервера
  async function sendPayments(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const text = await response.json();
        console.log(JSON.stringify({status: 'success'}));
      }
    } catch (error) {
      console.log(JSON.stringify({status: 'failed'}));
    }
  }

  // парсинг данных из textarea
  function parseData(data) {
    return data.map((m) => JSON.parse(m.replace(/\n/g, "")));
  }

  // отрисовка результата распознавания
  function paintPayments(match) {
    const payments = parseData(match);
    result.innerHTML = "";

    payments.forEach((payment, i) => {
      const { InvId, OutSum, SignatureValue } = payment;
      result.innerHTML += `<p>Платеж ${i + 1}:</p>
            <ul>
              <li>Cумма: ${OutSum}</li>
              <li>Номер платежа: ${InvId}</li>
              <li>Контрольная строка: ${SignatureValue.toLowerCase()}</li>
            </ul>`;
    });
  }

  // получение массива с данными о платежах
  function getValueFromTextArea(text) {
    const regexp =
      /^{\n(\s)*"InvId":(\s)*"(\d)+",\n(\s)*"OutSum":(\s)*"(\d)+",\n(\s)*"SignatureValue":(\s)*"([A-Z0-9])+"\n}$/gm;
    return text.match(regexp) || [];
  }

  // подготовка данных для отправки на сервер
  function preparePayments(payments) {
    const res = parseData(payments);
    res.forEach((payment) => {
      const { InvId, OutSum, SignatureValue } = payment;
      const obj = {};
      obj.sum = Number(OutSum);
      obj.id = Number(InvId);
      obj.signature_value = SignatureValue;
      data.push(obj);
    });
  }

  // обрабочик формы
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = area.value;
    if (text.length > 0) {
      const match = getValueFromTextArea(text);
      if (match.length > 0) {
        paintPayments(match);
        preparePayments(match);
      } else {
        alert("Неверный формат данных");
      }
    }
  });

  // обработчик отправки данных на сервер
  sendToServer.addEventListener("click", () => {
    sendPayments(API_URL, data);
  });
}

document.addEventListener("DOMContentLoaded", init);
