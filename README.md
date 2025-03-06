# 🎥 Webcam Page

📌Webcam Page é um projeto web que utiliza a API de mídia dos navegadores para capturar e gravar vídeo e áudio da webcam e microfone do usuário. A aplicação permite iniciar a captura, gravar o vídeo, interromper a gravação, fazer o download do arquivo gravado e reproduzir vídeos previamente salvos.

## 🛠️ Tecnologias Utilizadas

* 🧱 **HTML5**: Estrutura e semântica da página.
* 🎨 **CSS3**: Estilização, responsividade e design.
* 🏹 **TypeScript**: Desenvolvimento com tipagem estática, compilado para JavaScript.
* ⚡ **JavaScript (ES5/ESNext)**: Código executado no navegador.
* 📷 **API MediaDevices**: Captura de mídia (webcam e microfone).
* 🌐 **live-server**: Cria servidor local para desenvolvimento.
* 🐙 **Git & GitHub**: Controle de versão e hospedagem (incluindo GitHub Pages).

## ⚙️ Funcionalidades

* ✅ **Captura de Mídia**: Acesso à webcam e microfone do usuário.
* ✅ **Pré-visualização**: Exibição do vídeo capturado sem reproduzir áudio.
* ✅ **Gravação**: Registro do vídeo com áudio (formato WEBM).
* ✅ **Download**: Geração de link para download do vídeo gravado.
* ✅ **Reprodução**: Possibilidade de carregar e reproduzir vídeos salvos.

## 📂 Estrutura do Projeto

* 🧱 **index.html**: Estrutura da página web.
* 🎨 **styles.css**: Arquivo de estilos e responsividade.
* 🏹 **main.ts**: Código TypeScript responsável pela lógica de captura e gravação.
* ⚡ **main.js**: Código JavaScript gerado a partir do TypeScript (compilado automaticamente).
* 🗺️ **main.js.map**: Arquivo que mapeia o código JavaScript compilado de volta ao código fonte original em TypeScript.
* ⚙️ **package.json**: Configuração do projeto e dependências.
* ⚙️ **tsconfig.json**: Configurações do compilador TypeScript.
* 🌀 **.gitignore**: Arquivo responsavel por instruir o Git a ignorar determinados arquivos e diretórios.
* ℹ️ **README.md**: Este arquivo fornece informações sobre o projeto.

## 🛠️ Como Clonar e Configurar o Projeto

* 🚀 Para clonar o repositório, utilize o seguinte comando:

```bash
git clone https://github.com/carlosfreires/webcam_page.git
```

* 📂 Em seguida, acesse a pasta do projeto:

```bash
cd webcam_page
```

## ✍️ Editar ou Modificar

📌Este projeto utiliza TypeScript, portanto é necessário ter o Node.js e o npm instalados.

* 1️⃣ Instale as dependências:

    ```bash
    npm install
    ```

* 2️⃣ Faça as modificações necessárias:

    🏹 O arquivo principal de lógica é o main.ts.

    🏗️ A estrutura da página e os estilos estão nos arquivos index.html e styles.css, respectivamente.

    ⚡ Faça as alterações necessárias e compile o projeto para que o JavaScript seja atualizado.

## 🚀 Compilar e Executar

### 🔄 Compile o projeto:

* ⚡ Utilize o comando abaixo para compilar o TypeScript para JavaScript:

    ```bash
    npm run dev
    ```

    📌Esse comando utiliza o tsc (TypeScript Compiler) e gera o arquivo main.js.

### 💻 Execução:

🧱 Abra o arquivo index.html diretamente no seu navegador.

* 🖱️ No windows clique duas vezes no arquivo ou execute o seguinte comando:

    ```bash
    start index.html
    ```

* 🌐 Para uma experiência de desenvolvimento mais completa, recomenda-se utilizar um servidor local, por exemplo utilizando o comando:

    ```bash
    npx live-server
    ```

    📌 ou utilize a extensão "Live Server" do VSCode.

* 🌐 O projeto inclui scripts para iniciar um servidor local na porta 3000 utilizando o live-server.

    🚀 Para apenas iniciar o servidor:

    ```bash
    npm run serv
    ```

    🎯 Para compilar o projeto e iniciar o servidor (modo desenvolvimento):

    ```bash
    npm run serv-dev
    ```

    📌 Ao executar qualquer um destes comandos, o projeto será aberto automaticamente em seu navegador através de um servidor local.

## 🌍 Acesso via GitHub Pages

O projeto está hospedado no GitHub Pages. Para acessar a aplicação, abra o seguinte link no seu navegador:

🔗 https://carlosfreires.github.io/webcam_page/

## 🤝 Contribuição

🧡 Contribuições são bem-vindas! Se você deseja colaborar com o projeto, siga os passos abaixo:

* 1️⃣  Faça um fork deste repositório.

* 2️⃣ Crie uma branch com a sua feature ou correção.

    ```bash
    git checkout -b minha-feature
    ```

* 3️⃣ Faça suas alterações e realize commits com mensagens claras.

* 4️⃣ Envie sua branch para o repositório remoto.

    ```bash
    git push origin minha-feature
    ```

* 5️⃣ Abra um Pull Request.

📢 Por favor, siga as melhores práticas de desenvolvimento e mantenha o padrão de código do projeto.

## 📜 Licença

📝Este projeto está licenciado sob a Licença MIT.