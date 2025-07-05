
# 🧠 Routine Mate API

A **Routine Mate API** é uma API REST desenvolvida em **Node.js**, utilizando **Express** e **Prisma ORM**, com banco de dados PostgreSQL hospedado na **Neon**.  
Ela tem como objetivo ajudar usuários a **cadastrarem, monitorarem e gerenciarem seus hábitos diários** de forma prática.

---

## 🚀 Funcionalidades

- ✅ Cadastrar novos hábitos
- ✅ Marcar hábitos como concluídos
- ✅ Consultar todos os hábitos
- ✅ Consultar um hábito por ID
- ✅ Excluir hábitos
- ✅ Gerar relatório de progresso

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL (Neon)](https://neon.tech/)
- [Nodemon](https://nodemon.io/)
- [UUID](https://www.npmjs.com/package/uuid)
- [CORS](https://www.npmjs.com/package/cors)

---

## 💻 Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Nataly-Costaa/api-routine-mate.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd api-routine-mate
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```env
DATABASE_URL="postgresql://<USUARIO>:<SENHA>@<HOST>.neon.tech/<DATABASE>?sslmode=require"
```

Substitua os dados da URL com os valores fornecidos pela plataforma **Neon**.

---

### 5️⃣ Rode as migrações do Prisma

```bash
npx prisma migrate dev --name init
```

> Ou use o script:

```bash
npm run prisma:migrate
```

---

### 6️⃣ Inicie o servidor

```bash
npm run dev
```

A aplicação está hospedada no Render e pode ser acessada em:

[https://api-routine-mate.onrender.com/habits](https://api-routine-mate.onrender.com/habits)

---

## 📌 Endpoints disponíveis

| Método   | Rota                         | Descrição                              |
|----------|------------------------------|----------------------------------------|
| `GET`    | `/habits`                    | Lista todos os hábitos                 |
| `POST`   | `/habits/register`           | Cadastra um novo hábito                |
| `GET`    | `/habits/:id`                | Busca um hábito pelo ID                |
| `PATCH`  | `/habits/:id/complete`       | Marca um hábito como concluído         |
| `DELETE` | `/habits/:id`                | Remove um hábito pelo ID               |
| `GET`    | `/habits/report`             | Gera um relatório de progresso geral   |

---

## ✅ Exemplo de requisição para criar um hábito

**POST** `/habits/register`  
Body (JSON):

```json
{
  "title": "Ler um capítulo",
  "description": "Ler todos os dias pela manhã",
  "goal": "Diariamente"
}
```

---

## 📊 Relatório de progresso

**GET** `/habits/report`  
Retorna:

```json
{
  "total": 2,
  "completed": 1,
  "pending": 1,
  "progress": "1/2 hábitos concluídos"
}
```

---

## 🧩 Estrutura do projeto

```
prisma/
├── schema.prisma
src/
├── controller/
│   └── habit.controller.js
├── middleware/
│   └── cors.js
├── routes/
│   └── habit.routes.js
├── service/
│   └── habit.service.js
├── server.js
```

---

## 📝 License

Este projeto é de uso pessoal/educacional e não possui uma licença formal definida.
