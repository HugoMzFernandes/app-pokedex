# Pokedex | React + Vite + Typescript
 
<div align="center">
  Aplicação FrontEnd onde é possível pesquisar pokémons pelo nome e obter suas informações.
  
  ![](https://i.imgur.com/1Rvs1Mq.gif)
</div>

## Tecnologias
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [SWR](swr.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Cypress](https://www.cypress.io/)


## Buildar e executar o Pokedex localmente

Para builda e executar o Pokedex localmente, garanta que você tenha [Git](https://git-scm.com/downloads) e [Node.js](https://nodejs.org/) instalados e siga as instruções abaixo.

1. Clone o código fonte:

```
git clone https://github.com/HugoMzFernandes/app-pokedex.git
```

2. (Opcional) Instale a versão correta do node(v16.17.1) usando [nvm](https://github.com/nvm-sh/nvm):

```
nvm install 16.17.1
```

3. Instale as depedências

```
npm install
```

4. Rode o servidor local de desenvolvimento:

```
npm run dev
```

> [!IMPORTANT]
> A Pokedex agora está em execuçāo e pode ser acessado no [http://localhost:5173/](http://localhost:5173/)

## Testes

A cobertura de testes automatizados vem na forma de testes e2e.

### e2e
Os testes e2e foram escritos em [Cypress](https://www.cypress.io/)

> [!NOTA]
> Para executar os testes e2e é necessário que o [BFF Pokedex](https://github.com/HugoMzFernandes/api-pokedex-bff) esteja sendo executado.

Para executar a suite de testes e2e:

`npm run e2e:chrome`

ou

`npx cypress open`






