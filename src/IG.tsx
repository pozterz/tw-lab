import React from "react";
import {
  DashOutlined,
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  TagOutlined,
} from "@ant-design/icons";
const profile =
  "https://instagram.fbkk2-7.fna.fbcdn.net/v/t51.2885-19/s150x150/145121585_739077453410832_3862943702994541661_n.jpg?tp=1&_nc_ht=instagram.fbkk2-7.fna.fbcdn.net&_nc_ohc=LkW_raxK_UUAX_jTbvv&oh=a2d054382b8a98e18fbf48c90ba0ad3f&oe=6064C8D3";
const zoms = [
  "https://instagram.fbkk2-7.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/155212631_462738928181248_8736359483119456852_n.jpg?tp=1&_nc_ht=instagram.fbkk2-7.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Qj6UVDPfgMgAX_7A5Qs&oh=0de49eefff1ebab0e4fb485f628783cf&oe=6065E4F9",
  "https://instagram.fbkk2-7.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/154557920_2471792643129576_980754703326726513_n.jpg?tp=1&_nc_ht=instagram.fbkk2-7.fna.fbcdn.net&_nc_cat=1&_nc_ohc=C9BmZo1ZLLcAX-OLZbS&oh=33872855c8fc52ff6b2cae691797852c&oe=60671486",
  "https://instagram.fbkk2-8.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/154191320_466892588071587_8293427126415339219_n.jpg?tp=1&_nc_ht=instagram.fbkk2-8.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fPViIYycQu8AX_Z0pTC&oh=377aa4858c3aac3c82335ce39ed5d259&oe=606651FC",
  "https://instagram.fbkk2-6.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/153535839_1981038018720286_3519032854653451234_n.jpg?tp=1&_nc_ht=instagram.fbkk2-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=EnraAfVX4rwAX-KIwDZ&oh=cc116f0ce022c3a36aa3a7d7a6b0589c&oe=603E7098https://instagram.fbkk2-6.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/153535839_1981038018720286_3519032854653451234_n.jpg?tp=1&_nc_ht=instagram.fbkk2-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=EnraAfVX4rwAX-KIwDZ&oh=cc116f0ce022c3a36aa3a7d7a6b0589c&oe=603E7098",
  "https://instagram.fbkk2-3.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/153633216_461287868392075_975206848429020053_n.jpg?tp=1&_nc_ht=instagram.fbkk2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=9wWBWQcMVhoAX_SMHsI&oh=99ad22d411c9e8e7a23ea35b6dea78bb&oe=606791CB",
  "https://instagram.fbkk2-6.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/153535839_1981038018720286_3519032854653451234_n.jpg?tp=1&_nc_ht=instagram.fbkk2-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=EnraAfVX4rwAX-KIwDZ&oh=cc116f0ce022c3a36aa3a7d7a6b0589c&oe=603E7098",
  "https://instagram.fbkk2-6.fna.fbcdn.net/v/t51.2885-15/e35/c0.169.1349.1349a/s320x320/152521322_180167873571736_6380417290844717642_n.jpg?tp=1&_nc_ht=instagram.fbkk2-6.fna.fbcdn.net&_nc_cat=104&_nc_ohc=AzDtq5payfIAX_YDOUm&oh=cbbae0ddbc33090f3c8ea7fc7130e848&oe=6064CE5A",
  "https://instagram.fbkk2-4.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/152035803_812006113032089_347464035098718208_n.jpg?tp=1&_nc_ht=instagram.fbkk2-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=sAysYrlbeKUAX_UC5Cz&oh=4c2e85f29096b57842cd305a5105d813&oe=6066EBF2",
  "https://instagram.fbkk2-4.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/151238779_2843251072607513_3270017777139118034_n.jpg?tp=1&_nc_ht=instagram.fbkk2-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=s3lRqNze9Z4AX-mt2A-&oh=443a4c48e4990650b0ac9b52b6ea28fa&oe=60647C4E",
];

export const IG = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4">
        {zoms.map((v, k) => (
          <div key={k}>
            <div className="py-3 px-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={profile} className="rounded-full w-10 h-10" />
                  <p className="mb-0 ml-2 font-bold">zommarie</p>
                </div>
                <DashOutlined className="cursor-pointer text-2xl" />
              </div>
            </div>
            <img src={v} className="min-w-full lg:h-96 lg:object-cover" />
            <div className="flex justify-between items-center py-3 px-2">
              <div className="flex justify-around">
                <HeartOutlined className="cursor-pointer text-2xl" />
                <MessageOutlined className="cursor-pointer text-2xl mx-4" />
                <SendOutlined className="cursor-pointer text-2xl" />
              </div>
              <TagOutlined className="cursor-pointer text-2xl" />
            </div>
            <div className="px-2">
              <div className="font-bold">ถูกใจ 13,839 คน </div>
              <div className="font-thin text-xs text-gray">
                17 ชั่วโมงที่แล้ว
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
