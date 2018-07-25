# Fillit

Fillit is a very simplistic extension for Firefox that will try to autofill the inputs of all the forms present in the current page that you are visiting. 

## How it works

The extension is going to look for the `placeholder`  attribute of all the inputs and will use it's value to fill the associated input. In the case that no `placeholder` attribute is found, it will use a default value depending on the input's type. The current available types are:

```
const availableTypes = [
	'text',
	'password',
	'email',
	'tel',
	'url',
	'number',
	'range',
	'date',
	'color',
];
```

## Configuration

You can configure if the extension should automatically check for the available forms or not. To change the default value (which is false), just go the the extension's preference page and update the *Automatic check* checkbox.

