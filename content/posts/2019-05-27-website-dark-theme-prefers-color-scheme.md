---
title: เพิ่มธีมสีมืดให้เว็บไซต์ด้วย prefers-color-scheme
author: LazyWasabi
date: 2019-05-27T12:55:00+00:00
lastmod: 2020-12-17
slug: website-dark-theme-prefers-color-scheme
description: prefers-color-scheme เป็น CSS Media queries ใช้เพื่อตรวจสอบว่าเบราว์เซอร์ต้องการใช้ธีมใด ช่วยให้เราทำเว็บให้มี dark theme ได้ง่ายๆ ทั้งด้วย CSS หรือ JavaScript
images:
  - https://cdn.lazywasabi.net/blog/i/prefers-color-scheme-cover.jpg
tags:
  - Web Dev
---

`prefers-color-scheme` เป็นหนึ่งใน [CSS Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) ใช้เพื่อตรวจสอบว่าเบราว์เซอร์ต้องการใช้ธีมสีใดในเว็บไซต์ โดยจะแบ่งเป็น `light` สำหรับธีมสีสว่าง ☀️ และ `dark` สำหรับธีมสีมืด 🌙

<!--more-->

วิธีใช้ก็ไม่ยาก เหมือน CSS Media queries ที่ใช้ทำเว็บให้เป็น responsive แต่แทนที่เราจะตรวจสอบค่า `width` ก็เปลี่ยนมาเป็น `prefers-color-scheme` แทนแบบนี้

```css
@media (prefers-color-scheme: light) {
  body {
    background: white;
    color: black;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
```

ในโค้ดด้านบนคือถ้าผู้ใช้ตั้งธีมสีสว่างไว้ พื้นหลังก็จะเป็นสีขาว และตัวอักษรสีดำ แต่ถ้าตั้งธีมสีมืดไว้ก็จะกลับกัน เป็นพื้นหลังก็สีดำ และตัวอักษรสีขาวแทน

โดยธีมที่เบราว์เซอร์เลือกใช้จะอิงจากการตั้งค่าธีมของระบบ เช่นบน [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface), [Android](https://developer.android.com/preview/features/darktheme) แบบนี้

{{< video src="https://cdn.lazywasabi.net/blog/i/pakin.me-light-dark-theme-may-2020.mp4" width="300" controls="1" autoplay="1" muted="1" loop="1" >}}

ตอนนี้เบราว์เซอร์ยอดนิยม ไม่ว่าจะเป็น Chrome, Firefox, Safari, Edge ทั้งบนเดสก์ท็อปและมือถือ รองรับ `prefers-color-scheme` กันครบแล้ว ส่วนเบราว์เซอร์อื่นๆ ดูข้อมูลเพิ่มเติมได้[ด้านล่าง](#caniuse)เลย

และแน่นอนครับ บล็อกนี้ก็รองรับ `prefers-color-scheme` ด้วย โดยเขียนปุ่มสลับธีมขึ้นมาเอง และใช้ร่วมกับ [Dark Mode ของ Tailwind CSS](https://tailwindcss.com/docs/dark-mode)

## ตัวอย่างการใช้งาน

กำหนดให้เบราว์เซอร์โหลดไฟล์ CSS สำหรับ dark theme เฉพาะเมื่อต้องการ

```html
<link
  rel="stylesheet"
  href="/css/dark.css"
  type="text/css"
  media="(prefers-color-scheme: dark)"
/>
```

หรือใช้ร่วมกับ [CSS Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

```css
:root {
  --background: #fff;
  --color: #000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #000;
    --color: #fff;
  }
}

body {
  background: var(--background);
  color: var(--color);
}
```

จะใช้กับ JavaScript ก็ทำได้เช่นกัน โดยใช้ [`Window.matchMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) แบบนี้

```js
if (matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}
```

สำหรับตัวอย่างเว็บไซต์ที่รองรับ `prefers-color-scheme` เพิ่มเติม ลองดูเว็บไซต์ด้านล่างนี้ได้เลยครับ 👇

- [Twitter](https://twitter.com/)
- [Emojipedia](https://emojipedia.org/)
- [Bugzilla](https://bugzilla.mozilla.org/home)
- [Android Police](https://www.androidpolice.com/)

## ข้อมูลเบราว์เซอร์ที่รองรับ {#caniuse}

{{< caniuse prefers-color-scheme >}}

ข้อมูลเพิ่มเติม ℹ

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Can I Use](http://caniuse.com/#feat=prefers-color-scheme)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme)

_ภาพปกโดย [Jason Blackeye บน Unsplash](https://unsplash.com/photos/w1soRXeoYac)_
