# Mac Setup Guide

This guide is for setting up this Astro portfolio project on a new Mac from scratch.

## 1. Install Core Tools

Open `Terminal` and install Homebrew if it is not already installed:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install the basic tools used for this project:

```bash
brew install git nvm
```

## 2. Configure `nvm`

Create the `nvm` directory:

```bash
mkdir -p ~/.nvm
```

Add this to `~/.zshrc`:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

Reload your shell:

```bash
source ~/.zshrc
```

## 3. Install Node.js

This project is currently working with Node 22.

Install and use it with:

```bash
nvm install 22
nvm use 22
node -v
npm -v
```

## 4. Clone the Repository

Choose a folder where you keep projects, then clone:

```bash
cd ~/Documents/projects
git clone <YOUR_REPO_URL> cxy_page
cd cxy_page
```

If the repo already exists on GitHub, use its real URL. If not, copy the project folder onto the new Mac first, then `cd` into it.

## 5. Install Dependencies

From the project root:

```bash
npm install
```

## 6. Run the Site Locally

Start the dev server:

```bash
npm run dev
```

Astro will print a local URL, usually:

```text
http://localhost:4321
```

Open that URL in the browser.

## 7. Build the Site

To make sure everything is working:

```bash
npm run build -- --force
```

The `--force` flag is useful here because the project may have empty content collections while the portfolio is still being built.

If you want to preview the production build locally:

```bash
npm run preview
```

## 8. Personalize the Site

Before publishing, update these files:

- `src/site.ts`
  - name
  - email
  - LinkedIn URL
  - GitHub URL
- `src/content/posts`
  - add real writing pieces here
- `src/content/projects`
  - add real project case studies here when ready

## 9. GitHub Pages Deployment

This repo already includes a GitHub Actions workflow for deployment:

- `.github/workflows/deploy.yml`

To publish:

1. Push the repo to GitHub.
2. Go to the repository settings.
3. Open `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to the `main` branch.

The Astro config is already set up to work for a GitHub Pages repo path like:

```text
https://username.github.io/repo-name/
```

## 10. Recommended Workflow on the New Mac

Each time you start work:

```bash
cd ~/Documents/projects/cxy_page
nvm use 22
npm run dev
```

Before committing:

```bash
npm run build -- --force
git status
```

## 11. Optional Tools

Useful extras if you want them:

```bash
brew install --cask visual-studio-code
brew install gh
```

- `Visual Studio Code` for editing
- `gh` for working with GitHub from the terminal

## 12. Troubleshooting

If `nvm` is not found:

- Make sure the `~/.zshrc` lines were added correctly
- Run `source ~/.zshrc`
- Open a new terminal window

If `npm install` fails:

- Check that `node -v` shows Node 22
- Delete `node_modules` and `package-lock.json` only if you intentionally want a clean reinstall
- Run `npm install` again

If the site builds but `projects` or `writing` show warnings:

- That is expected when those content collections are empty
- The site can still run and build normally

## 13. Minimum Commands Cheat Sheet

```bash
cd ~/Documents/projects/cxy_page
nvm use 22
npm install
npm run dev
npm run build -- --force
```
