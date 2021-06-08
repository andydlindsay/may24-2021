# W03D02 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

index.html.erb
index.ejs

Create
Read
Update
Delete

GET /articles/2

app.get('/urls/:shortURL')
app.get('/urls/new')
app.get('/books/new')
app.get('/articles/new')

http://localhost:55555/articles/new/?
title=something&text=more+deep+thoughts&author=Me&image=dfhaksdhfklasd

Browse  GET  /articles
Read    GET  /articles/:id
Edit    POST /articles/:id
Add     POST /articles
Delete  POST /articles/:id/delete

Resource - articles

Article:
* title
* image
* text
* author


POST => REDIRECT => GET



