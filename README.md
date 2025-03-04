# 🚀 node-morph-api

For the English version of this README, click [here](README_EN.md).

**node-morph-api** é uma API dinâmica e flexível que permite conectar-se facilmente a um banco de dados e consumir dados sem configurações complexas. Essa API foi projetada para facilitar a integração de backend para desenvolvedores frontend, permitindo a recuperação rápida de dados e o teste de fluxos de trabalho do frontend.

## 🌟 Recursos

✅ **Conexão fácil com banco de dados** - Configure e conecte-se rapidamente ao seu banco de dados sem definições manuais de esquema.  
✅ **Acesso dinâmico a tabelas** - Consulte e manipule qualquer tabela usando endpoints RESTful.  
✅ **Testes rápidos** - Ideal para desenvolvedores frontend testarem interações de UI sem precisar criar um backend completo.  
✅ **Operações CRUD** - Suporte a requisições `GET`, `POST`, `PUT` e `DELETE` para um gerenciamento de dados simplificado.  
✅ **Seguro e eficiente** - Construído com validação de entrada para prevenir SQL injection e garantir estabilidade.  
✅ **Tratamento abrangente de erros** - Lida com todos os possíveis erros do banco de dados, incluindo problemas de conexão e falhas de consulta.  

## 📘 Configuração do Banco de Dados (Sequelize)

Este projeto usa [Sequelize](https://sequelize.org/) para gerenciar conexões com o banco de dados. Abaixo estão as variáveis de ambiente configuráveis e seus valores padrão.

### 📌 **Variáveis de Ambiente**

| Variável | Valor Padrão | Descrição |
|----------|--------------|-------------|
| `POSTGRES_DB` | `postgres` | Nome do banco de dados. |
| `POSTGRES_USER` | `postgres` | Nome de usuário para autenticação no banco. |
| `POSTGRES_PASSWORD` | `postgres` | Senha para autenticação no banco. |
| `POSTGRES_DB_HOST` | `localhost` | Host do banco de dados. |
| `POSTGRES_DB_PORT` | `5432` | Porta do banco de dados. |
| `POSTGRES_DB_DIALECT` | `postgres` | Dialeto do banco (`postgres`, `mysql`, `mariadb`, etc.). |
| `POSTGRES_DB_LOGGING` | `false` | Habilita logs de SQL se definido como `"true"`. |
| `POSTGRES_DB_SSL` | `false` | Habilita conexão SSL com o banco se definido como `"true"`. |
| `POSTGRES_DB_POOL_MAX` | `5` | Número máximo de conexões no pool. |
| `POSTGRES_DB_POOL_MIN` | `0` | Número mínimo de conexões no pool. |
| `POSTGRES_DB_POOL_ACQUIRE` | `30000` | Tempo máximo (ms) para adquirir uma conexão antes de gerar erro. |
| `POSTGRES_DB_POOL_IDLE` | `10000` | Tempo máximo (ms) que uma conexão pode permanecer inativa antes de ser liberada. |
| `POSTGRES_DB_POOL_EVICT` | `10000` | Intervalo (ms) para verificação e remoção de conexões inativas. |
| `POSTGRES_DB_POOL_MAX_USES` | `Infinity` | Número de vezes que uma conexão pode ser usada antes de ser descartada. |

### 🛠 **Como Configurar**

Você pode definir essas variáveis em um arquivo `.env` na raiz do seu projeto:

```env
POSTGRES_DB=mydatabase
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB_HOST=localhost
POSTGRES_DB_PORT=5432
POSTGRES_DB_DIALECT=postgres
POSTGRES_DB_LOGGING=false
POSTGRES_DB_SSL=true
POSTGRES_DB_POOL_MAX=10
POSTGRES_DB_POOL_MIN=2
POSTGRES_DB_POOL_ACQUIRE=30000
POSTGRES_DB_POOL_IDLE=10000
POSTGRES_DB_POOL_EVICT=10000
POSTGRES_DB_POOL_MAX_USES=10000
```

## 🔄 Endpoints da API

### 📌 Obter todos os registros de uma tabela

```http
GET /api/{table}
```

### 📌 Obter um registro específico pelo ID

```http
GET /api/{table}/{id}
```

### 📌 Criar um novo registro

```http
POST /api/{table}
Content-Type: application/json
```

### 📌 Atualizar um registro existente

```http
PUT /api/{table}/{id}
Content-Type: application/json
```

### 📌 Excluir um registro

```http
DELETE /api/{table}/{id}
```

## 📌 Exemplos

### 🟢 Obter todos os registros de uma tabela

```http
GET /api/users
```

**Resposta:**

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
]
```

### 🟢 Criar um novo registro

```json
{
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```

**Resposta:**

```json
{ "id": 3, "name": "Alice Smith", "email": "alice@example.com" }
```

## 🔧 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript para backend.
- **Express.js** - Framework leve para gerenciamento de rotas.
- **Sequelize** - ORM para conexão com o banco de dados.
- **PostgreSQL** - Banco de dados padrão (pode ser alterado).
- **dotenv** - Gerenciamento de variáveis de ambiente.

## 💡 Casos de Uso

🔹 **Testes de Frontend** - Configuração rápida para testar chamadas de API.  
🔹 **Prototipagem de Banco de Dados** - Acesse tabelas dinamicamente sem definir esquemas manualmente.  
🔹 **Recuperação de Dados Simulada** - Busque e manipule dados sem um backend pré-construído.  
🔹 **Facilidade para Desenvolvedores** - Foque no frontend enquanto a API gerencia a lógica do backend.  

### 🔒 **Considerações de Segurança**

- **Nunca exponha credenciais sensíveis** em repositórios públicos.
- **Habilite SSL** (`POSTGRES_DB_SSL=true`) ao conectar-se a bancos de dados na nuvem.
- **Use senhas fortes** e gerencie credenciais com ferramentas seguras.

## 🚀 Contribuição

Contribuições são bem-vindas! Fique à vontade para abrir issues, sugerir melhorias ou enviar pull requests.

## 📜 Licença

Este projeto está licenciado sob a MIT License.

