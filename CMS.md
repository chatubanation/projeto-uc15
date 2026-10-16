# Documentação WordPress e Migração CMS - Projeto UC15 (T10)

Documento explicativo da arquitetura, migração e manutenção do portal em ambiente WordPress.

---

## Ambiente de Desenvolvimento Local e Produção

* **Ambiente Local:** LocalWP / XAMPP (PHP 8.2, MySQL 8.0).
* **Servidor de Produção/Staging:** Apache com suporte a HTTPS e extensão `mod_rewrite`.
* **Substituição de URLs:** Executada via CLI (`wp search-replace 'http://localhost' 'https://meudominio.com'`).

---

## Tema Filho (Child Theme)

* **Tema Pai:** Twenty Twenty-Four (ou equivalente oficial).
* **Estrutura:** Criado para evitar perda de personalização durante atualizações do tema pai.
* **Arquivos do Tema Filho:**
  * `style.css` (declaração de cabeçalho do tema filho).
  * `functions.php` (enfileiramento correto de scripts e estilos via `wp_enqueue_style`).
  * `theme.json` (paleta de cores e tipografia vinculadas às Custom Properties do protótipo).

---

## Plugins Utilizados e Justificativa

| Plugin | Finalidade | Procedência | Plano de Rollback |
| :--- | :--- | :--- | :--- |
| **SEO Framework / Yoast** | Gerenciamento de Metadados e Canonical URLs | Repositório Oficial WordPress | Desativação sem perda do conteúdo base. |
| **WP Super Cache** | Otimização de Performance e Cache de Páginas | Repositório Oficial WordPress | Exclusão do cache via FTP/Panel. |

---

## Permissões de Usuários e Segurança

* **Papel "Editor":** Acesso restrito apenas à criação, edição e publicação de notícias, artigos e tabelas.
* **Papel "Administrador":** Restrito exclusivamente para manutenção do ambiente.
* **Credenciais:** Nenhuma senha ou chave foi exposta neste repositório.