---
title: ลบภาษาอังกฤษซ้ำหลังอัปเดต Windows 10
author: LazyWasabi
date: 2018-05-05T02:00:00+00:00
lastmod: 2020-08-07
slug: remove-duplicated-english-keyboards-in-windows-10
seo_title: ลบภาษาอังกฤษ UK ซ้ำใน Windows 10
description: หลังจากอัปเดต Windows 10 แล้ว เวลาเปลี่ยนแป้นพิมพ์มีบั๊กภาษาอังกฤษซ้ำสองแบบ (US และ UK) บล็อกนี้จะมาบอกวิธีลบคีย์บอร์ดภาษาอังกฤษเกินใน Windows 10 ครับ
images:
  - https://cdn.lazywasabi.net/blog/i/remove-duplicated-english-keyboards-in-windows-10.jpg
tags:
  - Windows
---

หลังจากอัปเดต [Windows 10 April 2018 Update](https://www.blognone.com/node/101857) แล้ว ผมพบว่าเวลาเปลี่ยนแป้นพิมพ์มีภาษาอังกฤษขึ้นมาสองแบบ (US และ UK)

<!--more-->

![ตัวเลือกภาษาบน Windows 10 มีภาษาอังกฤษสองแบบ](https://cdn.lazywasabi.net/blog/i/double-english-in-windows-10-april-2018-update.png)

ประเด็นคือไม่รู้เป็นบั๊กหรืออะไร แต่มันลบออกไม่ได้ทั้งสองแบบ US และ UK (แต่ภาษาไทยดันลบได้ 🤔)

![หน้าตั้งค่าภาษาบน Windows 10 มีภาษาอังกฤษสองแบบ และลบออกไม้ได้ทั้งคู่](https://cdn.lazywasabi.net/blog/i/windows-10-april-2018-update-cant-remove-english.png)

แน่นอนว่าคงไม่ได้เป็นเฉพาะผม มีคน[ตั้งคำถาม](https://superuser.com/questions/1318708/windows-10-april-2018-update-added-an-extra-language-and-i-cannot-remove-it)ไว้พอดี ซึ่งแก้ไขได้ไม่ยากเลย

โดยวิธีการแก้ไขให้เหลือภาษาอังกฤษตัวเดียวมีดังนี้ (⚠️ แนะนำ**อ่านให้จบหนึ่งรอบก่อน**แล้วค่อยทำตามนะครับ)

ขั้นตอนแรก เปิด PowerShell ขึ้นมา โดยคลิกปุ่ม Start แล้วพิมพ์ "PowerShell" และคลิกบนชื่อ Windows PowerShell ตามภาพ

![พิมพ์ค้นหา powershell ใน start](https://cdn.lazywasabi.net/blog/i/windows-10-powershell-search.png)

แล้วจะเจอหน้าตาแบบนี้

![Windows Powershell บน Windows 10](https://cdn.lazywasabi.net/blog/i/windows-10-powershell.png)

จากนั้นพิมพ์คำสั่งต่อไปนี้**ทีละบรรทัด** และกด Enter ทุกครั้งที่ขึ้นบรรทัดใหม่

```
$1 = New-WinUserLanguageList en-US

$1.Add("th")

Set-WinUserLanguageList $1
```

พอเสร็จแล้วจะมีข้อความขึ้นมาเพื่อยืนยัน พิมพ์ `y` และกด Enter อีกครั้งก็เป็นอันเสร็จ เท่านี้ก็จะเหลือแป้นพิมพ์ภาษาอังกฤษตัวเดียวแล้ว

โดยคำสั่งด้านบนนี้จะเปลี่ยนภาษา UI ของ Windows เป็นภาษาอังกฤษด้วย ถ้าใครต้องการใช้ UI เป็นภาษาไทยให้สลับ th กับ en-US ในคำสั่งแบบด้านล่างนี้แทน

```
$1 = New-WinUserLanguageList th

$1.Add("en-US")

Set-WinUserLanguageList $1
```

ถ้าไม่เห็นภาพ ลองดูวิดีโอด้านล่างนี้

{{< video src="https://cdn.lazywasabi.net/blog/i/set-language-in-windows-powershell.mp4" controls="1">}}

ถ้าทำตามทั้งหมดเรียบร้อยแล้ว แต่ไม่มีอะไรเปลี่ยนแปลงเลย แนะนำให้ลองรีสตาร์ตดูครั้งหนึ่งนะครับ

อ้างอิง - [Super User](https://superuser.com/questions/1318708/windows-10-april-2018-update-added-an-extra-language-and-i-cannot-remove-it), [Windows IT Pro Center](https://docs.microsoft.com/en-us/powershell/module/international/set-winuserlanguagelist?view=win10-ps)

_ภาพปกจาก [Microsoft](https://news.microsoft.com/the-familiar-start-menu-is-back/)_
