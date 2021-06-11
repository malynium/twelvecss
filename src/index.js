const svgToDataUri = require('mini-svg-data-uri');
const hexRgbs = require('hex-rgbs');
const plugin = require('tailwindcss/plugin');
const a11yColors = require('twelvecss/a11yColors');

module.exports = plugin.withOptions(
  (options = { typography: 'class' }) => {
    return ({ e, addBase, addUtilities, addComponents, theme }) => {
      const colors = theme('colors');
      const typographyStrategy = options.typography;
      
      const baseRules = [
        {
          target: [':root'],
          styles: {
            '--tw-bg-opacity': '1',
          }
        },
        {
          target: [':checked:hover', ':checked:hover:focus'],
          styles: {
            '--tw-ring-opacity': '1',
            '--tw-ring-color': theme('colors.gray.200', colors.gray[200]),
            '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
            '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
            '-webkit-box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            '-moz-box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
          }
        },
        {
          target: ['button:focus', 'input:focus', 'select:focus', 'textarea:focus'],
          styles: {
            '&:focus': {
              outline: 'none',
              '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
              '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
              '-webkit-box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              '-moz-box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            }
          }
        },
        {
          target: ['select'],
          styles: {
            appearance: 'none',
            'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="${theme('colors.gray.400', colors.gray[400])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>`)}")`,
            'background-position': `right 1rem top 50%`,
            'background-repeat': `no-repeat`,
          }
        },
        {
          target: ['pre'],
          styles: {
            'padding-left': '1.25rem',
            'padding-right': '1.25rem',
          }
        },
        {
          target: ['pre code'],
          styles: {
            'white-space': 'pre-wrap',
          }
        }
      ]

      addBase(
        baseRules
          .map((rule) => {
            return { [rule['target']]: rule.styles }
          })
      )

      const typographyRules = [
        {
          auto: [ 'p' ],
          class: [ '.p' ],
          styles: {
            'font-size': '1.125rem',
            'line-height': '1.75rem',
            'margin-top': '1.25rem',
            '@media (min-width: 640px)': {
              'font-size': '1.25rem',
              'line-height': '1.75rem',
            },
            '@media (min-width: 1024px)': {
              'font-size': '1.5rem',
              'line-height': '2rem',
            }
          }
        },
        {
          auto: [ '.blockquote' ],
          class: [ '.blockquote' ],
          styles: {
            'margin-top': '1.5rem',
            'border-left-width': '8px',
            'border-right-width': '4px',
            padding: '0.75rem',
            '--tw-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            '@media (min-width: 768px)': {
              'margin-top': '2rem',
              padding: '1rem',
            },
            '@media (min-width: 1280px)': {
              'margin-top': '2.5rem',
              padding: '1.25rem',
            }
          }
        },
        {
          auto: [ 'blockquote p' ],
          class: [ 'blockquote p' ],
          styles: {
            'margin-top': '0px',
          }
        },
        {
          auto: [ 'figure blockquote p' ],
          class: [ 'figure blockquote p' ],
          styles: {
            'margin-top': '0px',
          }
        },
        {
          auto: [ 'figure blockquote ~ figcaption' ],
          class: [ 'figure blockquote ~ figcaption' ],
          styles: {
            'margin-top': '0.75rem',
          }
        },
        {
          auto: [ 'h1' ],
          class: [ '.h1' ],
          styles: {
            'font-weight': '700',
            'font-size': '2.25rem',
            'line-height': '2.5rem',
            'margin-top': '2.5rem',
            '@media (min-width: 640px)': {
              'font-size': '3rem',
              'line-height': '1',
            },
            '@media (min-width: 768px)': {
              'font-size': '3.75rem',
              'line-height': '1',
            },
            '@media (min-width: 1024px)': {
              'font-size': '4.5rem',
              'line-height': '1',
            }
          }
        },
        {
          auto: [ 'h2' ],
          class: [ '.h2' ],
          styles: {
            'font-weight': '700',
            'font-size': '1.875rem',
            'line-height': '2.25rem',
            'margin-top': '2.5rem',
            '@media (min-width: 640px)': {
              'font-size': '2.25rem',
              'line-height': '2.5rem',
            },
            '@media (min-width: 768px)': {
              'font-size': '3rem',
              'line-height': '1',
            },
            '@media (min-width: 1024px)': {
              'font-size': '3.75rem',
              'line-height': '1',
            }
          }
        },
        {
          auto: [ 'h3' ],
          class: [ '.h3' ],
          styles: {
            'font-weight': '700',
            'font-size': '1.5rem',
            'line-height': '2rem',
            'margin-top': '2.5rem',
            '@media (min-width: 640px)': {
              'font-size': '1.875rem',
              'line-height': '2.25rem',
            },
            '@media (min-width: 768px)': {
              'font-size': '2.25rem',
              'line-height': '2.5rem',
            },
            '@media (min-width: 1024px)': {
              'font-size': '3rem',
              'line-height': '1',
            }
          }
        },
        {
          auto: [ 'h4' ],
          class: [ '.h4' ],
          styles: {
            'font-weight': '700',
            'font-size': '1.25rem',
            'line-height': '1.75rem',
            'margin-top': '2.5rem',
            '@media (min-width: 640px)': {
              'font-size': '1.5rem',
              'line-height': '2rem',
            },
            '@media (min-width: 768px)': {
              'font-size': '1.875rem',
              'line-height': '2.25rem',
            },
            '@media (min-width: 1024px)': {
              'font-size': '2.25rem',
              'line-height': '2.5rem',
            }
          }
        },
        {
          auto: [ 'h5' ],
          class: [ '.h5' ],
          styles: {
            'font-weight': '700',
            'font-size': '1.125rem',
            'line-height': '1.75rem',
            'margin-top': '2.5rem',
            '@media (min-width: 640px)': {
              'font-size': '1.25rem',
              'line-height': '1.75rem',
            },
            '@media (min-width: 768px)': {
              'font-size': '1.5rem',
              'line-height': '2rem',
            },
            '@media (min-width: 1024px)': {
              'font-size': '1.875rem',
              'line-height': '2.25rem',
            }
          }
        },
        {
          auto: [ '.subheading' ],
          class: [ '.subheading' ],
          styles: {
            'font-size': '1.25rem',
            'line-height': '1.75rem',
            'margin-top': '1.25rem',
            '@media (min-width: 640px)': {
              'font-size': '1.5rem',
              'line-height': '2rem',
            },
            '@media (min-width: 1024px)': {
              'font-size': '1.875rem',
              'line-height': '2.25rem',
            }
          }
        }
      ]

      addBase(
        typographyRules
          .map((rule) => {
            if (rule[typographyStrategy] === null) {
              return null
            }

            return { [rule[typographyStrategy]]: rule.styles }
          })
          .filter(Boolean)
      )

      const buttonColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.button-${e(key)}`]: {
              'background-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`), 'var(--tw-bg-opacity)'),
            },
          };
        }

        if (typeof colors[key] === 'object') {
          const colorShades = Object.keys(colors[key]);
          return {
            ...acc,
            ...colorShades.reduce(
              (a, shade) => ({
                ...a,
                [`.button-${e(key)}-${shade}`]: {
                  'background-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`), 'var(--tw-bg-opacity)'),
                  color: a11yColors[key] ? a11yColors[key][shade] : 'currentColor',
                }
              }),
              {}
            ),
          };
        }
      }, {});

      addComponents(buttonColors, {
        respectPrefix: false
      })

      const checkboxColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.checkbox-${e(key)}:checked`]: {
              'background-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
              'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="${a11yColors[key] ? a11yColors[key] : 'currentColor'}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>`)}")`,
              'border-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
            }
          };
        }

        if (typeof colors[key] === 'object') {
          const colorShades = Object.keys(colors[key]);
          return {
            ...acc,
            ...colorShades.reduce(
              (a, shade) => ({
                ...a,
                [`.checkbox-${e(key)}-${shade}:checked`]: {
                  'background-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                  'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="${a11yColors[key] ? a11yColors[key][shade] : 'currentColor'}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>`)}")`,
                  'border-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                }
              }),
              {}
            ),
          };
        }
      }, {});

      addComponents(checkboxColors, {
        respectPrefix: false
      })

      const radioColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.radio-${e(key)}\:checked`]: {
              'border-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
              'background-color':  hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
              'background-clip': 'content-box',
              padding: '2px',
            },
          };
        }

        if (typeof colors[key] === 'object') {
          const colorShades = Object.keys(colors[key]);
          return {
            ...acc,
            ...colorShades.reduce(
              (a, shade) => ({
                ...a,
                [`.radio-${e(key)}-${shade}\:checked`]: {
                  'border-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                  'background-color':  hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                  'background-clip': 'content-box',
                  padding: '2px',
                },
              }),
              {}
            ),
          };
        }
      }, {});

      addComponents(radioColors, {
        respectPrefix: false
      })

      const switchColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.switch-${e(key)}:checked`]: {
              'background-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
              'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="${a11yColors[key] ? a11yColors[key] : 'currentColor'}" /></svg>`)}")`,
              'background-position': 'right',
              'background-repeat': 'no-repeat',
              'border-color': hexRgbs(theme(`colors.${key}`, `colors.${key}`)),
            }
          };
        }

        if (typeof colors[key] === 'object') {
          const colorShades = Object.keys(colors[key]);
          return {
            ...acc,
            ...colorShades.reduce(
              (a, shade) => ({
                ...a,
                [`.switch-${e(key)}-${shade}:checked`]: {
                  'background-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                  'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="${a11yColors[key] ? a11yColors[key][shade] : 'currentColor'}" /></svg>`)}")`,
                  'background-position': 'right',
                  'background-repeat': 'no-repeat',
                  'border-color': hexRgbs(theme(`colors.${key}.${shade}`, `colors.${key}.${shade}`)),
                }
              }),
              {}
            ),
          };
        }
      }, {});

      addComponents(switchColors, {
        respectPrefix: false
      })

      const componentsRules = {
        '.button-lg': {
          'padding-top': '0.625rem',
          'padding-bottom': '0.625rem',
          'padding-left': '1.5rem',
          'padding-right': '1.5rem',
          'font-size': '1.125rem',
          'line-height': '1.75rem',
        },
        '.button-md': {
          'padding-top': '0.5rem',
          'padding-bottom': '0.5rem',
          'padding-left': '1.25rem',
          'padding-right': '1.25rem',
          'font-size': '1rem',
          'line-height': '1.5rem',
        },
        '.button-sm': {
          'padding-top': '0.375rem',
          'padding-bottom': '0.375rem',
          'padding-left': '0.875rem',
          'padding-right': '0.875rem',
          'font-size': '0.875rem',
          'line-height': '1.25rem',
        },
        '.button-text-black': {
          color: 'black',
        },
        '.button-text-white': {
          color: 'white',
        },
        '.checkbox-lg': {
          height: '1.25rem',
          width: '1.25rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.checkbox-md': {
          height: '1rem',
          width: '1rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.checkbox-sm': {
          height: '0.875rem',
          width: '0.875rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.checkbox-lg:hover:not(:checked),.checkbox-md:hover:not(:checked),.checkbox-sm:hover:not(:checked)': {
          'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="${theme('colors.gray.400', colors.gray[400])}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>`)}")`,
        },
        '.checkmark-black:checked': {
          'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>`)}")`,
        },
        '.checkmark-white:checked': {
          'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>`)}")`,
        },
        '.input-lg': {
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          'padding-left': '1rem',
          'padding-right': '1rem',
          'padding-top': '0.75rem',
          'padding-bottom': '0.75rem',
        },
        '.input-md': {
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          'padding-left': '1rem',
          'padding-right': '1rem',
          'padding-top': '0.5rem',
          'padding-bottom': '0.5rem',
        },
        '.input-sm': {
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          'padding-left': '1rem',
          'padding-right': '1rem',
          'padding-top': '0.25rem',
          'padding-bottom': '0.25rem',
        },
        '.radio-lg': {
          height: '1.25rem',
          width: '1.25rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.radio-md': {
          height: '1rem',
          width: '1rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.radio-sm': {
          height: '0.875rem',
          width: '0.875rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '2px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(161, 161, 170, var(--tw-border-opacity))',
        },
        '.radio-lg:hover:not(:checked),.radio-md:hover:not(:checked),.radio-sm:hover:not(:checked)': {
          'background-color': 'rgba(212, 212, 216, 1)',
          'background-clip': 'content-box',
          padding: '2px',
        },
        '.switch-lg': {
          height: '1.5rem',
          width: '3.5rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          '--tw-bg-opacity': '1',
          'background-color': 'rgba(228, 228, 231, var(--tw-bg-opacity))',
          '-webkit-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          '-moz-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          transition: 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          'background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle cx='50' cy='50' r='40' fill='rgba(161%2c 161%2c 170%2c 1)'/%3e%3c/svg%3e")`,
          'background-repeat': 'no-repeat',
        },
        '.switch-md': {
          height: '1.25rem',
          width: '2.75rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          '--tw-bg-opacity': '1',
          'background-color': 'rgba(228, 228, 231, var(--tw-bg-opacity))',
          '-webkit-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          '-moz-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          transition: 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          'background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle cx='50' cy='50' r='40' fill='rgba(161%2c 161%2c 170%2c 1)'/%3e%3c/svg%3e")`,
          'background-repeat': 'no-repeat',
        },
        '.switch-sm': {
          height: '1rem',
          width: '2rem',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          'border-radius': '9999px',
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          '--tw-bg-opacity': '1',
          'background-color': 'rgba(228, 228, 231, var(--tw-bg-opacity))',
          '-webkit-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          '-moz-transition': 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          transition: 'background-image 200ms ease-in-out, background-color 200ms ease-in-out, background-position 200ms ease-in-out, border-color 200ms ease-in-out',
          'background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle cx='50' cy='50' r='40' fill='rgba(161%2c 161%2c 170%2c 1)'/%3e%3c/svg%3e")`,
          'background-repeat': 'no-repeat',
        },
        '.switch-lg:hover:not(:checked),.switch-md:hover:not(:checked),.switch-sm:hover:not(:checked)': {
          '--tw-border-opacity': '1',
          'border-color': 'rgba(212, 212, 216, var(--tw-border-opacity))',
          '--tw-bg-opacity': '1',
          'background-color': 'rgba(212, 212, 216, var(--tw-bg-opacity))',
        },
        '.switcher-black:checked': {
          'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="black" /></svg>`)}")`,
        },
        '.switcher-white:checked': {
          'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white" /></svg>`)}")`,
        },
        '.textarea': {
          'border-width': '1px',
          '--tw-border-opacity': '1',
          'border-color': 'rgba(228, 228, 231, var(--tw-border-opacity))',
          'padding-left': '1rem',
          'padding-right': '1rem',
          'padding-top': '0.25rem',
          'padding-bottom': '0.25rem',
        },
      }

      addComponents(componentsRules, {
        respectPrefix: false
      })
    };
  },
  () => ({ /* variants */ })
);