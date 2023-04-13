import React, { type FC } from 'react'
import styles from './theme-switcher.module.css'

type Props = {
  onChange: () => void
  theme?: string
}

const maskId = 'theme-switcher-mask-1681334187159'

export const ThemeSwitcher: FC<Props> = ({ onChange, theme = 'light' }) => {
  return (
    <button
      className={`${styles.themeSwitcher} ${
        theme === 'dark' ? styles.themeSwitcherDark : ''
      }`}
      title='Toggles light & dark'
      aria-label='auto'
      aria-live='polite'
      onClick={onChange}
    >
      <svg
        className={styles.themeSwitcherSunAndMoon}
        aria-hidden='true'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <circle
          className={styles.themeSwitcherSun}
          cx='12'
          cy='12'
          r='6'
          mask={`url(#${maskId})`}
          fill='currentColor'
        />
        <g className={styles.themeSwitcherSunBeams} stroke='currentColor'>
          <line x1='12' y1='1' x2='12' y2='3' />
          <line x1='12' y1='21' x2='12' y2='23' />
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
          <line x1='1' y1='12' x2='3' y2='12' />
          <line x1='21' y1='12' x2='23' y2='12' />
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
        </g>
        <mask className={styles.themeSwitcherMoon} id={maskId}>
          <rect x='0' y='0' width='100%' height='100%' fill='white' />
          <circle cx='25' cy='10' r='6' fill='black' />
        </mask>
      </svg>
    </button>
  )
}
