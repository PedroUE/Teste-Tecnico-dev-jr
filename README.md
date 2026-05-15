# Perfil Dev Jr — Aplicativo Mobile React Native

Um aplicativo mobile criado com React Native e Expo que exibe o perfil profissional de um desenvolvedor, incluindo informações pessoais, habilidades técnicas e projetos desenvolvidos.

---

## 📱 Sobre o Aplicativo

Este é um teste técnico para a posição de Desenvolvedor(a) Mobile Júnior na empresa DevStart Mobile. O aplicativo apresenta um perfil profissional completo com navegação por abas inferiores (Bottom Tabs), organização em telas separadas e interface moderna.

Stack tecnológico:
- React Native 0.81.5
- Expo (~54.0.33)
- React Navigation 7
- Expo Icons (Ionicons)

---

## ✨ Funcionalidades Implementadas

### 📋 Telas Principais

1. Tela de Perfil
   - Avatar do desenvolvedor (imagem)
   - Nome e cargo profissional
   - Seção "Sobre Mim" com biografia
   - Informações de contato (Email, GitHub, LinkedIn)

2. Tela de Habilidades
   - Lista de habilidades técnicas (mínimo 5)
   - Apresentação organizada das competências

3. Tela de Projetos
   - Listagem de projetos desenvolvidos (mínimo 2)
   - Área de contato com campo de mensagem
   - Botão para enviar contato

### 🎨 Características Técnicas

 Navegação com Bottom Tabs (3 abas inferiores)  
 Componentes React Native: `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `Button`  
 Estilização com `StyleSheet`  
 Organização em pastas: `screens/`, `assets/`  
 Código bem indentado e estruturado  
 Totalmente funcional no Expo Go, navegador e emulador  
 Sem bibliotecas visuais prontas (NativeBase, Paper, etc.)

---

## 📂 Estrutura do Projeto

```
perfil-dev-jr/
├── App.js                      # Arquivo principal com navegação
├── index.js                    # Entry point
├── package.json                # Dependências do projeto
├── app.json                    # Configuração do Expo
├── assets/                     # Imagens e recursos estáticos
└── screens/
    ├── PerfilScreen.js         # Tela de perfil do desenvolvedor
    ├── HabilidadesScreens.js   # Tela com lista de habilidades
    └── ProjetosScreens.js      # Tela de projetos e contato
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (v14 ou superior)
- npm ou yarn
- Expo CLI instalado globalmente (opcional)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/perfil-dev-jr.git
cd perfil-dev-jr
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Executar o Aplicativo

```bash
# Inicia o servidor Expo
npm start

# Opções adicionais:
npm run android    # Emulador Android
npm run ios        # Emulador iOS
npm run web        # Navegador web
```

Após executar `npm start`, você verá um código QR. Use o Expo Go (disponível em iOS e Android) para ler o código e visualizar o aplicativo.

---

## 💻 Dependências Principais

```json
{
  "@react-navigation/bottom-tabs": "^7.16.1",
  "@react-navigation/native": "^7.2.4",
  "@react-navigation/native-stack": "^7.15.1",
  "expo": "~54.0.33",
  "react-native": "0.81.5"
}
```

Para a lista completa, consulte [package.json](perfil-dev-jr/package.json).

---

## 📝 Detalhes da Implementação

### Navegação

A navegação utiliza React Navigation com:
- `Bottom Tabs Navigator` para as 3 abas inferiores
- `Native Stack Navigator` para a estrutura da tela inicial
- Ícones do Ionicons para as abas

### Estilização

Todo o estilo é feito com `StyleSheet` nativo do React Native:
- Cores personalizadas
- Layout flexbox
- Responsividade mobile

### Componentes Utilizados

- `ScrollView`: Para conteúdo rolável nas telas
- `FlatList`: Para listas de habilidades e projetos
- `TextInput`: Para campo de mensagem de contato
- `Button`: Para enviar contato
- `Image`: Para avatar do desenvolvedor
- `View` e `Text`: Para estrutura básica

---

## 🔗 Informações de Contato

Para dúvidas ou sugestões sobre o projeto, você pode encontrar as informações de contato na tela de perfil do aplicativo.

---

## 📄 Licença

Projeto desenvolvido como teste técnico. Todos os direitos reservados.

```
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
├── assets/
│   └── imagem-perfil.png
└── README.md
```

---

## Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone link-do-repositorio
   ```
2. Acesse a pasta:
   ```bash
   cd perfil-dev-jr
   ```
3. Crie o app Expo dentro do repositório clonado:
   ```bash
   npx create-expo-app@latest perfil-dev-jr --template blank
   ```
4. Acesse a pasta do app:
   ```bash
   cd perfil-dev-jr
   ```
5. Instale as dependências:
   ```bash
   npm install
   ```
6. Execute o projeto:
   ```bash
   npx expo start
   ```

---

## O que deve conter no README

- Descrição do projeto
- Tecnologias utilizadas
- Funcionalidades implementadas
- Explicação detalhada de tudo o que foi feito: telas, funcionalidades, decisões tomadas, organização do código, diferenciais
- Como executar o projeto
- Autor

Exemplo de tópicos:

```markdown
# Perfil Dev Jr

## Descrição
Aplicativo criado em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation
- Git
- GitHub

## Funcionalidades
- Exibe dados do candidato
- Apresenta uma tela de perfil
- Lista habilidades
- Mostra projetos
- Exibe informações de contato
- Possui navegação por abas inferiores

## Telas
- Perfil: ...
- Habilidades: ...
- Projetos/Contato: ...

## Organização do código
- ...

## Diferenciais
- ...

## Como executar o projeto
1. ...

## Autor
Nome do aluno
```

---

## Regras de entrega

1. Faça um fork deste repositório para a sua conta do GitHub.
2. Realize todo o desenvolvimento no seu repositório forkado.
3. Ao finalizar, envie as seguintes informações:

```
Link do seu repositório forkado no GitHub:
```

O link deve apontar para o seu repositório público com o código desenvolvido.

---

## Recomendações

- Use apenas estilos criados por você com `StyleSheet`
- Organize a aplicação em telas separadas
- Use nomes claros para arquivos, variáveis e estilos
- Teste a navegação entre as abas
- Teste o aplicativo antes de entregar
- Não copie código sem entender
- Faça commits durante o desenvolvimento
- Capriche na aparência da tela
- Cuide da experiência do usuário
- Pense como se estivesse entregando um teste para uma vaga de Dev Jr

---

## Critérios de avaliação

- Projeto criado corretamente com Expo
- Navegação com TabBar / Bottom Tabs
- Pelo menos 3 telas diferentes
- Organização visual e layout
- Uso correto dos componentes básicos
- Uso correto do `StyleSheet`
- GitHub, commits e README
- Explicação clara do projeto
- Postura profissional

---

## Observação importante

Esta avaliação simula um teste técnico para uma vaga de Desenvolvedor Mobile Júnior. Além do aplicativo funcionar, serão avaliados organização, clareza do código, capricho visual, uso correto do GitHub, capacidade de explicar o projeto e postura durante a entrevista técnica.

-------------- Iniciação da escrita do README ---------------------

# IMPLEMENTAÇÃO DO PROJETO

## Descrição
Aplicativo mobile desenvolvido em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior. O projeto demonstra competência em estruturação de aplicações mobile, uso de navegação, componentes fundamentais e boas práticas de desenvolvimento.

## Tecnologias Utilizadas
- React Native - Framework para desenvolvimento mobile
- Expo - Plataforma de desenvolvimento
- React Navigation - Biblioteca de navegação
  - @react-navigation/native
  - @react-navigation/native-stack
  - @react-navigation/bottom-tabs
- Expo Icons - Ícones da interface
- Git/GitHub - Controle de versão

## Funcionalidades Implementadas

### Navegação por Abas Inferiores (TabBar)
- 4 abas navegáveis: Home, Habilidades, Projetos e Perfil
- Ícones customizados usando Ionicons
- Cores de ativação/inativação definidas
- Navegação fluida entre telas

###  Tela de Perfil
- Nome e cargo profissional
- Seção "Sobre Mim" com descrição pessoal
- Informações de contato (Email, GitHub, LinkedIn)
- ScrollView para conteúdo expansível

###  Tela de Habilidades
- Lista de 5 habilidades técnicas e interpessoais
- Cada habilidade exibe nome e nível (Intermediário/Avançado)
- Cards com estilo visual diferenciado
- Border esquerdo colorido para destaque

### Tela de Projetos/Contato
- Projetos: 2 projetos completos com descrição e tecnologias
- Formulário de Contato:
  - Campo de nome (TextInput)
  - Campo de email (TextInput com keyboardType)
  - Campo de mensagem (TextInput multiline)
  - Botão "Enviar Contato" com validação
  - Alert de confirmação

## Organização do Código

```
perfil-dev-jr/
├── App.js                    # Componente principal com navegação
├── index.js                  # Registro do componente raiz
├── app.json                  # Configuração do Expo
├── package.json              # Dependências
├── assets/                   # Arquivos estáticos
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
└── screens/                  # Componentes de telas
    ├── PerfilScreen.js
    ├── HabilidadesScreens.js
    └── ProjetosScreens.js
```

## Decisões de Design

### Paleta de Cores
- Primária: #1e40af (Azul escuro)
- Secundária: #f0f0f0 (Cinza claro)
- Texto: #475569 (Cinza escuro)
- Desativado: #64748b (Cinza médio)

### Layout
- ScrollView em telas com conteúdo expansível
- Cards com shadows para profundidade visual
- Espaçamento consistente (16px, 12px, 8px)
- Tipografia hierarquizada

### Componentes Utilizados
- `View` - Containers e layout
- `Text` - Textos e títulos
- `ScrollView` - Scroll de conteúdo
- `TextInput` - Campos de entrada de dados
- `Button` - Botão nativo com ação
- `StyleSheet` - Estilos CSS em JavaScript

## Implementações Principais

### App.js
- HomeStack que agrupa a tela Home com outras navegações
- TabNavigator com 4 abas principais
- Ícones customizados para cada aba
- Cores de ativação definidas

### PerfilScreen.js
- Layout com header azul e conteúdo em cards
- Informações de contato organizadas
- ScrollView para conteúdo expansível

### HabilidadesScreens.js
- Cards com border esquerdo azul
- Lista de 5 habilidades com níveis

### ProjetosScreens.js
- Dois projetos com descrição e tecnologias
- Formulário funcional com validação
- Multiline TextInput para mensagens
- Reset de formulário após envio com feedback ao usuário

## Diferenciais do Projeto

 Organização Profissional
- Código estruturado em componentes separados
- Nomenclatura clara e consistente
- Separação de responsabilidades

 UX/UI Aprimorada
- Design visual limpo e moderno
- Cores harmoniosas
- Ícones informativos
- Shadows e elevação para profundidade

 Funcionalidades Completas
- Validação no formulário de contato
- Feedback ao usuário (alerts)
- ScrollView para conteúdo extenso
- Estados gerenciados com useState

 Boas Práticas
- Componentes reutilizáveis
- StyleSheet para melhor performance
- Sem bibliotecas visuais externas
- Responsivo para diferentes tamanhos

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14+)
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`

### Passos

1. Acesse a pasta do projeto
```bash
cd perfil-dev-jr
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor Expo
```bash
npx expo start
```

4. Execute em um dos ambientes
   - Expo Go: Abra o Expo Go e escaneie o QR code
   - Emulador Android: Pressione `a` no terminal
   - Simulador iOS: Pressione `i` no terminal (macOS)
   - Web: Pressione `w` no terminal

## Testes Realizados

 Navegação entre abas funciona corretamente
 Formulário valida campos vazios
 ScrollView funciona em telas com conteúdo extenso
 Estilos aplicados corretamente
 App exibido sem erros no console

## Autor

Pedro Escapalete
- [GitHub: github.com/pedroescapalete](https://github.com/PedroUE)
- Email: pedro.escapalete@aluno.senai.br

---

Data de Criação: Maio de 2026  
Status:  Concluído e Testado
