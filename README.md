<h2 align="center">⚒️ Este é um projeto para avaliação de conhecimento para a empresa Hausz ⚒️</h2>

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
e pode instalar o insomnia para teste a applicção deployada [Insomnia](https://insomnia.rest/download).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Lt-lopes1994/Topico01-02-teste-proficiencia-Hausz.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Topico01-02-teste-proficiencia-Hausz

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev para rodar localmente ou teste pela URL<https://teste-hausz-topico01-02.herokuapp.com/> usando os endpoints disponibilizados no README.md

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>

# Para rodar a apicação no deploy basta acessar o teste-Hausz-rotas-de-teste dentro dos arquivos baixados
#e rodar no insomnia para obter os resultados.

```

<h2 align="center">Para o crud de contas da realização livre os endpoints são:</h2>

### POST - Cadastro (/signUp)

### **Exemplo de requisição**

```javascript
// POST/signUp
{
    "name": "José",
    "email": "jose@email.com",
    "password": "12345senha"

}
```

#### Dados retornados

- Sucesso

```javascript
HTTP Status 201
```

- Erro

```javascript

// POST/signUp
{
"error": "name é um campo obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "email já cadastrado"
}

HTTP Status 400

-------------------------------

{
"error": "Senha precisa ter no minímo 8 caracteres"
}

HTTP Status 400
```

---

### POST - Login (/login)

### **Exemplo de requisição**

```javascript
// POST/login
{
    "email": "jose@email.com",
    "password": "12345senha"
}
```

#### Dados retornados

```javascript

// POST/login
{
 "user": {
		"id": 14,
		"name": "João Silva",
		"email": "silva.joaoe@email.email"
	},
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY1NDU1MDE0NywiZXhwIjoxNjU0NTU3MzQ3fQ.fg2A9QzDf-uziNtKUHvVvuudYsDZyXo5IqQV-VXDmNE",
  "message": "login realizado com sucesso"
}

HTTP Status 200
```

- Erro

```javascript

// POST/login
{
"error": "email ou senha estão incorretos"
}

HTTP Status 400

-------------------------------

{
"error": "usuário não encontrado"
}

HTTP Status 404

-------------------------------

{
"error": "senha precisa ter no minímo 8 caracteres"
}

HTTP Status 400

```

---

### GET - Informações do perfil de usuário (/user)

#### Dados enviados

- Token

#### Dados retornados

```javascript
{
	"id": 1,
	"name": "João",
	"email": "joão@fakeemail.com",
	"cpf": "99999944466",
	"phone": "19999999999"
}
```

#### Erro

```javascript
{
	"message": "jwt must be provided"
}
```

---

### PATCH - Editar perfil do usuário (/user/updateUser)

#### Dados enviados

{
"id": 1,
"name": "João",
"email": "joão@fakeemail.com",
"cpf": "99999944466",
"phone": "19999999999"
}

**Exemplo de requisição**

```javascript

// PATCH/updateUser
{
   "cpf": 87548269312,
   "phone": 62758946987
}

```

#### Dados retornados

- Sucesso

```javascript

// PATCH/updateUser
{
 "message": "cadastro alterado com sucesso"
}

HTTP Status 200
```

- Erro

```javascript

// PATCH/updateUser
{
"error": "é necessário infomar no minímo um campo para a atualização do usuário"
}

HTTP Status 400

-------------------------------

{
"error": "email já cadastrado"
}

HTTP Status 400

-------------------------------

{
"error": "password precisa ter no minímo 8 caracteres"
}

HTTP Status 400

-------------------------------

{
"error": "o campo cpf não pode ser alterado"
}

HTTP Status 400

```

#### Objetivos gerais

- Verificar se o token é válido
- É obrigatório informar no minímo um campo para atualização do cadastro
- Verificar se o email já está cadastrado
- Para cadastrar o cpf é necessário tem 11 números
- Para cadastrar o phone é necessário tem 11 números
- Verificar se o new_password tem no minímo 8 caracteres
- Não pode alterar um cpf se o usuário já tiver cadastrado anteriormente

---

### GET - Cobranças pagas (/chargesPaid)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro

#### Objetivos gerais

- Verificar se o token é válido
- Retornar o valor total de todas as cobranças pagas

---

### GET - Cobranças vencidas (/overdueCharges)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro

#### Objetivos gerais

- Verificar se o token é válido
- Retornar o valor total de todas as cobranças vencidas

---

### GET - Cobranças previstas (/anticipatedCharges)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro

#### Objetivos gerais

- Retornar o valor total de todas as cobranças previstas

---

### GET - Destaques cobranças vencidas (/highlightsOverdueCollections)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro
- Nome do cliente
- Id da cobrança
- Valor

#### Objetivos gerais

- Verificar o token
- Retornar quatro cobranças vencidas

---

### GET - Destaques cobranças previstas (/highlightsExpectedCharges)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro
- Nome do cliente
- Id da cobrança
- Valor

#### Objetivos gerais

- Verificar o token
- Retornar quatro cobranças previstas

---

### GET - Destaques cobranças pagas (/highlightsPaidCharges)

#### Dados enviados

- Token

#### Dados retornados

- Sucesso ou erro
- Nome do cliente
- Id da cobrança
- Valor

#### Objetivos gerais

- Verificar o token
- Retornar quatro cobranças pagas

---

### GET - Destaques clientes inadiplentes (/delinquentCustomerHighligths)

#### Dados enviados

- Token

#### Dados retornados

```javascript

GET /delinquentCustomerHighligths

{
	"data": [
		{
			"name": "client 1",
			"due_date": "2022-03-22",
			"value": 25000,
			"id": 1
		},
		{
			"name": "client 2",
			"due_date": "2022-03-22",
			"value": 25000,
			"id": 2
		}
	]
}
```

---

### GET - Destaques clientes em dia (/highlightsCustomersUpToDate)

#### Dados enviados

- Token

#### Dados retornados

````javascript
GET /highlightsCustomersUpToDate
{
	"message": "clientes em dia"
}
[
	{
		"id": 3,
		"user_id": 2,
		"client_id": 3,
		"value": 1000,
		"paid": true,
		"due_date": "2022-06-27T00:00:00.000Z",
		"description": "compra de ração",
		"name": "Joselito sem noção",
		"email": "joselito@fakemail.com",
		"cpf": "33333333333",
		"phone": "93321445322",
		"adress": "1234",
		"cep": "12345678",
		"complement": "casa dos fundos",
		"district": "anywhere",
		"city": "Metal Land",
		"uf": "ML",
		"defaulter": false
	}
]
```

---

### GET - Clientes (/customers)

#### Dados enviados

- token

#### Dados retornados

```javascript

// GET/customers
{
"data":
        {
          "name": "Sara Lage Silva",
          "cpf": 05436525587,
          "email": "sarasilva@gmail.com",
          "phone": 71994628654,
          "status": "Inadimplente"
        },
        {
          "name": "Cameron Freitas",
          "cpf": 83136525521,
          "email": "cameronfreitas@gmail.com",
          "phone": 78912645654,
          "status": "Em dia"
        }
}

HTTP Status 200

-------------------------------

{
 "message": "Não há clientes cadastrados"
}

HTTP Status 200


```

- Erro

```javascript

// GET/customers
{
"error": "token obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "token inválido"
}

HTTP Status 400

```

---

### POST - Cadastro clientes (/registerCustomer)

#### Dados enviados

**Exemplo de requisição**

```javascript

// POST/registerCustomer
{
    "name": "Tadeu Silveira",
    "email": "tadeusilveira@gmail.com",
    "cpf": 78945612378,
    "phone": 11993184567,
    "city": "Santo André",
    "uf": "SP"
}

```

#### Dados retornados

- Sucesso

```javascript

// POST/registerCustomer
{
"message": "cliente cadastrado com sucesso"
}

HTTP Status 200
```

- Erro

```javascript

// POST/registerCustomer
{
"error": "o campo nome é obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "email já cadastrado"
}

HTTP Status 400

-------------------------------

{
"error": "cpf já cadastrado"
}

HTTP Status 400

```

---

### GET - Detalhamento do cliente (/customerDetail)

#### Dados enviados

- token
- id_customer

**Exemplo de requisição**

```javascript

// GET/customerDetail
{
"id_customer": 12
}

```

#### Dados retornados

```javascript

// GET/customerDetail
{
"data":
    "name": "Sara Lage Silva",
    "email": "sarasilva@gmail.com",
    "address": "Rua das Cornélias",
    "phone": 71994628654,
    "district": "Oliveiras",
    "cpf": 05436525587,
    "complement": "Ap: 502",
    "cep": 40015970,
    "city": "Salvador",
    "uf": "BA"
}

HTTP Status 200
```

- Erro

```javascript

// GET/customerDetail
{
"error": "id_customer obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "cliente não encontrado"
}

HTTP Status 404
```

---

### PATH - Atualização do cliente(/customerUpdate)

#### Dados enviados

**Exemplo de requisição**

```javascript

// PATH/customerUpdate
{
    "id_customer": 12,
    "email": "novoEmail@gmail.com",
    "phone": 011998756431
}

```

#### Dados retornados

- Sucesso

```javascript

// PATH/customerUpdate
{
"message": "edição do cadastro concluído com sucesso"
}

HTTP Status 200
```

- Erro

```javascript

// PATH/customerUpdate
{
"error": "id_customer obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "cliente não encontrado"
}

HTTP Status 404

-------------------------------

{
"error": "é necessário informar ao menos um campo além do id_customer para realizar a atualização do cliente "
}

HTTP Status 400

-------------------------------

{
"error": "email já cadastrado "
}

HTTP Status 400

-------------------------------

{
"error": "o campo phone deve ser preenchido"
}

HTTP Status 400

-------------------------------

{
"error": "o campo phone deve ter 11 caracteres"
}

HTTP Status 400

-------------------------------
```

---

### POST - Cadastro de cobranças (/billingRegister)

#### Dados enviados

**Exemplo de requisição**

```javascript

// GET/customerDetail
{
   "id_customer": 12,
   "description": "conta de água condomínio",
   "due_date": "2022-06-22",
    "value": 450000,
    "paid": false
}

```

#### Dados retornados

```javascript

// POST/billingRegister
{
 "message": "cobrança cadastrada com sucesso"
}

HTTP Status 201
```

- Erro

```javascript

// GET/customerDetail
{
"error": "id_customer obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "cliente não encontrado"
}

HTTP Status 404

-------------------------------

{
"error": "description é um campo obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "due_date é um campo obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "value é um campo obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "paid é um campo obrigatório"
}

HTTP Status 400

```

---

### GET - Listagem de cobranças (/billingList)

#### Dados enviados

- token

#### Dados retornados

```javascript

// GET/billingList
{
"data":
    {
        "name": "Ana Carolina",
        "id_charge": 50125,
        "value": 21000,
        "due_date": "2022-07-20",
        "status": "pendente",
        "description": "conta de internet"
    },
    {
       "name": "Pedro Teixeira",
        "id_charge": 48523,
        "value": 35000,
        "due_date": "2022-05-12",
        "status": "vencida",
        "description": "condomínio"
    }

}

HTTP Status 200

{
    "message": "Não há cobranças cadastradas"
}

HTTP Status 200
```

- Erro

```javascript

// GET/billingList
{
"error": "token obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "token inválido"
}

HTTP Status 400
```

### GET - Listagem de cobranças do cliente(/customerBillingList)

#### Dados enviados

- token
- id_customer

**Exemplo de requisição**

```javascript

// GET/customerBillingList
{
"id_customer": 12
}

```

#### Dados retornados

- Sucesso

```javascript

// GET/customerBillingList
{
"data":
    {
        "id_charge": 50125,
        "due_date": "2022-07-20",
        "value": 21000,
        "status": "pendente",
        "description": "Conta de internet"
    },
    {
       "id_charge": 50789,
       "due_date": "2022-05-22",
       "value": 450000 ,
       "status": "vencida",
       "description": "conta de água condomínio"
    }

}

HTTP Status 200

// GET/customerBillingList
{
    "message": "O cliente não possui cobranças"
}

HTTP Status 200
```

- Erro

```javascript

// GET/customerBillingList
{
"error": "id_customer obrigatório"
}

HTTP Status 400

-------------------------------

{
"error": "cliente não encontrado"
}

HTTP Status 404
```
````

---

<h1 align="center"> Dados para o crud de uso do CVS: </h1>

### POST - cadastro de CSV na DB (/products)

#### Dados enviados

    	- token
    	- csv(se encontra presente dentro do arquivo local. Não está fazendo por requisição).

#### Dados retornados

- Sucesso

```javascript

HTTP 201 - Created
```

### GET - Listagem de CSV na DB (/products)

#### Dados enviados

    - token

#### Dados retornados:

    - Sucesso

```javascript
[
  {
    id: "241032",
    listing_url: "https://www.airbnb.com/rooms/241032",
    scrape_id: "20160104002432",
    last_scraped: "2016-01-04",
    name: "Stylish Queen Anne Apartment",
    sumary: null,
    space:
      "Make your self at home in this charming one-bedroom apartment, centrally-located on the west side of Queen Anne hill.   This elegantly-decorated, completely private apartment (bottom unit of a duplex) has an open floor plan, bamboo floors, a fully equipped kitchen, a TV,  DVD player, basic cable, and a very cozy bedroom with a queen-size bed. The unit sleeps up to four (two in the bedroom and two on the very comfortable fold out couch, linens included) and includes free WiFi and laundry. The apartment opens onto a private deck, complete with it's own BBQ, overlooking a garden and a forest of black bamboo.    The Apartment is perfectly-located just one block from the bus lines where you can catch a bus and be downtown Seattle in fifteen minutes or historic Ballard in ten or a quick five-minute walk will bring you to Whole Foods and Peet's Coffee or take a fifteen minute walk to the top of Queen Anne Hill where you will find a variety of eclectic shops, bars, and restaurants. There is no",
    description:
      "Make your self at home in this charming one-bedroom apartment, centrally-located on the west side of Queen Anne hill.   This elegantly-decorated, completely private apartment (bottom unit of a duplex) has an open floor plan, bamboo floors, a fully equipped kitchen, a TV,  DVD player, basic cable, and a very cozy bedroom with a queen-size bed. The unit sleeps up to four (two in the bedroom and two on the very comfortable fold out couch, linens included) and includes free WiFi and laundry. The apartment opens onto a private deck, complete with it's own BBQ, overlooking a garden and a forest of black bamboo.    The Apartment is perfectly-located just one block from the bus lines where you can catch a bus and be downtown Seattle in fifteen minutes or historic Ballard in ten or a quick five-minute walk will bring you to Whole Foods and Peet's Coffee or take a fifteen minute walk to the top of Queen Anne Hill where you will find a variety of eclectic shops, bars, and restaurants. There is no",
    experiences_offered: "none",
    neighborhood_overview: "",
    notes: "",
    transit: "",
    thumbnail_url: "",
    medium_url: "",
    picture_url:
      "https://a1.muscache.com/ac/pictures/67560560/cfe47d69_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
    xl_picture_url: "",
    host_id: "956883",
    host_url: "https://www.airbnb.com/users/show/956883",
    host_name: "Maija",
    host_since: "2011-08-11",
    host_location: "Seattle, Washington, United States",
    host_about:
      "I am an artist, interior designer, and run a small landscape business. My life revolves around beauty wherever I find it or create it. I grew up in Seattle and love this city for the people, it's natural beauty and don't know anywhere else I would rather call home. I love to travel and try to do so as much as possible and am excited to be a part of the airbnb community!",
    host_response_time: "within a few hours",
    host_response_rate: "96%",
    host_acceptance_rate: "100%",
    host_is_superhost: "f",
    host_tuhmbnail_url: null,
    host_picture_url:
      "https://a0.muscache.com/ac/users/956883/profile_pic/1318103129/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
    host_neighbourhood: "Queen Anne",
    host_listings_count: "3",
    host_total_listings_count: "3",
    host_verifications: "['email', 'phone', 'reviews', 'kba']",
    host_has_profile_pic: "t",
    host_identity_verified: "t",
    street: "Gilman Dr W, Seattle, WA 98119, United States",
    neighbourdhood: null,
    neighbourhood_cleansed: "West Queen Anne",
    neighbourhood_group_cleansed: "Queen Anne",
    city: "Seattle",
    state: "WA",
    zipcode: 98119,
    market: "Seattle",
    smart_location: "Seattle, WA",
    country_code: "US",
    country: "United States",
    latitude: 47.636289038357184,
    longitude: -122.37102519997765,
    is_location_exact: "t",
    property_type: "Apartment",
    room_type: "Entire home/apt",
    accommodates: 4,
    bedrooms: 1,
    beds: 1,
    bed_type: "Real Bed",
    amenities:
      '{TV,"Cable TV",Internet,"Wireless Internet","Air Conditioning",Kitchen,Heating,"Family/Kid Friendly",Washer,Dryer}',
    square_feet: "",
    price: "$85.00",
    weekly_price: "",
    monthly_price: "",
    security_deposit: "",
    cleaning_fee: "",
    guests_included: "2",
    extra_people: "$5.00",
    minimum_night: null,
    maximum_night: null,
    calendar_updated: "4 weeks ago",
    has_availability: "t",
    availability_30: 14,
    availability_60: 41,
    availability_90: 71,
    availability_365: 346,
    calendar_last_scraped: "2016-01-04",
    number_of_reviews: 207,
    first_review: "2011-11-01",
    last_review: "2016-01-02",
    review_scores_rating: 95,
    review_scores_accuracy: 10,
    review_scores_cleanliness: 10,
    review_scores_checkin: 10,
    review_scores_communication: 10,
    review_scores_location: 9,
    review_scores_value: 10,
    requires_license: "f",
    license: "",
    jurisdiction_names: "WASHINGTON",
    instant_bookable: "f",
    cancellation_policy: "moderate",
    require_guest_profile_picture: "f",
    require_guest_phone_verification: "f",
    calculated_host_listings_count: 2,
    reviews_per_month: 4.07,
    bathrooms: 1,
    host_thumbnail_url:
      "https://a0.muscache.com/ac/users/956883/profile_pic/1318103129/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=50:*&output-format=jpg&output-quality=70",
    maximum_nights: 365,
    minimum_nights: 1,
    neighbourhood: "Queen Anne",
    summary: "",
  },
  {
    id: "953595",
    listing_url: "https://www.airbnb.com/rooms/953595",
    scrape_id: "20160104002432",
    last_scraped: "2016-01-04",
    name: "Bright & Airy Queen Anne Apartment",
    sumary: null,
    space:
      "Beautiful, hypoallergenic apartment in an extremely safe, quiet and pedestrian-friendly section of Queen Anne.  A leafy-green location that puts the best of Seattle at your doorstep. Free WiFi, free parking, ...even free pillows!  What's special about this place? Hypo-allergenic bedding, mattresses/covers and new pillows with each rental. (So feel free to take your new pillows with you!)  A beautiful restoration mixing period details & modern sensibilities: Hardwood floors throughout, white subway tile, low/no VOCs & non-toxic paints keep this home-away-from-home clean, smart and healthy. Radiant heat and oil radiators mean no blowing hot air or dust.  Great Amenities: Free WiFi & internet TV (LED flatscreen). Fully-equipped kitchen with stainless-steel appliances, sink & disposal. Large washer & dryer.  Iron/ironing board. Hairdryer. Plenty of storage. Convenient parking, both on- and off-street. The Best Location: Enjoy Seattle's celebrated Macrina bakery, neighborhood cafes, boutiqu",
    description:
      "Chemically sensitive? We've removed the irritants triggering allergy or asthma attacks, like carpeting, forced air & used pillows, all culprits that harbor fungus, mold & bacteria.  No smoking, no pets.  Designed for healthy living, so breathe easy. Beautiful, hypoallergenic apartment in an extremely safe, quiet and pedestrian-friendly section of Queen Anne.  A leafy-green location that puts the best of Seattle at your doorstep. Free WiFi, free parking, ...even free pillows!  What's special about this place? Hypo-allergenic bedding, mattresses/covers and new pillows with each rental. (So feel free to take your new pillows with you!)  A beautiful restoration mixing period details & modern sensibilities: Hardwood floors throughout, white subway tile, low/no VOCs & non-toxic paints keep this home-away-from-home clean, smart and healthy. Radiant heat and oil radiators mean no blowing hot air or dust.  Great Amenities: Free WiFi & internet TV (LED flatscreen). Fully-equipped kitchen with st",
    experiences_offered: "none",
    neighborhood_overview:
      "Queen Anne is a wonderful, truly functional village.  You can walk everywhere... for coffee, for groceries, for a night out, for breathtaking views of the Puget Sound.",
    notes:
      "What's up with the free pillows?  Our home was renovated and restored with health & safety in mind, especially the elimination/reduction of indoor allergens, toxins & other pollutants.  (For this reason, we have no carpets, just hardwood & slate floors, with radiant heat.)  Pillows tend to house a LOT of allergens over time, even when just used by a single owner.  The statistics make many people feel pretty queasy but, essentially, pillows become great breeding grounds for bacteria and dust mites, not to mention drool, hair oils and perspiration. Since most people sweat more than a pint a night, the pillow can also easily trap mildew and mold. We use dust mite protectors for mattresses and duvets, but haven't found any that work well for pillows that maintain comfort/elasticity without the use of outgassing materials.  So, I let the guests take their pillows but ask that they leave the pillowcases. And if you leave the pillows behind, they'll be donated to a local women's shelter that ",
    transit:
      "Convenient bus stops are just down the block, if you're headed downtown or further afield to explore.  Zip cars are also strategically located on Queen Anne hill.",
    thumbnail_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
    medium_url:
      "https://a0.muscache.com/im/pictures/14409893/f8e3ed8d_original.jpg?aki_policy=medium",
    picture_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
    xl_picture_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
    host_id: "5177328",
    host_url: "https://www.airbnb.com/users/show/5177328",
    host_name: "Andrea",
    host_since: "2013-02-21",
    host_location: "Seattle, Washington, United States",
    host_about:
      "Living east coast/left coast/overseas.  Time is short & it's a big world. ",
    host_response_time: "within an hour",
    host_response_rate: "98%",
    host_acceptance_rate: "100%",
    host_is_superhost: "t",
    host_tuhmbnail_url: null,
    host_picture_url:
      "https://a0.muscache.com/ac/users/5177328/profile_pic/1361540767/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
    host_neighbourhood: "Queen Anne",
    host_listings_count: "6",
    host_total_listings_count: "6",
    host_verifications:
      "['email', 'phone', 'facebook', 'linkedin', 'reviews', 'jumio']",
    host_has_profile_pic: "t",
    host_identity_verified: "t",
    street: "7th Avenue West, Seattle, WA 98119, United States",
    neighbourdhood: null,
    neighbourhood_cleansed: "West Queen Anne",
    neighbourhood_group_cleansed: "Queen Anne",
    city: "Seattle",
    state: "WA",
    zipcode: 98119,
    market: "Seattle",
    smart_location: "Seattle, WA",
    country_code: "US",
    country: "United States",
    latitude: 47.63912312136253,
    longitude: -122.36566646439582,
    is_location_exact: "t",
    property_type: "Apartment",
    room_type: "Entire home/apt",
    accommodates: 4,
    bedrooms: 1,
    beds: 1,
    bed_type: "Real Bed",
    amenities:
      '{TV,Internet,"Wireless Internet",Kitchen,"Free Parking on Premises","Buzzer/Wireless Intercom",Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","First Aid Kit","Safety Card","Fire Extinguisher",Essentials}',
    square_feet: "",
    price: "$150.00",
    weekly_price: "$1,000.00",
    monthly_price: "$3,000.00",
    security_deposit: "$100.00",
    cleaning_fee: "$40.00",
    guests_included: "1",
    extra_people: "$0.00",
    minimum_night: null,
    maximum_night: null,
    calendar_updated: "today",
    has_availability: "t",
    availability_30: 13,
    availability_60: 13,
    availability_90: 16,
    availability_365: 291,
    calendar_last_scraped: "2016-01-04",
    number_of_reviews: 43,
    first_review: "2013-08-19",
    last_review: "2015-12-29",
    review_scores_rating: 96,
    review_scores_accuracy: 10,
    review_scores_cleanliness: 10,
    review_scores_checkin: 10,
    review_scores_communication: 10,
    review_scores_location: 10,
    review_scores_value: 10,
    requires_license: "f",
    license: "",
    jurisdiction_names: "WASHINGTON",
    instant_bookable: "f",
    cancellation_policy: "strict",
    require_guest_profile_picture: "t",
    require_guest_phone_verification: "t",
    calculated_host_listings_count: 6,
    reviews_per_month: 1.48,
    bathrooms: 1,
    host_thumbnail_url:
      "https://a0.muscache.com/ac/users/5177328/profile_pic/1361540767/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=50:*&output-format=jpg&output-quality=70",
    maximum_nights: 90,
    minimum_nights: 2,
    neighbourhood: "Queen Anne",
    summary:
      "Chemically sensitive? We've removed the irritants triggering allergy or asthma attacks, like carpeting, forced air & used pillows, all culprits that harbor fungus, mold & bacteria.  No smoking, no pets.  Designed for healthy living, so breathe easy.",
  },
];
```

### GET listagem de CSV por id (/products/:id)

#### dados enviados

    - id: id do produto
    - token

```js

 {
    id: "953595",
    listing_url: "https://www.airbnb.com/rooms/953595",
    scrape_id: "20160104002432",
    last_scraped: "2016-01-04",
    name: "Bright & Airy Queen Anne Apartment",
    sumary: null,
    space:
      "Beautiful, hypoallergenic apartment in an extremely safe, quiet and pedestrian-friendly section of Queen Anne.  A leafy-green location that puts the best of Seattle at your doorstep. Free WiFi, free parking, ...even free pillows!  What's special about this place? Hypo-allergenic bedding, mattresses/covers and new pillows with each rental. (So feel free to take your new pillows with you!)  A beautiful restoration mixing period details & modern sensibilities: Hardwood floors throughout, white subway tile, low/no VOCs & non-toxic paints keep this home-away-from-home clean, smart and healthy. Radiant heat and oil radiators mean no blowing hot air or dust.  Great Amenities: Free WiFi & internet TV (LED flatscreen). Fully-equipped kitchen with stainless-steel appliances, sink & disposal. Large washer & dryer.  Iron/ironing board. Hairdryer. Plenty of storage. Convenient parking, both on- and off-street. The Best Location: Enjoy Seattle's celebrated Macrina bakery, neighborhood cafes, boutiqu",
    description:
      "Chemically sensitive? We've removed the irritants triggering allergy or asthma attacks, like carpeting, forced air & used pillows, all culprits that harbor fungus, mold & bacteria.  No smoking, no pets.  Designed for healthy living, so breathe easy. Beautiful, hypoallergenic apartment in an extremely safe, quiet and pedestrian-friendly section of Queen Anne.  A leafy-green location that puts the best of Seattle at your doorstep. Free WiFi, free parking, ...even free pillows!  What's special about this place? Hypo-allergenic bedding, mattresses/covers and new pillows with each rental. (So feel free to take your new pillows with you!)  A beautiful restoration mixing period details & modern sensibilities: Hardwood floors throughout, white subway tile, low/no VOCs & non-toxic paints keep this home-away-from-home clean, smart and healthy. Radiant heat and oil radiators mean no blowing hot air or dust.  Great Amenities: Free WiFi & internet TV (LED flatscreen). Fully-equipped kitchen with st",
    experiences_offered: "none",
    neighborhood_overview:
      "Queen Anne is a wonderful, truly functional village.  You can walk everywhere... for coffee, for groceries, for a night out, for breathtaking views of the Puget Sound.",
    notes:
      "What's up with the free pillows?  Our home was renovated and restored with health & safety in mind, especially the elimination/reduction of indoor allergens, toxins & other pollutants.  (For this reason, we have no carpets, just hardwood & slate floors, with radiant heat.)  Pillows tend to house a LOT of allergens over time, even when just used by a single owner.  The statistics make many people feel pretty queasy but, essentially, pillows become great breeding grounds for bacteria and dust mites, not to mention drool, hair oils and perspiration. Since most people sweat more than a pint a night, the pillow can also easily trap mildew and mold. We use dust mite protectors for mattresses and duvets, but haven't found any that work well for pillows that maintain comfort/elasticity without the use of outgassing materials.  So, I let the guests take their pillows but ask that they leave the pillowcases. And if you leave the pillows behind, they'll be donated to a local women's shelter that ",
    transit:
      "Convenient bus stops are just down the block, if you're headed downtown or further afield to explore.  Zip cars are also strategically located on Queen Anne hill.",
    thumbnail_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
    medium_url:
      "https://a0.muscache.com/im/pictures/14409893/f8e3ed8d_original.jpg?aki_policy=medium",
    picture_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
    xl_picture_url:
      "https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
    host_id: "5177328",
    host_url: "https://www.airbnb.com/users/show/5177328",
    host_name: "Andrea",
    host_since: "2013-02-21",
    host_location: "Seattle, Washington, United States",
    host_about:
      "Living east coast/left coast/overseas.  Time is short & it's a big world. ",
    host_response_time: "within an hour",
    host_response_rate: "98%",
    host_acceptance_rate: "100%",
    host_is_superhost: "t",
    host_tuhmbnail_url: null,
    host_picture_url:
      "https://a0.muscache.com/ac/users/5177328/profile_pic/1361540767/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
    host_neighbourhood: "Queen Anne",
    host_listings_count: "6",
    host_total_listings_count: "6",
    host_verifications:
      "['email', 'phone', 'facebook', 'linkedin', 'reviews', 'jumio']",
    host_has_profile_pic: "t",
    host_identity_verified: "t",
    street: "7th Avenue West, Seattle, WA 98119, United States",
    neighbourdhood: null,
    neighbourhood_cleansed: "West Queen Anne",
    neighbourhood_group_cleansed: "Queen Anne",
    city: "Seattle",
    state: "WA",
    zipcode: 98119,
    market: "Seattle",
    smart_location: "Seattle, WA",
    country_code: "US",
    country: "United States",
    latitude: 47.63912312136253,
    longitude: -122.36566646439582,
    is_location_exact: "t",
    property_type: "Apartment",
    room_type: "Entire home/apt",
    accommodates: 4,
    bedrooms: 1,
    beds: 1,
    bed_type: "Real Bed",
    amenities:
      '{TV,Internet,"Wireless Internet",Kitchen,"Free Parking on Premises","Buzzer/Wireless Intercom",Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","First Aid Kit","Safety Card","Fire Extinguisher",Essentials}',
    square_feet: "",
    price: "$150.00",
    weekly_price: "$1,000.00",
    monthly_price: "$3,000.00",
    security_deposit: "$100.00",
    cleaning_fee: "$40.00",
    guests_included: "1",
    extra_people: "$0.00",
    minimum_night: null,
    maximum_night: null,
    calendar_updated: "today",
    has_availability: "t",
    availability_30: 13,
    availability_60: 13,
    availability_90: 16,
    availability_365: 291,
    calendar_last_scraped: "2016-01-04",
    number_of_reviews: 43,
    first_review: "2013-08-19",
    last_review: "2015-12-29",
    review_scores_rating: 96,
    review_scores_accuracy: 10,
    review_scores_cleanliness: 10,
    review_scores_checkin: 10,
    review_scores_communication: 10,
    review_scores_location: 10,
    review_scores_value: 10,
    requires_license: "f",
    license: "",
    jurisdiction_names: "WASHINGTON",
    instant_bookable: "f",
    cancellation_policy: "strict",
    require_guest_profile_picture: "t",
    require_guest_phone_verification: "t",
    calculated_host_listings_count: 6,
    reviews_per_month: 1.48,
    bathrooms: 1,
    host_thumbnail_url:
      "https://a0.muscache.com/ac/users/5177328/profile_pic/1361540767/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=50:*&output-format=jpg&output-quality=70",
    maximum_nights: 90,
    minimum_nights: 2,
    neighbourhood: "Queen Anne",
    summary:
      "Chemically sensitive? We've removed the irritants triggering allergy or asthma attacks, like carpeting, forced air & used pillows, all culprits that harbor fungus, mold & bacteria.  No smoking, no pets.  Designed for healthy living, so breathe easy.",
  }

```

<h1 align="center">Dados para as rotas de integrção com a API da Omie:</h1>

### POST Registro de clientes (/registerCostumer)

#### dados de envio:

```javascript
    {
    "codigo_cliente_integracao": "sandbar01",
    "email": "primeiro@ccliente.com.br",
    "razao_social": "Primeiro Cliente  Ltda Me",
    "nome_fantasia": "Primeiro Cliente",
    "cnpj_cpf": "86977167211"
    }
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.

### POST Deleçao de clientes (/deleteCostumer)

    -dados de envio:
    Precisa informar o código do cliente ou o código cliente omie que deseja deletar.

```javascript
    {
  "codigo_cliente_omie": 0,
  "codigo_cliente_integracao": "sandbar01"
}
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.

### POST Listagem de clientes (/listCostumers)

    -dados de envio:

```javascript
  {
	"pagina": 1,
	"registros_por_pagina": 50
  }
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.

#### POST Cadastro de produtos (/registerProduct)

-dados de envio:

```javascript
{
"cabecalho": {
 "codigo_cliente": 3792227,
 "codigo_pedido_integracao": "1657044810",
 "data_previsao": "05/07/2022",
 "etapa": "10",
 "numero_pedido": "45171",
 "codigo_parcela": "999",
 "quantidade_itens": 2
},
"det": [
 {
   "ide": {
     "codigo_item_integracao": "4422421"
   },
   "inf_adic": {
     "peso_bruto": 150,
     "peso_liquido": 150
   },
   "produto": {
     "cfop": "5.102",
     "codigo_produto": "4422421",
     "descricao": "Telefone Celular X",
     "ncm": "9403.30.00",
     "quantidade": 1,
     "tipo_desconto": "V",
     "unidade": "UN",
     "valor_desconto": 0,
     "valor_unitario": 200
   }
 }
],
"frete": {
 "modalidade": "9"
},
"informacoes_adicionais": {
 "codigo_categoria": "1.01.03",
 "codigo_conta_corrente": 11850365,
 "consumidor_final": "S",
 "enviar_email": "N"
},
"lista_parcelas": {
 "parcela": [
   {
     "data_vencimento": "06/07/2022",
     "numero_parcela": 1,
     "percentual": 50,
     "valor": 100
   },
   {
     "data_vencimento": "18/12/2022",
     "numero_parcela": 2,
     "percentual": 50,
     "valor": 100
   }
 ]
}
}
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.

### POST Listagem de produtos (/listProducts)

    -dados de envio:

```javascript
  {
  "pagina": 1,
  "registros_por_pagina": 50
  }
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.

### POST consultar um pedido (/consultOrder)

-dados de envio:

```js
  {
  "codigo_pedido": 25953530
  }
```

#### dados de retorno:

    -Erros são importados direto da API da Omie e são retornados como JSON.
