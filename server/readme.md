# Task

- ⁠Buat Aplikasi Website menggunakan Restfull API berbasis client server
- Menggunakan:
  - bahasa pemrograman (framework) yang paling dikuasai (Node.js ~ Express)
  - database yang paling dikuasai (NoSQL ~ MongoDB)
- ⁠Aplikasi website harus mempunyai fitur Computer Based Test (CBT).
  - Dengan soal pilihan ganda minimal 10 soal.
- Kemudian tampilkan nilai hasil akhirnya ( total jawaban benar / jumlah total soal x 100%)
- ⁠Aplikasi website harus mempunyai fitur menampilkan chart dalam bentuk spider chart (data boleh dummy).
- ⁠Aplikasi website mampu menampilkan notifikasi menggunakan firebase (optional)

# Run app

```
npm start
```

# Test

```
npm test
```

# API

| PATH                        | METHOD | PURPOSE                              |
| --------------------------- | ------ | ------------------------------------ |
| "/"                         | GET    | api root                             |
| "/init"                     | GET    | MUST: init data (40 questions)       |
| "/q"                        | GET    | get all questions                    |
| "/q"                        | POST   | create a question                    |
| "/q/:id"                    | PUT    | update a question                    |
| "/q/:id"                    | DELETE | delete a question                    |
| "/a"                        | GET    | get all answers                      |
| "/a"                        | POST   | create an answer                     |
| "/a/:userId/:topicId"       | GET    | get user answer for a specific topic |
| "/a/:userId/:topicId/grade" | GET    | get user grade for a specific topic  |
| "/topic                     | POST   | create a topic                       |
| "/topic                     | GET    | get all topic                        |
| "/topic/:topicId            | GET    | get topic by id                      |
| "/user                      | POST   | create a user                        |
| "/user                      | GET    | get all users                        |
| "/user/:userId              | GET    | get user by id                       |
