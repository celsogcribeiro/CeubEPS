<h1 align="center">Sistematização de Engenharia e Projeto de Software</h1>

<h3 align="center">Extensão para Google Chrome que permite contar a quantidade de caracteres de um texto</h3>
<br></br>

## Como instalar a extensão? 💻

### Chrome

Optou-se pela instalação no Chrome ser feita manualmente, pois para publicar na Chrome Web Store é necessário o pagamento de 5 dólares. Abaixo mostro como fazer a instalação de forma manual :bowtie:.

### Passo a passo

1. Baixe este código fonte.
2. Abra o seu Google Chrome.
3. Vá em <img src="https://imgur.com/yKkBAZ7.png" /> / Extensões / Gerenciar extensões.
4. Ative o modo do desenvolvedor.
5. Clique em Carregar sem compactação, escolha a pasta onde você salvou o código, clique em `src` e pronto, tudo deve estar funcionando.
<br></br>
## Como utilizá-la?

### Passo a passo

1. Abra a extensão.
2. Digite ou cole o texto na área de texto.
3. A contagem será exibida automaticamente.
4. Clique em "Limpar" para resetar o campo de texto.

## Referências

- [Documentação do Google Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Documentação do GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

<br></br>

---


### 1. Introdução
A extensão "Contador de Caracteres" para o Google Chrome oferece aos usuários uma interface simples para contar caracteres digitados em uma área de texto, com funcionalidade adicional de limpeza da área de texto após a contagem.

### 2. Arquitetura do Sistema
A arquitetura da extensão segue uma estrutura básica de aplicação web, composta por HTML, CSS e JavaScript.

Componentes Principais:
- **`popup.html`**: interface do usuário contendo o campo de texto, o contador de caracteres e o botão de reset (limpar);
- **`style.css`**: arquivo CSS para estilização da interface;
- **`script.js`**: script JavaScript que gerencia a lógica do contador de caracteres e a manipulação do DOM;
- **`manifest.json`**: arquivo de configuração necessário para o funcionamento da extensão no Chrome.

### 3. APIs Utilizadas
A extensão utiliza a DOM do navegador para manipular elementos HTML.

Principais interações **DOM**:
- _document.getElementById()_: utilizado para capturar elementos da interface;
- _addEventListener()_: usado para escutar eventos de entrada e clique.

### 4. Diagrama UML

- Diagrama de Casos de Uso:
  
<a href="https://ibb.co/61TqLpY"><img src="https://i.ibb.co/hZ4Twns/EPS-1.png" alt="EPS-1" border="0" width="400" height="400"></a>

- Diagrama de Classes:

<a href="https://ibb.co/P9p47H8"><img src="https://i.ibb.co/wwHC9m1/Classe-UML-2.png" alt="Classe-UML-2" border="0"></a>

- Diagrama de Sequência: 

<a href="https://ibb.co/6PyyZFV"><img src="https://i.ibb.co/NjFF3KQ/Classe-UML-1.png" alt="Classe-UML-1" border="0" width="65%"></a>

