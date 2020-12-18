---
title: สร้างปุ่มแชร์ด้วย Web Share API
author: LazyWasabi
date: 2017-09-20T02:00:00+00:00
lastmod: 2020-08-14
slug: share-button-with-web-share-api
images:
  - https://cdn.lazywasabi.net/blog/i/share-button-with-web-share-api.png
tags:
  - Web Dev
---

ใน [Chrome 61](https://developers.google.com/web/updates/2017/09/nic61) บนแอนดรอยด์ มีฟีเจอร์ใหม่ที่น่าสนใจคือ `navigator.share()` หรือ [Web Share API](https://web.dev/web-share/) บทความนี้จะพามาทำความรู้จักและลองใช้กันดูครับ

<!--more-->

## Web Share API คืออะไร?

Web Share API ทำให้เว็บไซต์สามารถเรียกหน้าต่างแชร์ของระบบขึ้นมาได้ โดยตอนนี้รองรับใน Chrome หรือเบราว์เซอร์อื่นๆ ที่พัฒนาจาก Chromium บนแอนดรอยด์ และ Safari ทั้งบน macOS และ iOS

{{< video src="https://cdn.lazywasabi.net/blog/i/pakin.me-web-share-api.mp4" width="300" controls="1" autoplay="1" muted="1" loop="1">}}

ข้อดีของ Web Share API คือเรามั่นใจได้เลยว่าจะมีช่องทางที่ผู้ใช้ต้องการแชร์ไปให้เลือกแน่นอน เพราะมันเป็นการแชร์ไปยังแอปที่ติดตั้งอยู่ในอุปกรณ์ของผู้ใช้ ปกติแล้วเราใช้แอปไหนเป็นประจำก็โหลดติดเครื่องกันไว้อยู่แล้วเนอะ แถมผู้ใช้ก็คุ้นเคยกับ UI และ UX การแชร์แบบนี้อยู่แล้วด้วย

นอกจากนี้เรายังสามารถกำหนดข้อมูลที่จะแชร์ได้ ไม่จำเป็นต้องเป็นหน้าเว็บที่เราดูอยู่ อาจเป็นหน้าเว็บอื่น หรือข้อความเปล่าๆ ไม่ต้องมี URL ก็ได้

และข้อดีสุดท้ายคือ UI ของเว็บเรา ไม่จำเป็นต้องมีปุ่มแชร์หลายๆ ปุ่มให้รก ใช้แค่ปุ่มแชร์ปุ่มเดียวก็พอแล้ว

## ลองใช้ Web Share API

รู้จักกันแล้วก็ได้เวลามาลองใช้กันดู การจะใช้ Web Share API มีเงื่อนไขอยู่สองอย่างดังนี้

- เว็บของเราต้องใช้งานผ่าน HTTPS
- เรียกใช้ API ได้ด้วยการกระทำของผู้ใช้เท่านั้น

อธิบายง่ายๆ อย่างเช่นจะทำให้เว็บของเราโหลดเสร็จแล้วมีหน้าต่างแชร์ขึ้นมาทันทีไม่ได้ ต้องเกิดจากการกระทำของผู้ใช้เช่นแตะบนปุ่มแชร์ก่อนเท่านั้น

ถ้าเข้าใจแล้วก็มาเริ่มกันเลย!

```js
var shareBtn = document.getElementById('sharethis');

shareBtn.addEventListener('click', function (ev) {
  if (navigator.share) {
    navigator.share({
      title: 'PAKIN.ME',
      text: 'ลองดูบล็อกของผมสิ!',
      url: 'https://lazywasabi.com/',
    });
  }
});
```

จากโค้ดด้านบน เมื่อผู้ใช้คลิกบนปุ่มแชร์ของเรา ขั้นแรกจะเป็นการตรวจสอบก่อนว่าเบราว์เซอร์ของผู้ใช้รองรับ Web Share API หรือไม่ ด้วย `if (navigator.share)` จากนั้นก็ใช้ `navigator.share()` กำหนดข้อมูลที่ต้องการแชร์ ด้วยโค้ดสั้นๆ ไม่กี่บรรทัดนี้ก็พร้อมใช้งานแล้วครับ

แต่ๆๆ อย่างที่บอกไปด้านบนว่า Web Share API ยังรองรับแค่ Chrome / Chromium บนแอนดรอยด์ และ Safari เท่านั้น ดังนั้นจึงควรทำ fallback หรือช่องทางสำรองสำหรับเบราว์เซอร์อื่นๆ ไว้ด้วยนะครับ

และขอปิดท้ายด้วยตัวอย่างปุ่มแชร์แบบง่ายๆ ครับ โค้ดเหมือนด้านบนเลย แต่เพิ่ม fallback ไว้ว่า ถ้าเบราว์เซอร์ไม่รองรับ Web Share API ก็จะแสดงปุ่มแชร์ธรรมดาขึ้นมาแทน ลองเข้าไปแก้โค้ดเล่นกันได้บน [CodePen](https://codepen.io/lazywasabi/pen/VMLWdv/) ครับ

{{< codepen lazywasabi VMLWdv >}}

## ข้อมูลเบราว์เซอร์ที่รองรับ {#caniuse}

{{< caniuse web-share >}}

**ข้อมูลเพิ่มเติม:**

- [Integrate with the OS sharing UI with the Web Share API](https://web.dev/web-share/)
