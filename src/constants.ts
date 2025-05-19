export const navLinks = [
  {
    href: '/posts',
    title: '記事一覧',
    dependencies: ['react-query', 'react-hook-form', 'zod'],
    description: 'nextjsのapi routeから記事データをフェッチして表示する',
  },
  {
    href: '/chart',
    title: 'グラフ',
    dependencies: ['chartjs'],
    description:
      'chartjsによってS&P500の基準価格の推移や構成銘柄についてグラフを表示する',
  },
  {
    href: '/dnd',
    title: '並び替え',
    dependencies: ['dnd-kit'],
    description: 'dnd-kit/sortableを用いて、並び替え可能なリストを作成',
  },
]
