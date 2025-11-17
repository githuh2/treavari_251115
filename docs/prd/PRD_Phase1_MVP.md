# PRD: ERD 기반 영향도 분석 플랫폼

## 문서 정보
- **버전**: 1.0 (Phase 1 MVP)
- **작성일**: 2025년 1월
- **대상 Phase**: Phase 1 - CLI/웹 프로토타입 (2-3주)
- **목표 출시**: Phase 1 - 4주 후

---

## 1. 제품 개요

### 1.1 제품명
**ERD Impact Analyzer** (가칭)

### 1.2 한 줄 설명
"바이브코딩 쓰는 SI 팀장이 고객 수정 요청에 30분씩 영향도 파악하는 대신 ERD 기반 관계 분석으로 5분 만에 영향 테이블과 기본 공수를 제시하는 도구"

### 1.3 제품 비전
SI 개발팀이 고객 수정 요청에 근거 있는 견적을 제시하고, AI 코딩 시대에도 데이터 정합성을 유지할 수 있도록 ERD를 중심으로 한 프로젝트 관리 플랫폼을 제공한다.

### 1.4 Phase별 로드맵 요약

| Phase | 기간 | 핵심 기능 | 목표 |
|-------|------|----------|------|
| **Phase 1** | 2-3주 | ERD 영향도 분석, 기본 공수 추정 | CLI/웹 프로토타입, 5명 검증 |
| Phase 2 | 2-3개월 | AI 코드 패턴 검증, 웹 UI | 베타 10명, MRR 100만 원 |
| Phase 3 | 6개월+ | ChartDB 시각화, Git 통합 | 정식 출시, 팀 구성 |

**이 PRD는 Phase 1에 집중합니다.**

---

## 2. 문제 정의

### 2.1 타겟 페르소나: 강민수 (36세, SI 개발사 팀장)

**배경:**
- 8명 개발팀 운영, 동시 3-4개 프로젝트 진행
- 삼성SDS 시절 ERwin 사용 경험 (체계적 ERD 관리의 가치 이해)
- 바이브코딩 도입으로 개발 속도 2배, 하지만 품질 불안정
- 재계약률 60% → 40% 하락 (완성도 문제)

**Pain Points (우선순위 순):**

| 순위 | Pain Point | 현재 상황 | 비즈니스 임팩트 |
|------|-----------|----------|---------------|
| 1 | **고객 수정 요청 시 영향 범위 파악 불가** | 머릿속으로 30분 추적 → "주문-결제-포인트-재고" 연결 누락 | D사: 3일 견적 → 실제 2주, 재계약 실패 |
| 2 | **근거 없는 공수 산정** | 감으로 견적 → 고객 신뢰 상실 | 재계약률 60%→40% |
| 3 | **AI 코드의 데이터 정합성 오류** | 바이브코딩 코드를 팀장이 2시간씩 수동 검증 | 버그 15개→28개, 고객 "불안정" 평가 |
| 4 | **ERD-이슈-코드 도구 분리** | Jira-dbdiagram.io 왔다갔다 → ERD 수정했는데 Jira 업데이트 누락 | 고객 미팅에서 구버전 ERD 보여줌, 신뢰 상실 |
| 5 | **ERwin 가격 장벽** | 8명 × 연 300만 원 = 2,400만 원 | 포기, 대안 없음 |

### 2.2 핵심 문제 (Phase 1 집중)

**"고객이 '이 기능 수정해주세요' 하면, 팀장이 30분씩 머릿속으로 테이블 관계를 추적하다가 견적을 틀리고, 결국 재계약을 못 받는다."**

**구체적 시나리오:**
```
[D사 프로젝트]
고객: "주문 취소 기능 추가해주세요. 일주일이면 되죠?"
강민수: (머릿속) "주문 테이블... 결제 테이블... 음..." (30분 소요)
강민수: "네, 3일이면 됩니다."

[2주 후]
강민수: (발견) "아, 포인트 테이블이랑 재고, 알림까지 연결되어 있네?"
고객: "왜 이렇게 오래 걸려요? 관리가 안 되는 거 아닙니까?"
결과: 재계약 실패
```

---

## 3. 목표 및 성공 지표

### 3.1 Phase 1 목표

**비즈니스 목표:**
- 5명의 SI 팀장에게 프로토타입 검증
- 2명 이상 "이거면 쓸 것 같다" 긍정 반응

**제품 목표:**
- DBML 파일 입력 → 5분 이내 영향도 분석 결과 출력
- 직접 영향 테이블 90% 이상 정확도
- 기본 공수 추정 제공 (±50% 오차 허용)

### 3.2 성공 지표 (KPI)

| 지표 | Phase 1 목표 | 측정 방법 |
|------|-------------|----------|
| **사용자 검증** | 5명 테스트, 2명 긍정 | 인터뷰 |
| **분석 속도** | 30분 → 5분 (83% 단축) | 사용자 피드백 |
| **정확도** | 직접 영향 테이블 90%+ | 수동 검증 대조 |
| **공수 추정 정확도** | ±50% 오차 | 실제 작업 시간 추적 |
| **만족도** | NPS 50+ | 설문 |

---

## 4. 타겟 사용자

### 4.1 Primary User (Phase 1)

**강민수형 SI 팀장**
- 규모: 5-30명 SI/개발사 팀장
- 시장: 한국 약 15,000개사 × 2명 = 30,000명
- 특징:
  - ERwin 경험 있거나 체계적 ERD 관리 가치 이해
  - 바이브코딩 등 AI 코딩 도구 사용 중
  - 재계약률 하락 경험, 공수 산정 고민

### 4.2 Secondary User (Phase 2+)

- 외주 개발 관리 스타트업 CTO
- 기술팀 없는 소규모 기업 (10-50명)
- 내장/인테리어 등 전통 산업 SI 업체

---

## 5. 핵심 기능 (Phase 1 MVP)

### 5.1 기능 우선순위 매트릭스

| 기능 | 사용자 가치 | 구현 복잡도 | Phase 1 포함 | 개발 시간 |
|------|-----------|------------|------------|----------|
| **F1. DBML 파일 업로드/파싱** | ⭐⭐⭐⭐⭐ | ⭐⭐☆☆☆ | ✅ 필수 | 2일 |
| **F2. 직접 영향도 분석** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐☆☆ | ✅ 필수 | 5일 |
| **F3. 기본 공수 추정** | ⭐⭐⭐⭐☆ | ⭐⭐☆☆☆ | ✅ 필수 | 3일 |
| **F4. 분석 결과 출력 (텍스트)** | ⭐⭐⭐⭐⭐ | ⭐☆☆☆☆ | ✅ 필수 | 1일 |
| **F5. 웹 UI (파일 업로드)** | ⭐⭐⭐⭐☆ | ⭐⭐⭐☆☆ | ⚠️ 선택 | 4일 |
| F6. 간접 영향도 분석 | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | ❌ Phase 2 | - |
| F7. AI 코드 패턴 검증 | ⭐⭐⭐⭐☆ | ⭐⭐⭐☆☆ | ❌ Phase 2 | - |
| F8. ChartDB 시각화 | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐☆ | ❌ Phase 3 | - |

**Phase 1 필수: F1-F4 (CLI 버전)**  
**Phase 1 선택: F5 (간단한 웹 UI)**

---

## 6. 기능 상세 명세

### 6.1 F1: DBML 파일 업로드/파싱 ✅ 필수

**기능 설명:**
사용자가 DBML 파일을 제공하면, 테이블 구조와 관계를 파싱한다.

**입력:**
- DBML 파일 (`.dbml` 확장자)
- 예시:
```dbml
Table customers {
  id int [pk]
  email varchar(100)
  name varchar(50)
}

Table orders {
  id int [pk]
  customer_id int [ref: > customers.id]
  status varchar(20)
}

Table payments {
  id int [pk]
  order_id int [ref: > orders.id]
  amount decimal
}
```

**처리:**
1. `pydbml` 라이브러리로 파싱
2. 테이블 목록 추출: `customers`, `orders`, `payments`
3. 관계 추출: `orders.customer_id → customers.id`, `payments.order_id → orders.id`
4. 외래키 그래프 생성 (NetworkX)

**출력:**
- 파싱 성공/실패 상태
- 테이블 개수
- 관계 개수

**예외 처리:**
- DBML 문법 오류 → "파싱 실패: 라인 15에 문법 오류" 메시지
- 빈 파일 → "테이블이 없습니다" 경고

**구현 기술:**
- Python `pydbml` 라이브러리
- `networkx` (그래프 생성)

---

### 6.2 F2: 직접 영향도 분석 ✅ 필수

**기능 설명:**
특정 테이블/컬럼 변경 시, 직접적으로 영향받는 테이블을 찾아낸다.

**입력:**
- 변경 대상 테이블: `customers`
- 변경 대상 컬럼: `email`
- 변경 유형: `타입 변경 (varchar(100) → varchar(200))`

**처리 로직:**
1. **직접 외래키 관계 찾기:**
   - `customers` 테이블을 참조하는 외래키 찾기
   - 결과: `orders.customer_id`, `notifications.customer_id` (예시)

2. **컬럼 참조 분석 (선택적):**
   - 다른 테이블에서 `customer_email` 같이 동일 데이터 저장하는 컬럼 찾기
   - 예시: `notifications.customer_email` (컬럼명 유사도 매칭)

3. **영향도 레벨 분류:**
   - **높음**: 외래키 직접 연결 + 타입 변경
   - **중간**: 외래키 직접 연결 + 길이 변경
   - **낮음**: 컬럼명 유사도만

**출력 예시:**
```
===========================================
[영향도 분석 결과]
===========================================
변경: customers.email (varchar(100) → varchar(200))

📊 영향받는 테이블: 2개
  1. orders (외래키: customer_id)
     - 영향 레벨: 중간
     - 이유: customers 테이블 참조
  
  2. notifications (컬럼: customer_email)
     - 영향 레벨: 낮음
     - 이유: 이메일 길이 제약 확인 필요

⚠️ 권장사항:
  - orders 테이블의 customer_id 인덱스 재생성 필요
  - notifications의 customer_email 길이 제약 확인
===========================================
```

**구현 기술:**
- NetworkX 그래프 순회 (BFS)
- 규칙 기반 영향도 판단

**제한 사항 (Phase 1):**
- ❌ 간접 영향 (2단계 이상) 제외
  - 예: `customers → orders → payments` 중 `payments`는 분석 제외
- ❌ 복잡한 비즈니스 로직 영향 분석 제외
  - 예: "이메일 검증 함수가 어디서 쓰이나?" 분석 불가

---

### 6.3 F3: 기본 공수 추정 ✅ 필수

**기능 설명:**
영향받는 테이블 개수를 기반으로 간단한 공수를 추정한다.

**추정 공식 (Phase 1):**
```
예상 공수 (시간) = 영향받는 테이블 개수 × 20시간

예외 규칙:
- 타입 변경 (varchar → text): × 1.5 배수
- 제약 조건 추가 (nullable → not null): × 2.0 배수
- 테이블 삭제: × 3.0 배수
```

**입력:**
- 영향받는 테이블 개수: 2개
- 변경 유형: `타입 변경`

**처리:**
```python
base_hours = affected_tables * 20
if change_type == "타입 변경":
    base_hours *= 1.5
estimated_hours = base_hours
```

**출력 예시:**
```
⏱️ 예상 공수: 60시간 (2.5일)
  - 기본: 2개 테이블 × 20시간 = 40시간
  - 타입 변경 보정: 40시간 × 1.5 = 60시간

📅 일정 추정:
  - 1명 풀타임: 2.5일 (3영업일)
  - 2명 투입: 1.5일 (2영업일)
```

**참고 메시지:**
```
💡 참고:
  이 공수는 기본 추정치입니다.
  - 실제 공수는 코드 복잡도, 테스트 범위에 따라 달라집니다
  - 안전 여유(버퍼)를 20-30% 추가 권장합니다
```

**제한 사항 (Phase 1):**
- ❌ 과거 프로젝트 데이터 학습 없음
- ❌ 팀 숙련도 반영 없음
- ❌ ML 기반 정확한 예측 없음

**Phase 2+ 개선 방향:**
- 과거 작업 이력 학습
- 팀별 평균 속도 반영
- ML 모델 (GPT API 활용)

---

### 6.4 F4: 분석 결과 출력 (텍스트) ✅ 필수

**기능 설명:**
분석 결과를 읽기 쉬운 텍스트로 출력한다.

**출력 포맷:**
```
===========================================
[ERD 영향도 분석 리포트]
===========================================
📅 분석 일시: 2025-01-20 14:30:25
📁 DBML 파일: ecommerce_schema.dbml
📊 총 테이블: 12개
🔗 총 관계: 18개

===========================================
[변경 내용]
===========================================
테이블: customers
컬럼: email
변경: varchar(100) → varchar(200)

===========================================
[영향도 분석]
===========================================
영향받는 테이블: 2개

1. orders
   - 관계: customer_id (FK)
   - 영향 레벨: ⚠️ 중간
   - 이유: customers 테이블 직접 참조
   
2. notifications
   - 관계: customer_email (컬럼 유사도)
   - 영향 레벨: ℹ️ 낮음
   - 이유: 이메일 길이 제약 확인 필요

===========================================
[공수 추정]
===========================================
⏱️ 예상 공수: 60시간 (2.5일)
📅 일정: 1명 기준 3영업일, 2명 기준 2영업일

⚠️ 위험도: 중간
  - 외래키 제약 있음
  - 테스트 필요

💡 권장사항:
  1. orders 테이블 customer_id 인덱스 재생성
  2. notifications의 이메일 길이 검증 로직 확인
  3. 기존 데이터 마이그레이션 스크립트 작성
  4. 테스트 커버리지 80% 이상 확보

===========================================
[다음 단계]
===========================================
✅ 이 리포트를 Jira 티켓에 첨부
✅ 팀원에게 영향받는 테이블 확인 요청
✅ 고객에게 일정 공유 (3일 + 버퍼 1일 = 4일)
===========================================
```

**내보내기 형식:**
- 터미널 출력 (기본)
- 텍스트 파일 (`.txt`)
- 마크다운 (`.md`) - Phase 2

---

### 6.5 F5: 웹 UI (파일 업로드) ⚠️ 선택 (Phase 1)

**기능 설명:**
CLI가 아닌 웹 브라우저에서 DBML 파일을 업로드하고 분석 결과를 볼 수 있다.

**화면 구성:**

#### 1) 홈 화면
```
┌─────────────────────────────────────────────┐
│  ERD Impact Analyzer                        │
│  ───────────────────────────────────────    │
│                                              │
│  📁 DBML 파일 업로드                         │
│  ┌────────────────────────────────────┐    │
│  │  [파일 선택] schema.dbml            │    │
│  └────────────────────────────────────┘    │
│                                              │
│  🔍 변경 내용 입력                           │
│  테이블: [customers ▼]                      │
│  컬럼: [email]                              │
│  변경 유형: [타입 변경 ▼]                   │
│                                              │
│  [분석 시작]                                 │
│                                              │
└─────────────────────────────────────────────┘
```

#### 2) 결과 화면
```
┌─────────────────────────────────────────────┐
│  📊 분석 결과                                │
│  ───────────────────────────────────────    │
│                                              │
│  변경: customers.email                      │
│  (varchar(100) → varchar(200))              │
│                                              │
│  🎯 영향받는 테이블: 2개                     │
│  ┌─────────────────────────────────────┐   │
│  │ 1. orders          [⚠️ 중간]         │   │
│  │    - 외래키: customer_id             │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ 2. notifications   [ℹ️ 낮음]         │   │
│  │    - 컬럼: customer_email            │   │
│  └─────────────────────────────────────┘   │
│                                              │
│  ⏱️ 예상 공수: 60시간 (3영업일)             │
│                                              │
│  [리포트 다운로드] [새 분석]                 │
│                                              │
└─────────────────────────────────────────────┘
```

**기술 스펙:**
- Backend: Django Views
- Template: Django Templates (React 아님!)
- CSS: Bootstrap 5 (CDN)
- JavaScript: 최소한만 (파일 업로드 UX)

**구현 우선순위:**
- ⚠️ Phase 1에서 선택적
- CLI로 검증 후, 필요시 추가
- 개발 시간: 4일

---

## 7. 사용자 시나리오 (User Flow)

### 7.1 Primary Flow: 영향도 분석 (CLI)

**사전 조건:**
- 사용자는 DBML 파일을 보유
- Python 3.8+ 설치됨

**단계:**

```
1. 도구 설치
   $ pip install erd-impact-analyzer

2. DBML 파일 준비
   $ ls
   ecommerce_schema.dbml

3. 분석 실행
   $ erd-analyze ecommerce_schema.dbml \
     --table customers \
     --column email \
     --change-type "varchar(100) → varchar(200)"

4. 결과 확인 (터미널 출력)
   ===========================================
   [ERD 영향도 분석 리포트]
   ===========================================
   영향받는 테이블: 2개
   ...
   예상 공수: 60시간
   ===========================================

5. 리포트 저장 (선택)
   $ erd-analyze ecommerce_schema.dbml \
     --table customers \
     --column email \
     --output report.txt

6. 팀원 공유
   $ cat report.txt | pbcopy  # Mac
   # Slack/Jira에 붙여넣기
```

**예상 소요 시간:**
- 첫 사용: 5분 (설치 포함)
- 반복 사용: 1분

**성공 기준:**
- 30분 걸리던 작업이 5분으로 단축
- 영향 테이블 90% 이상 정확

---

### 7.2 Secondary Flow: 여러 변경 사항 일괄 분석

**시나리오:**
고객이 10개 기능 수정 요청 → 전체 공수 한 번에 계산

**방법:**
```
# changes.txt 파일 작성
customers.email,타입 변경,varchar(100) → varchar(200)
products.price,타입 변경,int → decimal
orders.status,제약 추가,nullable → not null

# 일괄 분석
$ erd-analyze ecommerce_schema.dbml --batch changes.txt

# 출력:
총 3개 변경
총 예상 공수: 180시간 (22.5일)
상세 리포트: batch_report.txt 저장됨
```

**Phase 1 구현 여부:** ⚠️ 시간 남으면

---

## 8. 비기능 요구사항

### 8.1 성능

| 항목 | 목표 |
|------|------|
| 분석 속도 | 100개 테이블 기준 5초 이내 |
| 파일 크기 제한 | 10MB (약 1,000개 테이블) |
| 동시 사용자 | Phase 1: 5명 (단일 서버) |

### 8.2 사용성

- CLI 명령어는 직관적이어야 함 (`erd-analyze` 한 명령어)
- 에러 메시지는 구체적이어야 함 ("라인 15 문법 오류" ✅, "파싱 실패" ❌)
- 결과는 복사-붙여넣기 가능한 텍스트 형식

### 8.3 안정성

- DBML 파싱 실패 시 명확한 에러 메시지
- 잘못된 입력 시 graceful degradation
- 분석 결과 없을 시 "영향 없음" 명시

### 8.4 보안 (Phase 1 제외)

- Phase 1에서는 로컬 실행만 지원 (서버 업로드 없음)
- Phase 2+ 웹 버전에서 인증/권한 추가

---

## 9. 기술 스펙

### 9.1 아키텍처 개요 (Phase 1)

```
┌─────────────────────────────────┐
│  CLI Tool (Python)              │
│  ┌──────────────────────────┐  │
│  │  1. DBML 파서 (pydbml)   │  │
│  │  2. 그래프 분석 (networkx)│  │
│  │  3. 영향도 로직           │  │
│  │  4. 공수 추정             │  │
│  │  5. 리포트 생성           │  │
│  └──────────────────────────┘  │
│                                  │
│  입력: DBML 파일                │
│  출력: 텍스트 리포트            │
└─────────────────────────────────┘
```

### 9.2 Tech Stack (Phase 1)

**필수:**
- Python 3.8+
- `pydbml` (DBML 파서)
- `networkx` (그래프 분석)
- `click` (CLI 인터페이스)

**선택 (웹 UI):**
- Django 4.2+
- PostgreSQL 15+
- Bootstrap 5 (CDN)

**제외 (Phase 2+):**
- React / ChartDB 통합
- OpenAI/Claude/Gemini API (Phase 2)

### 9.3 데이터 구조

**DBML 파싱 결과 (Python Dict):**
```python
{
  "tables": [
    {
      "name": "customers",
      "columns": [
        {"name": "id", "type": "int", "pk": True},
        {"name": "email", "type": "varchar(100)"}
      ]
    }
  ],
  "relationships": [
    {
      "from": "orders.customer_id",
      "to": "customers.id",
      "type": "many-to-one"
    }
  ]
}
```

**그래프 구조 (NetworkX):**
```python
# 노드: 테이블명
# 엣지: 외래키 관계
G.add_node("customers")
G.add_node("orders")
G.add_edge("orders", "customers", key="customer_id")
```

### 9.4 폴더 구조 (Phase 1)

```
erd-impact-analyzer/
├── erd_analyzer/
│   ├── __init__.py
│   ├── cli.py              # CLI 진입점
│   ├── parser.py           # DBML 파싱
│   ├── analyzer.py         # 영향도 분석 로직
│   ├── estimator.py        # 공수 추정
│   └── reporter.py         # 리포트 생성
├── tests/
│   ├── test_parser.py
│   ├── test_analyzer.py
│   └── fixtures/           # 샘플 DBML 파일
│       └── ecommerce.dbml
├── examples/
│   └── sample_analysis.txt
├── README.md
├── setup.py
└── requirements.txt
```

---

## 10. Phase 2-3 로드맵 (간략)

### Phase 2 (2-3개월 후)

**추가 기능:**
1. **AI 코드 패턴 검증**
   - OpenAI/Claude/Gemini API 연동
   - 바이브코딩 생성 코드 붙여넣기 → ERD 기반 검증
   - "coupon_id는 ForeignKey여야 함" 경고

2. **웹 UI 개선**
   - 파일 업로드 → 분석 → 결과 페이지
   - 간접 영향도 분석 (2단계까지)
   - 사용자 계정 (로그인)

3. **Django + PostgreSQL 백엔드**
   - 분석 이력 저장
   - 프로젝트별 DBML 관리

**목표:**
- 베타 테스터 10명
- MRR 100만 원 (10명 × 10만 원)

---

### Phase 3 (6개월+ 후)

**추가 기능:**
1. **ChartDB 통합 시각화**
   - GitHub Fork: https://github.com/chartdb/chartdb
   - ERD 다이어그램에서 클릭 → 영향도 하이라이트

2. **Git 연동**
   - Git commit/push 시 자동 영향도 분석
   - Pull Request에 리포트 첨부

3. **ML 기반 공수 산정**
   - 과거 프로젝트 데이터 학습
   - 팀별 평균 속도 반영

**조건:**
- Phase 2 MRR 100만 원 달성
- 프론트 개발자 고용
- 투자 유치 or 수익 재투자

---

## 11. 개발 일정 (Phase 1)

### 11.1 타임라인 (2-3주)

| 주차 | 작업 | 담당 | 산출물 |
|------|------|------|--------|
| **Week 1** | DBML 파서 + 그래프 생성 | 개발자 | `parser.py`, `test_parser.py` |
| **Week 1** | 영향도 분석 로직 | 개발자 | `analyzer.py`, `test_analyzer.py` |
| **Week 2** | 공수 추정 로직 | 개발자 | `estimator.py` |
| **Week 2** | 리포트 생성 + CLI | 개발자 | `reporter.py`, `cli.py` |
| **Week 2** | 테스트 + 문서 | 개발자 | `README.md`, 샘플 파일 |
| **Week 3** | (선택) 웹 UI | 개발자 | Django 앱 |
| **Week 3** | 사용자 검증 | PM/개발자 | 인터뷰 5명 |

### 11.2 주요 마일스톤

| 날짜 | 마일스톤 | 완료 기준 |
|------|---------|----------|
| Day 5 | 파서 완성 | 샘플 DBML 10개 파싱 성공 |
| Day 10 | 분석 로직 완성 | 영향도 90% 정확도 |
| Day 14 | CLI 도구 완성 | `pip install` 가능, 사용자 매뉴얼 |
| Day 21 | 검증 완료 | 5명 테스트, 2명 긍정 |

---

## 12. 테스트 계획

### 12.1 Unit Test

**커버리지 목표:** 80%+

**주요 테스트 케이스:**

```python
# test_analyzer.py

def test_direct_fk_impact():
    """직접 외래키 영향 테스트"""
    dbml = """
    Table customers { id int [pk] }
    Table orders { customer_id int [ref: > customers.id] }
    """
    result = analyze_impact(dbml, table="customers", column="id")
    assert "orders" in result.affected_tables

def test_no_impact():
    """영향 없는 경우 테스트"""
    dbml = """
    Table products { id int [pk] }
    Table categories { id int [pk] }
    """
    result = analyze_impact(dbml, table="products", column="name")
    assert len(result.affected_tables) == 0

def test_estimate_basic():
    """기본 공수 추정 테스트"""
    affected = ["orders", "payments"]
    hours = estimate_hours(affected, change_type="타입 변경")
    assert hours == 60  # 2 × 20 × 1.5
```

### 12.2 Integration Test

**시나리오:**
1. 실제 e-commerce DBML 파일 (50개 테이블)
2. 5가지 변경 케이스 실행
3. 결과 수동 검증

### 12.3 User Acceptance Test

**참여자:** 강민수같은 SI 팀장 5명

**테스트 시나리오:**
1. 실제 프로젝트 DBML 제공
2. 최근 수정 요청 사례 입력
3. 결과 평가:
   - 영향 테이블 정확도
   - 공수 추정 합리성
   - 사용 편의성

**성공 기준:**
- 5명 중 2명 이상 "쓸 것 같다"
- NPS 50+

---

## 13. 출시 계획

### 13.1 Phase 1 출시 (Alpha)

**출시 형태:**
- GitHub Repository (Public)
- PyPI 패키지 (`pip install erd-impact-analyzer`)
- README.md 사용 설명서

**타겟:**
- 강민수같은 SI 팀장 5명 (지인 네트워크)
- 한국 개발자 커뮤니티 (오픈카톡, LinkedIn)

**마케팅:**
- LinkedIn 포스트: "30분→5분으로 단축한 ERD 영향도 분석 도구"
- 오픈카톡 SI/개발사 방에서 무료 배포
- 사용자 인터뷰 → 피드백 수집

### 13.2 Phase 1 → Phase 2 전환 조건

**Go 조건:**
- 5명 테스트, 2명 이상 긍정
- NPS 50+
- "월 10만 원 내고 쓸래요?" 질문에 5명 중 2명 YES

**No-Go 조건:**
- 1명 이하 긍정
- "공수 추정이 너무 틀렸어요" 피드백
- "이거보다 그냥 ERwin 쓰는 게 낫겠어요"

→ No-Go 시 피봇 고려

---

## 14. 위험 요소 및 대응 방안

### 14.1 기술 위험

| 위험 | 확률 | 영향 | 대응 방안 |
|------|------|------|----------|
| **DBML 파싱 실패** | 중간 | 높음 | - 샘플 DBML 10개로 사전 테스트<br>- `pydbml` 문서 정독 |
| **그래프 순회 버그** | 중간 | 중간 | - NetworkX 예제 학습<br>- 단위 테스트 철저 |
| **공수 추정 부정확** | 높음 | 중간 | - "기본 추정치"라고 명시<br>- 사용자 기대치 관리 |

### 14.2 시장 위험

| 위험 | 확률 | 영향 | 대응 방안 |
|------|------|------|----------|
| **사용자가 CLI 거부** | 중간 | 높음 | - 웹 UI로 빠르게 피봇<br>- Phase 1에 웹 포함 검토 |
| **"이미 ERwin 쓰는데?"** | 낮음 | 중간 | - ERwin 못 쓰는 사람 타겟<br>- 가격 경쟁력 강조 |
| **"감으로 해도 되는데?"** | 높음 | 높음 | - 재계약 실패 사례 강조<br>- ROI 계산 제시 |

### 14.3 일정 위험

| 위험 | 확률 | 영향 | 대응 방안 |
|------|------|------|----------|
| **2주 안에 못 만듦** | 중간 | 중간 | - 웹 UI 제외 (CLI만)<br>- 간접 영향도 제외 |
| **사용자 찾기 어려움** | 중간 | 높음 | - LinkedIn 사전 네트워킹<br>- 지인 소개 받기 |

---

## 15. 성공 기준 요약

### Phase 1 성공 정의

**정량적:**
- ✅ 5명 테스트, 2명 이상 "쓸 것 같다"
- ✅ 분석 속도: 30분 → 5분 (83% 단축)
- ✅ 영향 테이블 정확도 90%+
- ✅ NPS 50+

**정성적:**
- ✅ "감보다는 낫다" 피드백
- ✅ "이거면 고객한테 근거 제시할 수 있겠네요" 반응
- ✅ "ERwin 없어도 기본은 되겠네요" 평가

**Next Step 조건:**
- 위 조건 충족 → Phase 2 (웹 MVP) 진행
- 미달 → 피봇 or 기능 수정 후 재검증

---

## 16. 부록

### 16.1 용어 정리

| 용어 | 정의 |
|------|------|
| **DBML** | Database Markup Language, 데이터베이스 스키마를 텍스트로 정의하는 언어 |
| **직접 영향** | 외래키로 직접 연결된 테이블 (1단계) |
| **간접 영향** | 2단계 이상 연결된 테이블 (Phase 2+) |
| **기본 공수** | 테이블 개수 × 상수로 계산한 간단한 추정치 |
| **바이브코딩** | AI 기반 코드 생성 도구 (예: GitHub Copilot, Cursor) |

### 16.2 참고 자료

- DBML 공식 문서: https://dbml.dbdiagram.io/docs/
- pydbml GitHub: https://github.com/Vanderhoof/pydbml
- NetworkX 문서: https://networkx.org/documentation/stable/
- ChartDB GitHub: https://github.com/chartdb/chartdb (Phase 3 참고)

### 16.3 샘플 DBML 파일

```dbml
// E-commerce 샘플
Table customers {
  id int [pk, increment]
  email varchar(100) [unique, not null]
  name varchar(50)
  created_at timestamp
}

Table orders {
  id int [pk, increment]
  customer_id int [ref: > customers.id]
  status varchar(20)
  total_amount decimal(10,2)
  created_at timestamp
}

Table order_items {
  id int [pk, increment]
  order_id int [ref: > orders.id]
  product_id int [ref: > products.id]
  quantity int
  price decimal(10,2)
}

Table products {
  id int [pk, increment]
  name varchar(100)
  price decimal(10,2)
  stock int
}

Table payments {
  id int [pk, increment]
  order_id int [ref: > orders.id]
  amount decimal(10,2)
  status varchar(20)
  paid_at timestamp
}
```

---

## 문서 버전 히스토리

| 버전 | 날짜 | 변경 내용 | 작성자 |
|------|------|----------|--------|
| 1.0 | 2025-01-20 | Phase 1 MVP PRD 초안 작성 | PM |

---

**이 PRD는 Phase 1 (2-3주) 구현에 집중합니다.**  
**Phase 2-3는 Phase 1 검증 후 별도 PRD로 작성됩니다.**
