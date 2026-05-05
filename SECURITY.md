# 🔐 Security Policy

## 📌 Visão Geral

A segurança deste projeto é tratada com seriedade. Embora seja um aplicativo de catálogo (baixo risco crítico), boas práticas são adotadas para garantir integridade, confiabilidade e proteção dos usuários.

---

## 📢 Reportando Vulnerabilidades

Se você identificar uma vulnerabilidade ou comportamento suspeito, siga:

- Abra uma **issue privada** (se possível) ou
- Entre em contato diretamente:

📧 Email: mfilipeglima@gmail.com.br  
📌 Assunto: [SECURITY] Relato de Vulnerabilidade

### Inclua no relato:
- Descrição detalhada do problema
- Passos para reproduzir
- Impacto potencial
- Sugestão de correção (se houver)

---

## ⏱️ Tempo de Resposta

- Confirmação do recebimento: até **48 horas**
- Análise inicial: até **5 dias úteis**
- Correção (se aplicável): conforme criticidade

---

## 🔒 Boas Práticas Adotadas

### 📱 Aplicativo Mobile
- Uso de **WebView controlada** (sem execução arbitrária de scripts externos)
- Carregamento de conteúdo apenas de fontes confiáveis
- Tratamento de estados offline (evita comportamentos inesperados)

### 🌐 Comunicação
- Utilização de **HTTPS** para carregamento do conteúdo
- Evita exposição de dados sensíveis em requisições

### 📦 Dependências
- Gerenciamento via `npm`
- Atualizações periódicas para evitar vulnerabilidades conhecidas

---

## ⚠️ Limitações de Segurança

Este projeto:

- Não realiza autenticação de usuários
- Não armazena dados sensíveis localmente
- Depende de conteúdo externo (WebView), que deve ser mantido seguro na origem

---

## 🚫 Práticas Não Permitidas

- Exploração de vulnerabilidades sem autorização
- Engenharia reversa com fins maliciosos
- Tentativas de sobrecarga (DoS)

---

## 📄 Divulgação Responsável

- Vulnerabilidades serão tratadas com prioridade
- Correções serão aplicadas antes de divulgação pública
- Créditos serão dados ao responsável pelo reporte (se desejado)

---

## 📌 Versão

Última atualização: Maio de 2026
