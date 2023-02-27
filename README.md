# order_management

URL_BASE = 'https://ordermanagement.up.railway.app'

---- CONSULTAR USUARIO ----
GET usuários = 'https://ordermanagement.up.railway.app/auth/user'


---- CRIAR USUARIO ----
POST usuário = 'https://ordermanagement.up.railway.app/auth/register'

JSON Exemple: 
{
    name: 'Fulano',
    email: 'fulano@domain.com',
    password: '123'
}

---- SINGIN ----
POST sing-in = 'https://ordermanagement.up.railway.app/auth/singIn'

{
    email: 'fulano@domain.com',
    password: '123'
}