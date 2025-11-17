'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-green opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-neon-green/30 mb-8">
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Phase 1 MVP - 오픈소스</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">바이브코딩 시대,</span>
          <br />
          <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent glow-text">
            ERD 기반 영향도 분석
          </span>
          <br />
          <span className="text-white">으로 5분 만에 정확한 견적을</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          30분 걸리던 영향 테이블 추적을 <span className="text-neon-green font-semibold">5분으로 단축</span>
          <br />
          SI 팀장의 재계약률을 높이는 ERD Impact Analyzer
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">83%</div>
            <div className="text-gray-400 text-sm">시간 단축</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-pink mb-2">90%+</div>
            <div className="text-gray-400 text-sm">분석 정확도</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-blue mb-2">5분</div>
            <div className="text-gray-400 text-sm">평균 분석 시간</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/githuh2/treavari_251115"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-neon-green text-black font-semibold rounded-lg hover:bg-neon-green/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-neon-green/50"
          >
            GitHub에서 보기
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-gray-900/50 text-white font-semibold rounded-lg border border-gray-700 hover:border-neon-green/50 transition-all hover:scale-105"
          >
            사용 방법 보기
          </a>
        </div>

        {/* Code preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-500">terminal</span>
            </div>
            <code className="text-sm">
              <div className="text-gray-500"># 설치</div>
              <div className="text-neon-green">pip install erd-impact-analyzer</div>
              <div className="mt-3 text-gray-500"># 분석 실행</div>
              <div className="text-neon-blue">erd-analyze schema.dbml \</div>
              <div className="text-gray-400 ml-4">--table customers \</div>
              <div className="text-gray-400 ml-4">--column email</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
