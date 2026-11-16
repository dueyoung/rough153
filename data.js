/* =========================================================
   ✏️  이 파일만 수정하면 사이트 내용이 바뀝니다.
   ========================================================= */

/* ---------- 사이트 기본 정보 ---------- */
const SITE = {
  name: 'ROUGH4',
  tagline: 'Motion Graphics · 3D · Title Design',
  headline: 'We move<br>stories forward.',
  intro: '움직임으로 브랜드의 이야기를 전하는 모션그래픽 디자이너입니다.',
  about: 'After Effects, Cinema 4D',
  clients: '[CLIENT A], [CLIENT B], [CLIENT C]',
  email: 'hello@example.com',
  vimeo: 'https://vimeo.com/',
  instagram: 'https://www.instagram.com/',
  accent: '#c8ff3c',      // 강조색 (버튼, 포인트 컬러)
  pageSize: 12            // 처음에 보여줄 프로젝트 수 (나머지는 '더 보기' 버튼)
};

/* ---------- 프로젝트 목록 ----------
   - 맨 위에 있는 프로젝트가 첫 번째 칸에 나옵니다.
   - 한 줄 복사해서 붙여넣고 내용만 바꾸면 추가 끝!
   - vimeo : 영상 주소 https://vimeo.com/1201272000 의 숫자 부분
   - thumb : thumbs 폴더에 넣은 이미지 파일 (1920×1080, 16:9 권장)
   - cat   : 카테고리. 새 이름을 쓰면 필터 버튼이 자동으로 생깁니다.
------------------------------------------------------------ */
const PROJECTS = [
  { title: 'INJECTIER', cat: 'Commercial', year: '2026', vimeo: '1201272000', thumb: 'thumbs/01.webp' },
  { title: '디어페미닌', cat: 'Commercial', year: '2026', vimeo: '922497237', thumb: 'thumbs/02.webp' },
  { title: 'Galaxy S23 Ultra', cat: 'Commercial', year: '2026', vimeo: '955182737', thumb: 'thumbs/03.jpg' },
  // 예시 — 앞의 // 를 지우고 내용을 바꿔 쓰세요
  // { title: '새 프로젝트', cat: '3D', year: '2026', vimeo: 'https://vimeo.com/manage/videos/922497237', thumb: 'thumbs/02.jpg' },
];
