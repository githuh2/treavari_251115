'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                ERD Impact Analyzer
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              SI 팀장의 정확한 견적과 재계약률 향상을 위한
              <br />
              ERD 기반 영향도 분석 도구
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/githuh2/treavari_251115"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-neon-green transition-colors">
                  핵심 기능
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-neon-green transition-colors">
                  사용 방법
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-neon-green transition-colors">
                  가격
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">문서</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/githuh2/treavari_251115/blob/main/docs/prd/PRD_Phase1_MVP.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  PRD
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/githuh2/treavari_251115/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 ERD Impact Analyzer. MIT License.</p>
          <p className="mt-2">Made with ❤️ for SI 팀장들</p>
        </div>
      </div>
    </footer>
  );
}
