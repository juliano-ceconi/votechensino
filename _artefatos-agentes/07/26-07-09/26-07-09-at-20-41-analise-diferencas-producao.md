# Análise de Diferenças: Local vs. Produção (votechensino.vercel.app)

Esta análise detalha as divergências identificadas entre o projeto local (`d:/projetos/juliano-ceconi/02_Portfolio/votechensino`) e o site de produção publicado em `https://votechensino.vercel.app/`.

---

## 📌 Resumo das Diferenças

A tabela abaixo resume as divergências encontradas entre os dois ambientes:

| Componente / Rota | Local | Produção | Impacto / Ação |
| :--- | :--- | :--- | :--- |
| **WhatsApp Link** | `557799213803` | `554591190099` | **Divergência esperada.** A produção ainda tem o número antigo pois as alterações locais não foram publicadas. |
| **Rota de Contato (`/contact`)** | Ativo (`src/pages/contact.astro`) | **404 (Página não encontrada)** | O arquivo existe localmente mas não foi buildado/publicado na versão atual de produção. |
| **Tags de Blog (Manus / Cursor)** | Tag: `productivity` | Tag: `produtividade` | Os arquivos locais de post usam `productivity` (inglês), mas a produção está gerando `produtividade` (português). |
| **Configuração do Twitter** | `@arthelokyo` | `@onwidget` | O `src/config.yaml` local está customizado, enquanto a produção ainda exibe o valor padrão do template. |
| **Meta Imagem (og:image)** | `~/assets/images/default.png` (presente) | Vazia (`content=""`) | Divergência de build ou de caminhos de resolução de imagens no Vercel. |

---

## 🔍 Detalhamento das Divergências

### 1. Número de WhatsApp
- **Arquivos Locais:** [navigation.ts](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/navigation.ts) e [index.astro](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/pages/index.astro) foram modificados com sucesso para apontar para `557799213803`.
- **Produção:** Todos os botões "Fale Conosco" e ícones no header, footer e CTA principal ainda apontam para o número anterior `554591190099`.

### 2. Rota de Contato (`/contact`)
- **Projeto Local:** O arquivo [contact.astro](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/pages/contact.astro) existe e está íntegro na pasta `src/pages`.
- **Produção:** Retorna 404 (Not Found). Isso sugere que o último deploy de produção foi feito antes desse arquivo ser criado/adicionado ao repositório git ou a build atual falhou/ignorou o arquivo.

### 3. Tags de Posts no Blog
- **Projeto Local:**
  - Em [manus.md](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/data/post/manus.md#L12) a tag está definida como `productivity`.
  - Em [cursor-ai.md](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/data/post/cursor-ai.md#L12) a tag está definida como `productivity`.
- **Produção:**
  - No HTML da produção do blog, a tag exibida é `produtividade` e o link é `/tag/produtividade`.
  - *Sugestão:* Traduzir as tags nos arquivos markdown locais para `produtividade` para alinhar com o comportamento da produção.

### 4. Twitter Handle e Site
- **Projeto Local:** [src/config.yaml](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/config.yaml#L26-L27) contém a configuração `handle: '@arthelokyo'` e `site: '@arthelokyo'`.
- **Produção:** A meta tag exibe `<meta content="@onwidget" name="twitter:site">` e `<meta content="@onwidget" name="twitter:creator">`.

### 5. Imagem de OpenGraph (`og:image`)
- **Projeto Local:** A imagem padrão está configurada em [src/config.yaml](file:///d:/projetos/juliano-ceconi/02_Portfolio/votechensino/src/config.yaml#L21) como `~/assets/images/default.png`, e o arquivo existe localmente.
- **Produção:** A tag gerada está vazia (`<meta content="" property="og:image">`), provavelmente por falha ao resolver o caminho local `~/assets/...` com a propriedade `site` durante a build do Vercel.

---

## 📋 Páginas Legadas/Template (/about, /services, /pricing)
Tanto no projeto local quanto em produção, as páginas `/about`, `/services` e `/pricing` existem e contêm os templates originais intactos do AstroWind (em inglês). No entanto:
- Não há links apontando para elas na navegação do Header nem do Footer.
- A navegação está configurada para exibir apenas links para a seção de Serviços na home (`/#servicos`) e o Blog (`/blog`).
- As páginas continuam no projeto caso o usuário deseje customizá-las no futuro.
