---
title: ปรับเว็บไซต์ให้รองรับ theme-color ใน Chrome
author: LazyWasabi
date: 2014-11-11T02:00:00+00:00
lastmod: 2020-06-08
slug: add-suppot-for-theme-color-in-chrome-on-android
tags:
  - Web Dev
---

Chrome 39 สำหรับแอนดรอยด์เพิ่มการรองรับเมตาแท็ก `theme-color` ทำให้สามารถปรับสีแถบเครื่องมือของ Chrome เมื่อเปิดเว็บของเราได้ตามใจชอบ

<!--more-->

ขั้นตอนการใช้งานนั้นง่ายมาก เพียงเพิ่มเมตาแท็กเข้าไป 1 บรรทัดภายในแท็ก ของเว็บไซต์ดังนี้

```html
<meta name="theme-color" content="#โค้ดสี" />
```

และเมื่อเปิดเว็บโดยใช้ Chrome บนแอนดรอยด์ ตัวแถบเครื่องมือก็จะเปลี่ยนสีไปตามที่เรากำหนด อันนี้เป็นตัวอย่างของ Facebook ครับ

{{< img src="https://cdn.lazywasabi.net/blog/i/facebook-theme-color-on-chrome.png" width="300" alt="ตัวอย่างการใช้งาน theme-color ในเว็บไซต์ Facebook บนมือถือ" >}}

**อัปเดต:** นอกจาก Chrome แล้ว เบราว์เซอร์อื่นๆ ที่มีพื้นฐานจาก Chromium เช่น [Brave](https://play.google.com/store/apps/details?id=com.brave.browser), [Samsung Internet Browser](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser) ก็รองรับเช่นกัน รวมถึง[แอป Google บน iOS](https://dribbble.com/shots/1858627-iOS-Google-App-Colored-Headers) ด้วยครับ

## ข้อมูลเบราว์เซอร์ที่รองรับ {#caniuse}

{{< caniuse meta-theme-color >}}

**อ่านเพิ่มเติม:** [Google Developers](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)
