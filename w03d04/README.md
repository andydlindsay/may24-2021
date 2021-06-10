# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* password => function => random string
* one-way process
* cannot be undone
* salt === random string
* password + salt => function => hashed string
* banana + asdjghfuio2389r6

### Encryption
* two-way algorithm
* plaintext => encryption algo => alphanumeric string
* alpha string => decryption algo => plaintext

http://localhost:6543/protected

http://localhost:8000/urls/:shortUrl?name=andy&age=too%20old
req.params

### Person in the middle attack
* https
* asymmetric cryptography
* public/private keys

### REpresentational State Transfer - REST
* RESTful architecture
* naming convention for our routes

map => pins
author => books
album => songs
city => streets

B GET /pins/:id
B GET /maps/:mapId/pins
B GET /authors/:id/delete

first_name
firstName
FirstName


B GET  /resources
R GET  /resources/:id
E POST /resources/:id
A POST /resources
D POST /resources/:id/delete

B GET /allthepins
B GET /oneparticularpin

obj.hasOwnProperty

Object.values(obj).includes(searchTerm);
Object.entries(obj);

for (const elem of Object.keys(obj)) {
  obj[elem]
}

for (const key in obj) {
  obj[key]
}



req.query.safe

https://www.google.com/search?
q=something&
safe=active&
sxsrf=ALeKk02aqQZgbcvc5M8FjnoPTRH8UoPyHA%3A1623346306644&
source=hp&
ei=gkzCYKHMJJK50PEP77Kl6AE&iflsig=AINFCbYAAAAAYMJakuta_NkzALPQvI_zR0rsXbZROPJv&
oq=something&
gs_lcp=Cgdnd3Mtd2l6EAMyCAguELEDEJMCMgIILjIFCC4QsQMyBQguELEDMgUIABCxAzIFCAAQsQMyAgguMgUILhCxAzIECAAQAzIICC4QxwEQrwE6BAgjECc6BQgAEJECOggIABCxAxCDAToICC4QsQMQgwE6CwguELEDEMcBEKMCOgIIADoFCC4QkwJQtQZY5Qtg2QxoAHAAeACAAU-IAeIEkgEBOZgBAKABAaoBB2d3cy13aXo&sclient=gws-wiz&ved=0ahUKEwihlc-fzI3xAhWSHDQIHW9ZCR0Q4dUDCAk&uact=5

start=30

### HTTP Verbs
* GET, POST
* PUT, PATCH, DELETE

PUT => completely replace a resource
PATCH => replace a piece of a resource
DELETE => delete a resource

B GET     /resources
R GET     /resources/:id
E PATCH   /resources/:id
A POST    /resources
D DELETE  /resources/:id
