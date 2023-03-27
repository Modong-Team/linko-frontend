# 🐋 동아리 리크루팅 B2B 서비스 Linko

#### 개발 기간 및 팀원 구성

- 개발 기간 : 2022.12 ~ 2022.02
- 팀원 구성 : 기획자 2명, 디자이너 1명, FE 1명, BE 1명

#### 테스트 계정

- ID : rabbit
- 비밀번호 : sk19980220!
- 동아리코드 : zbTN3JKqwc

🚀 [Production 서버 바로가기](https://linko.site)

## Index

1. [프로젝트 개요](#1-프로젝트-개요)
2. [핵심 기능](#2-핵심-기능)
3. [화면별 Preview](#3-화면별-Preview)
4. [UI Preview](#4-UI-Preview)
5. [시작하기](#5-시작하기)
6. [기술 스택](#6-기술-스택)
7. [디렉토리 구조](#7-디렉토리-구조)
8. [커밋 컨벤션](#8-커밋-컨벤션)

## 1. 프로젝트 개요

Linko는 동아리 운영진을 위한 B2B 서비스입니다.

동아리의 운영진은 지원서를 제작할 수 있으며, 지원자는 운영진이 제공한 지원서 링크에 접속하여 응답을 제출할 수 있습니다.

이후 답변을 제출한 지원자들의 전형 단계를 칸반보드 형식으로 관리할 수 있으며, 지원자의 답변을 확인하며 평가 및 메모를 남길 수 있습니다.

또한, 동아리 코드를 이용한 회원가입을 통해 하나의 동아리에 여러명의 운영진이 소속되어 동일한 어드민에 접속할 수 있습니다.

## 2. 핵심 기능

💡 [전체 프로덕트 상세 바로가기](https://tungsten-orangutan-8cd.notion.site/92495da708b2497daf751a1ce7b8dc85)

1. 지원서 생성
2. 응답 제출
3. 지원자 관리
4. 지원자 평가

## 3. 화면별 Preview

### 1. 랜딩

<table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/98504939/227913764-4c67b3c9-d1d6-4e41-990a-44beef73504e.gif'/></td>
    <td><img src='https://user-images.githubusercontent.com/98504939/227913900-a73efc5d-a497-4173-9d59-d80e5e166946.gif'/></td>
  </tr>
</table>

### 2. 로그인

![loginout](https://user-images.githubusercontent.com/98504939/227918155-f06cea99-ee53-4604-a477-258b51a6e23e.gif)

### 3. 회원가입

<table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/98504939/227916454-c5242739-e1d9-4aab-a1db-7b47dcc4f517.gif'/></td>
    <td><img src='https://user-images.githubusercontent.com/98504939/227917177-ae3425f7-71c8-48d2-8fc6-49bee4f562ed.gif'/></td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/98504939/227917701-c6ad8574-e71f-4690-919d-3ae40e0dd4bf.gif'/></td>
    <td><img src='https://user-images.githubusercontent.com/98504939/227917808-283c6eab-4829-43ef-b925-47bd5f3d126c.gif'/></td>
  </tr>
</table>

### 4. 메인

![sort](https://user-images.githubusercontent.com/98504939/227920893-894fc085-ca54-49ec-9c7d-b4eb99a40752.gif)
![main](https://user-images.githubusercontent.com/98504939/227920987-7d2f6ebf-8309-49a5-939b-866aecf673a7.gif)

### 5. 지원서 생성

![new](https://user-images.githubusercontent.com/98504939/227918538-d09b464b-275a-424d-b1d8-f07d1f4475da.gif)
![start](https://user-images.githubusercontent.com/98504939/227918829-e9b4733a-4c9e-41e7-bd0d-b0abe21e80d6.gif)

### 6. 응답 제출

<table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/98504939/227915938-25eb1da4-80e0-46da-bec6-044938896401.gif'/></td>
    <td><img src='https://user-images.githubusercontent.com/98504939/227915423-787cfb64-cd34-4159-b069-38ec2d899a56.gif'/></td>
  </tr>
</table>

### 7. 지원자 평가

#### 1. 평가

![rate](https://user-images.githubusercontent.com/98504939/227920487-c91a7650-9664-40b7-b869-81e51cee1fdf.gif)

#### 2. 메모

![rabbit1](https://user-images.githubusercontent.com/98504939/227919769-e18aa69b-51ba-4eb0-be50-e3eeb03a13f4.gif)
![rabbit2](https://user-images.githubusercontent.com/98504939/227919839-f3426487-3968-4a0d-a3c7-eef029ba0a6b.gif)

## 4. UI Preview

### 1. Calendar

![calendar](https://user-images.githubusercontent.com/98504939/230033035-44be5a9e-eeab-4daa-aa0a-072e6885be1f.gif)

### 2. Kanban

![kanban](https://user-images.githubusercontent.com/98504939/230033260-fe4a5324-ffa4-4eef-a945-6f20fcfc7838.gif)

### 3. Auto Resize TextArea

![text1](https://user-images.githubusercontent.com/98504939/230033419-2f4f34fa-bb06-4d5e-a4c1-27cc17e8194f.gif)

![text2](https://user-images.githubusercontent.com/98504939/230033600-80eeeba9-8d33-4b89-a069-b953e5135041.gif)

### 4. Input

![input](https://user-images.githubusercontent.com/98504939/230033967-a7b16351-af4d-45a6-9d7d-97fe6bdd567a.gif)

### 5. Snack Bar

![snack1](https://user-images.githubusercontent.com/98504939/230034820-19ef557a-3673-4921-b2bf-9249c07758dd.gif)

![snack2](https://user-images.githubusercontent.com/98504939/230034812-2f7cf6e4-1e24-460a-a6c0-fe496d7dbbc9.gif)

## 5. 시작하기

### 1. Clone & Install

```shell
$ git clone https://github.com/PI304/Convey-Frontend
$ cd Convey-Frontend
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 6. 기술 스택

<a><img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=reduxsaga&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Redux Saga-999999?style=flat-square&logo=redux&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Immer-00E7C3?style=flat-square&logo=immer&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/></a>

## 7. 디렉토리 구조

```
├── @types
│   ├── api             // API 요청, 응답 스키마 타입
│   ├── axios           // Axios 타입 오버라이딩
│   └── client          // API 제외 모든 타입
├── api
├── components
├── constants
├── hooks
├── models
├── modules             // Redux Store
├── pages
├── public
├── s3                  // S3 관련 유틸
├── styles
├── utils
├── tsconfig.json
├── next-env.d.ts
├── next.config.js
├── package.json
├── yarn-error.log
├── yarn.lock
└── README.md
```

## 8. 커밋 컨벤션

### 1. 브랜치 이름 컨벤션

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성합니다.
- 띄어쓰기는 하이픈으로 구분합니다.

ex) Feature/modal-publishing
```

### 2. 커밋 메세지 컨벤션

```
<태그>: <제목>

- 태그의 첫글자는 대문자로 작성합니다.
- 태그는 아래에 적힌 것들만 사용합니다.

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```

### 3. 머지 전략

모든 Feature 브랜치는 Squash Merge 합니다.
