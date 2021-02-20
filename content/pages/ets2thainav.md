---
title: เสียงนำทางภาษาไทยสำหรับเกม ETS2 และ ATS
author: LazyWasabi
slug: ets2thainav
images:
  - https://cdn.lazywasabi.net/blog/i/thai-voice-navigation-cover-black-sea-istanbul.jpg
---

**เมนู:**

- [คุณสมบัติ](#features)
- [ดาวน์โหลด](#download)
- [วิธีใช้งาน](#guide)
- [คำสั่งเสียง](#command)
- [เครดิต](#credits)
- [บันทึกการเปลี่ยงแปลง ↗](https://github.com/lazywasabi/ets2-thai-navigation/blob/master/CHANGELOG.md)
- [ซอร์สโค้ดบน GitHub ↗](https://github.com/lazywasabi/ets2-thai-navigation)

**📢 ประกาศ (4 ก.พ. 64):** ม็อดอัปเดตรองรับเกมเวอร์ชัน 1.40 แล้วครับ
{class="p-4 bg-green-600 text-white rounded font-display"}

{{< youtube 9RmfC4OdFG4 >}}

## คุณสมบัติ {#features}

- 🚚 รองรับเกม [Euro Truck Simulator 2](https://eurotrucksimulator2.com/)</a> และ [American Truck Simulator](https://americantrucksimulator.com/)
- 🔊 รองรับ[เอนจินเสียง FMOD®](https://blog.scssoft.com/2020/02/fmod-first-tease.html) พร้อมใช้งานกับเกมเวอร์ชัน 1.37 ขึ้นไป
- 🗣 เสียงพูดจาก Google TTS (เสียงที่ใช้ใน Google Maps / Google Translate) -- ดูตัวอย่างในวิดีโอด้านล่าง
- ✅ แปลครบทุกเสียง ([รายการคำแปล](#command))
- ⚠ รองรับการเตือนจำกัดความเร็วทั้งเสียงพูดและเสียงเตือน

## ดาวน์โหลด {#download}

### ข้อมูลม็อด {#info}

- เวอร์ชันม็อดล่าสุด: 3.3.0
- อัปเดตเมื่อวันที่ 4 ก.พ. 2564
- รองรับเกม Euro Truck Simulator 2 เวอร์ชัน 1.35 - 1.40
- รองรับเกม American Truck Simulator เวอร์ชัน 1.35 - 1.40
- [ดูบันทึกการเปลี่ยนแปลง ↗](https://github.com/lazywasabi/ets2-thai-navigation/blob/master/CHANGELOG.md)

### ดาวน์โหลดผ่าน Steam Workshop (แนะนำ) {#download-steam}

สำหรับผู้ที่ซื้อเกมผ่าน Steam สามารถใช้งานม็อดนี้ได้ผ่าน Steam Workshop โดย Steam จะอัปเดตม็อดให้อัตโนมัติเมื่อมีเวอร์ชันใหม่

เลือกเกมเพื่อดาวน์โหลดผ่าน Steam Workshop:

<div class="flex space-x-4 items-center">
  <div class="flex-1">
    <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1764313195" target="_blank" rel="noopener noreferrer">
      <img class="w-48 mx-auto" src="https://cdn.lazywasabi.net/blog/i/ets2-logo.png">
    </a>
  </div>
  <div class="flex-1 mx-auto">
    <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1900877329" target="_blank" rel="noopener noreferrer">
      <img class="w-48 mx-auto" src="https://cdn.lazywasabi.net/blog/i/ats-logo.png">
    </a>
  </div>
</div>

### ดาวน์โหลดโดยตรง {#download-direct}

สำหรับผู้ที่ไม่ได้ซื้อเกมผ่าน Steam สามารถดาวน์โหลดไฟล์ม็อดได้โดยตรง **ทั้งสองเกมใช้ไฟล์ม็อดเดียวกัน**

[⬇ สำหรับเกมเวอร์ชัน 1.37 - 1.40](https://cdn.lazywasabi.net/ets2thainav/3.3.0/thai-navigation-3.3.0.scs)

[⬇ สำหรับเกมเวอร์ชัน 1.35 - 1.36](https://cdn.lazywasabi.net/ets2thainav/3.3.0/thai-navigation-136-3.3.0.scs)

- สำหรับ ETS2 ย้ายไฟล์ไปวางไว้ในโฟลเดอร์ `My Documents/Euro Truck Simulator 2/mod`
- สำหรับ ATS ย้ายไฟล์ไปวางไว้ในโฟลเดอร์ `My Documents/American Truck Simulator/mod`

## วิธีใช้งาน {#guide}

- เปิดใช้งานม็อด โดยวางไว้ตำแหน่งใดก็ได้ในรายการม็อด

[![ตัวจัดการม็อดในเกม](https://cdn.lazywasabi.net/blog/i/thai-voice-navigation-mod-manager.jpg)](https://cdn.lazywasabi.net/blog/i/thai-voice-navigation-mod-manager.jpg)

- เข้าเมนูตั้งค่า Options > Audio

[![เมนูตั้งค่าเสียง](https://cdn.lazywasabi.net/blog/i/thai-voice-navigation-audio-settings-1.40.jpg)](https://cdn.lazywasabi.net/blog/i/thai-voice-navigation-audio-settings-1.40.jpg)

- เปิดใช้งาน Voice Navigation
- ในตัวเลือก Language and voice เลือก "Thai - Google TTS"
- เลือกตัวเลือกเสียงเตือนจำกัดความเร็ว Speed warning ระหว่าง "Sound" (เสียงเตือน) หรือ "Voice" (เสียงพูด)
- หากเสียงนำทางเบาหรือดังเกินไป ปรับระดับเสียงได้ที่เมนู Voice navigation volume ด้านบน

## คำสั่งเสียง {#command}

| **ชื่อไฟล์**         | **ต้นฉบับ**                            | **คำแปล**                           |
| -------------------- | -------------------------------------- | ----------------------------------- |
| and_then_exit_left   | and then exit left                     | จากนั้นใช้ทางออกด้านซ้าย            |
| and_then_exit_right  | and then exit right                    | จากนั้นใช้ทางออกด้านขวา             |
| and_then_go_straight | and then continue straight on          | จากนั้นวิ่งตรงต่อไป                 |
| and_then_keep_left   | and then keep left                     | จากนั้นชิดซ้าย                      |
| and_then_keep_right  | and then keep right                    | จากนั้นชิดขวา                       |
| and_then_turn_left   | and then turn left                     | จากนั้นเลี้ยวขวา                    |
| and_then_turn_right  | and then turn right                    | จากนั้นเลี้ยวซ้าย                   |
| compound_exit_left   | Exit left                              | ใช้ทางออกด้านซ้าย                   |
| compound_exit_right  | Exit right                             | ใช้ทางออกด้านขวา                    |
| compound_go_straight | Go straight on                         | วิ่งตรงต่อไป                        |
| compound_keep_left   | Keep left                              | ชิดซ้าย                             |
| compound_keep_right  | Keep right                             | ชิดขวา                              |
| compound_turn_left   | Turn left                              | เลี้ยวซ้าย                          |
| compound_turn_right  | Turn right                             | เลี้ยวขวา                           |
| exit_left            | Exit left                              | ใช้ทางออกด้านซ้าย                   |
| exit_now             | Exit now                               | ออกจากวงเวียน                       |
| exit_right           | Exit right                             | ใช้ทางออกด้านขวา                    |
| finish               | Here we are                            | ที่นี่คือจุดหมายของคุณ              |
| go_straight          | Go straight on                         | วิ่งตรงต่อไป                        |
| keep_left            | Keep left                              | ชิดซ้าย                             |
| keep_right           | Keep right                             | ชิดขวา                              |
| prepare_exit_left    | Get ready to exit left                 | เตรียมใช้ทางออกด้านซ้าย             |
| prepare_exit_right   | Get ready to exit right                | เตรียมใช้ทางออกด้านขวา              |
| prepare_turn_left    | Get ready to turn left                 | เตรียมเลี้ยวขวา                     |
| prepare_turn_right   | Get ready to turn right                | เตรียมเลี้ยวซ้าย                    |
| recomputing          | Recomputing                            | กำลังค้นหาเส้นทางใหม่               |
| roundabout_1         | At the roundabout take the first exit  | เมื่อถึงวงเวียนใช้ทางออกที่หนึ่ง    |
| roundabout_2         | At the roundabout take the second exit | เมื่อถึงวงเวียนใช้ทางออกที่สอง      |
| roundabout_3         | At the roundabout take the third exit  | เมื่อถึงวงเวียนใช้ทางออกที่สาม      |
| roundabout_4         | At the roundabout take the fourth exit | เมื่อถึงวงเวียนใช้ทางออกที่สี่      |
| roundabout_5         | At the roundabout take the fifth exit  | เมื่อถึงวงเวียนใช้ทางออกที่ห้า      |
| roundabout_6         | At the roundabout take the sixth exit  | เมื่อถึงวงเวียนใช้ทางออกที่หก       |
| speed_signal         | –                                      | –                                   |
| speed_warning        | Caution, please mind the speed limit   | คุณใช้ความเร็วเกิน, กรุณาลดความเร็ว |
| start                | OK, here we go!                        | เริ่มต้นนำทาง                       |
| turn_left            | Turn left                              | เลี้ยวซ้าย                          |
| turn_right           | Turn right                             | เลี้ยวขวา                           |
| u_turn               | Make a u-turn                          | กลับรถ                              |

## ขอบคุณ {#credits}

- [SCS Software](https://scssoft.com/)
- เทมเพลตม็อดจาก [Wombat Trucker](https://www.youtube.com/watch?v=ax-6sP_PVpU)
- เสียงพูดจาก [Google TTS](https://cloud.google.com/text-to-speech)
- [FMOD Studio](https://www.fmod.com/studio)
- เครื่องมือ[แปลงเสียง FMOD จาก Koen](https://forum.scssoft.com/viewtopic.php?f=201&t=282438)
- ข้อมูลจากกระทู้ [FMOD Discussion](https://forum.scssoft.com/viewtopic.php?f=178&t=281124)

ซอร์สโค้ดของม็อดนี้เผยแพร่สาธารณะอยู่บน [GitHub](https://github.com/lazywasabi/ets2-thai-navigation)

## เพิ่มเติม {#more}

หากมีคำแนะนำหรือพบปัญหา ต้องการแนะนำคำแปลที่ดีขึ้น สามารถติดต่อผมได้[ที่นี่]({{< ref "contact" >}})หรือหากมีไฟล์เสียงที่อยากนำมาทำเป็นเสียงนำทาง ติดต่อมาได้เช่นกันครับ

นอกจากม็อดนี้แล้ว ยังมีอีกหนึ่งม็อดที่รองรับเสียงภาษาไทยคือ [TomTom voices pack](https://steamcommunity.com/sharedfiles/filedetails/?id=1828031323) เป็นเสียงจาก GPS ของ TomTom รุ่นเก่า ข้อเสียของม็อดนี้คือไม่รองรับบางคำสั่ง เช่น ออกจากวงเวียน (exit_now), กำลังค้นหาเส้นทางใหม่ (recomputing) ครับ
