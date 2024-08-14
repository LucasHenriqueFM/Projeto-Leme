```
select p.id, p.data, ps.descricao
from pedidos p
join pedido_status ps on p.id = ps.id
where p.valor > 100;
```


**select** p.id, p.data, ps.descricao
**from** pedidos p
**join** pedido_status ps **on** p.id = ps.id
**where** p.valor > 100;