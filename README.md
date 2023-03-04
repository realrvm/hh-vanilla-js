## Приложение по распознованию кода из примера
##### Создано для демонстрации текущих навыков в ванильном `JavaScript`

Порядок работы:
1. Перейти в папку с проектом и установить сервер
```bash
npm install
```
2. Запустить сервер
```bash
npm run start
```
3. Открыть в браузере `index.html`
4. Вставить в `textarea` код из примера
```txt
15.07.2021  |  13:06:09 |  /wp-content/themes/trading/payment/result.php?InvId=11963099&OutSum=1&SignatureValue=E685495C815612A91284765C02C43790
{
    "InvId": "11963099",
    "OutSum": "1",
    "SignatureValue": "E685495C815612A91284765C02C43790"
}
----------------------
15.07.2021  |  13:06:09 |  /wp-content/themes/trading/payment/result.php?InvId=11963099&OutSum=1&SignatureValue=E685495C815612A91284765C02C43790
"Транзакция #11963099 не подтверждена из-за несоответствия ключей"
----------------------
15.07.2021  |  13:06:53 |  /wp-content/themes/trading/payment/result.php?InvId=11963099&OutSum=1&SignatureValue=433B5600F8A479B76B32F17A624C4784
{
    "InvId": "11963099",
    "OutSum": "1",
    "SignatureValue": "433B5600F8A479B76B32F17A624C4784"
}
----------------------
15.07.2021  |  13:06:53 |  /wp-content/themes/trading/payment/result.php?InvId=11963099&OutSum=1&SignatureValue=433B5600F8A479B76B32F17A624C4784
"Транзакция #11963099 подтверждена"
----------------------
15.07.2021  |  13:10:03 |  /wp-content/themes/trading/payment/result.php?InvId=11961199&OutSum=1&SignatureValue=BE50EE7BC09402CD839F6DCC484C143E
{
    "InvId": "11961199",
    "OutSum": "1",
    "SignatureValue": "BE50EE7BC09402CD839F6DCC484C143E"
}
----------------------
```
5. На сервере отправленный код находится в файле `db.json`
