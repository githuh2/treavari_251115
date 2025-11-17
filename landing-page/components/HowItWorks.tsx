'use client';

const steps = [
  {
    number: '01',
    title: 'DBML 파일 준비',
    description: 'dbdiagram.io나 기존 ERD 도구에서 DBML 파일을 export 합니다.',
    code: `Table customers {
  id int [pk]
  email varchar(100)
}

Table orders {
  id int [pk]
  customer_id int [ref: > customers.id]
}`,
    icon: '📄',
  },
  {
    number: '02',
    title: 'CLI 명령어 실행',
    description: '변경할 테이블과 컬럼 정보를 입력하고 분석을 실행합니다.',
    code: `pip install erd-impact-analyzer

erd-analyze schema.dbml \\
  --table customers \\
  --column email \\
  --change-type "타입 변경"`,
    icon: '⚡',
  },
  {
    number: '03',
    title: '영향도 리포트 확인',
    description: '5분 이내에 영향받는 테이블, 예상 공수, 권장사항이 포함된 리포트를 받습니다.',
    code: `📊 영향받는 테이블: 2개
  1. orders (외래키: customer_id)
  2. notifications

⏱️ 예상 공수: 60시간 (3영업일)

💡 권장사항:
  - orders 테이블 인덱스 재생성
  - 테스트 커버리지 80% 이상`,
    icon: '📊',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              사용 방법
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            단 3단계로 영향도 분석부터 공수 산정까지
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Step info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{step.icon}</span>
                  <div>
                    <div className="text-sm text-neon-green font-mono mb-1">STEP {step.number}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div className="flex-1 w-full">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-green/30 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Time comparison */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border border-neon-green/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">기존 방식 vs ERD Analyzer</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-24 text-gray-400">기존</div>
                  <div className="flex-1 h-3 bg-red-500/30 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex-shrink-0 w-16 text-right text-red-400 font-bold">30분</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-24 text-gray-400">Analyzer</div>
                  <div className="flex-1 h-3 bg-neon-green/30 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-neon-green rounded-full animate-pulse" style={{ width: '17%' }}></div>
                  </div>
                  <div className="flex-shrink-0 w-16 text-right text-neon-green font-bold">5분</div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-6xl font-bold text-neon-green mb-2">83%</div>
              <div className="text-xl text-gray-300">시간 절감</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
