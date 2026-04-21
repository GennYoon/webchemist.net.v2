# PRD — webchemist.net v2

## 제품 개요

**제품명**: webchemist.net v2  
**목적**: GennYoon(webchemist)의 개인 브랜드 사이트 — 풀스택 엔지니어로서의 정체성, 프로젝트, 기술을 소개하는 단일 페이지 사이트  
**대상**: 잠재적 협업자, 클라이언트, 채용 담당자

## 핵심 목표

1. 한 눈에 webchemist가 누구인지, 무엇을 하는지 파악 가능
2. 주요 프로젝트(특히 devist)를 소개
3. 연락 수단 제공
4. 빠른 로드, 미니멀한 디자인

## 페이지 구성

| 섹션 | 목적 |
|------|------|
| Hero | 첫인상 — 이름, 직함, CTA |
| About | 배경, 관심사, 현재 집중 분야 |
| Projects | 주요 작업물 |
| Skills | 기술 스택 |
| Contact | 연락처, 링크 |

## 디자인 원칙

- **흑백 미니멀리즘**: 배경 #0f0f0f, 텍스트 #f5f5f5
- **타이포그래피 중심**: Inter + JetBrains Mono
- **여백의 미**: 넉넉한 spacing, 불필요한 장식 없음
- **단일 페이지**: 스크롤 기반 탐색

## 기술 스택

- React 19 + TypeScript
- Vite 6 + @tailwindcss/vite (Tailwind CSS v4)
- 정적 빌드 → Vercel/Netlify 배포
