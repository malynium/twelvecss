# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing to see here

## [1.0.2] - 2022-01-18

### Fixed

- TailwindCSS version requirements

## [1.0.1] - 2022-01-18

### Changed

- Little of nothing

## [1.0.0] - 2022-01-18

### Added

- slate, gray, zinc, neutral, stone colors to a11yColors.js

### Changed

- removed lightBlue, warmGray, coolGray, trueGray, blueGray colors from a11yColors.js

## [0.5.0] - 2021-07-24

### Added

- sky color to a11yColors.js

### Changed

- deprecates lightBlue color in a11yColors.js, per Tailwind

## [0.4.4] - 2021-06-17

### Fixed

- broken hover states for checkboxes, radios, switches at lg screens and up

## [0.4.3] - 2021-06-16

### Changed

- only applies hover states for checkboxes, radios, switches at lg screens and up

### Fixed

- makes hex-rgbs a dependency, instead of devDependency

## [0.4.2] - 2021-06-15

### Fixed

- non-functioning version of hex-rgbs

## [0.4.1] - 2021-06-11

### Changed

- uses hex-rgbs package instead of hex-to-rgba

### Fixed

- `bg-opacity-{value}` Tailwind classes having no effect with `button-{color}[{shade}]` Twelvecss classes

## [0.4.0] - 2021-06-08

### Added

- Typography for headings, paragraphs and blockquotes
- 'subheading' typography class
- string-based custom color support for checkboxes and radios

### Changed

- Radio button padding from percent to pixel, for more consistency across device widths

## [0.3.0] - 2021-05-26

### Added

- Custom colors for switches and checkboxes
- a11y fallback classes for button text, checkmarks and switchers

### Changed

- CHANGELOG.md version links
- README.md to document custom color configurations

### Fixed

- crash when custom colors are defined as objects

## [0.2.0] - 2021-05-25

### Added

- Support for custom theme colors in your Tailwind config file. Extending your theme with custom colors was breaking the app before this change

- Support for custom colors for buttons and radios. Ex, radio-primary. However, for buttons, it will likely be easier to use Tailwind classes for your background and text. This is because we don't know what your custom colors are; so we can't set a proper a11y compatible text color like we would with button-blue-700. So something like button-primary will only set the background color. However, the twelvecss classes are there if you'd like to use them

### Changed

- Updates CHANGELOG.md

## [0.1.2] - 2021-05-20

### Added

- This changelog

### Changed

- The way radio buttons are created

### Removed

- Unused Tailwind --tw-... vars for buttons, checkboxes, radios, and switches

## [0.1.1] - 2021-05-11

### Changed

- Adds keywords and bugs section in package.json
- Clarifies installing as a dev dependency

## [0.1.0] - 2021-05-11

### Added

Everything!

[Unreleased]: https://github.com/malynium/twelvecss/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/malynium/twelvecss/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/malynium/twelvecss/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/malynium/twelvecss/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/malynium/twelvecss/compare/v0.4.4...v0.5.0
[0.4.4]: https://github.com/malynium/twelvecss/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/malynium/twelvecss/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/malynium/twelvecss/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/malynium/twelvecss/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/malynium/twelvecss/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/malynium/twelvecss/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/malynium/twelvecss/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/malynium/twelvecss/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/malynium/twelvecss/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/malynium/twelvecss/releases/tag/v0.1.0