import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats = [] }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticsText>{stat.label}</StatisticsText>
            <StatisticsText>{stat.percentage}%</StatisticsText>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
