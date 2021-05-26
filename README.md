# TwelveCSS

Easily style your HTML elements with convenience classes, based on TailwindCSS.

## Why should I use this?

- element class lists are easier to read
- save time, by typing less classes
- conserve mental energy - we provide various sizing standards, and options for a11y compatible text colors on buttons, switches and checkboxes
- cross-browser consistency - we ensure features like 'focus' look the same

For example, with TwelveCSS, you can do this:

```
<button class="button-md button-blue-600">Hello World!</button>
```

Instead of Tailwind utility classes (we still love you Tailwind):

```
<button class="py-2 px-5 bg-blue-600 text-white focus:ring-2">Hello World!</button>
```

## Installation and Setup

```
# npm || yarn

npm install -D twelvecss
yarn add -D twelvecss
```

Then enable the plugin in your Tailwind config file:

```
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('twelvecss'),
    // ...
  ]
}
```

## Documentation

### Colors

By default, Tailwind has eight colors available. Some of these colors are aliased to others. For instance, Green actually gives you Tailwind's Emerald shades.

If you'd like to use all of Tailwinds colors with TwelveCSS, be sure to extend the theme in your Tailwind config file:

```
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors
    },
  }
}
```

> Remember, when you enable all colors, aliasing no longer happens unless you explicitly configure them in Tailwind.

### Custom Colors

When you declare custom colors in your Tailwind config, those colors are available for buttons, radios, checkboxes and switches.

For example, with the below config, a few of the new classes you could use are `radio-primary` and `button-lilac-500`. 

```
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#aaa',
        lilac: {
          500: '#C094C0',
        },
      }
    },
  }
}
```

Because of how we define buttons, checkboxes and switches, we don't know what color text, checkmark or switcher to use for a11y compatibility. Therefore, we set the color of these to `currentColor`. If this does not pass a11y compatibility, then you can set button text color, checkmark color and switcher color with the following classes.

#### Buttons

`button-text-black`
`button-text-white`

#### Checkboxes

`checkmark-black`
`checkmark-white`

#### Switches

`switcher-black`
`switcher-white`

### Buttons

We have three button sizes - small, medium, and large.

`.button-sm`
`.button-md`
`.button-lg`

In order to style the background and text color of your buttons, you have two options:

#### 1. Use TwelveCSS

We provide classes, which automatically enable an a11y compatible text color.

button-{color}-{shade}

For example `button-blue-700` would add a blue-700 background with white text.
However, `button-blue-500` would have black text.

> These classes cannot be used with custom colors. 

#### 2. Use Tailwind utility classes

`bg-blue-600 text-white`

### Form Input

We have three input size classes - small, medium, and large.

`.input-sm`
`.input-md`
`.input-lg`

### Form Select

Simply use the same classes as Inputs.

> We replace all browser-supplied "dropdown" indicators with a [Heroicon](https://heroicons.com) chevron-down

### Form Textarea

This one is easy. Use the `textarea` class. 

It's actually styled similar to inputs, but you declare your size with HTML attributes.

### Form Checkbox

We have three checkbox size classes - small, medium, and large.

`.checkbox-sm`
`.checkbox-md`
`.checkbox-lg`

To style your checkboxes, you need to use our color classes - because we remove browser defaults. These provide an a11y compatible checkmark color.

.checkbox-{color}-{shade}

For example, `checkbox-blue-700` would add a blue-700 background with a white checkmark, when checked.

> We add styling for various checkbox CSS states such as `:checked:hover`, `:hover:not(:checked)`, and `:checked:hover:focus`

### Form Switch

We have three switch size classes - small, medium, and large.

`.switch-sm`
`.switch-md`
`.switch-lg`

To style your switches, you need to use our color classes. These provide an a11y compatible switch-circle color when "checked".

.switch-{color}-{shade}

For example, `switch-blue-700` would add a blue-700 background with a white switch-circle

> We add styling for various switch CSS states such as `:checked:hover`, `:hover:not(:checked)`, and `:checked:hover:focus`

### Form Radio

We have three radio size classes - small, medium, and large.

`.radio-sm`
`.radio-md`
`.radio-lg`

To style your radios, you need to use our color classes - because we remove browser defaults.

.radio-{color}-{shade}

For example, `radio-blue-700` would add a blue-700 background and blue-700 border.

> We add styling for various radio CSS states such as `:checked:hover`, `:hover:not(:checked)`, and `:checked:hover:focus`
