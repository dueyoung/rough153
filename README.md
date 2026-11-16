# Motion Portfolio

썸네일을 클릭하면 Vimeo 영상이 팝업으로 재생되는 모션그래픽 포트폴리오 사이트입니다.

## 파일 구성

| 파일 | 내용 |
|---|---|
| `data.js` | ✏️ **사이트 내용 (이름, 소개, 프로젝트 목록)** — 보통 이 파일만 수정합니다 |
| `thumbs/` | 썸네일 이미지 폴더 (1920×1080, 16:9 권장) |
| `index.html` | 페이지 구조 |
| `style.css` | 디자인 (색, 글꼴, 간격) |
| `main.js` | 동작 코드 (필터, 팝업 플레이어) |

## 프로젝트 추가하는 법 (GitHub 웹에서)

1. **썸네일 올리기**: 저장소에서 `thumbs` 폴더 열기 → **Add file › Upload files** → 이미지 끌어다 놓기 → **Commit changes**
2. **목록에 한 줄 추가**: `data.js` 열기 → 연필(✏️) 아이콘 → `PROJECTS` 안에 한 줄 추가

   ```js
   { title: '프로젝트 이름', cat: '3D', year: '2026', vimeo: '1234567890', thumb: 'thumbs/02.jpg' },
   ```
3. **Commit changes** 누르기 → 1~2분 뒤 사이트에 반영됩니다.

- 맨 위에 쓴 프로젝트가 첫 번째 칸에 나옵니다.
- `vimeo`에는 숫자 ID만 넣어도 되고, `https://vimeo.com/1234567890` 전체 주소를 넣어도 됩니다.
- 새 카테고리 이름을 쓰면 필터 버튼이 자동으로 생깁니다.
- 프로젝트가 12개를 넘으면 '더 보기' 버튼이 생깁니다 (`data.js`의 `pageSize`로 조절).

## 처음 사이트 올리기 (GitHub Pages, 무료)

1. github.com 가입 → 오른쪽 위 **+ › New repository**
   - 이름: `아이디.github.io` 로 하면 주소가 `https://아이디.github.io` 가 됩니다
   - **Public** 선택 → **Create repository**
2. **uploading an existing file** 링크 클릭 → 이 폴더 안의 파일 전부(`thumbs` 폴더 포함)를 끌어다 놓기 → **Commit changes**
3. 저장소 **Settings › Pages** → Source: **Deploy from a branch**, Branch: **main / (root)** → **Save**
4. 1~2분 뒤 `https://아이디.github.io` 에서 사이트 확인

### 내 도메인 연결 (선택)
Settings › Pages › **Custom domain** 에 도메인 입력 후, 도메인 구입처 DNS 설정에 GitHub 안내대로 레코드를 추가합니다.

## Vimeo 설정 체크
영상이 팝업에서 안 나오면 Vimeo 영상 설정에서 확인하세요.
- **공개 범위**: 공개 또는 '링크가 있는 사람'
- **Embed(퍼가기)**: 어디서나 허용, 또는 내 사이트 도메인 허용
