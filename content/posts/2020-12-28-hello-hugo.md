---
title: สวัสดี Hugo
author: LazyWasabi
date: 2020-12-28T13:31:19+07:00
slug: hello-hugo
description: ทำไมถึงย้ายจาก WordPress มาใช้ Hugo และเลือกโฮสต์ระหว่าง Netlify กับ Vercel
seo_title: ย้ายบล็อกจาก WordPress มาใช้ Hugo
images:
  - https://cdn.lazywasabi.net/blog/i/hugo-logo.png
tags:
  - Web Dev
  - Hugo
  - WordPress
comments:
  host: mastodon.social
  username: lazywasabi
  id: 105458234809804194
---

บล็อกนี้ย้ายจาก WordPress มาใช้ Hugo แล้วครับ 🎉

ที่ย้ายมาใช้ [static site generator](https://jamstack.org/generators/) ก็เพราะเหตุผลหลักๆ ดังนี้

- ไม่ต้องดูแล (อัปเดต, แบ็กอัป ฯลฯ)
- ไม่ต้องห่วงเรื่องความปลอดภัย
- เว็บโหลดเร็วขึ้น

ส่วนที่เลือก Hugo เพราะ[ความเร็ว](https://css-tricks.com/comparing-static-site-generator-build-times/)ในการ build และ[ติดตั้ง](https://gohugo.io/getting-started/installing/)ง่าย มีฟีเจอร์ที่ผมต้องการครบ แถมมี[ธีม](https://themes.gohugo.io)ให้เลือกใช้เยอะมาก

## ย้ายจาก WordPress มาใช้ Hugo

ปกติผมเขียนบล็อกด้วย Markdown อยู่แล้ว และจำนวนโพสต์ไม่เยอะมาก ผมเลย copy & paste เอาล้วนๆ แต่ถ้ากรณีที่มีข้อมูลเยอะ Hugo ก็มี[เครื่องมือช่วยย้ายข้อมูล](https://gohugo.io/tools/migrations/)ให้ใช้งานเพียบ

และถึงแม้ Hugo จะมีธีมให้เลือกเยอะ แต่ก็ไม่ถูกใจเท่าสร้างเองครับ 😅 ผมสร้างธีมนี้ด้วย [Tailwind CSS](https://tailwindcss.com) ประมวลผลผ่าน [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) โดยใช้ PostCSS และแน่นอนว่ารองรับ [dark mode](/blog/website-dark-theme-prefers-color-scheme/) ด้วย 🌙

## Netlify vs Vercel

สำหรับโฮสต์ ผมลังเลระหว่าง [Netlify](https://www.netlify.com) กับ [Vercel](https://vercel.com) ซึ่งพอลองใช้ก็ชอบทั้งคู่ แต่สุดท้ายก็เลือก Vercel ครับ โดยตัดสินใจจากข้อจำกัดเรื่อง build กับ network ในแพลนฟรีของทั้งคู่ 🆓

- เวลา build ฝั่ง Netlify ให้ [300 นาที/เดือน](https://www.netlify.com/pricing/#features-build-minutes) ส่วน Vercel ให้ [100 ชั่วโมง/เดือน](https://vercel.com/docs/platform/fair-use-policy#typical-monthly-usage-guidelines) (Vercel จำกัด build ได้[วันละ 100 ครั้ง](https://vercel.com/docs/platform/limits#general-limits))
- ทั้งคู่ให้แบนด์วิธเดือนละ 100 GB เท่ากัน ([Netlify](https://www.netlify.com/pricing/#features-bandwidth) / [Vercel](https://vercel.com/docs/platform/fair-use-policy#typical-monthly-usage-guidelines))
- Edge Network ของ Netlify จำกัดแค่ [6 POPs](https://www.netlify.com/pricing/#high-performance-edge-points-of-presence) แต่ Vercel ใช้ได้ทั้ง [16 Regions](https://vercel.com/docs/edge-network/regions#routing)

สุดท้ายนี้ บล็อกนี้โอเพนซอร์สด้วย ใครสนใจโค้ดเชิญที่ [GitHub](https://github.com/lazywasabi/blog) ได้เลย ส่วนรายละเอียดเพิ่มเติม เช่น ฟอนต์ ไอคอน ดูได้ที่[หน้าเกี่ยวกับ](/about/#blog)ครับ
