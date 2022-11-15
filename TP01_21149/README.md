# Autor
**Duarte Ribeiro de Melo (21149, ESI-PL)**
# Descrição dos ficheiros
## Data
### Input
- A pasta input deve estar vazia, dado que é o próprio Kettle que faz a extração dos dados do dataset.  
*Caso a extração dos dados via Kettle não aconteça, os ficheiros de input encontram-se em data/input/backup*
### Output
- A pasta output inicialmente deve estar vazia, dado que é o Kettle que trata de fazer o carregamento de dados para ficheiros nesta pasta e numa base de dados MongoDB.
## Doc
- Nesta pasta encontra-se o relatório relativo a este trabalho, em PDF.
## Source
### API_Python
- Pasta onde reside a API desenvolvida em Python (Flask). O ficheiro com o código é o "requests.py".
- Também reside nesta pasta um virtual environment criado para facilitar a questão das versões do Python, packages etc.  
*Explicação de como a solução pode ser executada está abaixo!*
### Dashboard_Angular
- Pasta onde se encontra o projeto AngularJS com a dashboard de visualização de dados carregados pelo Kettle para uma base de dados MongoDB e obtidos via web API Python.  
*Explicação de como a solução pode ser executada está abaixo!*
### Kettle
- Pasta onde se encontram os três ficheiros que podem ser abertos no PDI. Apenas é necessário correr o job main que corre os outros dois ficheiros (a transformação data_transformation e o job job_data_download).


# Como executar a solução
## MongoDB
- Ter MongoDB instalado assim como o Compass
- Criar na base de dados "local" a coleção "imdb_isi"

## Pentaho Data Integration (Kettle)
- Aumentar memória RAM utilizada pelo Pentaho Kettle para 8GB (https://forums.pentaho.com/threads/68806-java-lang-OutOfMemoryError-Java-heap-space-How-to-solve/)
- Caso tenha jdk-19, utilizar outra versão do JAVA (jdk-19 dá erro em steps que precisem de SSL)
- Definir variável JAVA_HOME  (https://confluence.atlassian.com/confbr1/configurando-a-variavel-java_home-no-windows-933709538.html)
- Caso pretenda, alterar o e-mail destino nos steps que utilizam e-mail (para receber o e-mail de sucesso/erro)
- Correr o job "main"

## Python (Flask)
- Ter python3 instalado
- Na CMD, ativar o venv em source/API_Python/api_venv/Scripts/activate
- Executar py requests.py
- Caso não tenha algum dos packages instalados - pip install [nome_package]

## AngularJS
- Ter Node instalado
- Ter AngularCLI instalado
- Abrir projeto na CMD (source\Dashboard_Angular\Dashboard_Angular) e correr o comando "ng serve"
