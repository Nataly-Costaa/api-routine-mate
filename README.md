
# 🧠 Routine Mate API

Bem-vindo ao **Routine Mate API**!  
Este projeto foi desenvolvido com **Node.js** e **Express** e tem como objetivo ajudar usuários a cadastrarem, monitorarem e gerenciarem seus hábitos diários de maneira simples e eficiente.

A API permite que você:
- Cadastre novos hábitos;
- Marque hábitos como concluídos;
- Gere relatórios de progresso;
- Exclua hábitos indesejados.

O armazenamento é feito de forma local, utilizando um arquivo JSON (`db.json`), dispensando bancos de dados externos, ideal para fins didáticos e pequenos projetos.

---

## 💻 Como rodar este projeto localmente

1️⃣ **Clone o repositório:**

```bash
git clone https://github.com/Nataly-Costaa/api-routine-mate.git
```

2️⃣ **Acesse a pasta do projeto:**

```bash
cd api-routine-mate
```

3️⃣ **Instale as dependências:**
```bash
npm install
```

4️⃣ **Inicie o servidor:**
```bash
npm run dev
```

5️⃣ **Servidor rodando!**

O servidor estará disponível por padrão em:

```http
http://localhost:3000/habits
```
---

## 🛠️ Endpoints Disponíveis

| Método   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/habits` | Lista todos os hábitos cadastrados|
| `POST` | `/habits/register`| 	Cadastra um novo hábito |
| `PATCH` | `/habits/:id/complete`| 	Marca um hábito como concluído |
| `GET` | `/habits/report`| 	Gera um relatório de progresso |
| `DELETE` | `/habits/:id`| 	Remove um hábito pelo ID |

---

## ⚙️ Observações importantes
- O projeto **não utiliza banco de dados externo**. Os hábitos são armazenados localmente no arquivo **src/data/db.json**.
