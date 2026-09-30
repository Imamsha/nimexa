export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          navy: '#0A1628', navy2: '#0F2140', ink: '#0F172A', slate2: '#475569',
          blue: { DEFAULT: '#175CE6', bright: '#3B82F6', soft: '#EAF1FF' },
          cyan: { DEFAULT: '#22D3EE', deep: '#0891B2' },
          mist: '#F6F8FB', line: '#E3E8F0'
        },
        fontFamily: {
          head: ['Sora', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
          sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace']
        },
        boxShadow: {
          soft: '0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,23,42,.12)',
          lift: '0 2px 4px rgba(15,23,42,.05), 0 18px 40px -16px rgba(23,92,230,.28)'
        }
      }
    }
  };
