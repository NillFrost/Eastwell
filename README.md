# Eastwell website

A responsive, dark-blue, static website for the Eastwell Minecraft server.

## Pages
- `index.html` — homepage, server features, Java and Bedrock connection details.
- `donate.html` — placeholder donation shop with non-functional purchase buttons.

## Configure the server
Edit `assets/app.js`, at the top in `SERVER`:

- `javaAddress`: public Java host/IP
- `javaVersion`: supported Java version
- `bedrockAddress`: public Bedrock host/IP
- `bedrockPort`: Bedrock port
- `bedrockVersion`: supported Bedrock version

Empty values display **Скоро** and disable the relevant copy button. Do not confuse the development server port with the public Bedrock port. The website has **no payments** and no backend.

## Deploy
Host as static files on GitHub Pages or any static hosting platform. No build step is needed. For GitHub Pages, configure **Settings → Pages → Deploy from a branch → main / (root)** if your repository visibility and GitHub plan permit it.

MinecraftRP is a separate repository and has not been modified.
