---
title: LazyWasabi CDN
author: LazyWasabi
slug: cdn
description: CDN จาก LazyWasabi สามารถใช้งานได้ฟรี CDN ฟอนต์ภาษาไทยที่ส่วนใหญ่ไม่มีใน Google Fonts และ CDN Twemoji รูป emoji จากทวิตเตอร์
seo_title: LazyWasabi CDN ฟรี ฟอนต์ไทย และ Twemoji
center_title: true
---

CDN นี้ทำขึ้นเพื่อใช้ในเว็บไซต์ของผม และเปิดให้ใช้ได้ฟรี ไม่มีการันตี uptime ใดๆ ทั้งสิ้น แต่ถ้าล่มผมจะแก้ไขให้เร็วที่สุด เพราะจะทำให้เว็บผมมีปัญหาไปด้วย~ 😅

รายละเอียดเพิ่มเติม:

- ใช้ [Cloudflare](https://www.cloudflare.com/) เป็น CDN
- [ดูสถานะและประวัติ uptime ได้ที่นี่](https://stats.uptimerobot.com/oYLA1TXJQx/786121608) (uptime ของเซิร์ฟเวอร์โดยตรง ไม่ผ่าน Cloudflare)

## Fonts CDN 🔤 {#fonts}

ฟอนต์ภาษาไทยที่ส่วนใหญ่ไม่มีใน Google Fonts แคช 1 ปี มีฟอนต์ที่ใช้ได้ดังนี้

- Droid Sans Thai
- IBM Plex Sans Thai
- IBM Plex Sans Thai Looped
- Loma
- Noto Sans Thai
- Noto Serif Thai
- Sarabun

[ข้อมูลเพิ่มเติม และวิธีใช้งาน ↗](https://lazywasabi.gitbook.io/cdn/fonts)

## Emoji CDN 😀 {#emoji}

_อัปเดตล่าสุด: 13 มี.ค. 2564 ([v13.0.2](https://github.com/twitter/twemoji/releases/tag/v13.0.2))_

[Twemoji](https://github.com/twitter/twemoji) เวอร์ชันล่าสุด รองรับเฉพาะภาพ SVG เท่านั้น แคช 1 เดือน

รูปภาพ emoji: `https://cdn.lazywasabi.net/emoji/latest/svg/*` ([ตัวอย่าง](https://cdn.lazywasabi.net/emoji/latest/svg/1f600.svg))

ไฟล์ JS: `https://cdn.lazywasabi.net/emoji/latest/twemoji.min.js` ปรับแต่งให้โหลดรูปจาก cdn.lazywasabi.net แค่ใส่โค้ดด้านล่างนี้ในเว็บแล้วใช้งานได้เลย

```html
<script src="https://cdn.lazywasabi.net/emoji/latest/twemoji.min.js"></script>
<script>
  twemoji.parse(document.body);
</script>
```

## ข้อมูลเพิ่มเติม {#info}

[ดู LazyWasabi CDN บน GitBook ↗](https://lazywasabi.gitbook.io/cdn/)

หากพบปัญหาในการใช้งาน ดูวิธีติดต่อผมได้ที่หน้า[ติดต่อ]({{< ref "contact" >}})
