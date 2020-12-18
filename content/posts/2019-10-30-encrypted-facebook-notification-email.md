---
title: เข้ารหัสอีเมลแจ้งเตือนจาก Facebook
author: LazyWasabi
date: 2019-10-30T07:28:00+00:00
lastmod: 2020-06-08
slug: encrypted-facebook-notification-email
images:
  - https://cdn.lazywasabi.net/blog/i/encrypted-facebook-notification-email.png
tags:
  - Privacy
---

จริงๆ ฟีเจอร์นี้มีมา[ตั้งแต่ปี 2015](https://www.facebook.com/notes/protect-the-graph/securing-email-communications-from-facebook/1611941762379302/) แต่ผมเพิ่งรู้โดยบังเอิญเพราะเข้าไปเปลี่ยนรหัสผ่าน โดยวิธีเปิดใช้งานนั้นง่ายมาก เพียงเข้าไปที่[หน้าตั้งค่าความปลอดภัยของ Facebook](https://www.facebook.com/settings?tab=security)

<!--more-->

แล้วเลื่อนลงไปล่างสุดในหมวด Advanced คลิก edit ตรงหัวข้อ Encrypted notification emails

จากนั้นวาง public key ของเราลงไป แล้วติ๊กที่ตัวเลือก "Use this public key to encrypt notification emails…"

![เมนูตั้งค่าเข้ารหัสอีเมลแจ้งเตือนจาก Facebook](https://cdn.lazywasabi.net/blog/i/facebook-encrypted-email-setting.png)

ก่อนกดบันทึกอ่านคำเตือนสักนิด เมื่อเปิดใช้งานตัวเลือกนี้ทุกอีเมลแจ้งเตือนจาก Facebook จะถูกเข้ารหัส รวมถึงอีเมลกู้คืนบัญชีเวลาลืมรหัสผ่านด้วยนะครับ ถ้าเข้าใจแล้วก็กดปุ่มบันทึกได้เลย

พอกดบันทึกแล้ว Facebook จะส่งอีเมลที่เข้ารหัสมาหาเราก่อนหนึ่งฉบับ เราเพียงแค่คลิกลิงก์ในอีเมลที่ส่งมาเพื่อยืนยันการเปิดใช้งาน เพียงเท่านี้ก็เรียบร้อยแล้วครับ

และด้านล่างนี้คือตัวอย่างอีเมลที่เข้ารหัสแล้วครับ สังเกตง่ายๆ คือหัวข้ออีเมลจะเป็นคำว่า "การเข้ารหัสการแจ้งเตือนจาก Facebook"

![อีเมลแจ้งเตือนจาก Facebook ที่เข้ารหัสแล้ว](https://cdn.lazywasabi.net/blog/i/encrypted-facebook-email.png)
