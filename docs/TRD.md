# TRD — webchemist.net v2

## 기술 결정

### 프레임워크: React 19
- Server Components 불필요 — 순수 정적 사이트
- React 19의 `use` hook, 향상된 hydration은 미사용이지만 최신 생태계 유지

### 빌드: Vite 6 + @tailwindcss/vite
- Tailwind CSS v4: CSS-first 설정, `@theme` 블록으로 디자인 토큰 관리
- PostCSS 불필요 (플러그인이 직접 통합)

### 스타일링 전략
- 유틸리티 클래스 우선
- 커스텀 CSS는 `index.css`의 `@theme` 블록에만
- 임의값(`[10rem]`) 대신 표준 Tailwind 스케일 사용

### 라우팅
- 단일 페이지 — React Router 불필요
- 앵커 링크(#section) 기반 스크롤 탐색

### 배포
- `vite build` → `dist/` 정적 파일
- 목표: Vercel (자동 빌드, CDN, HTTPS)

## 파일 구조

```
src/
├── main.tsx          # 진입점
├── App.tsx           # 레이아웃 조합
├── index.css         # Tailwind + 전역 스타일
├── vite-env.d.ts     # Vite 타입 참조
├── components/
│   └── Nav.tsx       # 고정 네비게이션
└── pages/
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    └── Contact.tsx
```
