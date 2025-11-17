'use client';

const plans = [
  {
    name: 'CLI 오픈소스',
    status: '현재 이용 가능',
    price: '무료',
    description: 'GitHub에서 바로 사용 가능한 CLI 도구',
    features: [
      'DBML 파일 파싱',
      '직접 영향도 분석 (1단계)',
      '기본 공수 추정',
      '텍스트 리포트 생성',
      '무제한 사용',
      '커뮤니티 지원',
    ],
    color: 'neon-green',
    cta: 'GitHub에서 시작하기',
    link: 'https://github.com/githuh2/treavari_251115',
    popular: true,
  },
  {
    name: '웹 UI + AI 검증',
    status: '곧 출시 예정',
    price: 'TBD',
    period: '',
    description: '웹 인터페이스와 AI 코드 검증 기능',
    features: [
      '기본 기능 포함',
      '웹 UI (파일 업로드)',
      '간접 영향도 분석 (2단계)',
      'AI 코드 패턴 검증',
      '분석 이력 저장',
      '프로젝트 관리',
    ],
    color: 'neon-blue',
    cta: '개발 예정',
    link: '#roadmap',
    popular: false,
  },
  {
    name: 'Enterprise',
    status: '추가 오픈 예정',
    price: 'TBD',
    period: '',
    description: 'ChartDB 시각화와 Git 완전 통합',
    features: [
      '모든 기본 기능',
      'ChartDB ERD 시각화',
      'Git/GitHub 연동',
      'PR 자동 리포트',
      'ML 기반 공수 예측',
      '전담 지원',
    ],
    color: 'neon-pink',
    cta: '개발 예정',
    link: '#roadmap',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-green to-neon-pink bg-clip-text text-transparent">
              로드맵
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            현재는 무료 CLI 도구, 향후 웹 UI와 추가 기능 개발 예정
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all hover:scale-105 ${
                plan.popular
                  ? `bg-gradient-to-br from-${plan.color}/20 to-transparent border-${plan.color} shadow-2xl shadow-${plan.color}/20`
                  : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`px-4 py-1 rounded-full bg-${plan.color} text-black text-sm font-bold`}>
                    현재 이용 가능
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>

              {/* Status */}
              <div className="text-sm text-gray-400 mb-4">{plan.status}</div>

              {/* Price */}
              <div className="mb-6">
                <div className={`text-4xl font-bold ${plan.popular ? `text-${plan.color}` : 'text-white'}`}>
                  {plan.price}
                </div>
                {plan.period && <div className="text-gray-400 text-sm">{plan.period}</div>}
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`${plan.popular ? `text-${plan.color}` : 'text-gray-500'} mt-1`}>✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.link}
                target={plan.link.startsWith('http') ? '_blank' : undefined}
                rel={plan.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block w-full py-3 rounded-lg text-center font-semibold transition-all ${
                  plan.popular
                    ? `bg-${plan.color} text-black hover:bg-${plan.color}/90 hover:shadow-lg hover:shadow-${plan.color}/50`
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ / Additional info */}
        <div className="mt-16 p-8 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-white">자주 묻는 질문</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-neon-green mb-2">정말 무료인가요?</h4>
              <p className="text-gray-400">
                네, CLI 도구는 MIT 라이선스 오픈소스로 완전 무료입니다. 상업적 사용도 가능합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neon-green mb-2">웹 UI는 언제 출시되나요?</h4>
              <p className="text-gray-400">
                사용자 피드백을 받아 개선 후 곧 출시 예정입니다. GitHub에서 이슈를 통해 의견을 남겨주세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neon-green mb-2">ERwin과 차이점은?</h4>
              <p className="text-gray-400">
                ERwin은 연 300만원 이상이지만, 저희는 무료로 시작 가능합니다. 영향도 분석과 공수 추정에 특화되어 있습니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neon-green mb-2">어떤 데이터베이스를 지원하나요?</h4>
              <p className="text-gray-400">
                DBML 형식을 지원하므로 PostgreSQL, MySQL, Oracle 등 모든 관계형 DB에서 사용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
