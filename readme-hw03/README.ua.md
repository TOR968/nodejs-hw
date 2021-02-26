**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Домашнє завдання 3

Створи гілку `03-mongodb` з гілки `master`.

Продовж створення REST API для роботи з колекцією контактів.

## Крок 1

Створи аккаунт на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Після
чого в акаунті створи новий проект і настрій **бесплатный кластер**. Під час
налаштування кластера вибери провавйдера і регіон як на скріншоті нижче. Якщо
вибрати занадто віддалений регіон, швидкість відповіді сервера буде довше.

![atlas cluster setup](./atlas-cluster.jpg)

## Крок 2

Установи графічний редактор
[MongoDB Compass](https://www.mongodb.com/download-center/compass) для зручної
роботи з базою даних для MongoDB. Настрій підключення своєї хмарної бази даних
до Compass. У MongoDB Atlas не забудь створити користувача з правами
адміністратора.

## Крок 3

Через Compass створи базу даних `db-contacts` і в ній колекцію `contacts`.
Візьми [ссылка на json](./contacts) і за допомогою Compass наповни колекцію
`contacts` (зроби імпорт) його вмістом.

## Крок 4

Використовуй вихідний код [домашней работы #2](../homework-02/README.md) і
заміни зберігання контактів з json-файлу на створену тобою базу даних.

- Напиши код для створення підключення до MongoDB за допомогою
  [Mongoose](https://mongoosejs.com/).
  - При успішному підключенні виведи в консоль повідомлення
    `"Database connection successful"`.
  - Обов'язково обробив помилку підключення. Виведи в консоль повідомлення
    помилки і заверши процес використовуючи `process.exit(1)`.
- У функціях обробки запитів заміни код CRUD-операцій над контактами з файлу, на
  Mongoose-методи для роботи з колекцією контактів в базі даних.