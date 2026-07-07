// lib/facebook.ts
// ฟังก์ชันดึงโพสต์จาก Facebook Graph API สำหรับเพจ cmshoeclean

export interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url?: string;
}

interface FacebookPostsResponse {
  data: FacebookPost[];
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

const GRAPH_API_VERSION = "v19.0";

/**
 * ดึงโพสต์ล่าสุดจากเพจ Facebook
 * @param limit จำนวนโพสต์ที่ต้องการ (ค่าเริ่มต้น 6)
 */
export async function getFacebookPosts(limit = 6): Promise<FacebookPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    throw new Error(
      "ไม่พบ FACEBOOK_PAGE_ID หรือ FACEBOOK_PAGE_ACCESS_TOKEN ใน environment variables"
    );
  }

  const fields = "message,created_time,full_picture,permalink_url";
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  // revalidate ทุก 1 ชั่วโมง เพื่อไม่ให้ยิง API ถี่เกินไป แต่โพสต์ใหม่ก็จะขึ้นภายในเวลาไม่นาน
  const res = await fetch(url, { next: { revalidate: 3600 } });

  const json: FacebookPostsResponse = await res.json();

  if (!res.ok || json.error) {
    throw new Error(
      json.error?.message || `Facebook API request failed with status ${res.status}`
    );
  }

  return json.data;
}
