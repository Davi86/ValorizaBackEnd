# NWL Valoriza

## Códigos

- yarn add express-async-errors
'Criando Tags'
- yarn typeorm migration:create -n CreateTags
- yarn typeorm migration:run


## Regras

- Cadastro de Usuário
  [x] Não é permitido cadastrar mais de um usuário com o mesmo email.
  [x] Não é permitido cadastrar usuário sem email.

- Cadastro de TAG
  [x] Não é permitido cadastrar mais de uma TAG com o mesmo nome.
  [x] Não é permitido cadastrar TAG sem nome.
  [] Não é permitido o cadastro por usuário que não sejam administradores.

- Cadastro de elogios
  [] Não é permitido um usuário cadastrar um elogio para si.
  [] Não é permitido cadastar elogios para usuários inválidos.
  [] O usuário precisa estar autenticado na aplicação.