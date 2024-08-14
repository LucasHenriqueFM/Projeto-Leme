### Cenário 1: Cadastro de Cliente com Dados Válidos
**Objetivo:** Validar que o sistema está cadastrando corretamente.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira seu CPF.
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: No campo "Telefone", digite seu número de telefone.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o usuário foi cadastrado com sucesso.

**Critério de Aceitação:**
- O usuário deve ser cadastrado corretamente, sem erros.






### Cenário 2: Cadastro de Cliente com CPF Inválido
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente com um CPF inválido.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira um CPF inválido "111.111.111-11".
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: No campo "Telefone", digite seu número de telefone.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o CPF é inválido.

**Critério de Aceitação:**
- O usuário não deve ser cadastrado com um CPF inválido.
- O campo "CPF" deve ser destacado para indicar que o CPF é inválido.






### Cenário 3: Cadastro de Cliente com CPF Faltando Número
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente com um CPF incompleto.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira um CPF inválido "111.111".
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: No campo "Telefone", digite seu número de telefone.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o CPF é inválido.

**Critério de Aceitação:**
- O usuário não deve ser cadastrado com um CPF inválido.
- O campo "CPF" deve ser destacado para indicar que o CPF é inválido.






### Cenário 4: Cadastro de Cliente com Menor de 18 Anos
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente menor de 18 anos.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira seu CPF.
passo 4: No campo "Data de Nascimento", insira uma data igual ou posterior a 20/08/2007.
passo 5: No campo "Telefone", digite seu número de telefone.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o usuário é menor de idade.

**Critério de Aceitação:**
- O usuário não deve ser cadastrado se tiver menos de 18 anos.
- O campo "Data de Nascimento" deve ser destacado para indicar que o cliente deve ter mais de 18 anos.






### Cenário 5: Cadastro de Cliente com Nome Vazio
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente com o campo "Nome" vazio.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: Deixe o campo "Nome" vazio.
passo 3: No campo "CPF", insira seu CPF.
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: No campo "Telefone", digite seu número de telefone.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o campo "Nome" é obrigatório.

**Critério de Aceitação:**
- O usuário não deve ser cadastrado se o campo "Nome" estiver vazio.
- O campo "Nome" deve ser destacado para indicar que ele deve ser preenchido.






### Cenário 6: Cadastro de Cliente com Telefone Opcional Vazio
**Objetivo:** Validar se o sistema aceita o cadastro de um cliente sem telefone.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira seu CPF.
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: Deixe o campo "Telefone" vazio.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o usuário foi cadastrado com sucesso.

**Critério de Aceitação:**
- O usuário deve ser cadastrado corretamente, mesmo sem o número de telefone.






### Cenário 7: Cadastro de Cliente com CPF Já Existente no Banco de Dados
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente que já tenha o CPF cadastrado.

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira seu nome.
passo 3: No campo "CPF", insira um CPF que já esteja cadastrado.
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: No campo "Telefone", deixe vazio.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que o CPF já está cadastrado.

**Critério de Aceitação:**
- O usuário não deve ser cadastrado se o CPF já estiver no banco de dados.
- O campo "CPF" deve ser destacado para indicar que o CPF já está cadastrado.






### Cenário 8: Cadastro de Cliente com Número e Caractere Especial no Nome
**Objetivo:** Validar que o sistema não permite o cadastro de um cliente com números e caracteres especiais no campo "Nome".

```
Passos para Realizar:

passo 1: Acesse a página de cadastro de cliente.
passo 2: No campo "Nome", insira caracteres como "123" e "!@$".
passo 3: No campo "CPF", insira seu CPF.
passo 4: No campo "Data de Nascimento", insira sua data de nascimento (maior de 18 anos).
passo 5: Deixe o campo "Telefone" vazio.
passo 6: Clique no botão "Cadastrar".
```
**Resultado Esperado:**
- Deve aparecer uma mensagem informando que números e caracteres especiais não são aceitos no campo "Nome".

**Critério de Aceitação:**
- O usuário não deve ser cadastrado se o campo "Nome" contiver números ou caracteres especiais.
- O campo "Nome" deve ser destacado para indicar que o nome contém entradas inválidas.