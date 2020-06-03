FROM python:3.6
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY 7)@*qw+qee1ikcaq7axgq-7jio_@*)a)dzzsls$l0m^v^zo^lk

RUN mkdir /app
WORKDIR /app
# Installing OS Dependencies
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    libsqlite3-dev
RUN pip install -U pip setuptools
COPY requirements.txt /app/
RUN pip install -r /app/requirements.txt
ADD . /app/
# Django service
EXPOSE 8000