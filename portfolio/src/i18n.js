import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: 'Basketball Pro: For All Things Basketball',
          description: 'The best place for basketball statistics regarding the 24-25 season. (For the both graphs, hover over any bar or line to see statistic better).',
          select_stat: 'Select a Statistic:',
          points: 'Points',
          assists: 'Assists',
          rebounds: 'Rebounds',
          player_stats_bar_chart: 'Player Season Averages',
          player_stats_line_chart: 'Player Points Per Game Trend (Monthly)',
          player: 'Player',
          stat_value: 'Value',
          ppg: 'PPG',
          bar_chart_y_axis: 'Stats',
          bar_chart_x_axis: 'Player Name',
          line_chart_y_axis: 'Points Per Game',
          line_chart_x_axis: 'Month',
          month_oct: 'Oct',
          month_nov: 'Nov',
          month_dec: 'Dec',
          month_jan: 'Jan',
          month_feb: 'Feb',
          month_mar: 'Mar',
          month_apr: 'Apr'
        }
      },
      zh: {
        translation: {
          title: 'Basketball Pro：篮球相关知识',
          description: '24-25赛季篮球统计数据的最佳去处。（对于两个图表，将鼠标悬停在任何条形或线上即可更清晰地查看统计数据。）',
          select_stat: '选择统计数据：',
          points: '得分',
          assists: '助攻',
          rebounds: '篮板',
          player_stats_bar_chart: '球员赛季平均数据',
          player_stats_line_chart: '球员每场比赛得分趋势（每月)',
          player: '球员',
          stat_value: '数值',
          ppg: '每场得分',
          bar_chart_y_axis: '统计数据',
          bar_chart_x_axis: '球员姓名',
          line_chart_y_axis: '场均得分',
          line_chart_x_axis: '月份',
          month_oct: '十月',
          month_nov: '十一月',
          month_dec: '十二月',
          month_jan: '一月',
          month_feb: '二月',
          month_mar: '三月',
          month_apr: '四月'
        }
      }
    }
  });

export default i18n;
