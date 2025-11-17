'use client';

const features = [
  {
    icon: '📄',
    title: 'DBML 파싱',
    description: 'pydbml 라이브러리 기반으로 DBML 파일의 테이블 구조와 관계를 자동 분석합니다.',
    highlight: '자동 분석',
    color: 'neon-green',
  },
  {
    icon: '🔍',
    title: '영향도 분석',
    description: '외래키 관계를 추적하여 변경 시 직접 영향받는 테이블을 탐지합니다.',
    highlight: '자동 추적',
    color: 'neon-blue',
  },
  {
    icon: '⏱️',
    title: '공수 추정',
    description: '영향받는 테이블 개수와 변경 유형을 기반으로 예상 작업 시간을 계산합니다.',
    highlight: '즉시 계산',
    color: 'neon-pink',
  },
  {
    icon: '📊',
    title: '리포트 생성',
    description: 'API와 GitHub 연동을 통해 자동으로 리포트를 공유하거나 Jira, Slack에 복사할 수 있습니다.',
    highlight: 'API 연동 지원',
    color: 'neon-green',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              핵심 기능
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ERD 기반 영향도 분석으로 SI 팀장의 고민을 해결합니다
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-neon-green/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-neon-green/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${feature.color}/10 border border-${feature.color}/30`}>
                <span className={`text-sm text-${feature.color} font-semibold`}>
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Problem scenario */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-neon-pink">
            이런 고민, 있으셨나요?
          </h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-neon-pink mt-1">❌</span>
              <p>
                <strong className="text-white">고객 수정 요청</strong> 시 영향 범위를 머릿속으로 30분씩 추적하다가 누락 발생
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-neon-pink mt-1">❌</span>
              <p>
                <strong className="text-white">감으로 견적</strong>을 내다가 &ldquo;3일이면 됩니다&rdquo; → 실제로는 2주 소요
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-neon-pink mt-1">❌</span>
              <p>
                <strong className="text-white">재계약률 하락</strong>: &ldquo;관리가 안 되는 거 아닙니까?&rdquo; 고객 신뢰 상실
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-neon-green mt-1">✅</span>
                <p className="text-white font-semibold">
                  ERD Impact Analyzer로 5분 만에 정확한 영향도 파악 → 프로젝트 제어권 회복
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target customers */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-green/10 border border-neon-blue/30">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              특히 이런 분들께 추천합니다
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-neon-green/50 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="text-4xl">👔</div>
                <h4 className="font-bold text-neon-green text-lg">SI 개발팀장</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">고객사와의 의사소통</strong>이 한층 명확해집니다.
                  근거 있는 영향도 리포트로 재계약률 향상과 신뢰 확보
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-neon-blue/50 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="text-4xl">🚀</div>
                <h4 className="font-bold text-neon-blue text-lg">자체개발 스타트업</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">프로젝트 관리</strong>가 체계적으로 바뀝니다.
                  빠른 기능 추가 판단과 기술부채 최소화
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-neon-pink/50 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="text-4xl">🤖</div>
                <h4 className="font-bold text-neon-pink text-lg">AI 개발 환경</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">AI와 자연스럽게 연동</strong>됩니다.
                  Cursor, GitHub Copilot 등 AI 코딩 도구와 함께 사용
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
