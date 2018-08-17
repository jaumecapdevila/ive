# IVE

> VIM emulation for your textareas

## Install

Currently this extension is only available for Firefox users. You can find the
extension in the [Addons markeplace](https://addons.mozilla.org/en-US/firefox/).

Hopefully, it's going to be available for other browsers
such as Chrome or Opera soon :)

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
| y       | Copy the selected content to the buffer |
| dd      | Remove the current line and stores it's content to the buffer |
| Esc     | Activate the normal mode |
| i       | Activate the insert mode |
| A       | Set the position of the cursor at the end of the current line and switch to insert mode |
| o       | Insert a new line below the current line and switch to insert mode |
| p       | Paste the content of the buffer below the current line |
| J       | Joins the current and the following line |
| V       | Select the current line |

A lot of more commands coming soon :) Feel free to collaborate by making a Pull Request.

## Customization

By default the extension it's going to add a fixed status bar to the bottom of
the page that you are visiting to indicate the active mode.
If you want to remove it, go to the extension's preferences page
and uncheck this option.

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
