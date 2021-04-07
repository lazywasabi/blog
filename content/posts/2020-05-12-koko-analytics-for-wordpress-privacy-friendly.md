---
title: Koko Analytics เก็บสถิติใน WordPress แบบเป็นมิตรกับความเป็นส่วนตัว
author: LazyWasabi
date: 2020-05-12T13:43:16+00:00
lastmod: 2020-12-09
slug: koko-analytics-for-wordpress-privacy-friendly
description: Koko Analytics เป็นปลั๊กอินเก็บสถิติสำหรับ WordPress ที่เรียบง่าย เพียงติดตั้งและเปิดใช้งานก็ทำงานได้เลย แถมยังเป็นมิตรกับความเป็นส่วนตัวของผู้ใช้ด้วย
seo_title: Koko Analytics เก็บสถิติ WordPress แบบเป็นมิตรกับความเป็นส่วนตัว
images:
  - https://cdn.lazywasabi.net/blog/i/koko-analytics-banner.png
tags:
  - Analytics
  - Privacy
  - Web Dev
  - WordPress
comments:
  host: mastodon.social
  username: pakin
  id: 104155776343741489
---

[Koko Analytics](https://www.kokoanalytics.com/) เป็นปลั๊กอินเก็บสถิติสำหรับ WordPress ที่เรียบง่าย เพียงติดตั้งและเปิดใช้งานก็ทำงานได้เลย ไม่ต้องตั้งค่าอะไร แถมยังเป็นมิตรกับความเป็นส่วนตัวของผู้ใช้ด้วย 👍

<!--more-->

## ทำอะไรได้บ้าง?

![หน้าแดชบอร์ดของ Koko Analytics](https://cdn.lazywasabi.net/blog/i/koko-analytics-dashboard.png)
{.wide}

Koko Analytics มีจุดเด่นที่ความเรียบง่าย เร็ว และเป็นส่วนตัว ดังนั้นข้อมูลที่เก็บจะไม่เท่า Google Analytics หรือบริการเก็บสถิติอื่นๆ ข้อมูลที่เราจะได้จากปลั๊กอินนี้มีเพียง

- จำนวนผู้เข้าชมเว็บไซต์ทั้งหมด
- จำนวนการเปิดหน้าเว็บทั้งหมด (pageviews)
- จำนวนการเปิดหน้าเว็บ (ที่ไม่ซ้ำกัน) แบ่งตามหน้า
- ข้อมูล Referrers

โดยข้อมูลทั้งหมดจะประมวลผลและบันทึกอยู่ในเว็บไซต์เราเท่านั้น ไม่มีการส่งข้อมูลไปบริการภายนอก และตัวปลั๊กอินยังเคารพคำขอ [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ถ้าใครเปิดให้เบราว์เซอร์ส่งคำขอนี้ ก็จะไม่เก็บสถิติของคนนั้นครับ

## ทำให้เว็บช้าหรือเปล่า?

หลายคนอาจกลัวว่าอาจทำให้เว็บช้า เพราะการทำงานทั้งหมดเกิดขึ้นในเว็บไซต์ของเราเอง ซึ่งทางผู้พัฒนาเขาบอกว่าปลั๊กอินนี้ไม่ทำให้เว็บช้าแน่นอน และผ่านการทดสอบแล้วว่ารองรับโหลดได้ถึง 15,000 คำขอต่อวินาทีครับ

ที่เป็นแบบนี้เพราะตัวปลั๊กอินไม่ได้ประมวลผลทันทีเมื่อมีคนเข้าเว็บ แต่จะเขียนข้อมูลไว้ในไฟล์ชั่วคราวก่อน และจะมี background process ที่ทำงานทุก 1 นาทีมาประมวลผลไฟล์นี้และบันทึกลง database ทีหลัง ทำให้เซิร์ฟเวอร์ไม่ต้องทำงานหนัก แม้คนเข้าเว็บเยอะ

## ใช้งานและตั้งค่า

![หน้าตั้งค่าของ Koko Analytics](https://cdn.lazywasabi.net/blog/i/koko-analytics-settings.png)

อีกจุดเด่นของ Koko Analytics คือความเรียบง่ายในการติดตั้ง แค่เราดาวน์โหลดมา กดเปิดใช้งาน ปลั๊กอินนี้ก็พร้อมทำงานทันที ✨

ในหน้าตั้งค่า เราสามารถกำหนดให้ปลั๊กอินไม่เก็บสถิติจากบาง user roles ได้, ตั้งค่าไม่ให้ใช้คุกกี้ได้ (แต่การนับจำนวน returning visitors อาจไม่แม่นยำ) และตั้งค่าให้ลบข้อมูลอัตโนมัติเมื่อครบกำหนดได้

## สรุป

ส่วนตัวแล้ว Koko Analytics ตอบโจทย์ผมมากครับ เป็นปลั๊กอินที่เหมาะสำหรับเว็บ WordPress ที่ต้องการเก็บสถิติแบบเรียบง่าย ขอแค่รู้ว่าคนเข้าเว็บเท่าไหร่ หน้าไหนได้รับความนิยม และยังเป็นมิตรกับความเป็นส่วนตัวของผู้ใช้อีกด้วย ❤

ดาวน์โหลด Koko Analytics มาลองใช้ได้จาก [WordPress.org](https://wordpress.org/plugins/koko-analytics/)

<iframe loading="lazy" src="https://wordpress.org/plugins/koko-analytics/embed/" width="100%" height="219" title="&#8220;Koko Analytics&#8221; &#8212; Plugin Directory" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

อ้างอิงและข้อมูลเพิ่มเติม ℹ

- [เว็บไซต์ของ Koko Analytics](https://www.kokoanalytics.com/)
- [Introducing Koko Analytics](https://dannyvankooten.com/introducing-koko-analytics/)
- [Koko Analytics บน GitHub](https://github.com/ibericode/koko-analytics)
