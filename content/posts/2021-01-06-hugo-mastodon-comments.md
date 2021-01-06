---
title: เพิ่มระบบแสดงความคิดเห็นใน Hugo ด้วย Mastodon
author: LazyWasabi
date: 2021-01-06T22:11:37+07:00
slug: hugo-mastodon-comments
description: เพิ่มระบบแสดงความคิดเห็นใน static site ด้วย Mastodon ข้อดี-ข้อเสีย และตัวเลือกอื่นๆ
images:
  - https://cdn.lazywasabi.net/blog/i/mastodon.png
tags:
  - Web Dev
  - Hugo
comments:
  host: mastodon.social
  username: lazywasabi
  id: 105509420056749945
---

วิธีเพิ่มระบบความคิดเห็นใน Hugo ตัวเลือกที่ฟรีและง่ายสุดคือใช้ Disqus เพราะ Hugo [รองรับ Disqus](https://gohugo.io/content-management/comments/#add-disqus) ในตัว มีเทมเพลตให้เรียกใช้ได้เลย แต่ข้อเสียของ Disqus คือทำให้เว็บ[ช้าและไม่เป็นมิตร](https://notes.ayushsharma.in/2017/09/im-killing-disqus-comments-on-my-blog-heres-why)กับความเป็นส่วนตัวของผู้ใช้ ☹

แล้วถ้าไม่ใช้ Disqus แล้วจะใช้อะไรดี? ไปที่[โพสต์นี้](https://darekkay.com/blog/static-site-comments/)เลยครับ มีตัวเลือกให้เลือกใช้เพียบ โดยตัวเลือกที่ฟรีและน่าสนใจที่ตอนแรกผมเลือกใช้คือ [utterances](https://utteranc.es) ซึ่งใช้ GitHub issues มาทำระบบคอมเมนต์ แต่ข้อเสียคือผู้ใช้ต้องมีบัญชี GitHub ถึงจะคอมเมนต์ได้ ซึ่งมันค่อนข้างเฉพาะกลุ่มไปนิด 😅

จนเมื่อสิ้นปีที่ผ่านมาผมเจอกับ [toot นี้](https://linuxrocks.online/@carl/105463655803971969) โดยเป็นการ[ใช้ Mastodon มาทำระบบคอมเมนต์](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/) เลยลองย้ายจาก utterances มาใช้ดูครับ

<iframe src="https://linuxrocks.online/@carl/105463655803971969/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="100%" height="350" loading="lazy" allowfullscreen="allowfullscreen"></iframe>

ข้อดีที่คือใช้บัญชี [Mastodon](https://joinmastodon.org) หรือ [Fediverse](https://docs.joinmastodon.org/#fediverse) อื่นๆ ตอบ toot เพื่อคอมเมนต์ได้เลย และไม่หนักเว็บด้วย ใช้ 1 รีเควสถ้วนในการโหลดความคิดเห็น

ส่วนข้อเสียที่เจอคือ UX อาจไม่ดีเท่าตัวเลือกอื่นๆ เพราะไม่มีช่องให้คอมเมนต์ในเว็บ ต้องแปะลิงก์ให้ไปตอบบน Mastodon แทน โดยสามารถลดขั้นตอนตรงนี้ได้นิดหน่อยโดยการแปะลิงก์สำหรับตอบกลับ toot ไว้ด้วย

ข้อเสียอีกอย่างคือถ้า instance ที่เราใช้งานอยู่เกิดปิดตัวลง แน่นอนว่าคอมเมนต์หายเกลี้ยง แต่เนื่องจาก instance ที่ผมใช้คือ [mastodon.social](https://mastodon.social/) ที่ดูแลโดย[นักพัฒนาหลัก](https://mastodon.social/@Gargron)ของ Mastodon เรื่องนี้เลยไม่ค่อยน่าห่วงเท่าไหร่
