![Meetings Logo](./meeting.png)
# Meetings
### Para executar o projeto, siga os passos abaixo.

`git clone https://github.com/maurxeugenio/meetings.git`

`cd backend/`
`docker-compose build`
`docker-compose up`

## Em outro terminal
`docker-composer exec web python app/meetings/manage.py migrate
`docker-composer exec web python app/meetings/manage.py createsuperuser`

### Aplicação Django
http://localhost:8000/admin

## Em outro terminal

`cd frontend/`
`yarn install`
`ionic serve`

### Aplicação Ionic
http://localhost:8001
