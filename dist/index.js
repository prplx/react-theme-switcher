"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);var i="cbf1943de9dfa9c9c27b0b6b4db5a34675c842feee07b8cd373baf6c9aa2203f",s=`._theme-switcher_10rpn_1 {
  --light-color: var(--theme-switcher-light-color, #a1a1aa);
  --light-hover-color: var(--theme-switcher-light-hover-color, #27272a);
  --dark-color: var(--theme-switcher-dark-color, #a1a1aa);
  --dark-hover-color: var(--theme-switcher-dark-hover-color, #ffffff);
  --size: var(--theme-switcher-size, 1.6rem);
  --size-mobile: var(--theme-switcher-size-mobile, 32px);

  inline-size: var(--size);
  block-size: var(--size);
  background: none;
  border: none;
  padding: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
}

._theme-switcher_10rpn_1 > svg {
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;
}

._theme-switcher_10rpn_1:is(:hover, :focus-visible) ._theme-switcher-sun_10rpn_28 {
  fill: var(--light-hover-color);
}

._theme-switcher_10rpn_1:is(:hover, :focus-visible) ._theme-switcher-sun-beams_10rpn_32 {
  stroke: var(--light-hover-color);
}

._theme-switcher-sun-and-moon_10rpn_36 > ._theme-switcher-sun_10rpn_28 {
  transition: transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
}

._theme-switcher-sun-and-moon_10rpn_36
  > :is(._theme-switcher-moon_10rpn_41, ._theme-switcher-sun_10rpn_28, ._theme-switcher-sun-beams_10rpn_32) {
  transform-origin: center center;
}

._theme-switcher-sun-and-moon_10rpn_36 > :is(._theme-switcher-moon_10rpn_41, ._theme-switcher-sun_10rpn_28) {
  fill: var(--light-color);
}

._theme-switcher-sun-and-moon_10rpn_36 > ._theme-switcher-sun-beams_10rpn_32 {
  stroke: var(--light-color);
  stroke-width: 2px;
  transition: transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
    opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
}

._theme-switcher_dark_10rpn_56 ._theme-switcher-moon_10rpn_41,
._theme-switcher_dark_10rpn_56 ._theme-switcher-sun_10rpn_28 {
  fill: var(--dark-color);
}

._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56:is(:hover, :focus-visible)
  ._theme-switcher-sun_10rpn_28,
._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56:is(:hover, :focus-visible)
  ._theme-switcher-moon_10rpn_41 {
  fill: var(--dark-hover-color);
}

._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56 ._theme-switcher-sun_10rpn_28 {
  transform: scale(1.75);
  transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
  transition-duration: 0.25s;
}

._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56 ._theme-switcher-sun-beams_10rpn_32 {
  opacity: 0;
  transform: rotateZ(-25deg);
  transition-duration: 0.15s;
}

._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56 ._theme-switcher-moon_10rpn_41 > circle {
  transform: translateX(-7px);
  transition-delay: 0.25s;
  transition-duration: 0.5s;
}

._theme-switcher_10rpn_1._theme-switcher_dark_10rpn_56 {
  @supports (cx: 1) {
    ._theme-switcher-sun-and-moon_10rpn_36 ._theme-switcher-moon_10rpn_41 > circle {
      transform: translateX(0);
      cx: 17;
    }
  }
}

@media (hover: none) {
  ._theme-switcher_10rpn_1 {
    --size: var(--theme-switcher-size-mobile);
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=s,document.head.appendChild(t)}})();var r={themeSwitcher:"_theme-switcher_10rpn_1",themeSwitcherSun:"_theme-switcher-sun_10rpn_28",themeSwitcherSunBeams:"_theme-switcher-sun-beams_10rpn_32",themeSwitcherSunAndMoon:"_theme-switcher-sun-and-moon_10rpn_36",themeSwitcherMoon:"_theme-switcher-moon_10rpn_41",themeSwitcherDark:"_theme-switcher_dark_10rpn_56"};var n="theme-switcher-mask-1681334187159",o= exports.ThemeSwitcher =({onChange:t,theme:h="light"})=>_react2.default.createElement("button",{className:`${r.themeSwitcher} ${h==="dark"?r.themeSwitcherDark:""}`,title:"Toggles light & dark","aria-label":"auto","aria-live":"polite",onClick:t},_react2.default.createElement("svg",{className:r.themeSwitcherSunAndMoon,"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("circle",{className:r.themeSwitcherSun,cx:"12",cy:"12",r:"6",mask:`url(#${n})`,fill:"currentColor"}),_react2.default.createElement("g",{className:r.themeSwitcherSunBeams,stroke:"currentColor"},_react2.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),_react2.default.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),_react2.default.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),_react2.default.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),_react2.default.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),_react2.default.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),_react2.default.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),_react2.default.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})),_react2.default.createElement("mask",{className:r.themeSwitcherMoon,id:n},_react2.default.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),_react2.default.createElement("circle",{cx:"25",cy:"10",r:"6",fill:"black"}))));exports.ThemeSwitcher = o;
//# sourceMappingURL=index.js.map