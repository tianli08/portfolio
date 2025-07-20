import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import './basketball.css';

//DATASET Mentioned in the report
const barChartData = [
  { name: 'SGA', points: 32.7, assists: 6.4, rebounds: 5.0,  playerImage: '/sga.png', teamImage: '/okc.png'},
  { name: 'Giannis Antetokounmpo', points: 30.4, assists: 6.5, rebounds: 11.9, playerImage: '/giannis.png', teamImage: '/bucks.png'},
  { name: 'Nikola Jokic', points: 29.6, assists: 10.2, rebounds: 12.7, playerImage: '/jokic.png', teamImage: '/nuggets.png'},
  { name: 'Anthony Edwards', points: 27.6, assists: 4.5, rebounds: 5.7, playerImage: '/ant.png', teamImage: '/twolves.png'},
  { name: 'Jayson Tatum', points: 26.8, assists: 6.0, rebounds: 8.7, playerImage: '/jt.png', teamImage: '/celtics.png'},
  { name: 'Kevin Durant', points: 26.6, assists: 4.2, rebounds: 6.0, playerImage: '/kd.png', teamImage: '/suns.png'},
  { name: 'Cade Cunningham', points: 26.1, assists: 9.1, rebounds: 6.1, playerImage: '/cade.png', teamImage: '/pistons.png' },
];

const lineChartData = [
  { month: 'Oct', 'SGA': 26.0, 'Giannis Antetokounmpo': 30.4, 'Nikola Jokic': 31.5, 'Anthony Edwards': 30.0, 'Jayson Tatum': 30.2, 'Kevin Durant': 26.8, 'Cade Cunningham': 25.6 },
  { month: 'Nov', 'SGA': 30.9, 'Giannis Antetokounmpo': 34.0, 'Nikola Jokic': 29.0, 'Anthony Edwards': 27.1, 'Jayson Tatum': 28.2, 'Kevin Durant': 26.9, 'Cade Cunningham': 22.7 },
  { month: 'Dec', 'SGA': 33.3, 'Giannis Antetokounmpo': 31.9, 'Nikola Jokic': 32.2, 'Anthony Edwards': 20.5, 'Jayson Tatum': 27.5, 'Kevin Durant': 28.8, 'Cade Cunningham': 24.8 },
  { month: 'Jan', 'SGA': 35.6, 'Giannis Antetokounmpo': 30.5, 'Nikola Jokic': 27.0, 'Anthony Edwards': 30.3, 'Jayson Tatum': 23.6, 'Kevin Durant': 26.1, 'Cade Cunningham': 27.6 },
  { month: 'Feb', 'SGA': 31.7, 'Giannis Antetokounmpo': 24.8, 'Nikola Jokic': 27.3, 'Anthony Edwards': 30.7, 'Jayson Tatum': 28.3, 'Kevin Durant': 25.5, 'Cade Cunningham': 25.9 },
  { month: 'Mar', 'SGA': 34.7, 'Giannis Antetokounmpo': 28.3, 'Nikola Jokic': 30.0, 'Anthony Edwards': 26.6, 'Jayson Tatum': 27.9, 'Kevin Durant': 26.1, 'Cade Cunningham': 27.3 },
  { month: 'Apr', 'SGA': 30.8, 'Giannis Antetokounmpo': 31.8, 'Nikola Jokic': 33.2, 'Anthony Edwards': 31.4, 'Jayson Tatum': 21.8, 'Kevin Durant': 0, 'Cade Cunningham': 33.0 },
];

const playerNames = barChartData.map(p => p.name);
const lineColors = ['#8884d8', '#82ca9d', '#ff58f9ff', '#ff8042', '#0088FE', '#00C49F', '#FFBB28'];

//Tooltip Component
const CustomTooltip = ({ active, payload, label, statType, isLineChart, hoveredPlayer }) => {
  if (active && payload && payload.length) {
    let dataToShow, playerName, playerData;

    if (isLineChart) {
      if (!hoveredPlayer) return null;
      dataToShow = payload.find(p => p.name === hoveredPlayer);
      if (!dataToShow) return null;
      playerName = dataToShow.name;
    } else {
      dataToShow = payload[0];
      playerName = label;
    }
    
    playerData = barChartData.find(p => p.name === playerName);
    if (!playerData) return null; //Don't render if we can't find player data

    const statValue = dataToShow.value;

    return (
      <div className="custom-tooltip">
        <div className="tooltip-header">
          <img src={playerData.playerImage} alt={playerName} className="tooltip-img-placeholder face" />
          <p className="tooltip-label">{playerName}</p>
          <img src={playerData.teamImage} alt={`${playerName} team`} className="tooltip-img-placeholder team" />
        </div>
        <p className="tooltip-intro">{`${statType}: ${statValue}`}</p>
      </div>
    );
  }
  return null;
};

//MAIN
const Basketball = () => {
  const { t, i18n } = useTranslation();
  const [selectedStat, setSelectedStat] = useState('points');
  const [hoveredPlayer, setHoveredPlayer] = useState(null);

  const statColors = {
    points: '#ca4242',
    assists: '#4287ca',
    rebounds: '#42ca7b',
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="basketball-container">
      <div className="content-wrapper">
        <header className="site-header">
          <div className="header-content">
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
          </div>
          <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('zh')}>中文</button>
          </div>
        </header>

        <main>
          <section className="chart-section">
            <h2>{t('player_stats_bar_chart')}</h2>
            <div className="controls">
              <label htmlFor="stat-select">{t('select_stat')}</label>
              <select id="stat-select" value={selectedStat} onChange={(e) => setSelectedStat(e.target.value)}>
                <option value="points">{t('points')}</option>
                <option value="assists">{t('assists')}</option>
                <option value="rebounds">{t('rebounds')}</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" />
                <YAxis />
                <Tooltip content={<CustomTooltip statType={t(selectedStat)} />} cursor={{fill: 'rgba(255, 255, 255, 0.1)'}} />
                <Bar dataKey={selectedStat} fill={statColors[selectedStat]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="chart-section">
            <h2>{t('player_stats_line_chart')}</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart 
                data={lineChartData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                onMouseLeave={() => setHoveredPlayer(null)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                    content={<CustomTooltip statType={t('ppg')} isLineChart={true} hoveredPlayer={hoveredPlayer} />}
                    cursor={{ stroke: '#ecf0f1', strokeDasharray: '3 3' }}
                />
                <Legend onMouseEnter={(e) => setHoveredPlayer(e.value)} onMouseLeave={() => setHoveredPlayer(null)} />
                {playerNames.map((player, index) => (
                  <Line
                    key={player}
                    type="monotone"
                    dataKey={player}
                    stroke={lineColors[index % lineColors.length]}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 3 }}
                    onMouseEnter={() => setHoveredPlayer(player)}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Basketball;
