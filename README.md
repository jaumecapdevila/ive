# IVE

> VIM emulation for your textareas

## Install

This extension is still in development so it's not ready to be in any extension marketplace. If you want to try this extension jump right to the **Testing** section.

## Available commands

| Command | Action                                                       |
| ------- | ------------------------------------------------------------ |
| e       | Go to the end of the current word |
| b       | Go to the previous word |
| $       | Set the position of the cursor at the end of the current line |
| 0       | Set the position of the cursor at the beginning of the current line |
| gg      | Set the position of the cursor at the first character |
| G       | Set the position of the cursor at the last character |
| yy      | Copy the current line |
| dd      | Remove the current line and stores it's content to the buffer |
| Esc     | Activate the normal mode |
| i       | Activate the insert mode |
| A       | Set the position of the cursor at the end of the current line and switch to insert mode |
| O       | Insert a new line below the current line and switch to insert mode |
| p       | Paste the content of the buffer below the current line |

A lot of more commands coming soon :) Feel free to collaborate by making a Pull Request.

## Setup

Install dependencies:

```bash
npm install
```

Compile scripts and styles:

```bash
npm start
```

## Testing

### Firefox

1. Navigate to `about:debugging`

2. Click on `Load temporary Add-on`

3. Select the `manifest.json` inside the `dist` folder
