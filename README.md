# sql-to-excel

Transforma um arquivo csv no formato:

Pais | Mes | Produtos
------------ | ------------- | ------------
Angola | 2015-04 | 2
Angola | 2015-07 | 2
Angola | 2015-08 | 7
Angola | 2015-09 | 2
Angola | 2015-11 | 1
Angola | 2015-12 | 1
Angola | 2016-02 | 4
Argentina | 2015-04 | 1
Argentina | 2015-05 | 1
Argentina | 2016-03 | 1
Australia | 2016-01 | 1

No formato:

Pais | 2015-05 | 2015-06 | 2015-07 | 2015-08 | 2015-09 | 2015-10 | 2015-11 | 2015-12 | 2016-01 | 2016-02 | 2016-03 | 2016-04 | 2016-05 | 2016-06
---- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | -------
Angola | 0 | 0 | 2 | 7 | 2 | 0 | 1 | 1 | 0 | 4 | 0 | 0 | 0 | 0
Argentina | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0
Australia | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0
