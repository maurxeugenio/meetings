![Meetings Logo](./meeting.png)
# Meetings
### Para executar o projeto, siga os passos abaixo.

`git clone https://github.com/maurxeugenio/meetings.git`

```shell
cd backend/
```
```shell
docker-compose build
```
```shell
docker-compose up
```

## Em outro terminal
```shell
docker-composer exec web python app/meetings/manage.py migrate
```
```shell
docker-composer exec web python app/meetings/manage.py createsuperuser
```

### Aplicação Django
[Django Aplicação Url](http://localhost:8000/admin)


## Em outro terminal

```shell
cd frontend/
```

```shell
yarn install
```
```shell
ionic serve
```

### Aplicação Ionic
[Ionic Aplicação Url](http://localhost:8001)
