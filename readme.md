A little and neat React theme switcher component with zero dependencies, besides React itself. Heavily inspired by this amazing article https://web.dev/building-a-theme-switch-component/ by [Adam Argyle](https://github.com/argyleink).

### Installation

```sh
npm i @prplx/react-theme-switcher
```

```sh
yarn add @prplx/react-theme-switcher
```

### Usage

```ts
import { useState, useEffect } from 'react'
import { ThemeSwitcher } from '@prplx/react-theme-switcher'

export const Component = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  useEffect(() => {
    if (isDark) {
      return document.body.classList.add('dark')
    }

    document.body.classList.remove('dark')
  }, [theme])

  return (
    <ThemeSwitcher onChange={toggleTheme} theme={isDark ? 'dark' : 'light'} />
  )
}
```

Component perfectly fits [next-themes](https://github.com/pacocoursey/next-themes) package compatible with NextJS 13.

```ts
'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeSwitcher } from '@prplx/react-theme-switcher'

const Component = () => {
  const [mounted, setMounted] = useState(false)
  const [toggleState, setToggleState] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    let toggle = false

    if (theme === 'system') {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      toggle = darkThemeMq.matches
    } else {
      toggle = theme === 'dark'
    }

    setToggleState(toggle)
    setMounted(true)
  }, [])

  const onThemeChange = () => {
    setToggleState(!toggleState)
    setTheme(toggleState ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return <ThemeSwitcher onChange={onThemeChange} theme={theme} />
}

export default Component
```

### Customization

The component has a reasonable set of settings, however you can customize its size and colors using css variables

```css
:root {
  --theme-switcher-light-color: #a1a1aa;
  --theme-switcher-light-hover-color: #27272a;
  --theme-switcher-dark-color: #a1a1aa;
  --theme-switcher-dark-hover-color: #ffffff;
  --theme-switcher-size: 1.6rem;
  --theme-switcher-size-mobile: 2rem;
}
```
