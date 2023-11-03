# Trybers and Dragons - T&D

Trybers and Dragons é um projeto de jogo de RPG (Role Playing Game) que simula um universo de fantasia medieval, onde jogadores podem criar personagens e enfrentar monstros. 
O projeto é implementado utilizando TypeScript e segue os princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO).

## Introdução

No universo de Trybers and Dragons, personagens de diversas raças e arquétipos se aventuram em um mundo repleto de desafios e mistérios. Os jogadores podem aprimorar seus personagens e enfrentar criaturas temíveis.

## Tecnologias

- TypeScript
- Node.js

### Pré-requisitos

- Node.js versão 14 ou superior
- npm ou yarn
  
## Como Iniciar
  
1. Clone o repositório:
- ``` git clone git@github.com:wesley-tuschi/project-trybers-and-dragons.git ```

2. Acesse o diretório do projeto:
- ```cd trybers-and-dragons```

3. Instale as dependências:
- ```npm install``` ou ```yarn install```

4. Configure em ```'index.ts'```.

5. Rode o arquivo ```'testGame.ts'```.


## Estrutura do Projeto

O projeto é composto pelas seguintes classes e interfaces:

- **Character**: Representa os personagens jogadores.
- **Race**: Uma classe abstrata para as diferentes raças.
- **Archetype**: Uma classe abstrata para os diferentes arquétipos.
- **Monster**: Para as criaturas inimigas.
- **Battle**: Abstrações para as batalhas, incluindo PVP e PVE.
