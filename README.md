# IVE

> VIM emulation for your textareas

## Install

This extension is still in development so it's not ready to be in any extension marketplace. If you want to try this extension jump right to the **Testing** section.

## Available commands

| Command   | Action                                                       |
| --------- | ------------------------------------------------------------ |
| yy        | Duplicates the current line                                  |
| dd        | Remove the current line (without copying its content to the buffer) |
| gg        | Set the position of the cursor at the beginning of the content |
| Shift + G | Set the position of the cursor at the end of the content     |
| Esc       | Activate the normal mode                                     |
| i         | Activate the insert mode                                     |
| $         | Set the position of the cursor at the end of the current line |
| 0         | Set the position of the cursor at the beginning of the current line |

A lot of more commands coming soon :) Feel free to collaborate by making a Pull Request.

## Setup

Install dependencies:

```
npm install
```

Compile scripts and styles:

```
npm start
```

## Testing

###### Firefox

1. Navigate to `about:debugging`

2. Click on `Load temporary Add-on`

3. Select the `manifest.json` inside the `dist` folder
