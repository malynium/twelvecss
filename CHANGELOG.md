# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Typography for headings and paragraphs

### Changed

- Radio button padding from percent to pixel, for more consistency across device widths

## [0.3.0] - 2021-05-26

### Added

- Custom colors for switches and checkboxes
- a11y fallback classes for button text, checkmarks and switchers

### Changed

- Updates CHANGELOG.md version links
- Updates README.md to document custom color configurations
- Fixes crash when custom colors are defined as objects

## [0.2.0] - 2021-05-25

### Added

- Support for custom theme colors in your Tailwind config file. Extending your theme with custom colors was breaking the app before this change

- Support for custom colors for buttons and radios. Ex, radio-primary. However, for buttons, it will likely be easier to use Tailwind classes for your background and text. This is because we don't know what your custom colors are; so we can't set a proper a11y compatible text color like we would with button-blue-700. So something like button-primary will only set the background color. However, the twelvecss classes are there if you'd like to use them

### Changed

- Updates CHANGELOG.md

## [0.1.2] - 2021-05-20

### Added

- This changelog

### Removed

- Unused Tailwind --tw-... vars for buttons, checkboxes, radios, and switches

### Changed

- The way radio buttons are created

## [0.1.1] - 2021-05-11

### Changed

- Adds keywords and bugs section in package.json
- Clarifies installing as a dev dependency

## [0.1.0] - 2021-05-11

### Added

Everything!

[Unreleased]: https://github.com/malynium/twelvecss/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/malynium/twelvecss/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/malynium/twelvecss/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/malynium/twelvecss/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/malynium/twelvecss/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/malynium/twelvecss/releases/tag/v0.1.0