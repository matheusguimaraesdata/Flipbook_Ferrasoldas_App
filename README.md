# 📖 Ferrasoldas — Catálogo Virtual (App Mobile)

Aplicativo mobile do catálogo interativo de máquinas de corte e solda da **Ferrasoldas Comércio e Representações Ltda.**, desenvolvido como projeto de extensão acadêmica no curso de Análise e Desenvolvimento de Sistemas.

🔗 **Web:** [guiademaquinasferrasoldas.vercel.app](https://guiademaquinasferrasoldas.vercel.app)  
📦 **Repositório Web:** [ferrasoldas-flipbook](https://github.com/matheusguimaraesdata/Flipbook_Ferrasoldas_App)

---

## 📱 Sobre o projeto

A Ferrasoldas divulgava seus produtos de marca própria exclusivamente por catálogos impressos — custo elevado, alcance restrito e sem possibilidade de compartilhamento digital. Este projeto entrega uma solução multiplataforma completa:

- **Versão Web** — flipbook interativo com efeito de virada de página, acessível via qualquer navegador
- **App Mobile** — aplicativo Android com splash screen animada, carregamento online via WebView e mensagem de fallback offline

---

## 🚀 Funcionalidades

- Splash screen animada com logo e fade-in suave
- Carregamento do catálogo online via WebView
- Detecção de conexão — exibe mensagem de fallback quando offline
- Safe area respeitando a barra de navegação do Android
- Orientação portrait com layout adaptado

---

## 🛠️ Tecnologias

| Camada | Tecnologia |

|---|---|
| Framework mobile | React Native + Expo |
| WebView | react-native-webview |
| Safe area | react-native-safe-area-context |
| Versionamento | Git + GitHub |
| Deploy web | Vercel |
| Web (flipbook) | HTML5, CSS3, JavaScript, StPageFlip |

---

## ⚙️ Como rodar

### Pré-requisitos

- Node.js 20+
- Expo Go instalado no celular Android

### Instalação

```bash
# Clone o repositório
git clone https://github.com/matheusguimaraesdata/Flipbook_Ferrasoldas_App.git
cd Flipbook_Ferrasoldas_App

# Instale as dependências
npm install
npx expo install react-native-webview react-native-safe-area-context expo-asset

# Rode o projeto
npx expo start
```

Escaneie o QR Code com o **Expo Go** no celular.

---

## 📁 Estrutura do projeto

```ferrasoldas-expo/
├── App.js                  # Componente principal (Splash + WebView + fallback)
├── app.json                # Configurações do Expo (nome, ícone, orientação)
├── assets/
│   └── logo.png            # Logo da Ferrasoldas
└── package.json
```

---

## 📸 Telas

| ![Logo animado com fade-in](.assets/logo_animado.jpeg)
| ![WebView carregando o flipbook](.assets/splash.jpeg)
| ![Badge de aviso sem conexão](.assets/offline.jpeg)

---

## 🏢 Empresa parceira

**Ferrasoldas Comércio e Representações Ltda.**  
CNPJ: 09.297.620/0001-09  
Segmento: Metalmecânica — corte, solda e acabamento  
Site: [ferrasoldas.com.br](https://www.ferrasoldas.com.br)

---

## 👨‍💻 Desenvolvedor

**Matheus Guimarães**  
Acadêmico — Análise e Desenvolvimento de Sistemas  
